import Awards from "../components/home/awards"
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
        </>
    )
}

export default Home
