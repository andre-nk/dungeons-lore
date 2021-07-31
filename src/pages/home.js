import SpellPreviewList from '../components/spell_preview_list'
import Loader from "react-loader-spinner";
import useFetch from "../providers/fetch_spell";

const Home = () => {

    const {spells, isLoading} = useFetch(20);

    return (
        <div className="home">
            {
                isLoading
                ? <div className="loader">
                    <Loader type="ThreeDots" color="#E40511" height={60} width={60} />
                  </div>
                : <SpellPreviewList spells = {spells} title = "All spells"/>
            }

            {/* <SpellPreviewList spells = {spells.filter((spell) => spell.school === 'Abjuration')} title = "Abjuration Spells" removeSpell = { removeSpell }/> */}
        </div>
    );
}
 
export default Home;