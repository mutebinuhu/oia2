import React from 'react';
import Nav from './Nav';
import Button from './Button';
import LeadForm from './LeadForm';

const Banner = () => {
    return (
        <div className='md:flex justify-between space-x-4 relative'>
            <div className=' w-full md:w-1/2'>
                <Nav/>
                <p className='leading-loose md:mt-6'>Experience double the luxury at <span className='bg-[#006B8D] text-white p-2 m-2'>Saadiyat Lagoon</span> and <br/> <span className='bg-[#006B8D] text-white p-2 m-2'>Yas Golf Collection!</span>
                 Whether it's coastal elegance or golf-front opulence, your dream lifestyle awaits. Don't miss this unique opportunity to own a piece of these exclusive paradises. Click here to explore oia properties and elevate your living experience today</p>
                <p className='text-4xl font-medium mt-4'>4-6 Bedroom Villas Available for sale, Hurry before they are all taken</p>
               <div className=''>
               <div className=''>
               <Button href="#Listing"  className='bg-[#006B8D] rounded-6xl  text-lg py-2 mt-4 ' children="View Listing"/>
                <Button href="#contact" className='border border-gray-800 text-lg text-gray-500 py-2 mt-4 mx-3' children="Contact us"/>
               </div>

               </div>
              

            </div>
            <div className='md:w-1/2  rounded-3xl h-screen ' style={{backgroundImage: "url(" + "https://saadiyatlagoons.saadiyatvillas.ae/storage/sells/July2023/m3u2AJbm0TlZawwFVkpl.jpg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}>
                <LeadForm/>
            </div>
        </div>
    );
}

export default Banner;
