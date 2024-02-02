"use client"
import React from 'react';
import Button from './Button';
import LeadForm from './LeadForm';

const FeaturedListing = ({imageUrl, handleClick}) => {
  const apartmentDetails = {
    title: 'Yas Island',
    location: '123  Street X, CityY',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    price: 'AED 500,000',
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md mb-4">
      <img
        src={imageUrl} // Add your apartment image URL here
        alt="Apartment"
        className="h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{apartmentDetails.title}</h2>
        <p className="text-gray-600 mb-2">{apartmentDetails.location}</p>
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="mr-2">{apartmentDetails.bedrooms} Bedrooms</span>
          <span className="mr-2">{apartmentDetails.bathrooms} Bathrooms</span>
          <span>{apartmentDetails.area} sqft</span>
        </div>
        <p className="text-lg font-bold text-blue-500">{apartmentDetails.price}</p>
        <Button onClick={handleClick}   className='bg-[#006B8D] rounded-6xl  text-lg py-2 mt-4 ' children="Book Visit"/>

      </div>
    </div>
  );
};

export default FeaturedListing;
