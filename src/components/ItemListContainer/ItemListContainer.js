import { useState, useEffect } from "react";
import getData from "../../services/asyncMock";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
    console.log("Renderizamos item list container");
    const [products, setProducts] = useState([]);

    async function requestProducts() {
        const respuesta = await getData();
        setProducts(respuesta);
    }

    useEffect(() => {
        console.log("Montaje ILC");
        requestProducts();
    }, []);

    return (
        <div>
            <ItemList products={products}></ItemList>
        </div>
    );
}

export default ItemListContainer;