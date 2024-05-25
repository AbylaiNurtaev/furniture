import React, { useEffect, useState } from 'react'
import s from './Cart.module.sass'
import { useDispatch } from 'react-redux'
import { fetchAuthMe, fetchDeleteCart } from '../../redux/slices/auth'
import { fetchGoods } from '../../redux/slices/goods'

function CartPage() {

  const dispatch = useDispatch()
  const [cartItems, setCartItems] = useState()

  const [cart, setCart] = useState()
  const [countity, setCountity] = useState([])

  const [data, setData] = useState()


  useEffect(() => {
    dispatch(fetchAuthMe())
      .then(data => {
        setCartItems(data.payload.cart)
        setData(data.payload)
        return data.payload.cart
      })
      .then((cartItems) => {
        dispatch(fetchGoods())
        .then(goods => goods.payload.filter((item) => cartItems.includes(item._id)))
        .then(data => {
            console.log("dsa", data)
            setCart(data)
            for(let i = 0; i < data.length; i++){
              setCountity(prev => [...prev, 1])
            }
          })
      })

      
      
      
    }, [])
    
    const handleDecrease = (index) => {
      setCountity(prevCountity =>
          prevCountity.map((count, i) =>
              i === index && count > 0 ? count - 1 : count
          )
      );
  };
    const handleIncrease = (index) => {
      setCountity(prevCountity =>
          prevCountity.map((count, i) =>
              i === index ? count + 1 : count
          )
      );
  };


  const deleteFromCart = (id) => {
    dispatch(fetchDeleteCart({email: data.email, cartItem: id}))
    .then(() => {
      let indexof = 0;
        const newCart = cart.filter((elem, index) => {
          if(elem._id == id){
            indexof = index;
            setCountity(prev => prev.splice(indexof, 1))
          }
          return elem._id != id
      })
        setCart(newCart)
    })
    .catch(err => console.log(err))
  }

  const itemsInCart = () => {
    let overAll = 0;
    for(let i = 0; i < countity.length; i++){
      overAll += countity[i]
    }
    return overAll
  }

  const overAllPrice = () => {
    let overAll = 0;
    if (cart && Array.isArray(cart) && Array.isArray(countity) && cart.length >= 1) {
      for (let i = 0; i < countity.length; i++) {
        overAll += countity[i] * cart[i].price;
      }
    }
    return overAll;
  }

  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        <div className={s.path}>
          <p>Главная</p>
          <img src="/icons/blakcArrowRight.png" alt="" />
          <p>Спальня</p>
          <img src="/icons/blakcArrowRight.png" alt="" />
          <p>Итальянская спальня</p>
          <img src="/icons/blakcArrowRight.png" alt="" />
          <p>Корзина</p>
        </div>


        <div className={s.mainCart}>
          <div className={s.left}>
            <div className={s.topSide}>
              <div className={s.title}>Корзина</div>
              <div className={s.subTitle}>
              </div>
            </div>

            <div className={s.cart}>
              {cart &&
                cart.map((item, index) =>
                  <div className={s.cartItem} key={index}>
                    <img className={s.checkbox} onClick={() => {deleteFromCart(item._id)}} src="/icons/иконка (1).png" alt="" />
                    <img className={s.image} src={item.imageUrl} alt="" />
                    <div className={s.info}>
                      <div className={s.title}>{item.title}</div>
                      <div className={s.price}>{item.price}</div>
                    </div>
                    <div className={s.countSide}>
                      <img onClick={() => {deleteFromCart(item._id)}} src="/icons/trash.png" alt="" />
                      <div className={s.count}>
                        <img src="/icons/-.png" onClick={() => {handleDecrease(index)}} alt="" />
                        <div className={s.countity}>{countity[index]}</div>
                        <img src="/icons/+.png" onClick={() => {handleIncrease(index)}} alt="" />
                      </div>
                    </div>
                  </div>
                )
              }

            </div>
          </div>

          {
            cart &&
            <div className={s.right}>
              <div className={s.title}>Детали заказа</div>
              <div className={s.length}>
                <p>товаров в корзине</p>
                <p>{itemsInCart()}</p>
              </div>
              <div className={s.price}>
                <p>стоимость</p>
                <p>{overAllPrice()}</p>
              </div>
              <div className={s.delivery}>
                <p>доставка</p>
                <p>0</p>
              </div>

              <div className={s.overAll}>
                <p>Итого:</p>
                <p className={s.price}>{overAllPrice()}</p>
              </div>
              <button>оформить заказ</button>
            </div>
          }
        </div>

      </div>
    </div>
  )
}

export default CartPage