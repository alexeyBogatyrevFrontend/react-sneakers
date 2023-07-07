import React, { useContext, useState } from 'react'
import s from './Cart.module.scss'
import { AppContext } from '../../context/AppContext'
import CartItem from './CartItem'
import MyButton from '../UI/button/MyButton'
import Loading from '../loading/Loading'

const Cart = ({ setModal, removeHandler }) => {
    const { cart, setCart, total, setTotal, setPurchases } =
        useContext(AppContext)
    const [isOrderDone, setIsOrderDone] = useState(false)

    // const deleteFromCart = (sneaker) => {
    //     setCart(cart.filter((item) => item.id !== sneaker.id))
    //     setTotal((prev) => prev - sneaker.price)
    // }

    const placeAnOrder = () => {
        setPurchases((prev) => [...prev, ...cart])
        setCart([])
        setTotal(0)
        setIsOrderDone(true)
    }

    const tax = Math.ceil((total / 100) * 5)

    return (
        <>
            <div className={s.header}>
                <h2 className={s.title}>Корзина</h2>
                <button
                    className={s.close}
                    onClick={() => {
                        setModal(false)
                        setIsOrderDone(false)
                    }}
                >
                    <img
                        width={32}
                        height={32}
                        src="/images/delete.svg"
                        alt=""
                    />
                </button>
            </div>

            {isOrderDone ? (
                <div className={s.empty}>
                    <img
                        width={83}
                        height={120}
                        src="/images/orderDone.jpg"
                        alt="empty-cart"
                        style={{ margin: '0 0 20px 0' }}
                    />
                    <h2 className={s.sub__title} style={{ color: '#87C20A' }}>
                        Заказ оформлен!
                    </h2>
                    <p className={s.text}>
                        Ваш заказ скоро будет передан курьерской доставке
                    </p>

                    <MyButton
                        onClick={() => {
                            setModal(false)
                            setIsOrderDone(false)
                        }}
                    >
                        <img
                            width={14}
                            height={12}
                            src="/images/arrow.svg"
                            alt="arrow"
                        />
                        Вернуться назад
                    </MyButton>
                </div>
            ) : (
                <>
                    <div className={s.list}>
                        {cart.length ? (
                            cart.map((sneaker) => (
                                <CartItem
                                    key={sneaker.id}
                                    sneaker={sneaker}
                                    deleteHandler={removeHandler}
                                />
                            ))
                        ) : (
                            <div className={s.empty}>
                                <img
                                    width={120}
                                    height={120}
                                    src="/images/empty-cart.jpg"
                                    alt="empty-cart"
                                    style={{ margin: '0 0 20px 0' }}
                                />
                                <h2 className={s.sub__title}>Корзина пустая</h2>
                                <p className={s.text}>
                                    Добавьте хотя бы одну пару кроссовок, чтобы
                                    сделать заказ.
                                </p>

                                <MyButton onClick={() => setModal(false)}>
                                    <img
                                        width={14}
                                        height={12}
                                        src="/images/arrow.svg"
                                        alt="arrow"
                                    />
                                    Вернуться назад
                                </MyButton>
                            </div>
                        )}
                    </div>
                    {cart.length ? (
                        <div className={s.footer}>
                            <div className={s.footer__item}>
                                <span>Итого: </span>
                                <b>
                                    {total.toLocaleString().replace(',', ' ')}{' '}
                                    руб.{' '}
                                </b>
                            </div>
                            <div className={s.footer__item}>
                                <span>Налог 5%: </span>
                                <b>
                                    {tax.toLocaleString().replace(',', ' ')}{' '}
                                    руб.
                                </b>
                            </div>
                            <MyButton
                                style={{ width: '100%' }}
                                onClick={placeAnOrder}
                            >
                                Оформить заказ
                                <img
                                    width={14}
                                    height={12}
                                    style={{ transform: 'rotate(180deg)' }}
                                    src="/images/arrow.svg"
                                    alt="arrow"
                                />
                            </MyButton>
                        </div>
                    ) : (
                        <></>
                    )}
                </>
            )}
        </>
    )
}

export default Cart
