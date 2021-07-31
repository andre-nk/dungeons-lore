import { AiOutlineClose } from "react-icons/ai";

const SpellPreviewList = ({title, spells}) => {
    return (
        <div className="spell-preview-list">
            <h2>{ title }</h2>
            {spells.map((spell) => (
                <div className="spell-preview" key = {spell.id}>
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
                </div>
            ))}
        </div>
    )
}

export default SpellPreviewList;