import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"
import { useState, useContext } from "react"

const ItemDetail = ({id, name, price, category, img, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section className="Info">
                <p className="InfoPrice">${price}</p>
                <p className="InfoStock">Unidades disponibles: {stock} ¡No te quedes sin la tuya!</p>
            </section>
            <footer className="ItemFooter">
                <ItemCount stock={stock} initial={1} onAdd={(quantity) => console.log("Cantidad agregada: ", {quantity} )}/>
            </footer>
        </article>
    )
}

export default ItemDetail

