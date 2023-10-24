// import bannerimg from '../../../assets/car 1.jpg'

const Banner = () => {
    return (
        <div className="hero h-[85vh]" style={{ backgroundImage: 'url(https://i.ibb.co/DWjCYc6/car-2.jpg)' }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-3xl md:text-5xl text-white font-bold">Unleash the Power of Wheels</h1>
                    <p className="mb-5 text-lg md:text-xl">Take a journey through the automotive universe, from classic beauties to cutting-edge technology.</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;

// https://i.ibb.co/DWjCYc6/car-2.jpg
// https://i.ibb.co/PFmRLPH/car-1.jpg