import Logo3 from '../../assets/images/logo-3.png'
const Footer = () => {
    return (
        <>
            <div className="bg-green w-full px-8 md:px-24 py-10 flex flex-col md:flex-row  justify-between items-center">
                <div className="text-white ">
                    <p className="font-bold text-4xl">Do You Have Quetions ?</p>
                    <p className="mt-2">We'll help you to grow your career and growth</p>
                </div>
                <div className="mt-4 md:mt-0">
                    <button className='bg-white p-3 text-green px-10 rounded-full'>Contac As Today</button>
                </div>
            </div>
            <div className="bg-gray400 w-full px-8 md:px-24 py-10 grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img src={Logo3} className='bg-white p-2 rounded-md h-10'></img>
                    <p className='text-white font-semibold text-3xl mt-4'>Do You Need Help With Anything?</p>
                    <p className='text-gray mt-2'>Receive update, hot deals, tutorials, discounts, sent straignt in your inbox every month </p>
                    <form className='mt-8'>
                        <input type='text' placeholder='input email' className='p-3 rounded-lg w-60 md:w-80'></input>
                        <button className='bg-green p-3 text-white px-4 rounded-lg'>Subcribe</button>
                    </form>
                </div>
                <div className='text-white md:ml-6 mt-5 md:mt-0'>
                    <div>
                        <p className="text-xl font-semibold underline">Golden Realty</p>
                        <p>Jl. Raya Kebayoran No. 980, Kebayoran Lama, Jakarta Selatan, 12110, Indonesia</p>
                        <p>Telepon: +62 21 1234 5678</p>
                        <p>Fax: +62 21 1234 5679</p>
                        <p>Email: info@goldenhorizonrealty.com</p>
                    </div>
                    <div className='mt-4'>
                        <p className="text-xl font-semibold underline">Business Hours</p>
                        <p>Monday - Friday: 09.00 - 18.00 WIB</p>
                        <p>Saturday: 09.00 - 15.00 WIB</p>
                        <p>Sunday: Closes</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
