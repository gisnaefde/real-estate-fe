import imageLogin from '../assets/images/loginimage2.jpg'
import Button from '../components/buttons/button'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleNavigation = (path) => {
        navigate(path)
    }

    return (
        <div className='bg-green p-4 md:p-9 h-screen'>
            <div className='px-7 md:mx-60 my-14 border-2 border-white p-8 rounded-3xl'>
                <div className='grid grid-cols-1 md:grid-cols-2 relative '>
                    <div className='hidden md:block'>
                        <img src={imageLogin} className='w-full rounded-l-2xl'></img>
                    </div>
                    <div className='bg-white text-green py-14 rounded-xl md:rounded-r-2xl'>
                        <div className='text-center'>
                            <p className='text-3xl'>Hello Guest</p>
                            <p className=''>Please Login to Continue</p>
                        </div>
                        <div className='px-7 md:px-20'>
                            <form className=' mt-6 flex flex-col space-y-5'>
                                <input type='text' placeholder='email' className='px-4 py-2 rounded-lg border-gray400 text-gray400 border border-gray-300 focus:outline-none focus:border-gray400 focus:border-2'></input>
                                <input type='password' placeholder='password' className='px-4 py-2 rounded-lg border-gray400 text-gray400 border border-gray-300 focus:outline-none focus:border-gray400 focus:border-2'></input>
                                <Button className={"bg-gray400 w-full h-11 rounded-lg hover:bg-gray300 text-white"}>Login</Button>
                            </form>
                        </div>
                    </div>
                    <div className=' absolute z-10 bottom-2 md:bottom-5 w-full flex justify-center'>
                        <div className='bg-gray400 bg-opacity-50 text-white rounded-lg px-4 py-2 flex'>
                        <p>Don't have an account? </p>
                        <Button onClick={()=>{handleNavigation('/signup')}} className={"text-gray400"}>SignUp</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
