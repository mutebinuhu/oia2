"use client"
import FeaturedListing from '@/components/FeaturedListing';
import LeadForm from '@/components/LeadForm';
import React, {useState} from 'react';
import { FaWindowClose } from "react-icons/fa";
import {motion} from 'framer-motion';
import SuccessAlert from '@/components/SuccessAlert';



const urls = [
    "https://www.abu-dhabi-sales-office.com/Projects/PJI/Saadiyat-Lagoons-Abu-Dhabi/images/banner1.jpg",
    "https://www.abu-dhabi-sales-office.com/Projects/PJI/Saadiyat-Lagoons-Abu-Dhabi/images/banner2.jpg",
    "https://www.abu-dhabi-sales-office.com/Projects/PJI/Saadiyat-Lagoons-Abu-Dhabi/images/banner3.jpg"
]
const Listing = ({}) => {
    const [showForm, setShowForm] = useState(false)
    return (
        <div id='Listing' className='relative ' >
        {
            showForm
            &&
            <div className='absolute z-30  opacity-100 py-8 h-screen bg-[#006B8D] w-full'>
                      

                 <div className='absolute right-6' onClick={()=>setShowForm(false)}>
                    <div className='text-white text-3xl'><FaWindowClose /></div>
                    </div>
                    <motion.div initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}>
                    <LeadForm />
                    </motion.div>
                   
           </div>
        }

        <h2 className='text-center text-3xl font-bold mt-8'>Featured Listing</h2>
        <div className='md:flex mt-8 mx-7'>
            {urls.map((image)=><FeaturedListing imageUrl={image} handleClick={()=>setShowForm(true)}  />)}
        </div>
        </div>
    );
}

export default Listing;
