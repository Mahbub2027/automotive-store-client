import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="text-center mt-20">
            {/* <h2 className="text-5xl">Error 404</h2> */}
            <h1 className="text-4xl font-semibold">Oops!</h1>
            <p className="text-2xl my-3">Sorry, an unexpected error has occurred.</p>
            <p className="text-2xl">
                <i>{error.statusText || error.message}</i>
            </p>
            <button className="bg-orange-600 px-3 py-2 text-white font-bold rounded-lg mt-10"><Link to='/'>Go Home</Link></button>

        </div>
    );
};

export default ErrorPage;