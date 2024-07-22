import hero from '../../assets/images/hero.jpg'

const Hero = () => {
    return (
        <div className=''>
            <img src={hero} alt='hero image' className='w-full h-full object-cover'></img>
            <div className='absolute inset-0 flex items-center justify-center z-10'>
                <div className='-mt-96 md:mt-72'>
                    <p className='text-white font-thin text-2xl md:text-6xl text-center '>
                        Search Your Next Home
                    </p>
                    <p className='text-white font-thin text-xs md:text-xl text-center'>Find new & featured property located in your local city.</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
