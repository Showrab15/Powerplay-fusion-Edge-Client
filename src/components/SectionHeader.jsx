import React from 'react';

const SectionHeader = ({headerImage, headerTitle, headerRoute}) => {
    return (
        <div className="hero h-80 rounded-t-lg rounded-b-lg rounded-l-lg rounded-r-lg  object-cover" style={{ backgroundImage: `url(${headerImage})` }}>
    
  <div className="hero-overlay rounded-t-lg rounded-b-lg rounded-l-lg rounded-r-lg bg-opacity-60"></div>
  <div className="hero-content rounded-t-lg rounded-b-lg rounded-l-lg rounded-r-lg text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl text-yellow-400 italic font-bold">{headerTitle}</h1>
      <p className="mb-5 text-white">{headerRoute} </p>
    </div>
  </div>
</div>
    );
};

export default SectionHeader;