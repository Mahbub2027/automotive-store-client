import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
      
        const productDetails = {name,brandName, type, price, description, photo,rating};
        console.log(productDetails);


        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);

            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Go Back'
                  })
            }
        })
        

    }
    return (
        <div className="bg-[#F4F3F0] p-5">
            <h2 className="text-4xl text-[#374151] text-center font-bold font-[Rancho] my-10">Add New Product</h2>
            <form onSubmit={handleAddProduct}>
                {/* Product & Brand name */}
                <div className="md:flex gap-5">
                    <div className="form-control w-1/2 mb-5">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Product name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="product name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 mb-5">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* type & price */}
                <div className="md:flex gap-5">
                    <div className="form-control w-1/2 mb-5">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Product type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Product type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 mb-5">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* Short description */}
                <div className="md:flex gap-5">
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    

                </div>
                {/* Photo url */}
                <div className="">
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="label-text text-lg font-bold">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="mb-10 form-control w-1/2">
                    <label className="mb-2 text-lg font-bold">Rate our service (1-5):</label>
                    <label className="input-group">
                        <input type="text" name="rating" id="rating" placeholder="Enter a number from 1 to 5" className="input input-bordered w-full" />

                    </label>
                </div>

                <input className="btn btn-error w-full text-white  normal-case font-bold text-xl" type="submit" value="Add Product" />

            </form>
        </div>
    );
};

export default AddProduct;