import React from 'react'
import s from './Fabrics.module.sass'
import Sofa from '../../components/Sofa/Sofa'
function Fabrics() {

    const fabricsList = [
        {
          "mainLetter": "A",
          "links": [
            "A.R. Arredamenti",
            "Alberto & Mario Ghezzani",
            "Alta Moda",
            "Altavilla",
            "AM Classic",
            "Andrea Fanfani",
            "Angelo Cappellini",
            "Antonelli Moravio & C",
            "Arredo Classic",
            "Asnaghi Interiors"
          ]
        },
        {
          "mainLetter": "B",
          "links": [
            "Bacci Stile",
            "Bakokko",
            "Barnini Oseo",
            "BM Style"
          ]
        },
        {
          "mainLetter": "C",
          "links": [
            "Cappelletti",
            "Casa+39",
            "Cavio"
          ]
        },
        {
          "mainLetter": "D",
          "links": [
            "Domus"
          ]
        },
        {
          "mainLetter": "E",
          "links": [
            "Ebanisteria Bacci"
          ]
        },
        {
          "mainLetter": "F",
          "links": [
            "Ferretti & Ferretti"
          ]
        },
        {
          "mainLetter": "G",
          "links": [
            "Grilli"
          ]
        },
        {
          "mainLetter": "J",
          "links": [
            "Jumbo Collection"
          ]
        },
        {
          "mainLetter": "K",
          "links": [
            "Keoma"
          ]
        },
        {
          "mainLetter": "M",
          "links": [
            "Malerba",
            "Mobil Piu",
            "Mobil Piu",
            "Modenese Gastone",
            "Modo 10",
            "Morello Gianpaolo"
          ]
        },
        {
          "mainLetter": "P",
          "links": [
            "PM4",
            "Prama",
            "Prestige"
          ]
        },
        {
          "mainLetter": "S",
          "links": [
            "Signorini & Coco"
          ]
        },
        {
          "mainLetter": "V",
          "links": [
            "Valderamobili",
            "Volpi"
          ]
        },
        {
          "mainLetter": "T",
          "links": [
            "Turri"
          ]
        }
      ]
      

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
              {
                  fabricsList.map((elem) => {
                      return(
                          <div className={s.block}>
                              <p className={s.mainLetter}>{elem.mainLetter}</p>
                              {
                                elem.links.map((link) => <div className={s.link}>{link}</div>)
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
                <div className={s.par3}>В разделе вас ждут коллекции, сделанные для самых разных комнат комфортабельного дома. Здесь фабрики итальянской мебели представляют свои спальни и прихожие, кухни и гостиные, стенки и мебель для ванной и у каждого товара есть своя изюминка.</div>
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