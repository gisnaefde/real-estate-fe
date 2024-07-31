const CardImage = ({image, place, villa, office, apartement}) => {
    return (
        <div className='relative w-80 md:w-96 '>
            <img src={image} className='rounded-lg w-full h-56'></img>
            <div className='absolute inset-0 m-5'>
                <div className='bg-grayopacity w-full h-full rounded-lg flex justify-center items-center'>
                    <div className='text-gray100'>
                        <p className='text-xl font-bold text-center'>{place}</p>
                        <div className='flex space-x-5'>
                            <p>{villa} Villas</p>
                            <p>{office} Offices</p>
                            <p>{apartement} Apartments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardImage
