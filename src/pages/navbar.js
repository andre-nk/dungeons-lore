const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Dungeons Lore</h1>
            <div className="links">
                <a href="/">Home</a>
                <button
                    style={{
                        color: "white",
                        backgroundColor: "#E40511",
                        borderRadius: "8px",
                        padding: "10px 15px",
                        border: "0px"
                    }}
                    onClick={() => {}}
                ><a href="/create">New spell</a></button>
            </div>
        </nav>
    );
}
 
export default Navbar;