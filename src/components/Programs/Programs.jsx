import React from 'react';
import './Programs.css';
import {programsData} from '../../data/programsData';
import RArrow from '../../assets/rightArrow.png';

const Programs = () => {
  return (
    <div className="Programs" id="programs">
        {/* Header for sec */}
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        {/* Program Boxes */}
        <div className="programs-categories">
         {programsData.map((program) =>(
            <div className="category">
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                    <div className="join-now"><span>Join now</span>
                    <img src={RArrow} alt="arrow" />
                    </div>
            </div>
            ))}
        </div>

    </div>
  );
}

export default Programs;