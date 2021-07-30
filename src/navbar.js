import { useState } from "react";

const Navbar = () => {

    return (
        <nav className="navbar">
            <h1>Dungeons Lore</h1>
            <div className="links">
                <a href="/">Home</a>
                <button
                    href="/create"
                    style={{
                        color: "white",
                        backgroundColor: "#E40511",
                        borderRadius: "8px",
                        padding: "10px 15px",
                        border: "0px"
                    }}
                    onClick={() => {}}
                >New Spell</button>
            </div>
        </nav>
    );
}
 
export default Navbar;