import React, { useState } from 'react'
import s from './Footer.module.sass'
import { Link } from 'react-router-dom'

import axios from '../../axios'

function Footer() {
    const animationContacts = () => {
        let block = document.querySelector('#contactBlock')
        block.style.transition = '.5s';
            block.style.background = "teal"
            setTimeout(() => {
                block.style.background = "none"
            }, 1000)
    }

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
        let form = document.querySelector("#form");
        form.style.display = "none"
    }

    const openForm = () => {
        let form = document.querySelector("#form");
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
        <div className={s.container}>
            <div className={s.form} id='form'>
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
            <div className={s.innerContainer}>
                <div className={s.logoBlock}>
                    <img src="/logo192.png" alt="logo" />
                    <Link to={'/policyPage'} className={s.link}>политика конфиденциальности и соглашение на обработку персональных данных</Link>
                </div>

                <div className={s.menuBlock}>
                    <p>меню</p>
                    <Link className={s.link} to={'/fabrics'} onClick={() => window.scrollTo(0, 0)}>фабрики</Link>
                    <Link className={s.link} to={'/payment'} onClick={() => window.scrollTo(0, 0)}>оплата</Link>
                    <Link className={s.link} to={'/delivery'} onClick={() => window.scrollTo(0, 0)}>доставка</Link>
                    <Link className={s.link} to={'/aboutcompany'} onClick={() => window.scrollTo(0, 0)}>о компании</Link>
                    <Link className={s.link} to={'/partnership'} onClick={() => window.scrollTo(0, 0)}>сотрудничество</Link>
                    <Link className={s.link} to={'/reviews'} onClick={() => window.scrollTo(0, 0)}>отзывы</Link>
                    <Link className={s.link} onClick={animationContacts}>контакты</Link>
                    <Link className={s.link} to={'/'} onClick={() => window.scrollTo(0, 0)}>новости</Link>
                </div>
                <div className={s.catalogBlock}>
                    <p>каталог</p>
                    <Link className={s.link} to={'/optionItem/гостиные'} onClick={() => window.scrollTo(0, 0)}>гостиные</Link>
                    <Link className={s.link} to={'/optionItem/мягкая мебель'} onClick={() => window.scrollTo(0, 0)}>мягкая мебель</Link>
                    <Link className={s.link} to={'/optionItem/детская мебель'} onClick={() => window.scrollTo(0, 0)}>детская мебель</Link>
                    <Link className={s.link} to={'/optionItem/кухни'} onClick={() => window.scrollTo(0, 0)}>кухни</Link>
                    <Link className={s.link} to={'/optionItem/мебель для ванны'} onClick={() => window.scrollTo(0, 0)}>мебель для ванны</Link>
                    <Link className={s.link} to={'/optionItem/люстры'} onClick={() => window.scrollTo(0, 0)}>люстры</Link>
                    <Link className={s.link} to={'/optionItem/шторы'} onClick={() => window.scrollTo(0, 0)}>шторы</Link>
                    <Link className={s.link} to={'/optionItem/вазы'} onClick={() => window.scrollTo(0, 0)}>вазы</Link>
                </div>
                <div className={s.contactBlock}>
                    <p>контакты</p>
                    <div className={s.phone}  id='contactBlock'>
                        <img src="/icons/phone (2).png" alt="" />
                        <p onClick={() => {window.location.href = "tel:+79153342307"}}>+7 (915) 334-23-07</p>
                    </div>
                    <div className={s.email}>
                        <img src="/icons/mail (1).png" alt="" />
                        <p>info@mail.ru</p>
                    </div>

                    <p className={s.graphText}>график работы</p>
                    <div className={s.time}>
                        <img src="/icons/Time Square.png" alt="time" />
                        <p>с 10 до 20:00 без выходных</p>
                    </div>
                </div>
                <div className={s.socialBlock}>
                    <p className={s.title}>мы в соц сетях</p>
                    <div className={s.vk}>
                        <img src="/icons/VK.png" alt="" />
                        <p>hermitage.vk.com</p>
                    </div>
                    <div className={s.tg}>
                        <img src="/icons/tg.png" alt="" />
                        <p>hermitage.telegram</p>
                    </div>
                    <div className={s.whatsapp}>
                        <img src="/icons/вот сап.png" alt="" />
                        <p>hermitage.whatsapp</p>
                    </div>
                    <img src="/logo192.png" alt='logo' className={s.logoMobile}></img>

                </div>
                <div className={s.inputBlock}>
                    {/* <p className={s.title}>подписаться на рассылку</p>
                    <div className={s.inputBlock1}>
                        <input type="text" placeholder='email' />
                        <button><img src="/icons/arrow.png" alt="arrow" /></button>
                    </div> */}
                    <p className={s.title1}>мы вам перезвоним</p>
                    <button onClick={openForm} className={s.phoneOrder}>заказать звонок</button>
                </div>


            </div>

        </div>
    )
}

export default Footer