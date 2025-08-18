import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import MenuSection from './components/organisms/MenuSection';
import GallerySection from './components/templates/GallerySection';
import AboutSection from './components/templates/AboutSection';
import TestimonialsSection from './components/templates/TestimonialsSection';
import ContactSection from './components/templates/ContactSection';
import Footer from './components/templates/Footer';

function App() {
  return (
    <div className="App overflow-x-hidden w-full max-w-full">
      <Navbar />
      <main className="overflow-x-hidden w-full">
        <Hero />
        <MenuSection />
        <GallerySection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
