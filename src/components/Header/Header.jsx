import React, { useRef, useState } from 'react'
import s from './Header.module.sass'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Select from '../Select/Select'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGoods } from '../../redux/slices/goods'
import { findItems } from '../../redux/slices/find'



function Header(){ 

    const navigate = useNavigate()
    const { data } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const bigInputRef = useRef()
    const location = useLocation()

    const [activeMenu, setActiveMenu] = useState(false)

    const linksList = [
        {
            mainText: "спальни",
            options: ["гостиные", "мягкая мебель", "детская мебель", "кухни", "мебель для ванны"]
        },
        {
            mainText: "гостиные"
        },
        {
            mainText: "мягкая мебель"
        },
        {
            mainText: "детская мебель"
        },
        {
            mainText: "прихожие"
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
            options: ["посуда", "декор", "картины"]
        }
    ]

    const onLogin = () => {
        if(data){
            navigate(`/mycabinet/${data._id}`)
        }else{
            navigate('/login')
        }
    }

    const findItem = () => {
        if(location !== '/catalog'){
            navigate('/catalog')
        }
        bigInputRef.current.focus()

    }

    const toggleBurgerMenu =( ) => {
        setActiveMenu(prev => !prev)
    }

    const handleSubmitFind = () => {
        dispatch(fetchGoods())
        .then(data => data.payload)
        .then(res => {
            const inputVal = bigInputRef.current.value.toLowerCase()
            const filteredItems = res.filter((elem) => elem.title.toLowerCase().startsWith(inputVal))
            dispatch(findItems(filteredItems))
        }
        )
    }

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    }

  return (
    <div className={s.container}>
        <div className={s.innerContainer}>
        {
                    activeMenu &&
                    <div className={s.burgerMenu}>
                        <div className={s.navbar1}>

                            <img className={s.closeIcon} onClick={toggleBurgerMenu} src="/closeIcon.png" alt="" />
                            <img className={s.logo} src="/logo192.png" alt="" />
                            <Link onClick={toggleBurgerMenu} className={s.link1} to={'/fabrics'}>фабрики</Link>
                            <Link onClick={toggleBurgerMenu} to={'/payment'} className={s.link1}>оплата</Link>
                            <Link onClick={toggleBurgerMenu} to={'/delivery'} className={s.link1}>доставка</Link>
                            <Link onClick={toggleBurgerMenu} to={'/aboutcompany'} className={s.link1}>о компании</Link>
                            <Link onClick={toggleBurgerMenu} to={'/partnership'} className={s.link1}>сотрудничество</Link>
                            <Link onClick={toggleBurgerMenu} to={'/reviews'} className={s.link1}>отзывы</Link>
                            <Link onClick={() => {toggleBurgerMenu(); scrollToBottom()}}  className={s.link1}>контакты</Link>
                            <Link onClick={toggleBurgerMenu} to={'/optionitem/Специальное предложение'} className={s.link1}>новости</Link>
                        </div>
                    </div> 
                }
            <div className={s.navigationSide}>
                <div className={s.adres} style={{fontSize: '12px'}}>
                Москва, ул.Нижняя сыромятническая д.10, стр 2
                </div>
                <div className={s.navbar}>
                    <Link className={s.link} to={'/fabrics'}>фабрики</Link>
                    <Link className={s.link} to={'/payment'}>оплата</Link>
                    <Link className={s.link} to={'/delivery'}>доставка</Link>
                    <Link className={s.link} to={"/aboutcompany"}>о компании</Link>
                    <Link className={s.link} to={"/partnership"}>сотрудничество</Link>
                    <Link className={s.link} to={"/reviews"}>отзывы</Link>
                    <Link className={s.link} onClick={scrollToBottom}>контакты</Link>
                    <Link className={s.link} to={"/optionitem/Специальное предложение"}>новости</Link>
                </div>
                
                <div className={s.phone}>
                    <img style={{cursor: "pointer"}}  onClick={() => {window.location.href = 'tel:+79153342307'}} className={s.phoneIcon} src="/icons/phone.png" alt="" />
                    <p  style={{cursor: "pointer"}} onClick={() => {window.location.href = 'tel:+79153342307'}}>+7 (915) 334-23-07</p>
                    <img onClick={onLogin} className={s.loginIcon} src="https://cdn-icons-png.flaticon.com/512/4360/4360835.png" alt="" />
                    <img onClick={toggleBurgerMenu} className={s.burgerMenuBtn} src="/icons/burger-menu.png" alt="" />
                </div>


            </div>

            <div className={s.filterSide}>
                <div className={s.top}>
                    <img  className={s.logo} onClick={() => navigate('/')} src="/logo192.png" alt="" />
                    <div className={s.inputSide}>
                        <input
                        type="text"
                        onClick={findItem}
                        ref={bigInputRef}
                        className={s.bigInput} />
                        <img onClick={handleSubmitFind} src="/icons/findIcon.png" alt="" className={s.findIcon} />
                    </div>
                    <div className={s.icons}>
                        <div className={s.block} onClick={() => navigate('/optionitem/наши работы')}>
                            <img src="/icons/sofa.png" alt="" />
                            <p>наши работы</p>
                        </div>
                        <div className={s.block} onClick={() => navigate('/favouriteItems')}>
                            <img src="/icons/heart.png" alt="" />
                            <p>избранное</p>
                        </div>
                        <div className={s.block} onClick={() => {navigate('/cart')}}>
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

                <div className={s.iconsMobile}>
                        <div className={s.block} onClick={() => navigate('/optionitem/наши работы')}>
                            <img src="/icons/sofa.png" alt="" />
                            <p>наши работы</p>
                        </div>
                        <div className={s.block} onClick={() => navigate('/favouriteItems')}>
                            <img src="/icons/heart.png" alt="" />
                            <p>избранное</p>
                        </div>
                        <div className={s.block} onClick={() => {navigate('/cart')}}>
                            <img src="/icons/cart.png" alt="" />
                            <p>корзина</p>
                        </div>
                    </div>
            </div>
        </div>  
    </div>
  )
}

export default Header