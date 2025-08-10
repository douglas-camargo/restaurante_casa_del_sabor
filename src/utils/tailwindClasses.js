// Constantes de clases de Tailwind para reutilización

// Layout y contenedores
export const layoutClasses = {
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  section: "py-16 md:py-24",
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex items-center justify-between",
  gridCenter: "grid place-items-center",
  absoluteCenter: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
};

// Tipografía
export const typographyClasses = {
  heading1: "text-4xl md:text-6xl lg:text-7xl font-serif font-bold",
  heading2: "text-3xl md:text-4xl lg:text-5xl font-serif font-bold",
  heading3: "text-2xl md:text-3xl font-serif font-semibold",
  body: "text-base md:text-lg leading-relaxed",
  caption: "text-sm text-gray-600",
  gradient: "bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
};

// Botones
export const buttonClasses = {
  base: "font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
  primary: "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500",
  secondary: "bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 focus:ring-primary-500",
  outline: "bg-transparent hover:bg-primary-50 text-primary-600 border-2 border-primary-600 focus:ring-primary-500",
  ghost: "bg-transparent hover:bg-primary-50 text-primary-600 focus:ring-primary-500",
  sizes: {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg"
  }
};

// Formularios
export const formClasses = {
  input: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200",
  label: "block text-sm font-medium text-gray-700 mb-2",
  error: "text-red-600 text-sm mt-1",
  success: "text-green-600 text-sm mt-1"
};
