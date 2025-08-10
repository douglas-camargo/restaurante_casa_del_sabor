import { motion } from 'framer-motion';
import { Clock, Users, Phone } from 'lucide-react';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import WhatsAppIcon from '../atoms/WhatsAppIcon';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { layoutClasses, typographyClasses, formClasses } from '../../utils/tailwindClasses';

const ReservationForm = () => {
  const { generateWhatsAppLink, whatsAppNumber } = useWhatsApp('reservation');
  
  // Regla 2: Constantes de clases para estilos reutilizables
  const infoCardClasses = "flex flex-col items-center space-y-2";
  const bulletPointClasses = "flex items-center space-x-2";
  const bulletDotClasses = "w-2 h-2 bg-green-500 rounded-full";
  
  return (
    <section id="reservation" className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
      <div className={layoutClasses.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className={`${typographyClasses.heading2} text-gray-900 mb-4`}>
              Reserva tu <span className="text-gradient">Mesa</span>
            </h2>
            <p className={`${typographyClasses.body} text-gray-600 max-w-2xl mx-auto`}>
              Contáctanos por WhatsApp para hacer tu reserva y asegurar tu lugar en nuestro restaurante
            </p>
          </div>

          {/* WhatsApp Reservation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-base p-8 md:p-12"
          >
            <div className="text-center mb-8">
              {/* Regla 1: Clases directamente en JSX para elementos únicos */}
              <div className="w-24 h-24 bg-[#25D366] rounded-full flex-center mx-auto mb-6">
                <Icon icon={WhatsAppIcon} size={40} color="#ffffff" />
              </div>
              <h3 className={`${typographyClasses.heading3} text-gray-900 mb-4`}>
                Reserva por <span className="text-green-600">WhatsApp</span>
              </h3>
              <p className="text-gray-600 text-lg">
                Envíanos un mensaje con los detalles de tu reserva
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 mb-8">
              <div className="text-center space-y-4">
                <div className="flex-center space-x-3">
                  <Icon icon={Phone} size={24} color="#25d366" />
                  <span className="text-xl font-semibold text-gray-900">
                    +{whatsAppNumber}
                  </span>
                </div>
                <p className="text-gray-600">
                  Horario de reservas: Lun-Dom 12:00-23:00
                </p>
              </div>
            </div>

            <div className="text-center mb-8">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#128C7E] border-[#25D366] hover:border-[#128C7E] px-8 py-4 text-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Icon icon={WhatsAppIcon} size={24} color="#ffffff" className="mr-3" />
                  Reservar por WhatsApp
                </Button>
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4 text-center">
                Información que necesitamos:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className={bulletPointClasses}>
                  <div className={bulletDotClasses}></div>
                  <span>Nombre completo</span>
                </div>
                <div className={bulletPointClasses}>
                  <div className={bulletDotClasses}></div>
                  <span>Número de personas</span>
                </div>
                <div className={bulletPointClasses}>
                  <div className={bulletDotClasses}></div>
                  <span>Fecha y hora</span>
                </div>
                <div className={bulletPointClasses}>
                  <div className={bulletDotClasses}></div>
                  <span>Solicitudes especiales</span>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className={infoCardClasses}>
                  <Icon icon={Clock} size={24} color="#ed7519" />
                  <div>
                    <div className="font-semibold text-gray-900">Horario</div>
                    <div className="text-sm text-gray-600">Lun-Dom 12:00-23:00</div>
                  </div>
                </div>
                <div className={infoCardClasses}>
                  <Icon icon={Phone} size={24} color="#ed7519" />
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-sm text-gray-600">+58 0424 123 2755</div>
                  </div>
                </div>
                <div className={infoCardClasses}>
                  <Icon icon={Users} size={24} color="#ed7519" />
                  <div>
                    <div className="font-semibold text-gray-900">Capacidad</div>
                    <div className="text-sm text-gray-600">Hasta 20 personas</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationForm;
