import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { HeroParallax } from '@/components/Hero';
import Newsletter from '@/components/Newsletter';

const placeholderProducts = [
  {
    title: 'Example Logo',
    link: '/',
    thumbnail: '/logo.png', // Specify the path to your placeholder image
  },
  {
    title: 'Example Logo 2',
    link: '/',
    thumbnail: '/logo2.png', // Specify the path to your placeholder image
  },
  {
    title: 'Example Logo 3',
    link: '/',
    thumbnail: '/logo3.png', // Specify the path to your placeholder image\
  },
  {
    title: 'Example Logo 4',
    link: '/',
    thumbnail: '/logo4.png', // Specify the path to your placeholder image
  },
];

const Index = () => {
  return (
    <>
      <Header />
      <HeroParallax products={placeholderProducts} />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Index;
