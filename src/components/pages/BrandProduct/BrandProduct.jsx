import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";
const BrandProduct = () => {
    const product = useLoaderData();
    const {_id, name,brandName, type, price, description, photo,rating} = product;
    return (
        <div className="mb-5">
            <Marquee speed={200} pauseOnClick>
                <img className="w-11/12 h-[70vh]" src="https://i.ibb.co/8YvrCK1/bannner-11.jpg" alt="" />
                <img className="w-11/12 h-[70vh]" src="https://i.ibb.co/gPH6KwV/car-3.jpg" alt="" />
                <img className="w-11/12 h-[70vh]" src="https://i.ibb.co/y0rdJYJ/banner-22.jpg" alt="" />
            </Marquee>
            
            <div className="grid grid-cols-1 md:grid-cols-2 w-1/2 mx-auto my-10 gap-5">
            {
                product.map(product => <p key={product._id} >
                    <div className="card card-compact  bg-base-100 shadow-xl">
                        <figure><img className="w-full h-52" src={product.photo} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name: {product.name}</h2>
                            <h2 className="card-title">Brand: {product.brandName}</h2>
                            <p className="text-lg"><span className=" font-bold">Type:</span> {product.type}</p>
                            <p className="text-lg"><span className=" font-bold">Price:</span> {product.price}</p>
                            <p className="text-lg"><span className=" font-bold">Ratings:</span> {product.rating} /5</p>
                            <div className="card-actions justif-between">
                                <button className="btn btn-primary">Details</button>
                                <Link to={`/updateProduct/${_id}`}>
                                    <button className="btn btn-primary">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </p>)
            }
            
            </div>

        </div>
    );
};

export default BrandProduct;