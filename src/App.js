import React, { useState } from 'react'
import { AppContext } from './context/AppContext'
import Cart from './components/cart/Cart'
import Modal from './components/UI/modal/Modal'
import Header from './components/header/Header'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Favorites from './pages/Favorites'
import Purchases from './pages/Purchases'

const App = () => {
    const [cart, setCart] = useState([])
    const [favorites, setFavorites] = useState([])
    const [purchases, setPurchases] = useState([])
    const [total, setTotal] = useState(0)
    const [modal, setModal] = useState(false)

    // const [check, setCheck] = useState(false)

    const addToCart = (sneaker) => {
        setCart((prev) => [...prev, sneaker])
        setTotal((prev) => prev + sneaker.price)
    }

    const removeFromCart = (sneaker) => {
        setCart(cart.filter((item) => item.id !== sneaker.id))
        setTotal((prev) => prev - sneaker.price)
    }

    const isAddedToCart = (id) => {
        return cart.some((obj) => obj.id === id)
    }

    const addToFavorites = (sneaker) => {
        setFavorites((prev) => [...prev, sneaker])
    }

    const removeFromFavorites = (sneaker) => {
        setFavorites(favorites.filter((item) => item.id !== sneaker.id))
    }

    const isAddedToFavorites = (id) => {
        return favorites.some((obj) => obj.id === id)
    }

    return (
        <AppContext.Provider
            value={{
                cart,
                setCart,
                favorites,
                setFavorites,
                purchases,
                setPurchases,
                total,
                setTotal,
                isAddedToCart,
                isAddedToFavorites,
                addToCart,
                removeFromCart,
                addToFavorites,
                removeFromFavorites,
            }}
        >
            <BrowserRouter>
                <div className="wrapper">
                    <Modal modal={modal} setModal={setModal}>
                        <Cart
                            setModal={setModal}
                            removeHandler={removeFromCart}
                        />
                    </Modal>
                    <Header setModal={setModal} total={total} />
                    <Routes>
                        <Route
                            path="/main"
                            element={
                                <Main
                                    cart={cart}
                                    setCart={setCart}
                                    total={total}
                                    setTotal={setTotal}
                                    modal={modal}
                                    setModal={setModal}
                                    addToCart={addToCart}
                                    removeFromCart={removeFromCart}
                                    addToFavorites={addToFavorites}
                                    removeFromFavorites={removeFromFavorites}
                                />
                            }
                            exact
                        />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/purchases" element={<Purchases />} />
                        <Route
                            path="*"
                            element={<Navigate replace to="/main" />}
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App
