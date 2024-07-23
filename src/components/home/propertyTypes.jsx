import { HomeIcon, HomeModernIcon, BuildingOffice2Icon, BuildingLibraryIcon, BuildingOfficeIcon} from '@heroicons/react/24/outline'

const PropertyTypes = () => {
    return (
        <div className='bg-gray100'>
            <div className="mx-32  flex-col justify-center items-center pt-16">
                <div>
                    <p className="text-4xl text-center font-bold text-gray300 ">Featured Property Types</p>
                    <p className="text-xl text-center font-semibold text-gray200">Find All Type of Property.</p>
                </div>

                <div className='mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-3 gap-x-3'>
                    <div className="flex flex-col justify-center items-center bg-white w-52 p-10 shadow-lg rounded-md">
                        <div className='rounded-full w-16 h-16 flex justify-center items-center mb-4' style={{ backgroundColor: '#fce8e8' }}>
                            <HomeIcon className='w-10 h-10' style={{ color: '#ff0f0f' }}></HomeIcon>
                        </div>
                        <p className="text-gray300 font-bold ">Family House</p>
                        <p className='text-gray200'>122 Property</p>
                    </div>

                    <div className="flex flex-col justify-center items-center bg-white w-52 p-10 shadow-lg rounded-md">
                        <div className='rounded-full w-16 h-16 flex justify-center items-center mb-4' style={{ backgroundColor: '#eaf7ec' }}>
                            <HomeModernIcon className='w-10 h-10' style={{ color: '#1cd36d' }}></HomeModernIcon>
                        </div>
                        <p className="text-gray300 font-bold ">House & Villa</p>
                        <p className='text-gray200'>122 Property</p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white w-52 p-10 shadow-lg rounded-md">
                        <div className='rounded-full w-16 h-16 flex justify-center items-center mb-4' style={{ backgroundColor: '#fff4e6' }}>
                            <BuildingOffice2Icon className='w-10 h-10' style={{ color: '#dbba15' }}></BuildingOffice2Icon>
                        </div>
                        <p className="text-gray300 font-bold ">Apartement</p>
                        <p className='text-gray200'>122 Property</p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white w-52 p-10 shadow-lg rounded-md">
                        <div className='rounded-full w-16 h-16 flex justify-center items-center mb-4' style={{ backgroundColor: '#f6edfb' }}>
                            <BuildingLibraryIcon className='w-10 h-10' style={{ color: '#ac51d9' }}></BuildingLibraryIcon>
                        </div>
                        <p className="text-gray300 font-bold ">Office & Studio</p>
                        <p className='text-gray200'>122 Property</p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white w-52 p-10 shadow-lg rounded-md">
                        <div className='rounded-full w-16 h-16 flex justify-center items-center mb-4' style={{ backgroundColor: '#e8f5fc' }}>
                            <BuildingOfficeIcon className='w-10 h-10' style={{ color: '#18a3ff' }}></BuildingOfficeIcon>
                        </div>
                        <p className="text-gray300 font-bold ">Villa & Condo</p>
                        <p className='text-gray200'>122 Property</p>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default PropertyTypes