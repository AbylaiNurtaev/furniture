import React, { useEffect, useState } from 'react';
import s from './CatalogPage.module.sass';
import Sofa from '../../components/Sofa/Sofa';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../../components/Item/Item';
import { fetchAuthMe } from '../../redux/slices/auth';
import { fetchGoods } from '../../redux/slices/goods';

function CatalogPage() {
    const { findedItems } = useSelector(state => state.find);
    const dispatch = useDispatch();

    const [favouriteItems, setFavouriteItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [load, setLoad] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);
    const [category, setCategory] = useState("");
    const [tone, setTone] = useState("");
    const [price, setPrice] = useState("");
    const [allItems, setAllItems] = useState([]);

    const filterItems = () => {
        let itemsToFilter = findedItems.length > 0 ? findedItems : allItems;
        
        const filters = [];
        if (category) {
            filters.push(item => item.category.toLowerCase() === category.toLowerCase());
        }
        if (tone) {
            filters.push(item => item.tone.toLowerCase() === tone.toLowerCase());
        }
        if (price) {
            filters.push(item => item.price <= parseInt(price));
        }

        const filtered = filters.reduce((acc, filter) => acc.filter(filter), itemsToFilter);
        setFilteredItems(filtered);
    };

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
    };

    const handleChangePrice = (e) => {
        setPrice(e.target.value);
    };

    const handleChangeTone = (e) => {
        setTone(e.target.value);
    };

    useEffect(() => {
        dispatch(fetchAuthMe())
            .then(data => {
                if (data) {
                    setFavouriteItems(data.payload.favouriteItems);
                    setCartItems(data.payload.cart);
                    setLoad(true);
                }
            })
            .catch(err => {
                console.log(err);
                setLoad(true);
            });
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchGoods())
            .then(data => {
                console.log(data.payload)
                setAllItems(data.payload)
    })
            .catch(err => console.log(err));
    }, [dispatch]);

    useEffect(() => {
        filterItems();
    }, [category, tone, price, findedItems, allItems]);

    return (
        <div className={s.container}>
            <div className={s.innerContainer}>
                <div className={s.path}>
                    <p className={s.pathText}>Главная</p>
                    <img src="/icons/blakcArrowRight.png" alt="" />
                    <p className={s.pathText}>Каталог товаров</p>
                </div>

                <div className={s.filter}>
                    <select onChange={handleChangeCategory}>
                        <option disabled hidden selected value="">категория</option>
                        <option value="Мебель со склада">Мебель со склада</option>
                        <option value="Гостиные">Гостиные</option>
                        <option value="Мягкая мебель">Мягкая мебель</option>
                        <option value="Спальни">Спальни</option>
                        <option value="Мебель для ванны">Мебель для ванны</option>
                        <option value="Детские">Детские</option>
                        <option value="Кухни">Кухни</option>
                        <option value="Люстры">Люстры</option>
                        <option value="Бра">Бра</option>
                        <option value="Шторы">Шторы</option>
                        <option value="Постельное белье">Постельное белье</option>
                        <option value="Для сервировки стола">Для сервировки стола</option>
                        <option value="Посуда">Посуда</option>
                        <option value="Прихожие">Прихожие</option>
                        <option value="Декор">Декор</option>
                        <option value="Картины">Картины</option>
                        <option value="Специальное предложение">Специальное предложение</option>
                        <option value="Кабинеты">Кабинеты</option>
                        <option value="Фабрики">Фабрики</option>
                    </select>

                    <select onChange={handleChangePrice}>
                        <option value="" disabled hidden selected>Цена</option>
                        <option value="20000">до 20 тыс.</option>
                        <option value="40000">до 40 тыс.</option>
                        <option value="60000">до 60 тыс.</option>
                        <option value="120000">до 120 тыс.</option>
                    </select>

                    <select onChange={handleChangeTone}>
                        <option disabled hidden selected value="">тон</option>
                        <option value="светлый">Светлый</option>
                        <option value="тёмный">Тёмный</option>
                    </select>
                </div>

                <div className={s.items}>
                    {filteredItems.length >= 1 && load === true ? (
                        filteredItems.map((elem, index) => (
                            <Item
                                key={index}
                                category={elem.category}
                                id={elem._id}
                                img={elem.images[0]}
                                name={elem.title}
                                price={elem.price}
                                cart={cartItems.includes(elem._id)}
                                liked={favouriteItems.includes(elem._id)}
                            />
                        ))
                    ) : (
                        <div></div>
                    )}
                </div>
                <Sofa />
            </div>
        </div>
    );
}

export default CatalogPage;
