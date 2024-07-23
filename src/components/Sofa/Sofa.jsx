import React, { useState } from 'react'
import s from './Sofa.module.sass'
import axios from '../../axios'
function Sofa() {
  const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const[formStatus, setFormStatus] = useState(false)

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const closeForm = () => {
        let form = document.querySelector("#form1");
        form.style.display = "none"
    }

    const openForm = () => {
        let form = document.querySelector("#form1");
        form.style.display = "flex"
        const status = localStorage.getItem('setFormStatus');
        if(status == 'true'){
            setFormStatus(true)
        }
    }

    

    const sendForm = async () => {
            let message = `Имя: ${name}, Телефон: ${phone}`;

            const response = await fetch(`https://api.telegram.org/bot7315336463:AAFoF6WzGrOwzeyV-b6Tt5ZGAILuHGlGGyc/sendMessage?chat_id=-4199636377&text=${message}`)
            console.log(response)
            closeForm()
            localStorage.setItem('setFormStatus', true)
    }

    
  return (
    <div className={s.questionBlock}>
      <div className={s.form} id='form1'>
                {
                    formStatus == false ? 
                    <>
                    <img onClick={closeForm} src="https://cdn-icons-png.flaticon.com/512/70/70091.png" alt="" />
                    <input onChange={(e) => {handleChangeName(e)}} type="text" placeholder='Ваше имя' />
                    <input onChange={(e) => {handleChangePhone(e)}} type="text" placeholder='Ваш номер телефона' />
                    <button onClick={sendForm}>Заказать звонок</button>
                    </> : <div className={s.successBlock}>
                        <img onClick={closeForm} className={s.closeButton} src="https://cdn-icons-png.flaticon.com/512/70/70091.png" alt="" />
                        <p>Ваша заявка принята</p>
                        <img className={s.gif} src="https://www.icegif.com/wp-content/uploads/2023/08/icegif-727.gif" alt="" />
                    </div>
                }
            </div>
    <div className={s.left}>
      <div className={s.title}>Остались вопросы? Позвоните нам!</div>
      <div className={s.phone}>
        <img src="/icons/phone (1).png" alt="" />
        <div className={s.phoneText} onClick={() => {window.location.href = "tel:+74957419996"}}>+7 (495) 741-99-96</div>
      </div>
      <div className={s.email}>
        <img src="/icons/mail.png" alt="" />
        <div className={s.emailText} onClick={() => {window.location.href = "https://mail.ru/"}}>info@mail.ru</div>
      </div>
      <button  onClick={openForm}>заказать звонок</button>
    </div>

    <img className={s.right} src="/information/sofa.png" alt="" />
  </div>
  )
}

export default Sofa