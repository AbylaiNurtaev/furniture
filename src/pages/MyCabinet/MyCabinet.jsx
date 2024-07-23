import React, { useEffect, useState } from 'react'
import s from './MyCabinet.module.sass'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchAuthMe, fetchLogin } from '../../redux/slices/auth'
import { fetchGoods } from '../../redux/slices/goods'
import Item from '../../components/Item/Item'

function MyCabinet() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const[userInfo, setUserInfo] = useState({})
    const[favouriteItems, setFavouriteItems] = useState()
    const[cartItems, setCartItems] = useState()

    useEffect(() => {
        dispatch(fetchAuthMe())
        .then(data => {
            setUserInfo(data.payload)
            return {
                favouriteItems: data.payload.favouriteItems,
                cartItems: data.payload.cart
            }
    })
        .then(({favouriteItems, cartItems}) => {
            dispatch(fetchGoods())
            .then(data => {
                return {
                    favourites: data.payload.filter((item) => favouriteItems.includes(item._id)),
                    inCart: data.payload.filter((item) => cartItems.includes(item._id))
                }
        })
            .then(({favourites, inCart}) => {
                setFavouriteItems(favourites)
                setCartItems(inCart)
        }) 
        })
    }, [])


  return (
    <div className={s.container}>
            {
                userInfo && 
            <div className={s.innerContainer}>
                <div className={s.title}>Добро пожаловать {userInfo.fullName}</div>
                
                <div className={s.subTitle}>Ваши избранные товары: </div>
                <div className={s.favouriteItems}>
                    {   favouriteItems && cartItems.length >= 1 &&
                        favouriteItems.map((elem, index) => 
                            <Item cart={cartItems.includes(elem._id) ? true : false} category={elem.category} id={elem._id} img={elem.imageUrl} liked={true} name={elem.title} key={index}/>
                    ) 
                }
                </div>

                <div className={s.subTitle}>Ваша корзина: </div>
                <div className={s.cartItems}>
                {   cartItems &&
                        cartItems.map((elem, index) => 
                            <Item cart={true} category={elem.category} id={elem._id} img={elem.imageUrl} name={elem.title} key={index}/>
                    )
                }
                </div>

                <button className={s.logOut} onClick={() => {localStorage.clear(); navigate('/login')}}>Выйти</button>
            </div>
            }
    </div>
  )
}

export default MyCabinet