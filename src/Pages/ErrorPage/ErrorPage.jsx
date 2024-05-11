import React from 'react';
import'./ErrorPage.css'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
const ErrorPage = () => {
    return (
        <section className="page_404">
        <div className="container">
        <div className="flex flex-col">
  <div className="sm:col-span-12">
    <div className="sm:col-span-10 sm:col-start-2 text-center">
          <div className="four_zero_four_bg">
            <h1 className="text-center ">404</h1>
          
          
          </div>
          
          <div className="contant_box_404">
          <h3 className="h2">
          Look like you're lost
          </h3>
          
          <p>the page you are looking for not avaible!</p>
          
          <Link to="/"> <Button buttonText={"GO TO HOME"}></Button> </Link>
        </div>
          </div>
          </div>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;