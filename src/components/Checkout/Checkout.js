import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, writeBatch } from "firebase/firestore"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart, } = useContext(CartContext)

    const createOrder = async ({name, phone, email}) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []
        }
    }
}