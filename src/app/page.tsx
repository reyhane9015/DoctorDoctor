"use client"


import Hero from '../components/layout/Hero';
import Services from './../components/layout/Services';
import CategoryList from './../components/layout/CategoryList';
import DoctorIntro from './../components/layout/DoctorIntro';
import HealthCenter from './../components/layout/HealthCenter';
import CustomersComments from './../components/layout/CustomersComments';
import Magazin from './../components/layout/Magazin';
import { motion , useScroll } from "framer-motion";


const Home: React.FC = () => {

  const { scrollYProgress } = useScroll();

  
  return (
    <>

      <motion.div
        className="scroll_animation"
        style={{ scaleX: scrollYProgress }}
      />

  
       <Hero />
       <Services />

       <CategoryList />
       <DoctorIntro />
       <HealthCenter />
       <Magazin />
       <CustomersComments />
    </>
  );
}

export default Home;
