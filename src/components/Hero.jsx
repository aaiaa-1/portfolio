import {motion} from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import './Hero.css'

const Hero = () => {
  return (
    <section className='background '>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row
      items-start gap-5`}> 

        <div className='flex flex-col justify-center items-center mt-5 '>
          <div  className='w-5 h-5 rounded-full bg-[#4361ee]'/>
          <div  className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm <span className='text-[#4361ee]'> Aya Hamza</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            &ensp; I'm a passionate software engineer based in Tangier and the thing about me is that i love what i do✨. <br />
            &ensp; My journey is all about building software solutions that not only work but are also well designed. <br />
            &ensp; I'm into learning new technologies as well as connection with people in the realm of software engineering.
          </p>
          <button class="shadow__btn">
             <a href="src/assets/Aya HAMZA's Resume.pdf" download>My Resume</a>
          </button>
        </div>
       
      </div>

      <ComputersCanvas />

    </section>
  )
}

export default Hero