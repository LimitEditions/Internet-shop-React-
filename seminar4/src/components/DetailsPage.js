import {useParams} from 'react-router-dom';

function DetailsPage({productList}) {
    const {id} = useParams();
    const product = productList.find((product) => product.id === parseInt(id));
    if(!product){
        return ( 
            <div>Продукт не найден</div>
        );
    }else{
        return(
            <div>
                <h3>Описание</h3>
                <p>{product.productName}</p>
                <img style={{width:'400px', height:"300px"}}src={product.img} alt="Product" />
            </div>
        )
    }
}

export default DetailsPage;