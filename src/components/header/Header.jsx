import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'

const Header = ({ setModal, total }) => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.header__wrapper}>
                    <Link to="/main">
                        <div className={s.header__item}>
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
                    </Link>
                    <div className={s.header__item}>
                        <ul className={s.header__list}>
                            <li
                                className={s.header__listItem}
                                onClick={() => setModal(true)}
                            >
                                <img src="/images/cart.svg" alt="cart" />

                                <span>
                                    {total.toLocaleString().replace(',', ' ')}{' '}
                                    руб.
                                </span>
                            </li>
                            <li className={s.header__listItem}>
                                <Link to="/favorites">
                                    <img
                                        src="/images/favorites.svg"
                                        alt="user"
                                    />
                                </Link>
                            </li>
                            <li className={s.header__listItem}>
                                <Link to="purchases">
                                    <img src="/images/user.svg" alt="user" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
