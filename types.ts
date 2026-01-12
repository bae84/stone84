import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  TEAM = 'team',
  CONTACT = 'contact',
  AI_CONSULT = 'ai-consult'
}