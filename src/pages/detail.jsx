import Header from "../components/home/header"
import California from "../assets/images/california.jpg"
import Button from "../components/buttons/button"
import { ShareIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/outline'
import Footer from "../components/home/footer"
import Map from "../components/map/map"
import ExportByLocation from "../components/home/exploreByLocation"

const Detail = () => {

    return (
        <>
            <Header></Header>
            <div className="mx-8 md:mx-24 lg:mx-32 my-16 py-10 bg-gray100  rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="col-span-3 relative w-full p-4 md:p-10">
                        <img src={California} alt="image property" className="h-auto rounded-xl"></img>
                        <div className="absolute flex gap-x-2 top-10 md:top-16 right-10  md:right-20 z-10">
                            <Button className="bg-white hover:bg-opacity-70 text-green px-5 py-3 rounded-lg flex items-center space-x-2">
                                <ShareIcon className="h-5 w-5 text-green" />
                                <span>Share</span>
                            </Button>
                            <Button className="bg-white hover:bg-opacity-70 text-green px-5 py-3 rounded-lg flex items-center space-x-2">
                                <HeartIcon className="h-5 w-5 text-green" />
                                <span>Save</span>
                            </Button>
                        </div>
                    </div>

                    <div className="col-span-2 cp-4 h-full w-full  mt-10 ">
                        <div className="bg-white p-4 md:flex gap-x-5 rounded-lg">
                            <div className="mt-3 md:mt-0">
                                <p className="text-lg font-semibold">Cikunir, Jaka Mulya, Bekasi Selatan</p>
                                <p className="text-gray">Bekasi</p>
                                <p className="text-2xl font-semibold">Rp 350.000.000</p>

                            </div>
                        </div>
                        <div className="text-gray grid grid-cols-2 md:grid-cols-4  border-y-2 py-4 border-green gap-x-2 m-4">
                            <div className="flex">
                                <HeartIcon className="w-4 "></HeartIcon>
                                <p className="ml-1">6 Beds</p>
                            </div>
                            <div className="flex">
                                <HeartIcon className="w-4 "></HeartIcon>
                                <p className="ml-1">6 Baths</p>
                            </div>
                            <div className="flex">
                                <HeartIcon className="w-4 "></HeartIcon>
                                <p className="ml-1">120 m<sup>2</sup></p>
                            </div>
                            <div className="flex">
                                <HeartIcon className="w-4 "></HeartIcon>
                                <p className="ml-1">Parking</p>
                            </div>
                            <div className="flex">
                                <HeartIcon className="w-4 "></HeartIcon>
                                <p className="ml-1">Outdor</p>
                            </div>
                            <div className="flex">
                                <HeartIcon className="w-4 "></HeartIcon>
                                <p className="ml-1">A / C</p>
                            </div>
                        </div>
                        <form className="bg-white rounded-lg p-5 flex flex-col space-y-3 w-full mt-7">
                            <input placeholder="Phone" type="number" className="pl-3 p-2 rounded-lg border-gray border-2"></input>
                            <input placeholder="Email" type="email" className="pl-3 p-2 rounded-lg border-gray border-2"></input>
                            <textarea placeholder="Message" className="pl-3 p-2 rounded-lg border-gray border-2 resize-none "></textarea>
                            <Button className={"bg-green rounded-lg p-3 text-white"}>Request Info</Button>
                            <p className="text-xs text-gray text-justify">By clicking Request Info, you agree that Luxstay may contact you by phone/SMS regarding your inquiry, which may involve the use of automated means. You are not required to provide consent as a condition of purchasing any property, goods or services. Message/data rates may apply. You also agree to our Terms of Use.</p>
                        </form>
                    </div>
                </div>

                <div className=" mt-10">
                    <p className="text-center text-3xl font-bold underline">Location Information</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 px-6 gap-x-20">
                        <div className="">
                            <p className=" text-gray text-justify">Your forever home is nestled on a tranquil tree-lined cul-de-sac in Avenida Espana neighborhood of Santa Teresa. This beautiful 5bd, 3ba home offers the perfect blend of modern amenities & classic appeal. Step through double doors & prepare to be captivated by the high ceilings creating an expansive & elegant living/dining room. The heart of the home is a stunningly remodeled kitchen w/ sleek shaker cabinets topped by quartz counters, decorated w/ stainless steel appliances, recess lighting, smart shades, expanded pantry, bamboo flooring, 10ft waterfall island to complete the culinary experience. Convenient ground-floor bed & full bath, perfect for office or guest bed. Step out to a private & lush yard, perfect for play, relaxation & entertaining. Coveted location offers ST Golf, Paseo Park, Archery, Avenida Espana Park, Laguna Seca Garden, LPAC Swim, ST Park, all at your doorstep offering endless opportunity for recreation. Short distance is the light rail station, HWY 85 & 101. ADDITIONAL: owned solar, new stucco & paint, copper plumbing, french drains, new roof & sun tunnel, new dual ac & furnace, new electrical, new windows, crown molding, EV hookup, Los Paseos Elementary, Martin Murphy Middle, Sobrato High. Experience the epitome of Santa Teresa living</p>
                        </div>
                        <div className="">
                            <Map lat={-6.2593442} long={106.962137}/>
                        </div>
                    </div>
                </div>
            </div>
            <ExportByLocation/>
            <Footer></Footer>

        </>
    )
}

export default Detail
