import React from 'react'
import s from './Cart.module.sass'

function CartPage() {
  return (
    <div className={s.container}>
        <div className={s.innerContainer}>
            <div className={s.path}>
                <p>Главная</p>
                <img src="/icons/blakcArrowRight.png" alt="" />
                <p>Спальня</p>
                <img src="/icons/blakcArrowRight.png" alt="" />
                <p>Итальянская спальня</p>
                <img src="/icons/blakcArrowRight.png" alt="" />
                <p>Корзина</p>
            </div>


            <div className={s.mainCart}>
                <div className="left">

                </div>

                <div className="right">
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default CartPage