import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';

interface VoiceCommand {
  matches: RegExp;
  label: string;
  run: (ctx: VoiceNavComponent) => void;
}

const COMMANDS: VoiceCommand[] = [
  { matches: /inicio|home|principal/i, label: 'Inicio', run: (c) => c.goTo('/') },
  { matches: /sobre\s?m[ií]|acerca/i, label: 'Sobre mí', run: (c) => c.goTo('/sobre-mi') },
  { matches: /habilidad|skill/i, label: 'Habilidades', run: (c) => c.goTo('/habilidades') },
  { matches: /proyecto/i, label: 'Proyectos', run: (c) => c.goTo('/proyectos') },
  { matches: /contacto/i, label: 'Contacto', run: (c) => c.goTo('/contacto') },
  { matches: /whatsapp/i, label: 'WhatsApp', run: (c) => c.openContact('WhatsApp') },
  { matches: /github/i, label: 'GitHub', run: (c) => c.openContact('GitHub') },
  { matches: /linkedin/i, label: 'LinkedIn', run: (c) => c.openContact('LinkedIn') },
  { matches: /arriba|subir/i, label: 'Subir', run: (c) => c.scrollPage('up') },
  { matches: /abajo|bajar/i, label: 'Bajar', run: (c) => c.scrollPage('down') },
];

@Component({
  selector: 'app-voice-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voice-nav.component.html',
  styleUrl: './voice-nav.component.scss',
})
export class VoiceNavComponent implements OnDestroy {
  @ViewChild('micButton') micButton?: ElementRef<HTMLButtonElement>;

  isSupported = false;
  isListening = false;
  feedback = '';
  posX = 24;
  posY = 24;

  private recognition: any = null;
  private dragging = false;
  private pointerMoved = false;
  private dragStart = { x: 0, y: 0, posX: 0, posY: 0 };
  private feedbackTimeout: ReturnType<typeof setTimeout> | null = null;
  private readonly isBrowser: boolean;

  constructor(
    private readonly router: Router,
    private readonly portfolio: PortfolioService,
    @Inject(PLATFORM_ID) platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.restorePosition();
      this.setupRecognition();
    }
  }

  ngOnDestroy(): void {
    this.recognition?.stop();
    if (this.feedbackTimeout) {
      clearTimeout(this.feedbackTimeout);
    }
  }

  private setupRecognition(): void {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      this.isSupported = false;
      return;
    }
    this.isSupported = true;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'es-ES';
    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 3;

    this.recognition.onstart = () => {
      this.isListening = true;
      this.showFeedback('Escuchando...', 6000);
    };

    this.recognition.onresult = (event: any) => {
      const transcript: string = event.results[0][0].transcript;
      this.handleTranscript(transcript);
    };

    this.recognition.onerror = () => {
      this.showFeedback('No se entendió el comando', 2500);
    };

    this.recognition.onend = () => {
      this.isListening = false;
    };
  }

  toggleListening(): void {
    if (!this.isSupported) {
      this.showFeedback('Usa Chrome para la navegación por voz', 3000);
      return;
    }
    if (this.isListening) {
      this.recognition.stop();
      return;
    }
    try {
      this.recognition.start();
    } catch {
      // recognition already running, ignore
    }
  }

  private handleTranscript(transcript: string): void {
    const command = COMMANDS.find((c) => c.matches.test(transcript));
    if (command) {
      this.showFeedback(`→ ${command.label}`, 2000);
      command.run(this);
    } else {
      this.showFeedback(`No reconocido: "${transcript}"`, 2500);
    }
  }

  goTo(path: string): void {
    this.router.navigateByUrl(path);
  }

  openContact(label: string): void {
    const link = this.portfolio.contactLinks.find((l) => l.label === label);
    if (link) {
      window.open(link.url, '_blank', 'noopener');
    }
  }

  scrollPage(direction: 'up' | 'down'): void {
    const amount = direction === 'up' ? -window.innerHeight * 0.8 : window.innerHeight * 0.8;
    window.scrollBy({ top: amount, behavior: 'smooth' });
  }

  private showFeedback(text: string, duration: number): void {
    this.feedback = text;
    if (this.feedbackTimeout) {
      clearTimeout(this.feedbackTimeout);
    }
    this.feedbackTimeout = setTimeout(() => (this.feedback = ''), duration);
  }

  // --- Drag handling ---

  onPointerDown(event: PointerEvent): void {
    this.dragging = true;
    this.pointerMoved = false;
    this.dragStart = { x: event.clientX, y: event.clientY, posX: this.posX, posY: this.posY };
    (event.target as HTMLElement).setPointerCapture(event.pointerId);
  }

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (!this.dragging) return;
    const dx = event.clientX - this.dragStart.x;
    const dy = event.clientY - this.dragStart.y;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      this.pointerMoved = true;
    }
    this.posX = this.clamp(this.dragStart.posX - dx, 8, window.innerWidth - 64);
    this.posY = this.clamp(this.dragStart.posY - dy, 8, window.innerHeight - 64);
  }

  @HostListener('document:pointerup')
  onPointerUp(): void {
    if (this.dragging && this.pointerMoved) {
      this.savePosition();
    }
    this.dragging = false;
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.posX = this.clamp(this.posX, 8, window.innerWidth - 64);
    this.posY = this.clamp(this.posY, 8, window.innerHeight - 64);
  }

  onButtonClick(): void {
    if (this.pointerMoved) {
      this.pointerMoved = false;
      return;
    }
    this.toggleListening();
  }

  private clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }

  private savePosition(): void {
    try {
      localStorage.setItem('voiceNavPos', JSON.stringify({ x: this.posX, y: this.posY }));
    } catch {
      // storage unavailable, ignore
    }
  }

  private restorePosition(): void {
    try {
      const raw = localStorage.getItem('voiceNavPos');
      if (raw) {
        const { x, y } = JSON.parse(raw);
        this.posX = this.clamp(x, 8, window.innerWidth - 64);
        this.posY = this.clamp(y, 8, window.innerHeight - 64);
      }
    } catch {
      // storage unavailable, ignore
    }
  }
}
