import Awards from "../components/home/awards"
import ExportByLocation from "../components/home/exploreByLocation"
import Footer from "../components/home/footer"
import Header from "../components/home/header"
import Hero from "../components/home/hero"
import PropertyListed from "../components/home/propertyListed"
import PropertyTypes from "../components/home/propertyTypes"

const Home = () =>{
    return(
        <>
            <Header/>
            <Hero/>
            <PropertyTypes/>
            <PropertyListed/>
            <Awards/>
            <ExportByLocation/>
            <Footer/>
        </>
    )
}

export default Home
