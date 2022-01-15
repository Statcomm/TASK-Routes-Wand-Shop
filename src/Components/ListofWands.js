import React from 'react'
import Card from './Card'

function ListofWands({keyforwands}) {
const wandMapper = keyforwands.map((wand) => (<Card wandinfo = {wand}/>));

return (
        <div>
         {wandMapper}
        </div>
    )
}

export default ListofWands
// const wandmapper = (detail) => keyforwands.map((e) => e[detail])
// const wandmapper = (detail) => keyforwands.map((e) => e[detail])
// console.log(wandmapper("wood"))
// console.log(keyforwands[0].wood, keyforwands[0].imageUrl)

// const wandmapping = keyforwands.map((e) => [e.core, e.length])
// console.log(wandmapping)



{/* <Card coreinfo = {keyforwands[1].core} imgUrl = {keyforwands[1].imageUrl} completewandinfo={keyforwands[1]}/>
<Card coreinfo = {keyforwands[2].core} imgUrl = {keyforwands[2].imageUrl} completewandinfo={keyforwands[2]}/>
<Card coreinfo = {keyforwands[3].core} imgUrl = {keyforwands[3].imageUrl} completewandinfo={keyforwands[3]}/>
<Card coreinfo = {keyforwands[4].core} imgUrl = {keyforwands[4].imageUrl} completewandinfo={keyforwands[4]}/>
<Card coreinfo = {keyforwands[5].core} imgUrl = {keyforwands[5].imageUrl} completewandinfo={keyforwands[5]}/>
<Card coreinfo = {keyforwands[6].core} imgUrl = {keyforwands[6].imageUrl} completewandinfo={keyforwands[6]}/> */}