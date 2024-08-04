import CardImageText from "../components/cards/cardimagetext"
import property1 from '../assets/images/property-1.jpg'
import Header from "../components/home/header"
import ExportByLocation from "../components/home/exploreByLocation"
import Footer from "../components/home/footer"

const ListByLocations = () => {
    return (
        <>
            <Header/>
            <div className='bg-white mt-24'>
                <div className="mx-8 md:mx-24 lg:mx-32  flex-col justify-center items-center py-8 md:py-16">
                    <div>
                        <p className="text-2xl md:text-4xl text-center font-bold text-gray300 ">List of Properties in Bekasi</p>
                        <p className="md:mx-32 text-base md:text-base mt-5 text-center font-semibold text-gray200">Discover the best properties available for you! From dream homes to lucrative real estate investments, we offer a variety of options to suit your needs and desires. Explore our list below and find the perfect property for your future.</p>
                    </div>

                    <div className='mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-3 '>
                        <CardImageText image={property1} classNameForwat={'bg-orange100 text-orange text-sm px-3 py-1 font-semibold rounded-md'} forwat={"for buy"} propertyname={"Red Carpet Real Estat"} place={"210 Zirak Road, Canada"} price="30.488" propertytype={"Apartement"}></CardImageText>
                        <CardImageText image={property1} classNameForwat={'bg-orange100 text-orange text-sm px-3 py-1 font-semibold rounded-md'} forwat={"for buy"} propertyname={"Red Carpet Real Estat"} place={"210 Zirak Road, Canada"} price="30.488" propertytype={"Apartement"}></CardImageText>
                        <CardImageText image={property1} classNameForwat={'bg-orange100 text-orange text-sm px-3 py-1 font-semibold rounded-md'} forwat={"for buy"} propertyname={"Red Carpet Real Estat"} place={"210 Zirak Road, Canada"} price="30.488" propertytype={"Apartement"}></CardImageText>
                        <CardImageText image={property1} classNameForwat={'bg-orange100 text-orange text-sm px-3 py-1 font-semibold rounded-md'} forwat={"for buy"} propertyname={"Red Carpet Real Estat"} place={"210 Zirak Road, Canada"} price="30.488" propertytype={"Apartement"}></CardImageText>
                        <CardImageText image={property1} classNameForwat={'bg-orange100 text-orange text-sm px-3 py-1 font-semibold rounded-md'} forwat={"for buy"} propertyname={"Red Carpet Real Estat"} place={"210 Zirak Road, Canada"} price="30.488" propertytype={"Apartement"}></CardImageText>
                        <CardImageText image={property1} classNameForwat={'bg-orange100 text-orange text-sm px-3 py-1 font-semibold rounded-md'} forwat={"for buy"} propertyname={"Red Carpet Real Estat"} place={"210 Zirak Road, Canada"} price="30.488" propertytype={"Apartement"}></CardImageText>
                        
                    </div>

                </div>
            </div>
            {/* <ExportByLocation/> */}
            <Footer/>
        </>
    )
}

export default ListByLocations