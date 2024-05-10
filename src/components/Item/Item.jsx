import React from 'react'
import s from './Item.module.sass'

function Item({img, name}) {
  return (
    <div className={s.container}>
        <img className={s.top} src={img} alt="mainImage" />

        <div className={s.bottom}>
            <div className={s.nameSide}>
                <p>{name}</p>
                <img className={s.heart} src="/icons/heart.png" alt="cart" />
            </div>

            <div className={s.buttonSide}>
                <button>узнать цену</button>
                <img className={s.card} src="/icons/cart.png" alt="cart" />
            </div>
        </div>
    </div>
  )
}

export default Item