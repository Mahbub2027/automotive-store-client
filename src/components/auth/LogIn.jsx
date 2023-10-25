import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const LogIn = () => {

    const {loginUser, googleLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    // const [loginEmailError, setLoginEmailError] = useState();
    const [loginPassError, setLoginPassError] = useState();

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const userDetails = {email, password};
        console.log(userDetails);

        // loginUser('');

        // setLoginEmailError('');
        // setLoginPassError('');

        // if(!email){
        //     setLoginEmailError("Email doesnot match")
        //     return;
        // }
        // else if(!password){
        //     setLoginPassError("Password doesnot match")
        //     return;
        // }

        loginUser(email, password)
        .then(res => {
            console.log(res.user)
            event.target.reset();
            alert("Login successfully.")
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.log(error);
            setLoginPassError("Please provide valid email & password")
        })
    }

    const handleGoogleLogin = () =>{
        // const provider = new GoogleAuthProvider();
        // signInWithPopup(auth, provider)
    
        googleLogin()
        .then(res => {
            console.log(res.user)
            alert("User login successfully")
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
                    
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-xl font-bold">Please Login your account</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                            {/* {
                                loginEmailError && <p className="text-red-500">{loginEmailError}</p>
                            } */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                            {
                                loginPassError && <p className="text-red-500">{loginPassError}</p>
                            }

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button> <br />
                            <button onClick={handleGoogleLogin} className="btn btn-primary">Log in with Google</button>

                        </div>
                        <p>New here? Please <Link className="text-blue-500 underline font-semibold" to="/signup">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;