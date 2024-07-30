
import NewOrleans from '../../assets/images/new-orleans.jpg'
import California from '../../assets/images/california.jpg'
import Liverpool from '../../assets/images/liverpool.jpg'
import Montreal from '../../assets/images/montreal.jpg'
import Newyork from '../../assets/images/newyork.jpg'
import Jerrsy from '../../assets/images/jerrsy.jpg'
const ExportByLocation = () => {
    return(
        <div className="bg-white">
        <div className='mx-8 md:mx-24 lg:mx-32  py-8 md:py-16'>

            <div className="text-center ">
                <p className="text-gray400 text-4xl font-bold">Explore By Location</p>
                <p className="text-gray300 text-xl mt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-5 mt-10'>
                <div className='relative w-96'>
                    <img src={NewOrleans} className='rounded-lg w-full h-56'></img>
                    <div className='absolute inset-0 m-5'>
                        <div className='bg-grayopacity w-full h-full rounded-lg flex justify-center items-center'>
                            <div className='text-gray100'>
                                <p className='text-xl font-bold text-center'>New Orleans, Louisiana</p>
                                <div className='flex space-x-5'>
                                    <p>12 Villas</p>
                                    <p>07 Offices</p>
                                    <p>10 Apartments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative w-96'>
                    <img src={California} className='rounded-lg w-full h-56'></img>
                    <div className='absolute inset-0 m-5'>
                        <div className='bg-grayopacity w-full h-full rounded-lg flex justify-center items-center'>
                            <div className='text-gray100'>
                                <p className='text-xl font-bold text-center'>California</p>
                                <div className='flex space-x-5'>
                                    <p>12 Villas</p>
                                    <p>07 Offices</p>
                                    <p>10 Apartments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative w-96'>
                    <img src={Liverpool} className='rounded-lg w-full h-56'></img>
                    <div className='absolute inset-0 m-5'>
                        <div className='bg-grayopacity w-full h-full rounded-lg flex justify-center items-center'>
                            <div className='text-gray100'>
                                <p className='text-xl font-bold text-center'>Liverpool</p>
                                <div className='flex space-x-5'>
                                    <p>12 Villas</p>
                                    <p>07 Offices</p>
                                    <p>10 Apartments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative w-96'>
                    <img src={Montreal} className='rounded-lg w-full h-56'></img>
                    <div className='absolute inset-0 m-5'>
                        <div className='bg-grayopacity w-full h-full rounded-lg flex justify-center items-center'>
                            <div className='text-gray100'>
                                <p className='text-xl font-bold text-center'>Montreal</p>
                                <div className='flex space-x-5'>
                                    <p>12 Villas</p>
                                    <p>07 Offices</p>
                                    <p>10 Apartments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative w-96'>
                    <img src={Newyork} className='rounded-lg w-full h-56'></img>
                    <div className='absolute inset-0 m-5'>
                        <div className='bg-grayopacity w-full h-full rounded-lg flex justify-center items-center'>
                            <div className='text-gray100'>
                                <p className='text-xl font-bold text-center'>Newyork</p>
                                <div className='flex space-x-5'>
                                    <p>12 Villas</p>
                                    <p>07 Offices</p>
                                    <p>10 Apartments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative w-96'>
                    <img src={Jerrsy} className='rounded-lg w-full h-56'></img>
                    <div className='absolute inset-0 m-5'>
                        <div className='bg-grayopacity w-full h-full rounded-lg flex justify-center items-center'>
                            <div className='text-gray100'>
                                <p className='text-xl font-bold text-center'>Jerrsy</p>
                                <div className='flex space-x-5'>
                                    <p>12 Villas</p>
                                    <p>07 Offices</p>
                                    <p>10 Apartments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ExportByLocation