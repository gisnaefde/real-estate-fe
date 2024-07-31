import { MapPinIcon, HomeModernIcon, BuildingOffice2Icon, BuildingLibraryIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'
import property1 from '../../assets/images/property-1.jpg'
import Button from '../buttons/button'
import CardImageText from '../cards/cardimagetext'

const PropertyListed = () => {
    return (
        <div className='bg-white'>
            <div className="mx-8 md:mx-24 lg:mx-32  flex-col justify-center items-center py-8 md:py-16">
                <div>
                    <p className="text-2xl md:text-4xl text-center font-bold text-gray300 ">Featured Property Listed</p>
                    <p className="md:mx-32 text-base md:text-base mt-5 text-center font-semibold text-gray200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque lectus vitae nisl ullamcorper, nec sollicitudin odio egestas. Nulla semper odio tortor, a ultrices magna porta a.</p>
                </div>

                <div className='mt-8 md:mt-14 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-3 '>
                    <CardImageText image={property1} forwat={"for rent" } propertyname={"Red Carpet Real Estat"} place={"210 Zirak Road, Canada"} price="30.488" propertytype={"Apartement"}></CardImageText>                    
                    <CardImageText image={property1} forwat={"for rent" } propertyname={"Red Carpet Real Estat"} place={"210 Zirak Road, Canada"} price="30.488" propertytype={"Apartement"}></CardImageText>                    
                    <CardImageText image={property1} forwat={"for rent" } propertyname={"Red Carpet Real Estat"} place={"210 Zirak Road, Canada"} price="30.488" propertytype={"Apartement"}></CardImageText>                    
                    <CardImageText image={property1} forwat={"for rent" } propertyname={"Red Carpet Real Estat"} place={"210 Zirak Road, Canada"} price="30.488" propertytype={"Apartement"}></CardImageText>                    
                </div>

            </div>
        </div>
    )
}
export default PropertyListed
