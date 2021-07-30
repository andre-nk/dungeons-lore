import { useState } from "react";

const Home = () => {

    const [spells, addSpell] = useState([
        {name: "Cure Wounds", type: "Invocation", id: "1"},
        {name: "Heroism", type: "Enchantment", id: "2"},
        {name: "Vicious Mockery", type: "Abjuration", id: "3"}
    ]);

    return (
        <div className="home">
            {
                spells.map((spell) => (
                    <div className="spell-preview" key = {spell.id}>
                        <h2>{ spell.name }</h2>
                        <p>{ spell.type }</p>
                    </div>
                ))
            }
        </div>
    );
}
 
export default Home;