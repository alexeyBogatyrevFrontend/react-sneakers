import React from 'react'
import s from './Modal.module.scss'

const Modal = ({ modal, setModal, children }) => {
    return (
        <div
            className={modal ? `${s.modal__bg} ${s.active}` : `${s.modal__bg}`}
            onClick={() => setModal(false)}
        >
            <div
                className={
                    modal
                        ? `${s.modal__wrapper} ${s.active}`
                        : `${s.modal__wrapper}`
                }
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal
