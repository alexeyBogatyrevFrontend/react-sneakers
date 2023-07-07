import React, { useContext } from 'react'
import s from './Card.module.scss'
import { AppContext } from '../../context/AppContext'

const Card = ({
    sneaker,
    addHandler,
    removeHandler,
    addToFavorites,
    removeFromFavorites,
}) => {
    const { isAddedToCart, isAddedToFavorites } = useContext(AppContext)

    return (
        <div className={s.card}>
            <button
                className={s.card__like}
                onClick={() =>
                    isAddedToFavorites(sneaker.id)
                        ? removeFromFavorites(sneaker)
                        : addToFavorites(sneaker)
                }
            >
                <img
                    width={32}
                    height={32}
                    src={`/images/${
                        isAddedToFavorites(sneaker.id)
                            ? 'heart-active'
                            : 'heart'
                    }.svg`}
                    alt="heart"
                />
            </button>
            <img
                width={133}
                height={112}
                src={`/images/sneakers/${sneaker.img}.jpg`}
                alt="sneakers"
            />
            <h5>{sneaker.name}</h5>
            <div className={s.card__footer}>
                <div className={s.card__price}>
                    <span>Цена:</span>
                    <b>
                        {sneaker.price.toLocaleString().replace(',', ' ')} руб.
                    </b>
                </div>
                <button
                    className={s.card__button}
                    onClick={() =>
                        isAddedToCart(sneaker.id)
                            ? removeHandler(sneaker)
                            : addHandler(sneaker)
                    }
                >
                    <img
                        width={32}
                        height={32}
                        src={`/images/${
                            isAddedToCart(sneaker.id) ? 'checked' : 'plus'
                        }.svg`}
                        alt="plus"
                    />
                </button>
            </div>
        </div>
    )
}

export default Card
