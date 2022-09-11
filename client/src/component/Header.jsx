import React from 'react';
import headerVideo from '../assets/dribbble.mp4';
import '../Styles/header.css';
import { motion } from "framer-motion"
import { HiArrowNarrowUp } from 'react-icons/hi'

const Header = () => {
  const video_move = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    }
  }
  return (
    <motion.div className="header" id="home">
        <motion.div className="header-text"
          initial={video_move.hidden}
          animate={{ opacity: 1, y: 0, transition: {ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6, delay: 0.5 }}}
        >
          <h1>
              <span>Welcome</span> To Dog Breeds <span>Encyclopedia</span>
          </h1>
        </motion.div>

        <motion.div className="dog_name"
          initial={video_move.hidden}
          animate={{ opacity: 1, y: 0, transition: {ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6, delay: 1 }}}
          drag
          dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}
          dragElastic={1}
          >
          <p> Hi <span>👋</span> <br /> My name is Coco </p>
        </motion.div>

        <motion.div className="click"
          initial={video_move.hidden}
          animate={{ opacity: 1, y: 0, transition: {ease: [0.6, 0.01, -0.05, 0.95], duration: 1.6, delay: 1.5 }}}
        >
          <HiArrowNarrowUp />
          <p>Drag Me!</p>
        </motion.div>

        <motion.div className="video-container" 
           initial={video_move.hidden}
           animate={video_move.show}
          >   
        <video autoPlay loop muted id="video">
            <source src={headerVideo} type='video/mp4' />
        </video>
        </motion.div>
    </motion.div>
  )
}

export default Header
