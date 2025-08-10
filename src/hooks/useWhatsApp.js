import { isMobileDevice } from '../utils/deviceDetection';
import { whatsAppConfig } from '../data/contactData';

export const useWhatsApp = (messageType = 'contact') => {
  const generateWhatsAppLink = () => {
    const isMobile = isMobileDevice();
    const baseUrl = isMobile ? whatsAppConfig.versionMobile : whatsAppConfig.versionPc;
    const message = messageType === 'reservation' 
      ? whatsAppConfig.reservationMessage 
      : whatsAppConfig.contactMessage;
    
    return `${baseUrl}phone=${whatsAppConfig.number}&text=${encodeURIComponent(message)}`;
  };

  const handleWhatsAppClick = () => {
    window.open(generateWhatsAppLink(), '_blank', 'noopener,noreferrer');
  };

  return {
    generateWhatsAppLink,
    handleWhatsAppClick,
    whatsAppNumber: whatsAppConfig.number,
    isMobile: isMobileDevice()
  };
};
