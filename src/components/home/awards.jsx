import { TrophyIcon, BriefcaseIcon, SparklesIcon, HeartIcon } from '@heroicons/react/24/solid'

const Awards = () => {
    return(
        <div className="bg-gray400">
            <div className='mx-8 md:mx-24 lg:mx-32  py-8 md:py-16'>

                <div className="text-center ">
                    <p className="text-green text-xl">Our Awards</p>
                    <p className="text-white text-xl md:text-3xl mt-7">Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services</p>
                </div>
                <div className='grid grid-cols-2 gap-y-5 md:grid-cols-4  mt-10'>
                    <div className='flex flex-col  items-center'>
                        <div className="w-20 h-20 bg-gray300 p-4 rounded-ee-3xl rounded-ss-3xl">
                            <TrophyIcon className='text-white' />
                        </div>
                        <p className='text-white text-4xl font-semibold mt-4'>32M</p>
                        <p className='text-gray200 text-sm mt-4'>Blue Burmin Award</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="w-20 h-20 bg-gray300 p-4 rounded-ee-3xl rounded-ss-3xl">
                            <BriefcaseIcon className='text-white' />
                        </div>
                        <p className='text-white text-4xl font-semibold  mt-4'>32M</p>
                        <p className='text-gray200 text-sm  mt-4'>Mima XII Awards</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="w-20 h-20 bg-gray300 p-4 rounded-ee-3xl rounded-ss-3xl">
                            <SparklesIcon className='text-white' />
                        </div>
                        <p className='text-white text-4xl font-semibold  mt-4'>32M</p>
                        <p className='text-gray200 text-sm  mt-4'>Australian UGC Award</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className="w-20 h-20 bg-gray300 p-4 rounded-ee-3xl rounded-ss-3xl">
                            <HeartIcon className='text-white' />
                        </div>
                        <p className='text-white text-4xl font-semibold  mt-4'>32M</p>
                        <p className='text-gray200 text-sm mt-4'>IITCA Green Award</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards