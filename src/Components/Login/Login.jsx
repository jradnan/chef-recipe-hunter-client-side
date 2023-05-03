import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const {signIn} = useContext(AuthContext);

    const handleLogin = (event) =>{
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError("")

        signIn(email, password)
        .then( result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setSuccess("Successfully Logged In")
        })
        .catch(error =>{
            console.log(error.message);
            setError(error.message)
        })
    }
    return (
        <div className='mt-10'>
            <h1 className='text-center text-[#a82d49] text-[18px] font-[700]'>Login Your Account </h1>
            <form onSubmit={handleLogin}>
                <div className="card-body w-96 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" required placeholder="email" name='email' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" required placeholder="password" name='password' className="input input-bordered" />
                        
                          <h6 className='mt-3 text-[#a82d49]'>Don,t Have An Account? Please <Link to={'/register'} className='text-primary'>Register</Link></h6> 
                          <p className='text-[red]'>{error}</p>
                          <p className='text-success'>{success}</p>
                       
                    </div>
                    <div className="form-control ">
                        <button className="bg-[#a82d49] my-6  text-[white] btn-outline text-[18px] py-[11px] px-[28px] font-[600]">Login</button>
                    </div>
                    <h1 className='text-center'>Or</h1>
                    <button className="btn btn-outline bg-[#a82d49] text-[white]">Google</button>
                    <button className="btn btn-outline bg-[#a82d49] text-[white]">Github</button>
                </div>
            </form>
        </div>
    );
};

export default Login;