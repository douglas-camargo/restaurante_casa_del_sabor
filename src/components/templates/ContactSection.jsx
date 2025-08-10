import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';
import WhatsAppIcon from '../atoms/WhatsAppIcon';
import { contactInfo, socialLinks } from '../../data/contactData';
import { useWhatsApp } from '../../hooks/useWhatsApp';

const ContactSection = () => {
  const { generateWhatsAppLink, whatsAppNumber } = useWhatsApp('contact');

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte a planificar tu próxima visita
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">
              Información de <span className="text-gradient">Contacto</span>
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon icon={info.icon} size={24} color="#ed7519" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-primary-600 transition-colors"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8"
            >
              <h4 className="font-semibold text-gray-900 mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center hover:bg-primary-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon icon={social.icon} size={20} color="#ed7519" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* WhatsApp Contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8">
              Contáctanos por <span className="text-gradient">WhatsApp</span>
            </h3>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="text-center mb-6">
                                                   <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon icon={WhatsAppIcon} size={32} color="#ffffff" />
                  </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  ¡Chatea con nosotros!
                </h4>
                <p className="text-gray-600">
                  Resolvemos tus dudas al instante
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-center space-x-3">
                  <Icon icon={Phone} size={20} color="#25d366" />
                  <span className="text-lg font-semibold text-gray-900">
                    +{whatsAppNumber}
                  </span>
                </div>
                <p className="text-center text-gray-600 text-sm">
                  Horario de atención: Lun-Dom 12:00-23:00
                </p>
              </div>

                             <a
                 href={generateWhatsAppLink()}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="block w-full"
               >
                                 <Button
                   variant="primary"
                   size="lg"
                   className="w-full bg-[#25D366] hover:bg-[#128C7E] border-[#25D366] hover:border-[#128C7E] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                 >
                                     <Icon icon={WhatsAppIcon} size={20} color="#ffffff" className="mr-2" />
                   Abrir WhatsApp
                </Button>
              </a>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Tiempo de respuesta: <span className="font-semibold">Menos de 5 minutos</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9 h-96 md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2s!4v1640995200000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del restaurante"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
