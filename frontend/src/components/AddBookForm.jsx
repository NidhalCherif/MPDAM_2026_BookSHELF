import  { useState } from 'react'
const EMPTY_FORM={titre:"",read:false,rating:0};
const AddBookForm = ({onAddBook}) => {
    //1 etat : données
  const[formData,setFormData]=useState(EMPTY_FORM);
  const[errors,setErrors]=useState({});
                            
  
    //2 définition des comportement
   const handleChange=(e)=>{

        const{name,type,value,checked}=e.target;
       setFormData({...formData, [name]:type==='checkbox'?checked:value}) 
    
   }
   const validate=(data)=>{
     const errs={};
     const titre=data.titre.trim();
     const rating=Number(data.rating);
     // tests 
     if (!titre) errs.titre="Le titre est obligatoire!!!";
     else if(titre.length<2) errs.titre="le titre doit avoir au moins 2 caractères!!";
     if(!data.read && rating>0) errs.rating="Impossible de noter un livre non lu";

     return errs;


   } 
   const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("livre à ajouter : ", formData);
   // valider les données des formulaires  avant l'envoi 
   const validationErrors=validate(formData);
   setErrors(validationErrors);
   if(Object.keys(validationErrors).length>0) return; // bloquer l'envoi
 
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
        <input type="text" value={formData.titre}   name='titre' 
        className={"form-control"+(errors.titre?" is-invalid":"")}
         onChange={handleChange} placeholder="Titre ici" />
         {errors.titre &&<div className="invalid-feedback">{errors.titre}</div>}
         </div>
         <div className="mb3">
         <input type="checkbox" name="read" className="form-check-input" checked={formData.read}
          onChange={handleChange} /> Lu
          </div>
          <div className="mb-3">
          <select  name="rating" 
            className={"form-select"+(errors.rating?" is-invalid":"")}  
            value={formData.rating} 
            onChange={handleChange} >
            {Notes.map((n)=>n!==0?
                                 <option key={n} value={n}>{'*'.repeat(n)} ({n}/5)</option>
                                 :
                                  <option  key={n} value={n}>Non noté</option>
                                 
                                )}
          </select>
        
          {errors.rating &&  <div className="invalid-feedback">{errors.rating}</div>}
          </div>        
        <button type="submit" className="btn btn-primary">Ajouter</button>
        </form>
        
        </>
  )
}

export default AddBookForm