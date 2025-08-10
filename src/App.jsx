import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import MenuSection from './components/organisms/MenuSection';
import AboutSection from './components/templates/AboutSection';
import ReservationForm from './components/organisms/ReservationForm';
import TestimonialsSection from './components/templates/TestimonialsSection';
import ContactSection from './components/templates/ContactSection';
import Footer from './components/templates/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <AboutSection />
        <ReservationForm />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
