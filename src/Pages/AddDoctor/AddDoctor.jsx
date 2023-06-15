import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm();

    const { data: specialties = [], } = useQuery({
        queryKey: ['doctorSpecialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/doctorSpecialty')
            const data = res.json();
            return data
        }

    })


    const handleAddDoctor = (data) => {

        const image = data.file[0];
        const formData = new FormData();
        formData.append('image', image)
        const apiKey = process.env.REACT_APP_imgbb_key;

        fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    toast.success("Image upload successful")
                    const doctorInfo = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    };
                    console.log(doctorInfo);
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctorInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            toast.success("Doctor added successful")
                            reset();
                            navigate('/dashboard/manageDoctors')
                        })
                }
            })
    }

    return (
        <div className='flex justify-start '>
            <div className="w-full max-w-[540px] bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 rounded-lg shadow-md p-8">
                <p className="text-3xl font-bold mb-10">Add A New Doctor</p>
                <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500" onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold uppercase mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            {...register('name', { required: true })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold uppercase mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-semibold uppercase  mb-2" htmlFor="email">
                            Specialty
                        </label>
                        <select name='specialty' id="specialty"
                            type="text"
                            {...register('specialty')} className="py-4 px-2 rounded  w-full  ">
                            {
                                specialties.map((specialty, i) => <option key={i} className='py-4'>{specialty.name}</option>)
                            }

                        </select>
                    </div>

                    <div className="mb-4 flex justify-center">

                        <input
                            className="hidden text-center"
                            id="file"
                            type="file"
                            {...register('file')}
                        />
                        <label
                            htmlFor="file"
                            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                        >
                            Upload File
                        </label>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;