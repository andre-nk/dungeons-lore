const Home = () => {

    const spell = {name: "Tasha's Hideous Laughter", type: "Abjuration"};

    return (
        <div className="home">
            <h1>Dungeons Lore { spell.name }</h1>
        </div>
    );
}
 
export default Home;