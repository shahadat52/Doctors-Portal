import React from 'react';
import { Dna } from 'react-loader-spinner';

const DnaLoader = () => {
    return (
        <div className='flex justify-center items-center'>
            <div>
                <Dna
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            </div>
        </div>
    );
};

export default DnaLoader;