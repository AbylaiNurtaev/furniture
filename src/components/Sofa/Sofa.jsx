import React from 'react'
import s from './Sofa.module.sass'

function Sofa() {
  return (
    <div className={s.questionBlock}>
    <div className={s.left}>
      <div className={s.title}>Остались вопросы? Позвоните нам!</div>
      <div className={s.phone}>
        <img src="/icons/phone (1).png" alt="" />
        <div className={s.phoneText}>+7 (495) 741-99-96</div>
      </div>
      <div className={s.email}>
        <img src="/icons/mail.png" alt="" />
        <div className={s.emailText}>info@mail.ru</div>
      </div>
      <button>заказать звонок</button>
    </div>

    <img className={s.right} src="/information/sofa.png" alt="" />
  </div>
  )
}

export default Sofa