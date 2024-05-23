import React, { useEffect, useState } from 'react'
import s from './HomePage.module.sass'
import CatalogItem from '../../components/CatalogItem/CatalogItem'
import Item from '../../components/Item/Item'
import { useNavigate } from 'react-router-dom'
import Sofa from '../../components/Sofa/Sofa'

import { fetchGoods } from '../../redux/slices/goods'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthMe, selectIsAuth } from '../../redux/slices/auth'





function HomePage() {
  const dispatch = useDispatch()
  const { goods } = useSelector(state => state.goods)
  const[favouriteItems, setFavouriteItems] = useState([])
  const[load, setLoad] = useState(false)

  const isPostLoading = goods.status;
    
  useEffect(() => {
    dispatch(fetchGoods())


    dispatch(fetchAuthMe())
    .then(data => {
      if(data){
        setFavouriteItems(data.payload.favouriteItems)
        setLoad(true)

      }
  })    
      .catch(err => {
        console.log(err)
        setLoad(true)   
  })    
  }, [])
  

  const catalogItems = [
    {
      width: '383px',
      text: 'мебель со склада',
      src: 'catalogItems/1.png',
      textWidth: '350px'
    },
    {
      width: '520px',
      text: 'спальни',
      src: 'catalogItems/2.png',
      textWidth: '475px'
    },
    {
      width: '657px',
      text: 'кровати',
      src: 'catalogItems/3.png',
      textWidth: '600px'
    },
    {
      width: '657px',
      text: 'гостиные',
      src: 'catalogItems/4.png',
      textWidth: '600px'
    },
    {
      width: '520px',
      text: 'кабинеты',
      src: 'catalogItems/5.png',
      textWidth: '475px'
    },
    {
      width: '383px',
      text: 'мебель со склада',
      src: 'catalogItems/6.png',
      textWidth: '350px'
    },
  ]


  const navigate = useNavigate()
  return (
    <div>
      <div className={s.container}>
        <div className={s.mainImage}>
          <img src="/images/HomePage.png" alt="mainImage" />
          <div className={s.block}>
            <h1 className={s.mainText}>Итальянские гостиные</h1>
            <h1 className={s.parText}>Классика, современные, элитные</h1>
            <button className={s.catalogBtn} onClick={() => {navigate('/catalog')}}>в каталог</button>
          </div>
        </div>
        <div className={s.innerContainer}>
          {/* --------------------------------КАТАЛОГ-------------------------------- */}
          <div className={s.catalogTitle}>Категории товаров</div>
          <div className={s.catalogItems}>
            {
              catalogItems.map(({width, text, src, textWidth}, index) => 
              <CatalogItem key={index} textWidth={textWidth} width={width} text={text} src={src}/>
              )
            }
          </div>

{/* ------------------------------ИНФОРМАЦИЯ-------------------------------------- */}
          <div className={s.infoPanel}>
            <div className={s.left}>
              <div className={s.title}>Итальянская мебель GRAND ITALIA</div>
              <div className={s.par}>Ассортимент мебельного центра GRAND ITALIA представлен самой полной коллекцией мебели Италии в Москве, которая отражает уровень принимаемых вами решений и напоминает о любви к комфорту.</div>
              <div className={s.blocks}>

                <div className={s.block}>
                  <div className={s.number}>1200</div>
                  <div className={s.text}>клиентов выбрали нас</div>
                </div>

                <div className={s.block}>
                  <div className={s.number}>14</div>
                  <div className={s.text}>точек в городах России</div>
                </div>


                <div className={s.block}>
                  <div className={s.number}>120</div>
                  <div className={s.text}>специалистов работают для Вас</div>
                </div>

              </div>
            </div>

            <img className={s.right} src="/images/HomePage2.png" alt="" />
          </div>




          {/* ---------------------ТОВАРЫ----------------------------------- */}
          <div className={s.goods}>

            <div className={s.title}>
              <p className={s.titleText}>Популярные товары</p>
              <p className={s.seeMoreText}>смотреть все</p>
            </div>

            <div className={s.items}>
              {
                isPostLoading == 'success' && load == true ? 
                goods.items.slice(0, 6).map((elem, index) => 
                  <Item liked={favouriteItems.includes(elem._id) ? true : false} key={index} category={elem.category} id={elem._id} img={elem.imageUrl} name={elem.title}/>
                ) : null
              }
            </div>
          </div>

          {/* --------------------------ИНФОРМАЦИЯ------------------------------ */}
          <div className={s.information1}>
            <div className={s.left}>
              <div className={s.title}>Преимущества и плюсы итальянской мебели</div>
              <div className={s.par}>Над созданием каждого гарнитура или отдельно взятого предмета трудится целый коллектив дизайнеров, каждый из которых вкладывает в проект все свое мастерство и частичку души. Поэтому Вы не найдете двух одинаковых кресел, зеркал, изголовий даже в смежных коллекциях – любая вещь по-своему оригинальна, а вручную выполненный декор делает ее во всех смыслах эксклюзивной.  <br/><br/><br/>
Причина долговечности – в премиальном уровне производства.<br/> Мебель из Италии – эталон качества, ведь она:<br/>
1) изготавливается только из высококлассных материалов – из благородной древесины, элитного шпона, чистых металлов и стекол; <br/><br/>
2) максимально защищена от старения и агрессивных воздействий окружающей среды – фирменными лаками с антибактериальным эффектом, предохраняющими от выгорания, трещин, жуков-короедов; <br/><br/>
3) проходит многоступенчатый контроль, с проверками и отбраковкой на каждом этапе выпуска; <br/><br/>
4) украшается вручную – опытный мастер замечает то, что при сборке пропускают машины, и доводит внешний вид вашей мебели до идеала.</div>
            </div>
            <img  className={s.right} src="/information/info1.png" alt="" />
          </div>

          <div className={s.information2}>
              <img className={s.left} src="/information/info2.png" alt="" />
              <div className={s.right}>
                <div className={s.title}>Больше не надо никуда ехать: Мебель Италии уже в Москве</div>
                <div className={s.boldPar}>Больше не надо никуда ехать: Мебель Италии уже в Москве</div>
                <div className={s.par}>Коллекции ведущих фабрик – более 100 известных премиальных брендов ждут вашего внимания; <br/><br/>
                Один из самых больших каталогов элитной итальянской мебели в Москве. В наличии и под заказ лучшие модели известных фабрик Arredo Classic, Bakokko, CIS Salotti, Giorgiocasa, Dall Agnese, Fratelli Barri, Eichholtz, Savio Firmino, Maronese, Prama, Signorini&Coco, Status и многими другими брендами, мастера которых знают, как создавать настоящую красоту. <br/> <br/>
                Наш интернет-магазин предлагает своим клиентам актуальные низкие цены на итальянскую мебель. Каждый элитный гарнитур или отдельный предмет интерьера стоит ровно столько, во сколько должно обходиться индивидуальное и статусное решение. С каждой фабрикой мы сотрудничаем напрямую, поэтому гарантируем отсутствие каких либо переплат и наценок и минимальную цену, а также у нас на сайте вы можете купить со скидкой от 5% до 50% представленные у нас на складе товары в разделе распродажи.<br/><br/>
                Помощь дизайнеров в салоне нашего магазина <br/><br/>
                Мебельный центр Grand-Italia предоставляет гарантии оригинальности каждого поставляемого нами товара по мак. Никаких подделок! 
                </div>
              </div>
          </div>




          {/* ----------------------------ВОПРОСЫ----------------------------- */}
          <Sofa></Sofa>
        </div>
      </div>

    </div>
  )
}

export default HomePage