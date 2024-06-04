import React from 'react'
import s from './AboutCompany.module.sass'
import Sofa from '../../components/Sofa/Sofa'

function AboutCompany() {
  return (
    <div className={s.container}>
        <div className={s.innerContainer}>
            <div className={s.info}>
            <img src='/images/HomePage2.png' alt='image' className={s.left}/>
            <div className={s.right}>                
        Мебельный салон Hermitage работает на рынке более 30 лет. У нас Вы можете подобрать актуальную мебель в различных стилистических направлениях, таких как: ар-деко, современный стиль, классика, неоклассика, модерн, минимализм от фабрик из Италии, Испании,Бельгии, Китая и других стран. 
        А современные  дизайнерские светильники и аксессуары гармонично дополнят ваш интерьер. 
        Сотрудничаем с крупнейшими салонами мебели по всей России. 
        Работаем под любой запрос клиента.
            </div>
            </div>
        <Sofa/>
        </div>
    </div>
  )
}

export default AboutCompany