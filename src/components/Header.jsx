import React from 'react'

const Header = () => {
  return (
    <>
    <header>
      <section className='container main-hero-container'>
        <div className="row">
            <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-center' mx-50>
                <h1 className='display-2'>
                    Vist our place<br/>Nawalpur,Nepal
                </h1>
                <p className="main-hero-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et eos placeat, ratione earum debitis sequi modi quidem tempore officiis repudiandae?
                </p>
                <div className='input-group mt-3'>
                  <input type='text' className='rounded-pill w-75 p-2 form-control-text' placeholder='Enter your Query'/>
                  <div className='input-group-button m-2 '>SEND US</div>
                </div>
            </div>
            <div className='col-8 col-lg-6 header-right-side d-flex justify-content-center align-items-center'>
              <img src='./images/cg.jpg' alt='photoimg' className='img-fluid'/>
            </div>
        </div>
      </section>
      </header>
    </>
  )
}

export default Header
