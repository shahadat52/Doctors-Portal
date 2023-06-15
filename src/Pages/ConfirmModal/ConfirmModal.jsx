import React, { useState } from 'react';

const ConfirmModal = ({ handleDoctorDelete, doctorInfo }) => {
    const [inputValue, setInputValue] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);


    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  relative">
                    <h3 className="text-xl font-bold mb-5 ">Are you sure you want to delete</h3>
                    {/* <p className="text-lg m">If you delete <span className='font-semibold'>{doctorInfo.name}</span> it can't be undo</p> */}
                    <p className='my-10'>To drop the name of <span className='text-red-600'>{doctorInfo.name}</span>, type the name to confirm.</p>

                    <input
                        type="text"
                        placeholder={`Write ${doctorInfo.name}`}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            setIsButtonDisabled(e.target.value !== doctorInfo.name);
                        }}
                        className="border border-gray-300 px-5 rounded-md text-sm w-3/4 py-2"
                    />
                    <div className='flex justify-end gap-3 mt-14'>
                        <label
                            disabled={isButtonDisabled}
                            onClick={() => handleDoctorDelete(doctorInfo)}
                            htmlFor="confirmation-modal"
                            className={`btn btn-primary  ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >DELETE</label>

                        <label htmlFor="confirmation-modal" className="btn">Cancel</label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;