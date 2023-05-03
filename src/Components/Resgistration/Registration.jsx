import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Registration = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate();

    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleRegister = (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo,email, password);
        if(password.length < 6){
            setError("password must be 6 character long")
            return
        }
        setSuccess("")
        setError("")

        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            setSuccess("User created")
            navigate("/")
        })
        .catch(error =>{
            setError(error.message)
            console.log(error);
        })

     
    }
    return (
        <div className='mt-10'>
            <h1 className='text-center text-[#a82d49] text-[18px] font-[700]'>Please Register</h1>
            <form onSubmit={handleRegister}>
                <div className="card-body w-96 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required placeholder="name" name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" required placeholder="email" name='email' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required placeholder="photo URL" name='photo' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" required placeholder="password" name='password' className="input input-bordered" />

                        <h6 className='mt-3 text-[#a82d49]'>All Ready Have An Account? Please <Link to={'/login'} className='text-primary'>Login</Link></h6>
                        <p className='text-red-600'>{error}</p>
                        <p className='text-success'>{success}</p>
                    </div>
                    <div className="form-control ">
                        <button className="bg-[#a82d49] my-6  text-[white] btn-outline text-[18px] py-[11px] px-[28px] font-[600]">Register</button>
                    </div>
                    
                </div>
            </form>
        </div>
    );
};

export default Registration;