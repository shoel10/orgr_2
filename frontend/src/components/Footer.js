import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/footer.css';

const Footer = () =>{
    return(
        <div>
            <div id='Contact' className='container-fluid footer '>
                <div className='container-fluid ml-8 mr-8'>
                    <div className='row ml-5'>
                        <div className='col-12 col-md-4 col-xl-4 col-lg-4'>
                             <div className='about_footer'>
                                <h3 className='text-Black'>About Us</h3><hr className='bg-black'></hr>
                                <p className='text-Black pr-5' style={{textAlign:'left'}}>
                                The Organic Basket is your online day to day vegetable , fruits store.
                                Our products are farm fresh and most importantly they are  ORGANIC. They are grown
                                on the fields exclusively owned by The Organic Basket,
                                or it's franchaise partner.We therefore garuntee are product to be 100 % genuine and fresh.
                                Organic vegetable or fruits as we all know are grown without using
                                any kind of artificial fertiliser, pesticides, or herbicides. They are just grown naturally.
                                 
                                </p>

                             </div>
                        </div>

                        <div className='col-12 col-md-2 col-xl-2 col-lg-2'>
                             <div className='about_footer'>
                                <h3 className='text-Black'>Quick Links</h3><hr className='bg-Black'></hr>
                                 <ul>
                                    <li><NavLink to="/" className="li">Home</NavLink></li>
                                    <li><NavLink to="/" className="li">About Us</NavLink></li>
                                    <li><NavLink to="/" className="li">Gallery</NavLink></li>
                                    <li><NavLink to="/" className="li">Contact Us</NavLink></li>
                                 </ul>
                             </div>
                        </div>

                        <div className='col-12 col-md-2 col-xl-2 col-lg-2'>
                             <div className='about_footer'>
                                <h3 className='text-Black'>Follow Us</h3><hr className='bg-Black'></hr>
                                 <ul>
                                    <li><NavLink to="/" className="li">Facebook</NavLink></li>
                                    <li><NavLink to="/" className="li">Instagram</NavLink></li>
                                    <li><NavLink to="/" className="li">Twitter</NavLink></li>
                                    <li><NavLink to="/" className="li">YouTube</NavLink></li>
                                 </ul>
                             </div>
                        </div>

                        <div className='col-12 col-md-4 col-xl-4 col-lg-4'>
                             <div className='about_footer'>
                                <h3 className='text-Black'>Contact Us</h3><hr className='bg-Black'></hr>
                                <span>Address : -</span> <span>Salt Lake Sector V (Kolkata)</span><br></br>
                                <a href="tel:+9330379535 tel:+669875"><i className='fas fa-phone'></i> +91-9330379535   <i className='fas fa-phone'></i> +91-9749002205 </a>
                                {// eslint-disable-next-line
                                <a ><i className='fas fa-envelope'></i>mdshoelhossain649@gmail.com<br/><i className='fas fa-envelope'></i>  a.1999@gmail.com</a>
                                
                                }</div>
                             <div className='mt-1 mr-5'>
                             {// eslint-disable-next-line
                             <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081.137909197547!2d88.43282685235556!3d22.574256955373254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1656678985189!5m2!1sen!2sin" width="100%" height="150px" style={{border:'0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                              } </div>
                        </div>
                    </div><hr className='bg- Black'></hr>

                    <div className='row'>
                       <div className='col-12'>
                          <p className='text-center text-Black'>&copy; 2023 Design & Developed By MD SHOEL HOSSAIN , Soumyadeep, Ritam</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;