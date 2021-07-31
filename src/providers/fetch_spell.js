import { useState, useEffect } from "react";

const useFetch = (size) => {
    const [spells, addSpell] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchSpell(){
            const out = [];
            
            await fetch("https://www.dnd5eapi.co/api/spells")
            .then( res => {
                return (res.json())
            }).then(data => {
                data.results.slice(0, size ?? 10).forEach((element, index) => {
                    fetch(`https://www.dnd5eapi.co/api/spells/${element.index}`).then(spellRaw => {
                        return spellRaw.json()
                    }).then( spell => {
                        out.push({
                            "name": spell.name,
                            "id": index,
                            "school": spell.school.name
                        });

                        if(index === (size - 1) ?? 9){
                            addSpell(out);
                            setIsLoading(false);
                        }
                    });
                });
            }).catch(err => {
                console.log(err);
            });
        }
        fetchSpell();
    }, [])

    return {spells, isLoading}
}

export default useFetch;