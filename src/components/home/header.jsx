import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo3 from '../../assets/images/logo-3.png'
import logo4 from '../../assets/images/logo-4.png'
import { useState } from 'react'
import Button from '../buttons/button'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setOpen(!open);
    };

    const handleClick = () => {
        console.log("button login clicked!")
    }

    const handleNavigation = (path) => {
        navigate(path)
    }

    return (
        <>
            {/* navbar desktop */}
            <div className='hidden md:block absolute z-50'>
                <div className='fixed top-0 left-0 right-0 shadow-xl bg-white'>
                    <div className="mx-24 my-4 grid grid-cols-12 gap-4">
                        <img src={logo3} className='h-10 col-span-2' onClick={()=>{handleNavigation('/')}}></img>
                        <div className=' col-span-8 flex justify-center items-center space-x-16 font-medium'>
                            <a className='cursor-pointer hover:text-gray hover:underline'>Home</a>
                            <a className='cursor-pointer  hover:text-gray hover:underline'>About</a>
                            {/* <a className='cursor-pointer  hover:text-gray hover:underline'>Services</a> */}
                            {/* <a className='cursor-pointer  hover:text-gray hover:underline'>Pricing</a> */}
                            <a className='cursor-pointer  hover:text-gray hover:underline'>Contact</a>
                            <a className='cursor-pointer  hover:text-gray hover:underline'>Buy</a>
                            <a className='cursor-pointer  hover:text-gray hover:underline'>Rent</a>
                            <a className='cursor-pointer  hover:text-gray hover:underline'>Sold</a>
                        </div>
                        <div className='col-span-2 flex justify-end font-bold'>
                            <button className='bg-green px-7 py-3 rounded-lg flex items-center' style={{ color: "white" }}>
                                {/* <ArrowRightEndOnRectangleIcon className='w-6 h-6 mr-2 text-white' /> */}
                                <Button onClick={handleClick} style={{ color: 'white'}} className={"text-sm text-green"}>Login</Button>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* navbar mobile */}
            <div className='md:hidden absolute z-50'>
                {!open && (
                    <div className='fixed top-0 left-0 right-0'>
                        <div className='flex justify-between items-center bg-white p-4'>
                            <img src={logo3} className='h-6' alt='Logo' />
                            <button onClick={toggleMenu} className='text-gray-800 focus:outline-none'>
                                <Bars3Icon className='w-8 h-8' />
                            </button>
                        </div>
                    </div>
                )

                }
                {open && (
                    <div className='h-full w-screen fixed top-0 bg-green  '>
                        <div className='flex justify-between items-center p-4'>
                            <img src={logo4} className='h-6' alt='Logo' />
                            <button onClick={toggleMenu} className='text-gray-800 focus:outline-none z-30'>
                                <XMarkIcon className='w-8 h-8' />
                            </button>
                        </div>
                        <div className='flex flex-col items-center mt-6 font-medium space-y-4 text-white'>
                            <a className='cursor-pointer hover:text-gray hover:underline'>Home</a>
                            <a className='cursor-pointer hover:text-gray hover:underline'>About</a>
                            <a className='cursor-pointer hover:text-gray hover:underline'>Services</a>
                            <a className='cursor-pointer hover:text-gray hover:underline'>Pricing</a>
                            <a className='cursor-pointer hover:text-gray hover:underline'>Contact</a>
                        </div>
                        <div className='flex justify-center mt-6 font-bold'>
                            <button className='bg-white px-7 py-3 rounded-lg flex items-center'>
                                {/* <ArrowRightOnRectangleIcon className='w-6 h-6 mr-2 text-green' /> */}
                                <Button onClick={handleClick} style={{}} className={"text-lg text-green"}>Login</Button>
                                {/* <p className='text-lg text-green'>Login</p> */}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Header
