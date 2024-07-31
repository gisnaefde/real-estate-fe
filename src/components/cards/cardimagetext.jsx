import { MapPinIcon } from '@heroicons/react/24/outline'
import Button from '../buttons/button'

const CardImageText = ({image, forwat, propertyname, place, price, propertytype}) => {
    return (
        <div className='flex justify-center'>
            <div className=' bg-white shadow-lg w-80 rounded-lg'>
                <div>
                    <img src={image} className='w-80'></img>
                </div>
                <div className='px-6 mt-8'>
                    <div className='flex justify-center'>
                        <button className='bg-orange100 text-orange text-sm px-3 py-1 font-semibold rounded-md'>{forwat}</button>
                    </div>
                    <p className='font-bold mt-4'>{propertyname}</p>
                    <div className='flex items-center text-gray'>
                        <MapPinIcon className='w-5 h-5  mr-3'></MapPinIcon>
                        <p>{place}</p>
                    </div>
                </div>
                <hr className='text-gray mt-4'></hr>
                <div className='my-4 flex justify-between items-center px-3'>
                    <div className='flex items-center'>
                        <Button className={'bg-green p-3 text-white font-bold rounded-full'} >Rp. {price}</Button>
                        <p>/ meter</p>
                    </div>
                    <p>{propertytype}</p>
                </div>
            </div>
        </div>
    )
}

export default CardImageText
