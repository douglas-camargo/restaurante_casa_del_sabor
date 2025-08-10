import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export const contactInfo = [
  {
    icon: MapPin,
    title: 'Dirección',
    content: '123 Calle Principal, Centro Histórico, Ciudad',
    link: 'https://maps.google.com'
  },
  {
    icon: Phone,
    title: 'Teléfono',
    content: '+58 0424 123 2755',
    link: 'tel:+5804241232755'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@lacasadelsabor.com',
    link: 'mailto:info@lacasadelsabor.com'
  },
  {
    icon: Clock,
    title: 'Horario',
    content: 'Lunes - Domingo: 12:00 PM - 11:00 PM'
  }
];

export const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' }
];

export const whatsAppConfig = {
  number: '5804241232755',
  contactMessage: 'Hola! Me gustaría obtener más información sobre el restaurante...',
  reservationMessage: 'Hola! Me gustaría hacer una reserva para...',
  versionPc: 'https://web.whatsapp.com/send?',
  versionMobile: 'https://api.whatsapp.com/send?'
};
