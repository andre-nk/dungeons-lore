const SpellPreviewList = (props) => {
    return (
        <div className="spell-preview-list">
            <h2>{ props.title }</h2>
            {props.spells.map((spell) => (
                <div className="spell-preview" key = {spell.id}>
                    <h2>{ spell.name }</h2>
                    <p>{ spell.type }</p>
                </div>
            ))}
        </div>
    )
}

export default SpellPreviewList;