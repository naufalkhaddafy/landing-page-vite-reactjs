import { useState } from 'react';
import Header from './section/Header';
import Hero from './section/Hero';
import Service from './section/Service';
import Footer from './section/Footer';
import Testimonial from './section/Testimonials';
import Blog from './section/Blog';
import Faq from './section/Faq';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={'w-full'}>
      <Header />
      <Hero />
      <Service />
      <Testimonial />
      <Blog />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
