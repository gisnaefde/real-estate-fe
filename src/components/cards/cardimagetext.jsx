import { MapPinIcon } from '@heroicons/react/24/outline'
import Button from '../buttons/button'

const CardImageText = ({image, classNameForwat, forwat, propertyname, place, price, propertytype}) => {
    return (
        <div className='flex justify-center'>
            <div className=' bg-white shadow-lg w-64 rounded-lg'>
                <div>
                    <img src={image} alt='property image ' className='w-64 rounded-t-lg'></img>
                </div>
                <div className='px-4 mt-2'>
                    <div className='flex justify-center'>
                        <Button className={classNameForwat}>{forwat}</Button>
                    </div>
                    <p className='font-bold mt-1'>{propertyname}</p>
                    <div className='flex items-center text-gray'>
                        <MapPinIcon className='w-5 h-5  mr-3'></MapPinIcon>
                        <p className='text-sm'>{place}</p>
                    </div>
                </div>
                <hr className='text-gray mt-2'></hr>
                <div className='my-4 flex justify-between items-center px-2'>
                    <div className='flex items-center'>
                        <Button className={'bg-green px-3 py-1 text-xs text-white font-bold rounded-full'} >Rp. {price}</Button>
                        <p className='text-xs'>/meter</p>
                    </div>
                    <p className='text-sm'>{propertytype}</p>
                </div>
            </div>
        </div>
    )
}

export default CardImageText
