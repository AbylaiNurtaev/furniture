import React, { useEffect, useState } from 'react'
import Item from '../../components/Item/Item'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthMe } from '../../redux/slices/auth'
import { fetchGoods } from '../../redux/slices/goods'

import s from './FavouriteItems.module.sass'

function FavouriteItems() {
    const dispatch = useDispatch()

    const [items, setItems] = useState([])
    // const { data } = useSelector(state => state.auth)


    useEffect(() => {
        dispatch(fetchAuthMe())
        .then((data) => {
            
            dispatch(fetchGoods())
            .then(items => {
                return items.payload.filter((item) => data.payload.favouriteItems.includes(item._id))
            })
            .then(item => setItems(item))
        })
        
    }, [])

  return (
    <div className={s.container}>
        <div className={s.innerContainer}>
            <div className={s.title}>Ваши избранные товары</div>

            <div className={s.items}>

            {
                items.length > 1 ? 
                items.map((elem, index) => 
                    <Item liked={true} key={index} category={elem.category} id={elem._id} img={elem.imageUrl} name={elem.title}/>
                ) : <div className={s.title} style={{marginTop: '100px', fontSize: '30px'}}>Нету избранных товаров</div>
            }
            </div>
        </div>
    </div>
  )
}

export default FavouriteItems