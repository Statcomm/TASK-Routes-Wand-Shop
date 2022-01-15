import React from 'react'
import { Link } from 'react-router-dom';

function Card({wandinfo}) {
const theWandInfo = {wandinfo}
    return (
        <div>
<div className="card">
  <div className="card-body">
  <h4>{wandinfo.core} Core</h4>
  <Link to= {`/Fullwanddeets/${wandinfo.slug}`}> <img width="200px" src={wandinfo.imageUrl} /> </Link>
  </div>
</div>
            


        </div>
    )
}

export default Card

{/* <Route path="/" element = {<ListofWands keyforwands = {wands}/> }/> */}

// const linkNameGenerator = () => { return (completewandinfo.wood.toString() + completewandinfo.core.toString())}
// console.log(coreinfo)

