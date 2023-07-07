import React, { useState } from 'react'

import Card from '../components/card/Card'
import { sneakers } from '../store'

const Main = ({
    addToCart,
    removeFromCart,
    addToFavorites,
    removeFromFavorites,
}) => {
    const [search, setSearch] = useState('')

    return (
        <main className="main">
            <div className="container">
                <div className="main__header">
                    <h1>Все кроссовки</h1>
                    <div className="search-block">
                        <img src="/images/search.svg" alt="search" />
                        <input
                            type="text"
                            placeholder="Поиск..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                <div className="sneakers">
                    {sneakers.length ? (
                        sneakers
                            .filter((sneaker) =>
                                sneaker.name
                                    .toLocaleLowerCase()
                                    .includes(search.toLocaleLowerCase())
                            )
                            .map((sneaker) => (
                                <Card
                                    key={sneaker.id}
                                    sneaker={sneaker}
                                    addHandler={addToCart}
                                    removeHandler={removeFromCart}
                                    addToFavorites={addToFavorites}
                                    removeFromFavorites={removeFromFavorites}
                                />
                            ))
                    ) : (
                        <h2>Таких кроссовок не найдено</h2>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Main
