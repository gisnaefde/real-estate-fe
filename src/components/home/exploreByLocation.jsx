
import NewOrleans from '../../assets/images/new-orleans.jpg'
import California from '../../assets/images/california.jpg'
import Liverpool from '../../assets/images/liverpool.jpg'
import Montreal from '../../assets/images/montreal.jpg'
import Newyork from '../../assets/images/newyork.jpg'
import Jerrsy from '../../assets/images/jerrsy.jpg'
import CardImage from '../cards/cardimage'
const ExportByLocation = () => {
    return(
        <div className="bg-white">
        <div className='mx-8 md:mx-24 lg:mx-32  py-8 md:py-16'>

            <div className="text-center ">
                <p className="text-gray400 text-4xl font-bold">Explore By Location</p>
                <p className="text-gray300 text-xl mt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-5 mt-10 '>
                <CardImage image={NewOrleans} place={"New Orleans, Louisiana"} villa={12} office={7} apartement={10}></CardImage>
                <CardImage image={California} place={"California"} villa={12} office={7} apartement={10}></CardImage>
                <CardImage image={Liverpool} place={"Liverpool"} villa={12} office={7} apartement={10}></CardImage>
                <CardImage image={Montreal} place={"Montreal"} villa={12} office={7} apartement={10}></CardImage>
                <CardImage image={Newyork} place={"Newyork"} villa={12} office={7} apartement={10}></CardImage>
                <CardImage image={Jerrsy} place={"Jerrsy"} villa={12} office={7} apartement={10}></CardImage>
            </div>
        </div>
    </div>
    )
}

export default ExportByLocation