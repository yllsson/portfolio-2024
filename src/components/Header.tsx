import React from 'react';
import Image from 'next/image';

const Header = () => {
    return (
        <header>
            <Image
                width={200}
                height={200}
                src='/images/icon.png'
                alt="A circular icon with an illustration of Ylva's head facing to the right."
            />

            <nav>
                <a href='#title'>
                    <span className='hover'>Home</span>
                </a>
                <a href='#projects'>
                    <span className='hover'>Projects</span>
                </a>
                <a href='#contact'>
                    <span className='hover'>Contact</span>
                </a>
            </nav>
        </header>
    );
};

export default Header;
