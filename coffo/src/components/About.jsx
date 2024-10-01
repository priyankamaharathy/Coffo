import React from 'react';
import { motion } from 'framer-motion';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import vid6 from '../assets/vid6.mp4';
import vid7 from '../assets/vid7.mp4';
import img8 from '../assets/img8.jpg';
const About = () => {
 const images = [
  {
    id: 1,
    src: img3,
    alt: 'Image3'
  },
  {
    id: 2,
    src: img4,
    alt: 'Image4'
  },
  {
    id: 3,
    src: img5,
    alt: 'Image5'
  },
  {
    id: 4,
    src: vid6,
    alt: 'Video6',
    type: 'video'
  },
  {
    id: 5,
    src: img8,
    alt: 'Image8',
  },
  {
    id: 6,
    src: vid7,
    alt: 'Video7',
    type: 'video'
  },
];
  return (
    <section className='w-screen h-full'>
      <div className='mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center'>
        <motion.div
          className='bg-vanilla w-full flex flex-col lg:flex-row gap-12 xl:gap-20 h-[400px]'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         
          <motion.div
            className='flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='relative flex items-start'>
              <div className='xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end'>
                <h3 className='cinzel-font text-xl font-bold mb-4 xl:text-3xl text-white'>
                  Brewed coffee
                </h3>
                <p className='max-w-[400px] text-white'>
                  You can order our coffee in the online<br />store or find our store in your city.
                </p>
              </div>
            </div>
            <div className='relative flex items-start'>
                <div className='xl:max-w-[420px] xl:text-right xl:flex xl:flex-col xl:items-end'>
                    <h3 className='cinzel-font text-xl font-bold mb-4 xl:text-3xl text-white'>
                      Coffee beans
                    </h3>
                    <p className='max-w-[400px] text-white'>
                      You can order our coffee in the online <br /> store or find our store in your city.
                    </p>
                  </div>
            </div>
          </motion.div>

          <motion.div
            className='hidden xl:flex justify-center'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className='relative w-[322px] h-[500px]'>
              <img src={img2} alt="img2" className='absolute translate-y-2/4 translate-x-3 object-cover h-[400px]' />
            </div>
          </motion.div>

          <motion.div
            className='flex-1 flex flex-col justify-around items-start text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}>

            <div className='relative flex items-start'>
              <div className='xl:max-w-[420px] xl:text-balance xl:flex xl:flex-col xl:items-start'>
                  <h3 className='cinzel-font text-xl font-bold mb-4 xl:text-3xl text-white'>
                    Ground coffee
                  </h3>
                <p className='max-w-[400px] text-white'>
                    You can order our coffee in the online <br /> store or find our store in your city.
                </p>
              </div>
            </div>

            <div className='relative flex items-start'>
              <div className='xl:max-w-[420px] xl:text-balance xl:flex xl:flex-col xl:items-start'>
                <h3 className='cinzel-font text-xl font-bold mb-4 xl:text-3xl text-white'>
                    Coffee menu
                </h3>
                  <p className='max-w-[400px] text-white'>
                    You can order our coffee in the online <br /> store or find our store in your city.
                  </p>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
      <div className="w-full bg-color1 flex items-center justify-center min-h-screen mt-80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-7xl cormorant-garamond-light mb-4">ABOUT US</h2>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
              Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at 
              nibh elementum imperdiet.
            </p>
          </div>
      </div>
 
      <div className="m-0 p-0">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
    {images.map(image => (
      <div key={image.id} className="overflow-hidden">
        {image.type === 'video' ? (
          <video className="w-full h-[400px] object-cover" autoPlay muted loop>
            <source src={image.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={image.src} alt={image.alt} className="w-full h-[400px] object-cover" />
        )}
      </div>
    ))}
  </div>
</div>
    </section>
  );
};

export default About;
