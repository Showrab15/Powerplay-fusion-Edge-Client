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





    const handleMakeAdmin = user =>{
        fetch(`https://assignment12-server-ten.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }





     const handleMakeInstructor = user => {
         fetch(`https://assignment12-server-ten.vercel.app/users/instructor/${user._id}`, {
               method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
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
                            <th>Users Role</th>
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
                                    <td> {user.role ? user.role : 'Student'}</td>
                                    <td>
                                        <button disabled={user.role ==='instructor' || user.role === 'admin'} onClick={() => handleMakeAdmin(user)} className="btn btn-ghost  bg-rose-600  text-white"><FaUserShield></FaUserShield></button>
                                    </td>
                                    <td>
                                        <button disabled={user.role ==='admin' || user.role ==='instructor'} onClick={() => handleMakeInstructor(user)} className="btn btn-ghost  bg-rose-600  text-white"><FaChalkboardTeacher></FaChalkboardTeacher></button>
                                    </td>
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