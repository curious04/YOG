import React, {useState} from 'react';
import './Testimonial.css';
import {testimonialsData} from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

import {motion} from 'framer-motion';

const Testimonials = () => {

  const transition = { type: 'spring', duration: 3 };
  const [Selected , setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="testimonials" id='testimonials'>

        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            
            <motion.span
            key={Selected}
            initial={{opacity: 0 , x: 100}}
            animate={{opacity: 1, x:0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}>
              {testimonialsData[Selected].review}
            </motion.span>

            <span>
              <span style={{ color:'var(--orange)'}}>
                {testimonialsData[Selected].name}
              </span>{" "}
               - {testimonialsData[Selected].status}
            </span>
        </div>


        <div className="right-t">
            <motion.div
            initial={{opacity: 0 , x: -100}}
            transition={{ ...transition, duration: 2}}
            whileInView={{opacity: 1, x:0}}
            ></motion.div>

            <motion.div
            initial={{opacity: 0 , x: 100}}
            transition={{ ...transition, duration: 2}}
            whileInView={{opacity: 1, x:0}}
            ></motion.div>


            <motion.img 
            key={Selected}
            initial={{opacity: 0 , x: 100}}
            animate={{opacity: 1, x:0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            src={testimonialsData[Selected].image} alt="" />

         <div className='arrows'>
          <img 
          onClick={()=> (
            Selected === 0 // if its at first testimonial
            ? setSelected(tLength - 1) // then go to back
            : setSelected( (prev)=> prev - 1) // or go to previous one
          )}
          src={leftArrow} alt="" />

          <img 
            onClick={()=> (
            Selected === tLength - 1 // if we at last testimonial
            ? setSelected(0) // them return first testimonial
            : setSelected( (prev)=> prev + 1) // or go to next of last state
          )}
          src={rightArrow} alt="" />
        </div>
      </div>


    </div>
  );
}

export default Testimonials