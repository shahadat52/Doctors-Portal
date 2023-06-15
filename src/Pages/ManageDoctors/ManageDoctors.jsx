import { useQuery } from '@tanstack/react-query';
import { async } from 'q';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

const ManageDoctors = () => {
    const [doctorInfo, setDoctorInfo] = useState([])
    const { user } = useContext(AuthContext)
    const { data: doctors = [], refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/doctors?email=${user.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`,
                }
            });
            const data = await res.json()
            return data
        }
    })
    const handleDoctorDelete = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                refetch()

            })
    }

    return (
        <div>
            <p className='text-2xl font-bold mb-10'>Manage Doctors: {doctors.length}</p>
            {
                doctors.length > 0 ? <div className="overflow-x-auto">
                    <table className="table w-full">

                        <thead>
                            <tr className='text-center'>
                                <th>No</th>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Specialty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                doctors.map((doctor, i) => <tr
                                    key={i}>
                                    <th>{i + 1}</th>
                                    <th><div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={doctor.image} alt='Doctor_image' />
                                        </div>
                                    </div></th>
                                    <th>{doctor.name}</th>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.specialty}</td>
                                    {/* <td> <button className="btn" onClick={() => window.my_modal_5.showModal()}>open modal</button></td> */}
                                    {/* <td onClick={() => handleDoctorDelete(doctor._id)}> <button className='btn bg-[#E11244]'>Delete</button> </td> */}
                                    <td>
                                        <label
                                            onClick={() => setDoctorInfo(doctor)}
                                            htmlFor="confirmation-modal"
                                            className="btn bg-gradient-to-r from-red-700 to-pink-600 text-white"
                                        >DELETE
                                        </label>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                    <ConfirmModal
                        handleDoctorDelete={handleDoctorDelete}
                        doctorInfo={doctorInfo}
                    >
                    </ConfirmModal>
                </div> : 'You have no doctor'
            }
        </div>
    );
};

export default ManageDoctors;