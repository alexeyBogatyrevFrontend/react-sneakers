import React from 'react'

const App = () => {
    return (
        <div className="wrapper">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__item">
                            <img
                                width={40}
                                height={40}
                                src="/images/logo.png"
                                alt="logo"
                            />
                            <div>
                                <h3>REACT SNEAKERS</h3>
                                <p>Магазин лучших кроссовок</p>
                            </div>
                        </div>
                        <div className="header__item">
                            <ul className="header__list">
                                <li className="header__list-item">
                                    <img src="/images/cart.svg" alt="cart" />

                                    <span>1205 руб.</span>
                                </li>
                                <li className="header__list-item">
                                    <img src="/images/user.svg" alt="user" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <main className="main">
                <div className="container">
                    <h1>Все кроссовки</h1>
                    <div className="sneakers">
                        <div className="card">
                            <img
                                width={133}
                                height={112}
                                src="/images/sneakers/1.jpg"
                                alt="sneakers"
                            />
                            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                            <div className="card__footer">
                                <div className="card__price">
                                    <span>Цена:</span>
                                    <b>12 999 руб.</b>
                                </div>
                                <button className="card__button">
                                    <img
                                        width={11}
                                        height={11}
                                        src="/images/plus.svg"
                                        alt="plus"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                width={133}
                                height={112}
                                src="/images/sneakers/2.jpg"
                                alt="sneakers"
                            />
                            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                            <div className="card__footer">
                                <div className="card__price">
                                    <span>Цена:</span>
                                    <b>12 999 руб.</b>
                                </div>
                                <button className="card__button">
                                    <img
                                        width={11}
                                        height={11}
                                        src="/images/plus.svg"
                                        alt="plus"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                width={133}
                                height={112}
                                src="/images/sneakers/3.jpg"
                                alt="sneakers"
                            />
                            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                            <div className="card__footer">
                                <div className="card__price">
                                    <span>Цена:</span>
                                    <b>12 999 руб.</b>
                                </div>
                                <button className="card__button">
                                    <img
                                        width={11}
                                        height={11}
                                        src="/images/plus.svg"
                                        alt="plus"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                width={133}
                                height={112}
                                src="/images/sneakers/4.jpg"
                                alt="sneakers"
                            />
                            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                            <div className="card__footer">
                                <div className="card__price">
                                    <span>Цена:</span>
                                    <b>12 999 руб.</b>
                                </div>
                                <button className="card__button">
                                    <img
                                        width={11}
                                        height={11}
                                        src="/images/plus.svg"
                                        alt="plus"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <img
                                width={133}
                                height={112}
                                src="/images/sneakers/5.jpg"
                                alt="sneakers"
                            />
                            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
                            <div className="card__footer">
                                <div className="card__price">
                                    <span>Цена:</span>
                                    <b>12 999 руб.</b>
                                </div>
                                <button className="card__button">
                                    <img
                                        width={11}
                                        height={11}
                                        src="/images/plus.svg"
                                        alt="plus"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
