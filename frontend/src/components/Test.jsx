import React from 'react'

const Test = ({name,an,etat}) => {
    
  return (
    <>
      <h1>BONJOUR {name}</h1>
      <h2>Année: {an}</h2>
     {etat && <p>2*2={2*2}</p>}
      

    </>

  
  )
}

export default Test