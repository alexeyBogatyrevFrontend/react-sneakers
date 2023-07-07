import React, { useContext } from 'react'
import s from './Favorites.module.scss'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Card from '../components/card/Card'
import MyButton from '../components/UI/button/MyButton'

const Favorites = () => {
    const {
        favorites,
        addToCart,
        removeFromCart,
        addToFavorites,
        removeFromFavorites,
    } = useContext(AppContext)

    return (
        <div className={s.favorites}>
            <div className="container">
                {favorites.length ? (
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
                                <h2>Мои закладки</h2>
                            </div>
                        </div>
                        <div className="sneakers">
                            {favorites.map((sneaker) => (
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
                            src="/images/sad.png"
                            alt="favorites"
                            width={70}
                            height={70}
                        />
                        <h2 className={s.nothing__title}>Закладок нет :(</h2>
                        <p className={s.nothing__text}>
                            Вы ничего не добавляли в закладки
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

export default Favorites
