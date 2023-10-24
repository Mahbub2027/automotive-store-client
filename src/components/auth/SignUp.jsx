import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState();
    const navigate = useNavigate();

    const handleSignup = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const userDetails = {name,email, password};
        console.log(userDetails);

        setRegisterError('');

        if(password.length < 6){
            setRegisterError("Password should be at least 6 characters")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError('You should have at least one UPPERCASE letter')
            return;
        }
        else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\|-]/.test(password)){
        // else if(!/[!@#$%^&*]/.test(password)){
            setRegisterError('You should have at least one special caracter.')
            return;
        }

//123456A@ 
        createUser(email, password)
        .then(res => {
            console.log(res.user);
            event.target.reset();
            navigate('/');
        })
        .catch(error =>{
            console.log(error)
            setRegisterError(error.message);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                    <h1 className="text-xl font-bold">Please Register your account</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                            {
                                registerError && <p className="text-red-500">{registerError}</p>
                            }

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account? Please <Link className="text-blue-500 underline font-semibold" to="/login">Login</Link></p>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default SignUp;