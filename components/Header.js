import React from 'react';
import Button from './Button';

const Header = () => {
    return (
        <div className='flex bg-gray-900 justify-center items-center space-x-4 p-2 '>
            <p className='text-white text-center text-xs'>Get 25% off discount this new year sale. Grab fast</p>
            <Button className='bg-[#006B8D] text-white text-xs' children="Talk to us"/>
        </div>
    );
}

export default Header;
