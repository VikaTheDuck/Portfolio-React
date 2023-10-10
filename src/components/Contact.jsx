import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailsjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas} from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <div style={{ paddingTop: '50px' }}>
          <p style={{ color: 'gray' }}>Email</p>
          <hr/>
          <br/>
          <a href="mailto:victoria.solodo@gmail.com">
            victoria.solodo@gmail.com 🔗
          </a>
        </div>
        <div style={{ paddingTop: '50px' }}>
          <p style={{ color: 'gray' }}>LinkedIn</p>
          <hr/>
          <br/>
          <a href="https://www.linkedin.com/in/victoria-solodovnikova/">
          Visit my profile🔗
          </a>
        </div>
      </motion.div>
      <motion.div variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")