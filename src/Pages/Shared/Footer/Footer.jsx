import React from 'react';
import { Link } from 'react-router-dom';
import footerImage1 from '../../../assets/footer-image1.png'
import footerImage2 from '../../../assets/footer-image2.png'
import logo from '../../../assets/logo.png'
import { FaPhoneAlt, FaMapMarkerAlt ,FaEnvelope} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer rounded-lg  gap-10 mt-8 p-4  bg-rose-600 text-white">
        <div className="my-auto">
          <img className="w-80 h-64 animate-pulse" src={footerImage1} alt="" />
        </div> 
        <div className="my-auto md:mr-12" >
          <img src={logo} alt="" />
        </div>
     <div className="my-auto  bg-rose-600">
          <span className="text-2xl uppercase font-bold text-white">Quick Links</span> 
          <Link className="link link-hover">About us</Link> 
          <Link className="link link-hover">Contact</Link> 
          <Link className="link link-hover">Add Class</Link> 
        </div> 
        <div className="my-auto md:ml-12">
          <span className="text-2xl uppercase text-white font-bold">Contact Us</span> 
          <Link className="link flex items-center gap-4 link-hover"><FaPhoneAlt></FaPhoneAlt>+880 1814 356 550</Link> 
          <Link className="link flex items-center gap-4 link-hover"> <FaEnvelope></FaEnvelope>supto50showrab@gmail.com</Link> 
          <Link className="link flex items-center gap-4 link-hover"> <FaMapMarkerAlt></FaMapMarkerAlt>PowerPlay Fusion Edge , EPZ, Chattogram,Bangladesh</Link> 
        </div> 
       
        <div className="my-auto">
         <img  className="w-84 h-72 ml-auto animate-pulse"  src={footerImage2} alt="" />
        </div>
      </footer>
    );
};

export default Footer;