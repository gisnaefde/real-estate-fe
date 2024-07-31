const WhiteCard = ({style, icon, propertyType, count}) => {
    return (
        <div className="flex flex-col justify-center items-center bg-white w-40 md:w-52 p-4 md:p-10 shadow-lg rounded-md">
            <div className='rounded-full w-16 h-16 flex justify-center items-center mb-4' style={style}>
                {icon}
            </div>
            <p className="text-gray300 font-bold ">{propertyType}</p>
            <p className='text-gray200'>{count} Property</p>
        </div>
    )
}

export default WhiteCard
