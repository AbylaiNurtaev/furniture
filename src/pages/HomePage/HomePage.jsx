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
  const[cartItems, setCartItems] = useState([])

  const[load, setLoad] = useState(false)

  const isPostLoading = goods.status;
    
  useEffect(() => {
    console.log(process.env.REACT_APP_BASE_URL);
    dispatch(fetchGoods())


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
  }, [])
  

  const catalogItems = [
    {
      width: '520px',
      text: 'спальни',
      src: 'catalogItems/2.png',
      textWidth: '475px',
      href: "/optionitem/спальни"
    },
    {
      width: '383px',
      text: 'гостиные',
      src: 'catalogItems/1.png',
      textWidth: '350px',
      href: "/optionitem/гостиные"
    },
    {
      width: '657px',
      text: 'мягкая мебель',
      src: 'catalogItems/3.png',
      textWidth: '600px',
      href: "/optionitem/мягкая мебель"
    },
    {
      width: '657px',
      text: 'детская мебель',
      src: 'https://cdn.domdivanov.kz/files/imgs/ig1111894/garnitur-detskii-zoo-1@kit-740x540.jpg',
      textWidth: '600px',
      href: "/optionitem/детская мебель"
    },
    {
      width: '457px',
      text: 'кухни',
      src: '/catalogItems/kitchen.jpg',
      textWidth: '400px',
      href: "/optionitem/кухни"
    },
    {
      width: '457px',
      text: 'мебель для ванны',
      src: 'https://ollis.kz/wp-content/uploads/2022/06/%D0%A1%D0%B0%D0%BD%D1%83%D0%B7%D0%B5%D0%BB-%D1%85%D0%BE%D0%B7%D1%8F%D0%B9%D1%81%D0%BA%D0%B8%D0%B9-Terra_5.jpg',
      textWidth: '430px',
      href: "/optionitem/мебель для ванны"
    },
    {
      width: '597px',
      text: 'свет',
      src: 'https://svetcity.com/images/blog/456/fd.jpg',
      textWidth: '560px',
      href: "/optionitem/свет"
    },
    {
      width: '557px',
      text: 'текстиль',
      src: 'https://ir-3.ozone.ru/s3/multimedia-b/c1000/6495535799.jpg',
      textWidth: '530px',
      href: "/optionitem/текстиль"
    },
    {
      width: '407px',
      text: 'аксессуары',
      src: 'https://images.prom.ua/3172762386_w300_h300_nastennyj-dekor-sun.jpg',
      textWidth: '370px'
    }
  ]


  const navigate = useNavigate()
  return (
    <div>
      <div className={s.container}>
        <div className={s.mainImage}>
          <img src="/images/HomePage.png" alt="mainImage" />
          <div className={s.block}>
            <h1 className={s.mainText}>Мебель от мировых фабрик</h1>
            <h1 className={s.parText}>Современная классика,модерн,
            ар-деко, неоклассика, минимализм</h1>
            <button className={s.catalogBtn} onClick={() => {navigate('/catalog')}}>в каталог</button>
          </div>
        </div>
        <div className={s.innerContainer}>
          {/* --------------------------------КАТАЛОГ-------------------------------- */}
          <div className={s.catalogTitle}>Категории товаров</div>
          <div className={s.catalogItems}>
            {
              catalogItems.map(({width, text, src, textWidth, href}, index) => 
              <CatalogItem key={index} href={href} textWidth={textWidth} width={width} text={text} src={src}/>
              )
            }
          </div>

{/* ------------------------------ИНФОРМАЦИЯ-------------------------------------- */}
          <div className={s.infoPanel}>
            <div className={s.left}>
              <div className={s.title}>Мебельный салон Hermitage</div>
              <div className={s.par}>Мебельный салон Hermitage работает на рынке более 30 лет. В нашем салоне Вы можете подобрать премиальную мебель в различных стилистических направлениях, таких как: ар-деко, современный стиль, классика, неоклассика, модерн, минимализм от фабрик из Италии, Испании,Бельгии, Китая и других стран. 
А современные  дизайнерские светильники и аксессуары гармонично дополнят ваш интерьер. 
Сотрудничаем с крупнейшими салонами мебели по всей России. 
Работаем под любой запрос клиента.
</div>
              {/* <div className={s.blocks}>

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

              </div> */}
            </div>

            <img className={s.right} src="/images/HomePage2.png" alt="" />
          </div>




          {/* ---------------------ТОВАРЫ----------------------------------- */}
          <div className={s.goods}>

            <div className={s.title}>
              <p className={s.titleText}>Популярные товары</p>
            </div>

            <div className={s.items}>
              {
                isPostLoading == 'success' && load == true ? 
                goods.items.slice(0, 6).map((elem, index) => 
                  <Item price={elem.price} cart={cartItems.includes(elem._id) ? true : false} liked={favouriteItems.includes(elem._id) ? true : false} key={index} category={elem.category} id={elem._id} img={elem.images[0]} name={elem.title}/>
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
изготавливается только из высококлассных материалов – из благородной древесины, элитного шпона, чистых металлов и стекол; <br/><br/>
максимально защищена от старения и агрессивных воздействий окружающей среды – фирменными лаками с антибактериальным эффектом, предохраняющими от выгорания, трещин, жуков-короедов; <br/><br/>
</div>
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