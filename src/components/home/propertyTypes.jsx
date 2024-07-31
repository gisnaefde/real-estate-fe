import { HomeIcon, HomeModernIcon, BuildingOffice2Icon, BuildingLibraryIcon, BuildingOfficeIcon} from '@heroicons/react/24/outline'
import WhiteCard from '../cards/whitecard'

const PropertyTypes = () => {
    
    const homeIcon = <HomeIcon className='w-10 h-10' style={{ color: '#ff0f0f' }} />
    const homeModernIcon = <HomeModernIcon className='w-10 h-10' style={{ color: '#1cd36d' }}></HomeModernIcon>
    const buildingOffice2Icon =<BuildingOffice2Icon className='w-10 h-10' style={{ color: '#dbba15' }}></BuildingOffice2Icon>
    const buildingLibraryIcon = <BuildingLibraryIcon className='w-10 h-10' style={{ color: '#ac51d9' }}></BuildingLibraryIcon>
    const buildingOfficeIcon = <BuildingOfficeIcon className='w-10 h-10' style={{ color: '#18a3ff' }}></BuildingOfficeIcon>
    return (
        <div className='bg-gray100'>
            <div className="mx-8 md:mx-24 lg:mx-32  flex-col justify-center items-center py-8 md:py-16">
                <div>
                    <p className="text-2xl md:text-4xl text-center font-bold text-gray300 ">Featured Property Types</p>
                    <p className="text-base md:text-xl text-center font-semibold text-gray200">Find All Type of Property.</p>
                </div>

                <div className='mt-8 md:mt-14 grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-y-3 gap-x-3'>
                    <WhiteCard style={{ backgroundColor: '#fce8e8' }} icon={homeIcon} propertyType={"Family House"} count={122}></WhiteCard>
                    <WhiteCard style={{ backgroundColor: '#eaf7ec' }} icon={homeModernIcon} propertyType={"House & Villa"} count={122}></WhiteCard>
                    <WhiteCard style={{ backgroundColor: '#fff4e6' }} icon={buildingOffice2Icon} propertyType={"Apartement"} count={122}></WhiteCard>
                    <WhiteCard style={{ backgroundColor: '#f6edfb' }} icon={buildingLibraryIcon} propertyType={"Office & Studio"} count={122}></WhiteCard>
                    <WhiteCard style={{ backgroundColor: '#e8f5fc' }} icon={buildingOfficeIcon} propertyType={"Villa & Condo"} count={122}></WhiteCard>                    
                </div>

            </div>
        </div>
    )
}

export default PropertyTypes