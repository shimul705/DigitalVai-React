import React from 'react';

const Header = () => {
  return (
    <div className=' bg-[#F5F5F5]'>
      <div className='md:w-8/12 md:text-start text-center px-4 md:px-0 py-20 m-auto flex flex-col md:flex-row items-center'>
        {/* Left Side */}
        <div className='md:w-1/2'>
          <h1 className='text-[#333333] text-4xl md:text-6xl font-bold'>Unlock Your Potential with
            <span className='mb-3 bg-clip-text text-transparent bg-gradient-to-tr from-[#262262] via-[#002cef] to-current'>  Digital Vai</span><br />
            <span className='md:text-5xl text-[#404040]'>Innovation Meets Success!</span></h1>
          <p className='text-[#666666] mt-4'>we use software development to help your business grow, measure your success, and achieve your goals. Our team is ready to serve you with our offshore software development services and our own products. Take a look at our latest work and reach out to us to get started!</p>
        </div>
        {/* Right Side */}
        <div className='md:w-1/2'>
          <img className='w-full' src="/banner.png" alt="" />
        </div>
      </div>
      


    </div>
  );
};

export default Header;