import React, { useEffect, useState } from 'react'
import s from './CatalogPage.module.sass'
import Sofa from '../../components/Sofa/Sofa'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../../components/Item/Item'
import { fetchAuthMe } from '../../redux/slices/auth'

function CatalogPage() {
    const {findedItems} = useSelector(state => state.find)
    const dispatch = useDispatch()


    const[favouriteItems, setFavouriteItems] = useState([])
    const[cartItems, setCartItems] = useState([])

    const[load, setLoad] = useState(false)

    const [filters, setFilters] = useState([
        {
            id: 1,
            name: "категории",
            subNames: [
                {
                    name: 'куда-то',
                    path: "/"
                }
            ],
            isOpen: false
        },
        {
            id: 2,
            name: "цена",
            subNames: [
                {
                    name: 'куда-то',
                    path: "/"
                }
            ],
            isOpen: false
        },
        {
            id: 4,
            name: "тон",
            subNames: [
                {
                    name: 'куда-то',
                    path: "/"
                }
            ],
            isOpen: false
        }
        
    ])

    const toggleOpenFilter = (e, id) => {
        e.preventDefault()
        setFilters(prevFilters => {
            return prevFilters.map(filter => {
                if (filter.id === id) {
                    return { ...filter, isOpen: !filter.isOpen };
                }
                return filter;
            });
        });
    }

    useEffect(() => {
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
    }, [findedItems])



    return (
        <div className={s.container}>
            <div className={s.innerContainer}>
                <div className={s.path}>
                    <p className={s.pathText}>Главная</p>
                    <img src="/icons/blakcArrowRight.png" alt="" />
                    <p className={s.pathText}>Каталог товаров</p>
                </div>

                <div className={s.filter}>
                    {
                        filters.map((elem) =>
                            <div key={elem.id} className={s.block} onClick={(e) => toggleOpenFilter(e, elem.id)}>
                                <p>{elem.name}</p>
                                <img src={ elem.isOpen ? "/icons/up.png" : "/icons/down.png"} alt="" />
                            </div>
                        )
                    }
                </div>

                <div className={s.items}>
                    {
                        findedItems.length >= 1 && load == true ? 
                        findedItems.map((elem, index) => 
                        <Item
                        key={index}
                        category={elem.category}
                        id={elem._id}
                        img={elem.imageUrl}
                        name={elem.title}
                        price={elem.price}
                        cart={cartItems.includes(elem._id) ? true : false}
                        liked={favouriteItems.includes(elem._id) ? true : false}
                        
                        />
                        ) : <div>Товары не найдены</div>
                    }
                </div>
                <Sofa></Sofa>
            </div>
        </div>
    )
}

export default CatalogPage