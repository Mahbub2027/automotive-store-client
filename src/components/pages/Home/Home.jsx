import Banner from "./Banner";
import Blog from "./Blog";
import BrandNames from "./BrandNames";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-10/12 mx-auto">
            <BrandNames></BrandNames>
            <Blog></Blog>
            </div>
            {/* <h2>This is Home page</h2> */}
        </div>
    );
};

export default Home;