

export interface Technology {
  name: string;
  icon: string;   
  color: string;  
  category: 'backend' | 'frontend' | 'database' | 'devops' | 'language';
}

export interface ContactLink {
  label: string;
  url: string;
  icon: string;
  color: string;
}

export interface NavLink {
  label: string;
  path: string;
}
