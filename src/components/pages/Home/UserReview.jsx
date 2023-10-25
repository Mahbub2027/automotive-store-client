import Marquee from "react-fast-marquee";
const UserReview = () => {
    return (
        <div className="my-20">
            <h2 className="text-3xl mb-10 font-bold text-center text-orange-600">Our Customers Saying About Us</h2>
            <Marquee speed={120}>
                <div className="flex  gap-20">
                    <div className="card w-[500px] h-[250px] mr-10 bg-base-100 shadow-xl">
                        <div className="card-body">

                            <p><q>I couldnot be happier with my recent purchase from this automotive website. The selection of cars is top-notch, and the process was smooth. I found the perfect vehicle, and it runs like a dream!</q></p>
                            <div className="flex justify-between ">
                                <div>
                                <h2 className="font-bold">John S.</h2>
                                <p>Mechanical Engineer</p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[500px] h-[250px] mr-10 bg-base-100 shadow-xl">
                        <div className="card-body">

                            <p><q>I have been a loyal customer of this automotive website for years, and I keep coming back for their exceptional service. The team is knowledgeable, and they helped me find the perfect car that suits my budget and needs.</q></p>
                            <div className="flex justify-between ">
                                <div>
                                <h2 className="font-bold">Emily R.</h2>
                                <p>Financial Analyst</p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[500px] h-[250px] mr-10 bg-base-100 shadow-xl">
                        <div className="card-body">

                            <p><q>This automotive website is customer service is outstanding. I had a few questions about a vehicle, and their support team was quick to respond and very helpful. It is refreshing to experience such professionalism.</q></p>
                            <div className="flex justify-between ">
                                <div>
                                <h2 className="font-bold">Sarah L.</h2>
                                <p>Marketing Manager</p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-[500px] h-[250px] mr-10 bg-base-100 shadow-xl">
                        <div className="card-body">

                            <p><q>I love this website is user-friendly interface. It is effortless to search for cars, compare options, and make informed decisions. The filters and sorting options made my car search a breeze.</q></p>
                            <div className="flex justify-between ">
                                <div>
                                <h2 className="font-bold">Robert M.</h2>
                                <p>Real Estate Agent</p>
                                </div>
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </Marquee>
        </div>
    );
};

export default UserReview;