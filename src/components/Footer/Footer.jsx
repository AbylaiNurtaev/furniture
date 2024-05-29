import React from 'react'
import s from './Footer.module.sass'
import { Link } from 'react-router-dom'



function Footer() {
    return (
        <div className={s.container}>
            <div className={s.innerContainer}>
                <div className={s.logoBlock}>
                    <img src="/logo192.png" alt="logo" />
                    <Link className={s.link}>политика конфиденциальности</Link>
                    <Link className={s.link}>соглашение на обработку персональных данных</Link>
                </div>

                <div className={s.menuBlock}>
                    <p>меню</p>
                    <Link className={s.link}>фабрики</Link>
                    <Link className={s.link}>оплата</Link>
                    <Link className={s.link}>доставка</Link>
                    <Link className={s.link}>о компании</Link>
                    <Link className={s.link}>сотрудничество</Link>
                    <Link className={s.link}>отзывы</Link>
                    <Link className={s.link}>контакты</Link>
                    <Link className={s.link}>новости</Link>
                </div>
                <div className={s.catalogBlock}>
                    <p>каталог</p>
                    <Link className={s.link}>мебель со склада</Link>
                    <Link className={s.link}>спальни</Link>
                    <Link className={s.link}>гостиные</Link>
                    <Link className={s.link}>мягкая мебель</Link>
                    <Link className={s.link}>детские</Link>
                    <Link className={s.link}>кухни</Link>
                    <Link className={s.link}>мебель для ванны</Link>
                    <Link className={s.link}>свет</Link>
                    <Link className={s.link}>текстиль</Link>
                    <Link className={s.link}>аксессуары</Link>
                    <Link className={s.link}>специальное предложение</Link>
                </div>
                <div className={s.contactBlock}>
                    <p>контакты</p>
                    <div className={s.phone}>
                        <img src="/icons/phone (2).png" alt="" />
                        <p>+7 (495) 741-99-96</p>
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
                    <button className={s.phoneOrder}>заказать звонок</button>
                </div>


            </div>

        </div>
    )
}

export default Footer