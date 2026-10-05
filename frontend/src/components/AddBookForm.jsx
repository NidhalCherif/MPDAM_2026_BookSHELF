import  { useState } from 'react'

const AddBookForm = () => {
    //1 etat : données
    const[titre,setTitre]=useState("");
    //2 définition des comportement
    const handleChange = (e) => { 
        console.log("e     :    ", e);
        console.log("e.target     :    ", e.target);
        console.log("name     :    ", e.target.name);
        console.log("type     :    ", e.target.type);
        console.log("value     :    ", e.target.value);
        console.log("checked     :    ", e.target.checked);
        console.log("----------------");

        

     }

    const Notes=[0,1,2,3,4,5];
    //3 Affichage
  return (
    <form>
        <div className="mb3">
        <input type="text" value={titre}   name='titre' className="form-control"
         onChange={handleChange} placeholder="Titre ici" />
         </div>
         <div className="mb3">
         <input type="checkbox" name="read" className="form-check-input"
          onChange={handleChange} /> Lu
          </div>
          <div className="mb-3">
          <select name="rating" className="form-select"  onChange={handleChange} >
            {Notes.map((n)=>n!==0?
                                 <option key={n} value={n}>{'*'.repeat(n)} ({n}/5)</option>
                                 :
                                  <option  key={n} value={n}>Non noté</option>
                                 
                                )}
          </select>
          </div>        
        <button type="submit" className="btn btn-primary">Ajouter</button>
        <p>Vous avez tapé: {titre}</p>

    </form>
  )
}

export default AddBookForm