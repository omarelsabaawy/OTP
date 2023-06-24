import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase.config'
import { useNavigate, useLocation } from 'react-router-dom';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { CgSpinner } from 'react-icons/cg';
import { toast, Toaster } from "react-hot-toast";
import Cookies from 'js-cookie';


import './App.css'
import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';


function EmailComp() {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const [initialLoading, setInitialLoading] = useState(false)
    const [initialError, setInitialError] = useState('')

    const navigate = useNavigate();
    const location = useLocation();
    const { search } = location;

    useEffect(() => {
        if (user) {
            // user is already logged in
            navigate('/')
        } else {
            // user is not found !logged in but valid link
            if (isSignInWithEmailLink(auth, window.location.href)) {
                // user pressed on the link using different device
                let email = Cookies.get('email');
                if (!email) {
                    email = window.prompt('please provide your email.')
                }
                setInitialLoading(true)
                signInWithEmailLink(auth, Cookies.get('email'), window.location.href)
                    .then((result) => {
                        console.log(result);
                        console.log(result.user)
                        Cookies.remove('email')
                        setInitialLoading(false);
                        setInitialError('');
                        navigate('/')
                    }).catch(err => {
                        setInitialLoading(false);
                        setInitialError(err.message)
                    })
            } else {
                console.log('enter your email.')
            }
        }
    }, [user, search, navigate])

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true)
        sendSignInLinkToEmail(auth, email, {
            url: 'http://localhost:3000/emailVerification',
            handleCodeInApp: true,
        }).then(() => {
            Cookies.set('email', email);
            setLoading(false);
            setError('');
            toast.success("A link was sent successfully!");
        }).catch(error => {
            setLoading(false);
            setError(error.message)
            navigate('/emailVerification')
        })
    }

    return (
        <section className="bg-emerald-500 flex items-center justify-center h-screen">
            {initialLoading ? (
                <div><CgSpinner size={50} className="mt-1 animate-spin" /></div>
            ) : (
                <>
                    {(initialError !== '') ? (
                        <>{initialError}</>
                    ) : (
                        <>
                            {user ? (<div>Please Wait...</div>) : (
                                <div className='w-80 flex flex-col gap-4 rounded-lg p-4'>
                                    <Toaster toastOptions={{ duration: 12000 }} />
                                    <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                                        <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
                                            Welcome to <br /> Hamada's OTP
                                        </h1>
                                        <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                                            <BsFillShieldLockFill size={30} />
                                        </div>
                                        <form onSubmit={handleLogin}>
                                            <label
                                                htmlFor="otp"
                                                className="font-bold text-xl text-white text-center"
                                            >
                                                Enter your Email address
                                            </label>
                                            <input
                                                type="email"
                                                value={email || ''}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder='Enter your email'
                                                required
                                            />
                                            <button
                                                className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                            >
                                                {loading && (
                                                    <CgSpinner size={20} className="mt-1 animate-spin" />
                                                )}
                                                <span>Verify OTP</span>
                                            </button>
                                        </form>
                                        {error !== '' && <div>{error}</div>}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </>
            )}
        </section>
    )
}

export default EmailComp