import React, { useEffect, useState } from 'react'
import s from './OptionItem.module.sass'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchGoods } from '../../redux/slices/goods'
import Item from '../../components/Item/Item'
import { fetchAuthMe } from '../../redux/slices/auth'

function OptionItem() {

    const {category} = useParams()
    const dispatch = useDispatch()

    const[items, setItems] = useState()
    const[cartItems, setCartItems] = useState()
    const[favouriteItems, setFavouriteItems] = useState()

    const[load, setLoad] = useState()

    useEffect(() => {
        dispatch(fetchGoods())
        .then(data => data.payload.filter((elem) => elem.category.toLowerCase() === category.toLowerCase()))
        .then(res => setItems(res))
        dispatch(fetchAuthMe())
        .then(data => {
        if(data){
            setFavouriteItems(data.payload.favouriteItems)
            setCartItems(data.payload.cart)
            setLoad(true)

        }
    })    
        .catch(err => {
            console.log(err)
            setLoad(true)   
  })
        
    }, [category])
  return (
    <div className={s.container}>
        <div className={s.innerContainer}>
            <div className={s.title}>{category}</div>
            <div className={s.items}>
                {
                    items && load &&
                    items.map((elem, index) => 
                    <Item
                    cart={cartItems.includes(elem._id) ? true : false}
                    liked={favouriteItems.includes(elem._id) ? true : false} 
                    category={elem.category}
                    id={elem._id}
                    name={elem.title}
                    price={elem.price}
                    img={elem.imageUrl}
                    key={index}
                    />
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default OptionItem