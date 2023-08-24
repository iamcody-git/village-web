import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="row">
                <div className='col-12 col-lg-10 mx-auto'>
                    <div className="row">
                        <div className='col-6 col-lg-3'>
                            <h2>Company</h2>
                            <ul>
                                <li>About</li>
                                <li>Contact</li>
                                <li>Services</li>
                                <li>Support</li>
                            </ul>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <h2>Support</h2>
                            <ul>
                                <li>History</li>
                                <li>Location</li>
                                <li>Time to Visit</li>
                                <li>Travel Mode</li>
                            </ul>
                        </div>
                        <div className='col-6 col-lg-3'>
                            <h2>Services</h2>
                            <ul>
                                <li>HomeStay</li>
                                <li>Hotels</li>
                                <li>Travels</li>
                                <li>Guides</li>
                            </ul>
                        </div>
                        <div className='col-6 col-lg-3'>
                        <h2>Follow us</h2>
                        <div className="row">
                            <div className='col-3 mx-auto'>
                            <ion-icon name="logo-facebook"></ion-icon>
                            </div>
                            <div className='col-3 mx-auto'>
                            <ion-icon name="logo-instagram"></ion-icon>
                            </div>
                            <div className='col-3 mx-auto'>
                            <ion-icon name="globe-outline"></ion-icon>
                            </div>
                        </div>
                    </div>
                        
                    </div>
                </div>
                <hr/>
                <div className='mt-1'>
                    <p className='main-hero-para text-center w-100'>copyright &#169;2023 codyCompany.All rights reserved</p>
                </div>
            </div>
        </div>
        </footer> 
    </>
  )
}

export default Footer
