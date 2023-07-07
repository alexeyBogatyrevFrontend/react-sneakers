import React, { useContext } from 'react'
import s from './Purchases.module.scss'
import { Link } from 'react-router-dom'
import MyButton from '../components/UI/button/MyButton'
import { AppContext } from '../context/AppContext'
import Card from '../components/card/Card'

const Purchases = () => {
    const {
        purchases,
        addToCart,
        removeFromCart,
        addToFavorites,
        removeFromFavorites,
    } = useContext(AppContext)

    return (
        <div className={s.purchases}>
            <div className="container">
                {purchases.length ? (
                    <>
                        <div className={s.header}>
                            <div className={s.header__item}>
                                <Link to="/main">
                                    <button>
                                        <img
                                            src="/images/back.svg"
                                            alt="back"
                                        />
                                    </button>
                                </Link>
                            </div>
                            <div className={s.header__item}>
                                <h2>Мои покупки</h2>
                            </div>
                        </div>
                        <div className="sneakers">
                            {purchases.map((sneaker) => (
                                <Card
                                    key={sneaker.id}
                                    sneaker={sneaker}
                                    addHandler={addToCart}
                                    removeHandler={removeFromCart}
                                    addToFavorites={addToFavorites}
                                    removeFromFavorites={removeFromFavorites}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className={s.nothing}>
                        <img
                            className={s.nothing__img}
                            src="/images/sadP.png"
                            alt="favorites"
                            width={70}
                            height={70}
                        />
                        <h2 className={s.nothing__title}>У вас нет заказов</h2>
                        <p className={s.nothing__text}>
                            Вы нищеброд? <br /> Оформите хотя бы один заказ.
                        </p>
                        <Link to="/main">
                            <MyButton>
                                <img src="/images/arrow.svg" alt="arrow" />
                                Вернуться назад
                            </MyButton>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Purchases
