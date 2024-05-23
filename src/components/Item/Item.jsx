import React, { useEffect, useState } from 'react'
import s from './Item.module.sass'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthMe, fetchDeleteFavourite, fetchFavourite } from '../../redux/slices/auth'

function Item({img, name, id, category, liked}) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const[hearted, setHearted] = useState(liked)


  const { data } = useSelector(state => state.auth)

  
  const favouriteItem = async() => {
    if(data){
      if(!hearted){
        dispatch(fetchFavourite({email: data.email, favouriteItem: id}))
        .catch(err => console.log(err))
        setHearted(true)
      }else{
        dispatch(fetchDeleteFavourite({email: data.email, favouriteItem: id}))
        .catch((err) => console.log(err))
        setHearted(false)
      }
    }else{
      alert("Вы не авторизованы, просим войти вас в свой аккаунт")
    }
  }

  
  return (
    <div className={s.container}>
        <img className={s.top} src={img} alt="mainImage" />

        <div className={s.bottom}>
            <div className={s.nameSide}>
                <p>{name}</p>
                <img onClick={favouriteItem} className={s.heart} src={ hearted == true ? "/icons/heart_active.png" : "/icons/heart.png"} alt="cart" />
            </div>

            <div className={s.buttonSide}>
                <button onClick={() => {navigate(`/fullItem/${category}/${id}`)}}>узнать цену</button>
                <img className={s.card} src={"/icons/cart.png"} alt="cart" />
            </div>
        </div>
    </div>
  )
}

export default Item