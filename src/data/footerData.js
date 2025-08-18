import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const footerLinks = {
  restaurant: [
    { name: 'Nuestro Menú', href: '#menu' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Reservas', href: '#reservation' },
    { name: 'Contacto', href: '#contact' }
  ],
  services: [
    { name: 'Eventos Privados', href: '#' },
    { name: 'Catering', href: '#' },
    { name: 'Clases de Cocina', href: '#' },
    { name: 'Delivery', href: '#' }
  ]
};

export const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
  { icon: Youtube, href: 'https://www.youtube.com/', label: 'YouTube' }
];

export const restaurantInfo = {
  name: 'La Casa del Sabor',
  description: 'Descubre la auténtica cocina gourmet con ingredientes frescos y técnicas culinarias tradicionales.',
  address: '123 Calle Principal, Ciudad',
  phone: '+58 0424 123 2755',
  email: 'info@lacasadelsabor.com',
  hours: 'Lun-Dom 12:00-23:00'
};
