export interface NavLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  company: NavLink[];
  resources: NavLink[];
  legal: NavLink[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  image: string;
  instructor: string;
  rating: number;
  students: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

export interface Placement {
  id: string;
  studentName: string;
  company: string;
  role: string;
  package: string;
  image: string;
  testimonial: string;
} 