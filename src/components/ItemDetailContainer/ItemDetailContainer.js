import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import getData from '../../services/asyncMock';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect(() => {
        async function requestProduct() {
            const respuesta = await getData(id);
            setProduct(respuesta);
        }
        
        requestProduct();
    }, [id]);

    function handleAddToCart(clickCount) {
        alert(`Agregaste ${clickCount} unidades de ${product.title} al carrito`)
    }

    return (
        <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {product.name}
            </h2>
        </header>
        <picture>
            <img src={product.img} alt={product.name} className="ItemImg"/>
        </picture>
        <section className="Info">
            <p className="InfoPrice">${product.price}</p>
            <p className="InfoStock">Unidades disponibles: {product.stock} ¡No te quedes sin la tuya!</p>
        </section>
        <footer className="ItemFooter">
            <ItemCount stock={product.stock} initial={1} onAddTocart={handleAddToCart}/>
        </footer>
    </article>
);
}

export default ItemDetailContainer;
