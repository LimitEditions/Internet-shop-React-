import {Link} from 'react-router-dom'

function ListPage({productList}) {
    return (  
        <ul>
            {productList.map((product) => (<li key="product.id"><Link to={`/product/${product.id}`}>{product.productName}</Link></li>))}
        
        </ul>
    );
}

export default ListPage;