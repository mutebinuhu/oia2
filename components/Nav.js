import React from 'react';
import { CiMenuFries } from "react-icons/ci";


const Nav = () => {
    return (
        <div>
            <nav className='flex justify-between  items-center'>
                <div className='font-bold text-3xl'>OIA</div>
                <ul className='flex justify-between space-x-2'>
                    <li className='p-3'>Home</li>
                    <li className='flex items-center space-x-2 border p-3 rounded-3xl border-gray-800'>
                        <span>Menu</span>
                        <span><CiMenuFries/></span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
