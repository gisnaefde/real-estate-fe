import hero from '../../assets/images/hero1.jpg'
import Button from '../buttons/button'

const Hero = () => {
    return (
        <div className='relative w-full h-full mt-16 md:mt-0'>
            <img src={hero} alt='hero image' className='w-full h-full object-cover'></img>
            <div className='absolute inset-0 flex items-center justify-center z-10'>
                <div className=''>
                    <p className='text-white font-thin text-2xl md:text-6xl text-center'>
                        Search Your Next Home
                    </p>
                    <p className='text-white font-thin text-xs md:text-xl text-center'>
                        Find new & featured property located in your local city.
                    </p>
                    <div className='flex justify-center mt-9'>
                        <Button className={"p-4 bg-white opacity-55 w-48 hover:bg-green hover:opacity-100 hover:text-white"}>Buy</Button>
                        <Button className={"p-4 bg-white opacity-55 w-48 hover:bg-green hover:opacity-100 hover:text-white"}>Rent</Button>
                        <Button className={"p-4 bg-white opacity-55 w-48 hover:bg-green hover:opacity-100 hover:text-white"}>Sold</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
