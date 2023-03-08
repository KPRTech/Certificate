import useCertificate from "../UseHocks/useCertificate";



const Certificate = () => {
    const [Certificate, setCertificate] = useCertificate()
    return (
        <div className='grid grid-cols-1 gap-3 mx-auto w-6/4   md:grid-cols-3'>
        {Certificate.map((Certificate)=>(
            <div className='px-3 '>
               <div className=" rounded-tl-3xl rounded-br-3xl border-8 border-indigo-600  hero lg-h-screen" style={{ backgroundImage: `url("./Certificate.js")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{Certificate.Name}</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in.</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
                </div>
            </div>
        ))}
    </div>
    );
};

export default Certificate;