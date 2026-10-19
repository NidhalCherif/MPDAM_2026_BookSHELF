import { useParams } from "react-router-dom"

const BookDetailPage = ({books}) => {
 const params=useParams();
 console.log('1) params: ', params);
 console.log('2)id : ',params.id);
  console.log( typeof params.id);
  const id=Number(params.id);
  const book=books.find((b)=>(b.id===id));
 

  return (
    <div>
        <h1>Détail du livre</h1>
    </div>
  )
}

export default BookDetailPage