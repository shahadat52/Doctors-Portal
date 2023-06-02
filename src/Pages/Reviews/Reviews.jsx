import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Reviews = () => {
    const notify = () => toast('Here is your toast.');
    return (
        <div>
            <div>
                <button className='btn btn-primary' onClick={notify}>Make me a toast</button>
                
            </div>
        </div>
    );
};

export default Reviews;