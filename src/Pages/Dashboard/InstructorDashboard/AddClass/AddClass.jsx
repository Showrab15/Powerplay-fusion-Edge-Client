import React from 'react';
import { useForm } from 'react-hook-form';
import useAuthContext from '../../../../hooks/useAuthContext';

const AddClass = () => {

    const {user} = useAuthContext();
    console.log(user)
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
const instructorName = user.displayName;
const InstructorEmail = user.email;
console.log(instructorName,InstructorEmail);


    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex gap-8 my-4">
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor  Name</span>
                        </label>
                        <input type="text" value={user?.displayName} placeholder="Instructor Name"
                            {...register("instructorName", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor  Email</span>
                        </label>
                        <input type="email" value={user?.email} placeholder="Instructor Email"
                            {...register("instructorEmail", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>


                <div className="md:flex  gap-8 my-4">

                    <div className="form-control mt-4 w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name</span>
                        </label>
                        <input type="text" {...register("className", { required: true })} placeholder="Class Name" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full my-4">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" {...register("classImage", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                </div>
                <div className="md:flex gap-8 my-4">
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Available  Seats</span>
                        </label>
                        <input type="text" placeholder="Available  Seats"
                            {...register("availableSeats", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Class  Price</span>
                        </label>
                        <input type="email" placeholder="Class  Price"
                            {...register("classPrice", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="w-full mx-auto flex justify-center">
                    <input className="btn bg-red-600 hover:bg-black border-0 text-white w-full" type="submit" value="Add Class" />
                </div>
            </form>
        </div>
    );
};

export default AddClass;