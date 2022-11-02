import React from 'react';
import './styles/PortfolioContainer.scss'
import './styles/Footer.css'

export default function Footer() {
    return (
        <div className='footer d-flex justify-content-center pt-2'>
            <a
                href='https://github.com/Proper-Stevo'
                target='blank'
                rel='noopener noreferrer'
                className='p-3'
            >
                <i className='fa-brands fa-github custom-icon fa-xl'></i>
            </a>
            <a
                href='https://linkedin.com/in/stevenb1992/'
                target='blank'
                rel='noopener noreferrer'
                className='p-3'
            >
                <i className='fa-brands fa-linkedin custom-icon fa-xl'></i>
            </a>
            <a
                href='https://twitter.com/proper-stevo/'
                target='blank'
                rel='noopener noreferrer'
                className='p-3'
            >
                <i className='fa-brands fa-square-twitter custom-icon fa-xl'></i>
            </a>
            <a
                href='mailto:steven.barrios92@gmail.com'
                target='blank'
                rel='noopener noreferrer'
                className='p-3'
            >
                <i className='fa-brands fa-goole custom-icon'></i>
            </a>
        </div>
    );
};