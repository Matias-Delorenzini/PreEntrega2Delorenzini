import "./Item.css"
import { Link } from 'react-router-dom';

const Item = ({id, name, price, stock, img}) => {

    return (
        <article className="CardItem">
            <Link to={`/item/${id}`}>{name}
            <header className="Header">
                <h2 className="ItemHeader">
                    
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Unidades disponibles: {stock}
                </p>
            </section>
            </Link>
        </article>
    )
}

export default Item