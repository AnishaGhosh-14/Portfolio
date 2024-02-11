import React from 'react'
import { Link } from 'react-router-dom';

    const HomeInfo = ({ currentStage }) => {
        if (currentStage === 1)
          return (
            <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-orange py-4 px-8 text-white mx-5'>
              Hi, I'm
              <span className='font-semibold mx-2 text-white'>Anisha</span>
              👋
              <br />
              A Software Engineer from India
            </h1>
          );
      
        if (currentStage === 2) {
          return (
            <div className='info-box neo-brutalism-orange'>
              <p className='font-medium sm:text-xl text-center'>
                Worked with many companies <br /> and picked up many skills along the way
              </p>
      
              <Link to='/about' className='neo-brutalism-white neo-orange-btn'>
                Learn more
              </Link>
            </div>
          );
        }
      
        if (currentStage === 3) {
          return (
            <div className='info-box neo-brutalism-orange'>
              <p className='font-medium text-center sm:text-xl'>
                Led multiple projects to success over the years. <br /> Curious about the impact?
              </p>
      
              <Link to='/projects' className='neo-brutalism-white neo-orange-btn'>
                Visit my portfolio
              </Link>
            </div>
          );
        }
      
        if (currentStage === 4) {
          return (
            <div className='info-box neo-brutalism-orange'>
            <p className='font-medium sm:text-xl text-center'>
              Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
            </p>
      
            <a href="mailto:anishaaa1444@gmail.com" className='neo-brutalism-white neo-orange-btn'>
              Let's talk
            </a>
          </div>
          );
        }
      
        return null;
      };
  

export default HomeInfo