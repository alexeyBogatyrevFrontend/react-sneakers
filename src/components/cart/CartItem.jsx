import React from 'react'
import s from './CartItem.module.scss'

const CartItem = ({ sneaker, deleteHandler }) => {
    return (
        <div key={sneaker.id} className={s.item}>
            <div className={s.item__block}>
                <div className={s.item__img}>
                    <img
                        width={70}
                        height={70}
                        src={`/images/sneakers/${sneaker.img}.jpg`}
                        alt="sneakers"
                    />
                </div>
            </div>
            <div className={s.item__block}>
                <h5 className={s.item__title}>{sneaker.name}</h5>
                <span className={s.item__price}>{sneaker.price} руб.</span>
            </div>
            <div className={s.item__block}>
                <button onClick={(e) => deleteHandler(sneaker)}>
                    <img
                        width={32}
                        height={32}
                        src="/images/delete.svg"
                        alt="delete"
                    />
                </button>
            </div>
        </div>
    )
}

export default CartItem
