import React, { useState } from 'react'
import s from './Fabrics.module.sass'
import Sofa from '../../components/Sofa/Sofa'
import { useDispatch } from 'react-redux'

import { fetchGoods } from '../../redux/slices/goods'
import { useNavigate } from 'react-router-dom'
function Fabrics() {

    const [fabricsList, setFabricsList] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()



    useState(() => {
      dispatch(fetchGoods())
      .then(data => {

        let fabrics = data.payload.filter((elem) => elem.category === 'Фабрики')
        console.log(fabrics)
        let letters = [];
        let obj = []
        for(let i = 0; i < fabrics.length; i++){
          if(letters.includes(fabrics[i].title.toLowerCase()[0])){
            let fabric = obj.find((elem) => elem.mainLetter.toLowerCase() == fabrics[i].title.toLowerCase()[0]);
            fabric.links.push(fabrics[i].title)
            
          }
          else{
            obj.push({
              mainLetter : fabrics[i].title.toLowerCase()[0],
              links : [fabrics[i].title.toLowerCase()],
              id: fabrics[i]._id
            })
            letters.push(fabrics[i].title.toLowerCase()[0])
          }
        }
        setFabricsList(obj)

      })
    })

        // {
        //   "mainLetter": "T",
        //   "links": [
        //     "Turri"
        //   ]
        // }
      
      

  return (
    <div className={s.container}>
        <div className={s.innerContainer}>
            <div className={s.path}>
                <p>Итальянская мебель</p>
                <img src="/icons/blakcArrowRight.png" alt="" />
                <p>Фабрики</p>
            </div>

        
            <div className={s.title}>Фабрики</div>

            <div className={s.alphabet}>
              {   fabricsList.length >= 1 &&
                  fabricsList.map((elem, index) => {
                      return(
                          <div className={s.block} key={index}>
                              <p className={s.mainLetter}>{elem.mainLetter}</p>
                              {
                                elem.links.map((link, index) => <div key={index} onClick={() => {navigate(`/fullItem/Фабрики/${elem.id}`)}} className={s.link}>{link}</div>)
                              }
                              
                          </div>
                      )
                  }

                  )
              }
            </div>


            <div className={s.info1}>
              <div className={s.right}>
                <div className={s.title}>Известнейшие итальянские фабрики мебели представляют вам свои коллекции</div>
                <div className={s.par1}>В поисках идеального гарнитура для своего дома вы наверняка стремитесь найти лучшее — настоящий образец авторского стиля, отличающийся безупречным качеством исполнения. Понимая это, мы включили в каталог как раз такие коллекции: здесь представлены шедевры, которые выпустили популярные итальянские производители мебели.</div>
                <div className={s.par2}>В каталоге нашего интернет-магазина есть и коллекции CIS Salotti, и линейки Andrea Fanfani, и гарнитуры Signorini & Coco, и великолепные решения других брендов с их официальных сайтов фабрик итальянской мебели. Кроме того, этот раздел постоянно пополняется, чтобы ваш выбор был еще шире и богаче.</div>
              </div>
              <img className={s.left} src="/images/infoFabric1.png" alt="fabric img" />
            </div>


            <div className={s.info2}>
              <img className={s.left} src="/images/infoFabric2.png" alt="fabric img" />
              <div className={s.right}>
                <div className={s.title}>Ассортимент поражает</div>
                <div className={s.par1}>В Grand Italia вы совершенно точно сможете найти подходящую коллекцию от топ фабрик производителей итальянской мебели, и вот почему:</div>
                <div className={s.par2}>В каталоге представлены гарнитуры, выполненные во всех актуальных стилях. Есть комплекты от мастеров, специализирующихся на классике, задающих тренды модерна, понимающих толк в арт-деко, определяющих нюансы прованса и так далее.</div>
                <div className={s.par3}>В разделе вас ждут коллекции, сделанные для самых разных комнат комфортабельного дома. Здесь фабрики итальянской мебели представляют свои спальни и прихожие, кухни и гостиные, <br/>стенки и мебель для ванной и у каждого товара есть своя изюминка.</div>
              </div>
            </div>


            <div className={s.info3}>
              <div className={s.left}>
                <div className={s.title}>Итальянские фабрики мебели</div>
                <div className={s.par1}>Оригинальность всех брендовых линеек и серий гарантируем —что лучшие фабрики мебели из Италии, Голландии, Португалии поставляют нам свои комплекты напрямую, со всеми сертификатами, подтверждающими качество, авторский стиль и использование высококлассных материалов. Сделав выбор в пользу любой итальянской мебельной фабрики таких как Angelo Cappellini, Prama, Fratelli Barri, Maronese или любого другого бренда, Вы сможете насладиться всеми его фирменными особенностями и качеством.</div>
              </div>
              <img className={s.right} src="/images/описание.png" alt="fabric img" />
            </div>

            <Sofa/>
        </div>
    </div>
  )
}

export default Fabrics