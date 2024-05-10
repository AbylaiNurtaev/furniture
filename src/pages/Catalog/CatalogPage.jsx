import React, { useState } from 'react'
import s from './CatalogPage.module.sass'
import Sofa from '../../components/Sofa/Sofa'

function CatalogPage() {

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
            id: 3,
            name: "тип",
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
            name: "цвет",
            subNames: [
                {
                    name: 'куда-то',
                    path: "/"
                }
            ],
            isOpen: false
        },
        {
            id: 5,
            name: "материал",
            subNames: [
                {
                    name: 'куда-то',
                    path: "/"
                }
            ],
            isOpen: false
        },
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
                <Sofa></Sofa>
            </div>
        </div>
    )
}

export default CatalogPage