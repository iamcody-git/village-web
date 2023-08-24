import React, { useState } from 'react';
import Apiwork from '../API/Apiwork';

const Work = () => {
  const [data, useData] = useState(Apiwork);
  console.log(data);
  
  return (
    <>
      <section>
        <div className='work-container container'>
          <hr/>
          <h1 className='main-heading text-center'>Places to visit and enjoy your time!</h1><hr/>
          <div className="row">
            {data.map((curElem) => {
              const { id, logo, title, info, img } = curElem;
              return (
                <div key={id} className='col-12 col-lg-4 text-center work-container-subdiv'>
                  <ion-icon name={logo}></ion-icon>
                  <h2 className='sub-heading'>{title}</h2>
                  <p className='main-hero-para w-100'>
                    {info}
                  </p>
                  <img src={img} alt={title} className='photo' />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
