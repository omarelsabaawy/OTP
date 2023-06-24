import React from 'react'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase.config'
import { useNavigate } from 'react-router-dom';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { CgSpinner } from 'react-icons/cg';

function Home() {
    const [user, loading, error] = useAuthState(auth);
    console.log(error);

    const navigate = useNavigate();

    return (
        <div className="bg-emerald-500 flex items-center justify-center h-screen">
            {loading ? (
                <div><CgSpinner size={50} className="mt-1 animate-spin" /></div>
            ) : (
                <>
                    {user ?
                        (
                            <div className='w-80 flex flex-col gap-4 rounded-lg p-4'>
                                <h2 className="text-center text-white font-medium text-2xl">
                                    👍Login Success
                                </h2>
                            </div>
                        ) : (
                            <>
                                <div className='w-80 flex flex-col gap-4 rounded-lg p-4'>
                                    <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                                        <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
                                            Welcome to <br /> Hamada's OTP
                                        </h1>
                                        <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full mb-6">
                                            <BsFillShieldLockFill size={30} />
                                        </div>
                                        <button
                                            className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                            onClick={(e) => navigate('/phoneVerification')}
                                        >
                                            <span className='flex'>Sign in With Phone <AiOutlinePhone size={25} style={{ marginLeft: '2px' }} /> </span>
                                        </button>
                                        <button
                                            className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                            onClick={(e) => navigate('/emailVerification')}
                                        >
                                            <span className='flex'>Sign in With Email <AiOutlineMail size={25} style={{ marginLeft: '5px' }} /> </span>
                                        </button>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </>
            )}
        </div>
    )
}

export default Home