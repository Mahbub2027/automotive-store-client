// import { Link, useLoaderData } from "react-router-dom";

// const ProductUpdate = ({ product }) => {
//     const product = useLoaderData();
//     const { _id, name, brandName, type, price, description, photo, rating } = product;
//     return (
//         <div className="card card-compact  bg-base-100 shadow-xl">
//             <figure><img className="w-full h-52" src={product.photo} alt="Shoes" /></figure>
//             <div className="card-body">
//                 <h2 className="card-title">Name: {name}</h2>
//                 <h2 className="card-title">Brand: {brandName}</h2>
//                 <p className="text-lg"><span className=" font-bold">Type:</span> {type}</p>
//                 <p className="text-lg"><span className=" font-bold">Price:</span> {price}</p>
//                 <p className="text-lg"><span className=" font-bold">Ratings:</span> {rating} /5</p>
//                 <div className="card-actions justif-between">
//                     <button className="btn btn-primary">Details</button>
//                     <Link to={`updateProduct/${_id}`}>
//                         <button className="btn btn-primary">Update</button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductUpdate;