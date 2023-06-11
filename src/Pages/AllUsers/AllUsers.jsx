import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allUsers');
            const data = await res.json();
            return data
        }
    })
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
                            <th>PAYMENT</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            users.map((user, i) => <tr
                                key={i}>
                                <th>{i + 1}</th>
                                <th>{user.name}</th>
                                <td>{user.email}</td>
                                <td> <button className='btn btn-primary'>PAY</button> </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;