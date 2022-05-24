import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/service/:serviceId');

    }

    return (
        <div style={{ minHeight: '100vh' }} className="container">
            <div className="row">
                <div className="col-sm-12 col-md-9 col-lg-6 mx-auto">
                    <div className='register-form'>
                        <h2 className='text-center mt-3'>Please Register</h2>
                        <SocialLogin></SocialLogin>
                        <form onSubmit={handleRegister}>
                            <input type="text" name='name' id='' placeholder='Your Name' />
                            <input type="email" name='email' id='' placeholder=' Email Address' required />
                            <input type="password" name='password' id='' placeholder='Inter Password' required />
                            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                            <label className={agree ? '' : 'text-danger'} htmlFor="terms"><span className='ms-2'>Accept Mejbah & Mind's terms and conditions</span></label>
                            <input disabled={!agree} className='rounded-pill border border-dark w-50 register-button fw-bold mt-4' type="submit" value="Register Now" />
                        </form>
                        <p className='text-center'>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none fw-bold' onClick={navigateLogin}>Please Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;