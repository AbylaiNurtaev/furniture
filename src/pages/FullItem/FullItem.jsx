import React, { useEffect, useState } from 'react'
import s from './FullItem.module.sass'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../axios'
import Slider from '../../components/slider/Slider'
import Sofa from '../../components/Sofa/Sofa'

import Item from '../../components/Item/Item'
function FullItem() {
    const { id, category } = useParams()

    const [item, setItem] = useState()
    const navigate = useNavigate()

    // Для плавающей строки
    const [margin, setMargin] = useState('')
    const [size, setSize] = useState('')
    const[currentOption, setCurrentOption] = useState(1)

    const [moreGoods, setMoreGoods] = useState([])


    useEffect(() => {
        axios
            .get('/posts')
            .then(({ data }) => {
                const anotherGoods = data.filter((elem) => elem._id !== id && elem.category == category)
                setMoreGoods(prev => [...prev, anotherGoods[0], anotherGoods[1], anotherGoods[2]])
                return data.find((good) => good._id == id)
    })
            .then(res => setItem(res))
            .catch((err) => console.log(err))
            
    }, [])

    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(prev => prev + 1)
    }
    const decrement = () => {
        if(counter >= 1){
            setCounter(prev => prev - 1)
        }
    }

    const handleChangeOption = (index) => {
        setCurrentOption(index)
        if(index == 1){
            setMargin("0px")
            setSize("250px")
        }else if(index == 2){
            setMargin('265px')
            setSize("150px")
        }else if(index == 3){
            setMargin("420px")
            setSize("150px")
        }
    }
    return (
        <div className={s.container}>
            {item &&
                <div className={s.innerContainer}>
                    <div className={s.path}>
                        <p>{item.category}</p>
                        <img src="/icons/blakcArrowRight.png" alt="" />
                        <p>Итальянская мебель</p>
                    </div>

                    <div className={s.title}>{item.title}</div>

                    {/* Слайдер */}
                    <div className={s.slideSide}>
                        <Slider className={s.left} img1={item.imageUrl} img2={item.imageUrl1} img3={item.imageUrl2} />
                        <div className={s.right}>
                            <div className={s.par}>{item.text}</div>
                            <div className={s.price}>{item.price ? item.price : "На заказ"}</div>
                            <div className={s.counter}>
                                <button className={s.decrementBtn} onClick={decrement}><img src="/icons/-.png" alt="" /></button>
                                <div className={s.number}>{counter}</div>
                                <button className={s.incrementBtn} onClick={increment}><img src="/icons/+.png" alt="" /></button>
                            </div>
                        </div>
                    </div>

                    {/* Характеристики */}
                    <div className={s.options}>
                        <div className={s.top}>
                            <h4 onClick={() => {handleChangeOption(1)}}>Характеристики</h4>
                            <h4 onClick={() => {handleChangeOption(2)}}>Доставка</h4>
                            <h4 onClick={() => {handleChangeOption(3)}}>Оплата</h4>
                        </div>

                        <div className={s.navigationSide}>
                            <img src="/icons/Line 26.png" alt="" className={s.defaultLine} />
                            <img style={{marginLeft: margin, width: size}} className={s.navigationArrow} src='/icons/navigationArrow.png'/>
                        </div>
                        
                        {
                            currentOption == 1 && 
                                <div className={s.bottom}>
                                    <div className={s.left}>
                                        <div className={s.bold}>стиль</div>
                                        <div className={s.bold}>производитель</div>
                                        <div className={s.bold}>Наличие на складе</div>
                                    </div>
                                    <div className={s.right}>
                                        <div className={s.par}>{ item.style ? item.style : "классический"}</div>
                                        <div className={s.par}>{ item.manufacturer ? item.manufacturer : "Signorini & Coco"}</div>
                                        <div className={s.par}>на заказ</div>
                                    </div>
                                </div>
                        }
                        {
                            currentOption == 2 && 
                            <div className={s.bottom}>
                                <div className={s.deliveryText}>
                                Мы понимаем, как важно получить свою мебель вовремя и без лишних хлопот. Поэтому мы предлагаем надежную и быструю доставку, которая занимает всего 10 дней. Ваша мебель будет у вас в течение 10 рабочих дней. Мы согласуем с вами удобное время доставки, чтобы вам не пришлось менять свои планы. Каждое изделие упаковано с заботой, чтобы оно дошло до вас в идеальном состоянии. Наши опытные сотрудники обеспечат бережную доставку, чтобы избежать повреждений.
                                </div>
                            </div>
                        }
                        {
                            currentOption == 3 && 
                            <div className={s.bottom}>
                                <div className={s.paymentTest}>
                                Мы стремимся сделать процесс покупки максимально удобным для вас, поэтому предлагаем широкий выбор способов оплаты в интернете. Вы можете выбрать наиболее подходящий для вас метод: оплата банковской картой, через электронные кошельки или банковский перевод. Все платежи проходят через защищённые и проверенные системы, гарантируя безопасность ваших данных. Мы понимаем, насколько важна надежность, поэтому обеспечиваем высокий уровень защиты всех финансовых операций. Независимо от выбранного способа оплаты, вы можете быть уверены в быстроте и безопасности процесса.
                                </div>
                            </div>
                        }
                    </div>

                    {/* Второй заговолок */}
                    <div className={s.secondSide}>
                        <h2 className={s.title}>{item.title}</h2>
                        <div className={s.secondImageSide}>
                            <div className={s.par}>{item.text}</div>
                            <img className={s.rightImg} src={item.imageUrl2} alt="smth" />
                        </div>
                    </div>

                    {/* Больше товаров */}
                    {
                        moreGoods &&
                        <div className={s.moreGoods}>
                            <div className={s.title}>
                                <div className={s.titleText}>Похожие товары</div>
                                <div className={s.parText} onClick={() => navigate('/')}>смотреть все</div>
                            </div>
                            <div className={s.products}>
                            {
                                moreGoods.slice(0, 3).map((item) => <Item category={item.category} id={item._id} img={item.imageUrl} name={item.title} key={item.title}/>)
                            }
                            </div>
                            
                        </div>
                    }

                    <Sofa/>

                </div>
            }




        </div>
    )
}

export default FullItem