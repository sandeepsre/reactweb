import React from 'react';

const Footer =() =>{
    const years = new Date().getFullYear();
    return (
        <>
            <footer className="w-100 bg-light text-center">
                <p>© {years} All Rights Reserved</p>
            </footer>    
        </>
    );

}

export default Footer;