import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="404-page">
            <h2>Sorry</h2>
            <p>The page you are looking for cannot be found.</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    )
}

export default ErrorPage;