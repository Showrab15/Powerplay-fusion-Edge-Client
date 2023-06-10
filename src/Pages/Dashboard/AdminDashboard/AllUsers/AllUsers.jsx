import React, { useEffect, useState } from 'react';
import { FaUserShield, FaChalkboardTeacher } from 'react-icons/fa';
import SectionTitle from '../../../../components/SectionTitle';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {

    // const [users, setUsers] = useState([]);
    // const [axiosSecure] = useAxiosSecure();


    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })


    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => {
    //              console.log(data)
    //             setUsers(data)
    //         })
    // }, [axiosSecure])


    // const handleMakeAdmin = user => {
    //     // console.log('hello')
    //     fetch(`http://localhost:5000/users/admin/${user._id}`, {
    //         method: 'PATCH'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.modifiedCount) {

    //                 Swal.fire({
    //                     position: 'center',
    //                     icon: 'success',
    //                     title: `${user.name} is an Admin Now!`,
    //                     showConfirmButton: false,
    //                     timer: 2000
    //                 })
    //                 const remaining = users.filter(user => user._id !== user._id);
    //                 setUsers(remaining)
    //             }
    //         })
    // }




    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }





     const handleMakeInstructor = user => {
         fetch(`http://localhost:5000/users/instructor/${user._id}`, {
               method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
     }





    return (
        <div className="w-full">
            <SectionTitle heading={"All Users Zone"}></SectionTitle>
            <div className="overflow-x-auto w-full">
                <table className="table table-xs md:table-lg">
                    <thead>
                        <tr className="">
                            <th>#</th>
                            <th>Users Name</th>
                            <th>Users Email</th>
                            <th>Make Admin</th>
                            <th>Make  Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'admin' ? 'admin' :
                                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-red-600  text-white"><FaUserShield></FaUserShield></button>
                                    }</td>
                                    <td>{user.role === 'instructor' ? 'instructor' :
                                        <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-red-600  text-white"><FaChalkboardTeacher></FaChalkboardTeacher></button>
                                    }</td>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;