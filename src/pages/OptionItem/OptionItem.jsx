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
    const[cartItems, setCartItems] = useState([])
    const[favouriteItems, setFavouriteItems] = useState([])

    const[load, setLoad] = useState()

    useEffect(() => {
        dispatch(fetchGoods())
        .then(data => 
            {
                console.log(data);
                return data.payload.filter((elem) => {

            if(category == "спальни"){
                return elem.category.toLowerCase() == "гостиные" ||
                       elem.category.toLowerCase() == "мягкая мебель" ||
                       elem.category.toLowerCase() == "детская мебель" ||
                       elem.category.toLowerCase() == "спальни" ||
                       elem.category.toLowerCase() == "кухни" ||
                       elem.category.toLowerCase() == "мебель для ванны";
            }
            else if(category == "свет"){
                return elem.category.toLowerCase() == "люстры" ||
                       elem.category.toLowerCase() == "бра";
            }
            else if(category == "текстиль"){
                return elem.category.toLowerCase() == "шторы" ||
                       elem.category.toLowerCase() == "постельное белье" ||
                       elem.category.toLowerCase() == "для сервировки стола";
            }
            else if(category == "аксессуары"){
                return elem.category.toLowerCase() == "вазы" ||
                       elem.category.toLowerCase() == "картины" ||
                       elem.category.toLowerCase() == "декор" ||
                       elem.category.toLowerCase() == "посуда";
            }
            return elem.category.toLowerCase() === category.toLowerCase();
        })})
        
        .then(res => {
            console.log(res)
            setItems(res)
    })
        dispatch(fetchAuthMe())
        .then(data => {
        if(data.payload){
            setFavouriteItems(data.payload.favouriteItems)
            setCartItems(data.payload.cart)
            setLoad(true)
        }
        else{
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
                    img={elem.images[0]}
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