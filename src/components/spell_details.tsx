import { useParams } from "react-router-dom";

const SpellDetails = () => {

    const {id}: {id:string} = useParams();

    return (
        <div className="spell-details">
            <h2>Spell Details {id}</h2>
        </div>
    )
}

export default SpellDetails;