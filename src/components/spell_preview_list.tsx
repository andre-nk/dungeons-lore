import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SpellPreviewList = ({title, spells}: {title:string, spells:any}) => {
    return (
        <div className="spell-preview-list">
            <h2>{ title }</h2>
            {spells.map((spell:any) => (
                <div key = {spell.id}>
                    <Link to={`/spells/${parseInt(spell.id) + 1}`} className="spell-preview" >
                        <div className="title">
                            <h2>{ spell.name }</h2>
                            <p>{ spell.school }</p>
                        </div>
                        <button style = {{
                            border: "0px",
                            backgroundColor: "transparent"
                        }}>
                            <AiOutlineClose/>
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default SpellPreviewList;