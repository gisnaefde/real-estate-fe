import { MapPinIcon, HomeModernIcon, BuildingOffice2Icon, BuildingLibraryIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'
import property1 from '../../assets/images/property-1.jpg'

const PropertyListed = () => {
    return (
        <div className='bg-white'>
            <div className="mx-8 md:mx-24 lg:mx-32  flex-col justify-center items-center py-8 md:py-16">
                <div>
                    <p className="text-2xl md:text-4xl text-center font-bold text-gray300 ">Featured Property Types</p>
                    <p className="md:mx-32 text-base md:text-base mt-5 text-center font-semibold text-gray200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque lectus vitae nisl ullamcorper, nec sollicitudin odio egestas. Nulla semper odio tortor, a ultrices magna porta a.</p>
                </div>

                <div className='mt-8 md:mt-14 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-3 '>
                    <div className='flex justify-center'>
                        <div className=' bg-white shadow-lg w-80 rounded-lg'>
                            <div>
                                <img src={property1} className='w-80'></img>
                            </div>
                            <div className='px-6 mt-8'>
                                <div className='flex justify-center'>
                                    <button className='bg-orange100 text-orange text-sm px-3 py-1 font-semibold rounded-md'>For Rent</button>
                                </div>
                                <p className='font-bold mt-4'>Red Carpet Real Estate</p>
                                <div className='flex items-center text-gray'>
                                    <MapPinIcon className='w-5 h-5  mr-3'></MapPinIcon>
                                    <p>210 Zirak Road, Canada</p>
                                </div>
                            </div>
                            <hr className='text-gray mt-4'></hr>
                            <div className='my-4 flex justify-between items-center px-3'>
                                <div className='flex items-center'>
                                    <button className='bg-green p-3 text-white font-bold rounded-full'>$ 30,488</button>
                                    <p>/ sqft</p>
                                </div>
                                <p>Apartment</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className=' bg-white shadow-lg w-80 rounded-lg'>
                            <div>
                                <img src={property1} className='w-80'></img>
                            </div>
                            <div className='px-6 mt-8'>
                                <div className='flex justify-center'>
                                    <button className='bg-orange100 text-orange text-sm px-3 py-1 font-semibold rounded-md'>For Rent</button>
                                </div>
                                <p className='font-bold mt-4'>Red Carpet Real Estate</p>
                                <div className='flex items-center text-gray'>
                                    <MapPinIcon className='w-5 h-5  mr-3'></MapPinIcon>
                                    <p>210 Zirak Road, Canada</p>
                                </div>
                            </div>
                            <hr className='text-gray mt-4'></hr>
                            <div className='my-4 flex justify-between items-center px-3'>
                                <div className='flex items-center'>
                                    <button className='bg-green p-3 text-white font-bold rounded-full'>$ 30,488</button>
                                    <p>/ sqft</p>
                                </div>
                                <p>Apartment</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className=' bg-white shadow-lg w-80 rounded-lg'>
                            <div>
                                <img src={property1} className='w-80'></img>
                            </div>
                            <div className='px-6 mt-8'>
                                <div className='flex justify-center'>
                                    <button className='bg-orange100 text-orange text-sm px-3 py-1 font-semibold rounded-md'>For Rent</button>
                                </div>
                                <p className='font-bold mt-4'>Red Carpet Real Estate</p>
                                <div className='flex items-center text-gray'>
                                    <MapPinIcon className='w-5 h-5  mr-3'></MapPinIcon>
                                    <p>210 Zirak Road, Canada</p>
                                </div>
                            </div>
                            <hr className='text-gray mt-4'></hr>
                            <div className='my-4 flex justify-between items-center px-3'>
                                <div className='flex items-center'>
                                    <button className='bg-green p-3 text-white font-bold rounded-full'>$ 30,488</button>
                                    <p>/ sqft</p>
                                </div>
                                <p>Apartment</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className=' bg-white shadow-lg w-80 rounded-lg'>
                            <div>
                                <img src={property1} className='w-80'></img>
                            </div>
                            <div className='px-6 mt-8'>
                                <div className='flex justify-center'>
                                    <button className='bg-orange100 text-orange text-sm px-3 py-1 font-semibold rounded-md'>For Rent</button>
                                </div>
                                <p className='font-bold mt-4'>Red Carpet Real Estate</p>
                                <div className='flex items-center text-gray'>
                                    <MapPinIcon className='w-5 h-5  mr-3'></MapPinIcon>
                                    <p>210 Zirak Road, Canada</p>
                                </div>
                            </div>
                            <hr className='text-gray mt-4'></hr>
                            <div className='my-4 flex justify-between items-center px-3'>
                                <div className='flex items-center'>
                                    <button className='bg-green p-3 text-white font-bold rounded-full'>$ 30,488</button>
                                    <p>/ sqft</p>
                                </div>
                                <p>Apartment</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default PropertyListed
