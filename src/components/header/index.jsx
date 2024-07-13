import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='flex flex-row gap-x-2 w-full z-20 top-0 left-0 h-9 border-b place-content-center items-center bg-gray-200 text-3xl p-10 hover:text-slate-500 '>
            {
                userLoggedIn
                    ?
                    <>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline text-3xl'>Logout</button>
                    </>
                    :
                    <>
                        Welcome
                    </>
            }

        </nav>
    )
}

export default Header