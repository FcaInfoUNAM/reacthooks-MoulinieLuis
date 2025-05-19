import {useEffect} from "react";
function ProductGrid(){
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data=>console.log(data))
    });
    return(
        <div key="product-grid" className="grid grid-cols-4 place-items-stretch gap-4 p-8 dark:bg-gray-900">      
        
        </div>
    );
}
export default ProductGrid;


//...Importa UseState
import {useState, useEffect} from "react";
  //...Crea la sonstante y el constructor
  const [products, setProducts] = useState([]);
    //...Usa el constructor para asignar a use state los productos
    .then(data=>setProducts(data))
    //... haz un map a la variable d eproductos para generer Cards
    return(
        <div key="product-grid" className="grid grid-cols-4 place-items-stretch gap-4 p-8 dark:bg-gray-900">      
        {products.map(e=><Card key={e.id} title={e.title} paragraph={e.description} image={e.image} model={e.price}/>)}
        </div>
    );
  //..

  