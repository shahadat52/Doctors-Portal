import React from 'react';
import { Dna } from 'react-loader-spinner';

const About = () => {
    return (
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
    );
};

export default About;