import React from 'react'
import s from './Reviews.module.sass'
import Sofa from '../../components/Sofa/Sofa'

function Reviews() {
  return (
    <div className={s.container}>
        <div className={s.innerContainer}>
            <div className={s.reviewsSide}>
                <div className={s.review}>
                    <img className={s.avatar} src="https://n1s1.hsmedia.ru/13/57/7f/13577f85414b144065f36039f7c7988f/728x546_1_5b0985e3fc4f0e5c0b69bed8c9bb1a97@1200x900_0xac120003_1637295521644929900.jpeg" alt="" />
                    <div className={s.name}>Алина Баталова</div>
                    <div className={s.text}>Приобрела комплект мягкой мебели из наличия в салоне Hermitage. Мало того что дали дополнительную скидку, так еще оперативно организовали доставку. Спасибо вам большое! </div>
                </div>  
                <div className={s.review}>
                    <img className={s.avatar} src="https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg" alt="" />
                    <div className={s.name}>Игорь Сахаров</div>
                    <div className={s.text}>Не первый раз у вас покупаю. Спасибо за помощь в подборе!</div>
                </div>  
                <div className={s.review}>
                    <img className={s.avatar} src="https://media.istockphoto.com/id/1326417862/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0-%D1%81%D0%BC%D0%B5%D0%B5%D1%82%D1%81%D1%8F-%D0%B2%D0%BE-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F-%D0%BE%D1%82%D0%B4%D1%8B%D1%85%D0%B0-%D0%B4%D0%BE%D0%BC%D0%B0.jpg?s=612x612&w=0&k=20&c=S5kj1xMVROvdovQaZ2zkL5ydZM0M32V7lBpe86VVuNQ=" alt="" />
                    <div className={s.name}>Валерия Нурева</div>
                    <div className={s.text}>Спасибо большое за подбор, и предложенные варианты. Всем очень довольна. Задача была не простая, из-за планировки. Но мы подобрали фабрику которая работает по индивидуальным размерам. Параллельно подобрали светильники из наличия. 
Спасибо большое, будем еще заказывать 
</div>
                </div>  
                <div className={s.review}>
                    <img className={s.avatar} src="https://img.freepik.com/free-photo/young-woman-writing-a-book_23-2148854512.jpg" alt="" />
                    <div className={s.name}>Екатерина Турина</div>
                    <div className={s.text}>Делала заказ мебели не из наличия, под заказ ! Сроки поставки были соблюдены, при доставке мебель была плотно упакована. Пришло все без повреждений, сборщиков девочки предоставили, собрали быстро.  
</div>
                </div>  
            </div>
            <Sofa/>
        </div>
    </div>
  )
}

export default Reviews