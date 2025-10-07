import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <HashLoader color="#00c98c" />
        </div>
    );
};

export default LoadingSpinner;