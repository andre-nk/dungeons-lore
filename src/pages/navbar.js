import { useHistory, Link } from "react-router-dom";

const Navbar = () => {

    const history = useHistory();

    function handleClick() {
        history.push("/create");
    }

    return (
        <nav className="navbar">
            <h1>Dungeons Lore</h1>
            <div className="links">
                <Link to="/">
                    <a>Home</a>
                </Link>
                <Link>
                    <button
                        style={{
                            color: "white",
                            backgroundColor: "#E40511",
                            borderRadius: "8px",
                            padding: "10px 15px",
                            border: "0px"
                        }}
                        onClick={handleClick}
                    >New spell</button>
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;