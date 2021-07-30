import { useState } from "react";
import SpellPreviewList from '../components/spell_preview_list'

const Home = () => {

    const [spells, addSpell] = useState([
        {name: "Cure Wounds", type: "Invocation", id: "1"},
        {name: "Heroism", type: "Enchantment", id: "2"},
        {name: "Vicious Mockery", type: "Abjuration", id: "3"}
    ]);

    return (
        <div className="home">
            <SpellPreviewList spells = {spells} title = "All spells"/>
            <SpellPreviewList spells = {spells.filter((blog) => blog.type == 'Abjuration')} title = "Abjuration Spells"/>
        </div>
    );
}
 
export default Home;