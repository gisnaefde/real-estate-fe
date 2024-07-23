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
        </>
    )
}

export default Home
