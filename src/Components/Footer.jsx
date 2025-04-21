import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year
    return (
        <footer className="flex justify-center items-center h-24 bg-gradient-to-b from-blue-500 to-purple-500 text-white shadow-inner">
            <p className="text-sm md:text-base font-medium">
                © {currentYear} <span className="font-bold">Junaid Faiz</span>. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;