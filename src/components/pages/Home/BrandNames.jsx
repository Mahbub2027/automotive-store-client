import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BrandNames = () => {
    const [brandsData, setBrandsData] = useState([]);

    useEffect(() => {
        fetch('brands.js')
            .then(res => res.json())
            .then(data => setBrandsData(data));
    }, [])

    return (
        <div className="my-10 ">
            <h2 className="text-3xl font-bold text-center mb-14">Find Popular Brands</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 ">
                {
                    brandsData.map(brand => <p
                        key={brand.id} >
                        <Link to={`/brandDetails/:id`}> 
                        <div className="card bg-base-100 p-1 shadow-xl">
                            <figure><img className="w-11/12 h-48" src={brand.brand_img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-2xl font-bold text-center">{brand.brand_name}</h2> 
                            </div>
                        </div>
                        </Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default BrandNames;



//      https://i.ibb.co/ykg7xHf/ford.png
 //   "brand_img": "https://i.ibb.co/fH7dgfX/bmw.png",
 //   https://i.ibb.co/GcNPgWq/tesla1.png
 //    "brand_img": "https://i.ibb.co/cX93VRQ/toyota.png",
 // https://i.ibb.co/2P4DXvX/honda.jpg
 // https://i.ibb.co/G00HkJ8/mercedes.png