import  { useState } from 'react'
const EMPTY_FORM={titre:"",read:false,rating:0};
const AddBookForm = ({onAddBook}) => {
    //1 etat : données
  const[formData,setFormData]=useState(EMPTY_FORM);
                            
  
    //2 définition des comportement
   const handleChange=(e)=>{

        const{name,type,value,checked}=e.target;
       setFormData({...formData, [name]:type==='checkbox'?checked:value}) 
    
   } 
   const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("livre à ajouter : ", formData);
    
     
    const book={titre:formData.titre.trim(),
                read: formData.read,
               rating:Number(formData.rating)  };
    
    onAddBook(book); // envoi des données du formulaire
    setFormData(EMPTY_FORM); // vider le formulaire après l'envoi
    
    }
      

        

     

    const Notes=[0,1,2,3,4,5];
    //3 Affichage
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="mb3">
        <input type="text" value={formData.titre}   name='titre' className="form-control"
         onChange={handleChange} placeholder="Titre ici" />
         </div>
         <div className="mb3">
         <input type="checkbox" name="read" className="form-check-input" checked={formData.read}
          onChange={handleChange} /> Lu
          </div>
          <div className="mb-3">
          <select  name="rating" className="form-select"   value={formData.rating} 
          onChange={handleChange} >
            {Notes.map((n)=>n!==0?
                                 <option key={n} value={n}>{'*'.repeat(n)} ({n}/5)</option>
                                 :
                                  <option  key={n} value={n}>Non noté</option>
                                 
                                )}
          </select>
          </div>        
        <button type="submit" className="btn btn-primary">Ajouter</button>
        </form>
        
        </>
  )
}

export default AddBookForm