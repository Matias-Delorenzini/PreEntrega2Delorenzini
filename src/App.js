import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout"
import OrderConfirm from "./components/OrderConfirm/OrderConfirm";



function App() {
    return (
        <div className="app-body">
            <CartContextProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:categoryId"element={<ItemListContainer />}/>
                        <Route path="/prueba" element={<h1>Prueba</h1>} />
                        <Route path="/product/:id" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="/checkout" element={<Checkout/>}/>
                        <Route path="/order-confirmation/:id" element={ <OrderConfirm/>}/>
                        <Route path="*" element={<h1>Página no encontrada: 404</h1>} />
                    </Routes>
                </BrowserRouter>
            </CartContextProvider>
        </div>
    );
}

export default App;
