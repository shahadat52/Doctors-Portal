import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allUsers');
            const data = await res.json();
            return data
        }
    });

    const handleAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
            },
            body: JSON.stringify({ status: "Approved" }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin successful')
                    refetch()
                }
            })
    }
    return (
        <div>
            <p className='text-2xl font-bold'>All Users</p>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr className='text-center'>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            users.map((user, i) => <tr
                                key={i}>
                                <th>{i + 1}</th>
                                <th>{user.name}</th>
                                <td>{user.email}</td>
                                {
                                    user.Role ? <td><button className='btn btn-primary'>Admin</button></td> : <td onClick={() => handleAdmin(user._id)}><button className='btn btn-primary'>Make Admin</button></td>
                                }
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;