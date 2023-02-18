import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, googleLogIn } = useContext(AuthContext);
    const [signUpError, setSingUpError] = useState('');
    const navigate = useNavigate();
    

    const handleSignUp = data => {
        console.log(data);
        setSingUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('Sign Up Successfully')
                navigate('/');
            })
            .catch(error => setSingUpError(error));
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogIn = () => {
        setSingUpError('')
        googleLogIn(googleProvider)
            .then(result => {
                console.log(result);
                toast('Sign Up Successfully');
                navigate('/');
            })
            .catch(e => setSingUpError(e.message));
    }

    return (
            <div className='flex justify-center items-center h-[900px] '>
                <div className='shadow-md w-[385px] px-7 rounded-2xl'>
                    <h2 className='text-center text-xl mt-6'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignUp)}>
                        <div className="form-control w-full mt-7 mb-2.5">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: "Enter your name" })} type="name" className="input input-bordered w-full" />
                            {errors.name && <p role="alert" className='text-red-700 '>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full mb-2.5">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: "Email Address is required" })} type="email" className="input input-bordered w-full" />
                            {errors.email && <p role="alert" className='text-red-700 '>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {

                                required: "Password is required",
                                minLength: { value: 6, message: "Passwords must be at least 6 characters" }

                            })} type="password" className="input input-bordered w-full" />
                            {errors.password && <p role="alert" className='text-red-700 '>{errors.password?.message}</p>}
                        </div>

                        <input className='btn btn-primary w-full mt-4' value="Sign Up" type="submit" />
                        {signUpError && <p className='text-red-700 '>{signUpError}</p>}

                    </form>
                    <p className='text-xs mt-2.5 mb-4'>Already Have a Account? <Link className='text-primary' to={'/login'}>Please Login</Link> </p>
                    <div className="divider">OR</div>
                    <button onClick={handleGoogleLogIn} className="btn btn-outline btn-primary w-full mb-6">CONTINUE WITH GOOGLE</button>
                </div>
            </div>
    );
};

export default SignUp;