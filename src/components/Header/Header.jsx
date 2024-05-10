import React from 'react'
import s from './Header.module.sass'
import { Link, useNavigate } from 'react-router-dom'
import Select from '../Select/Select'



function Header(){ 

    const navigate = useNavigate()

    const linksList = [
        {
            mainText: "мебель со склада",
        },
        {
            mainText: "спальни",
            options: ["гостиные", "мягкая мебель", "детские", "кухни", "мебель для ванны"]
        },
        {
            mainText: "гостиные"
        },
        {
            mainText: "мягкая мебель"
        },
        {
            mainText: "детские"
        },
        {
            mainText: "кухни"
        },
        {
            mainText: "мебель для ванны"
        },
        {
            mainText: "свет",
            options: ["люстры", "бра"]

        },
        {
            mainText: "текстиль",
            options: ["шторы", "постельное белье", "для сервировки стола"]
        },
        {
            mainText: "аксессуары",
            options: ["вазы", "посуда", "декор", "картины"]
        },
        {
            mainText: "Специальное предложение"
        },
    ]

  return (
    <div className={s.container}>
        <div className={s.innerContainer}>
            <div className={s.navigationSide}>
                <div className={s.adres}>
                    г. Москва, Заморенова, 5/1
                </div>
                <div className={s.navbar}>
                    <Link className={s.link} to={'/fabrics'}>фабрики</Link>
                    <Link className={s.link}>оплата</Link>
                    <Link className={s.link}>доставка</Link>
                    <Link className={s.link}>о компании</Link>
                    <Link className={s.link}>сотрудничество</Link>
                    <Link className={s.link}>отзывы</Link>
                    <Link className={s.link}>контакты</Link>
                    <Link className={s.link}>новости</Link>
                </div>
                
                <div className={s.phone}>
                    <img src="/icons/phone.png" alt="" />
                    <p>+7 (495) 741-99-96</p>
                </div>
            </div>

            <div className={s.filterSide}>
                <div className={s.top}>
                    <img  className={s.logo} onClick={() => navigate('/')} src="/logo192.png" alt="" />
                    <input type="text" />
                    <div className={s.icons}>
                        <div className={s.block}>
                            <img src="/icons/sofa.png" alt="" />
                            <p>наши работы</p>
                        </div>
                        <div className={s.block}>
                            <img src="/icons/heart.png" alt="" />
                            <p>избранное</p>
                        </div>
                        <div className={s.block}>
                            <img src="/icons/cart.png" alt="" />
                            <p>корзина</p>
                        </div>
                    </div>
                </div>
                <div className={s.bottom}>
                    {
                        linksList.map((link, index) => (
                            <Select key={index} mainText={link.mainText} options={link.options}></Select>
                        ))
                    }
                </div>  
            </div>
        </div>  
    </div>
  )
}

export default Header