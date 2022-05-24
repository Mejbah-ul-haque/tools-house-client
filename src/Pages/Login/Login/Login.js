import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>

    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your Email address!')
        }
    }

    return (
        <div style={{ minHeight: '100vh' }} className='container'>
            <div className="row">
                <div className="col-sm-12 col-md-9 col-lg-6 mx-auto">
                    <h2 className='text-dark text-center mt-3'>Please Login</h2>
                    <SocialLogin></SocialLogin>
                    <ToastContainer />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control style={{ borderRadius: '0' }} ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control style={{ borderRadius: '0' }} ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button style={{ backgroundColor: 'gray', color: 'black' }} className='rounded-pill w-50 d-block mx-auto my-4 fw-bold fs-5' variant="dark" type="submit">
                            Login Now
                        </Button>
                    </Form>
                    {errorElement}
                    <p className='text-center '>New to Mejbah & Mind? <Link to='/register' className='text-primary pe-auto text-decoration-none fw-bold' onClick={navigateRegister}>Please Register</Link></p>
                    <p className='text-center '>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' type='button' onClick={resetPassword}>Reset Password</button></p>
                </div>
            </div>
        </div>
    );
};

export default Login;