import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='h-80 flex justify-center items-center'>
            <HashLoader color="blue" />
        </div>
    );
};

export default LoadingSpinner;