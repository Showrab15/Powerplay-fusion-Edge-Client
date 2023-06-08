import React from 'react';

const SectionHeader = ({headerImage, headerTitle, headerRoute}) => {
    return (
        <div className="hero h-80  object-cover" style={{ backgroundImage: `url(${headerImage})` }}>
    
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl text-red-600 font-bold">{headerTitle}</h1>
      <p className="mb-5 text-white">{headerRoute} </p>
    </div>
  </div>
</div>
    );
};

export default SectionHeader;