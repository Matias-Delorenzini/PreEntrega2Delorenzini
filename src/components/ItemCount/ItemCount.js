import React from 'react';
import { useState } from 'react';
import "./ItemCount.css"



function ItemCount({ stock, onAddToCart }) {
    const [clickCount, setClickCount] = useState(1);

    function handleClickAdd() {
        if (clickCount === stock) {
        } else {
            setClickCount(clickCount + 1);
        }
    }

    function handleClickSub() {
        if (clickCount > 1) {
            setClickCount(clickCount - 1);
        }
    }

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="item-count-container"
            >
                <button
                    disabled={stock === 0}
                    className="item-count-button"
                    onClick={handleClickSub}
                >
                    -
                </button>
                <h2 className="count-text">{clickCount}</h2>
                <button
                    disabled={stock === 0}
                    className="item-count-button"
                    onClick={handleClickAdd}
                >
                    +
                </button>
            </div>

            <button
                onClick={() => onAddToCart(clickCount)} 
                className="item-count-button add-to-cart-button"
            >
                <h4>Añadir al carrito</h4>
            </button>
        </div>
    );
}

export default ItemCount;


