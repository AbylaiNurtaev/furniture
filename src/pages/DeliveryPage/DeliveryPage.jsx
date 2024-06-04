import React from 'react'
import s from './DeliveryPage.module.sass'
import Sofa from '../../components/Sofa/Sofa'

function DeliveryPage() {
  return (
    <div className={s.container}>
        <div className={s.innerContainer}>
            <div className={s.title}>Доставка</div>
            <div className={s.tableSide}>

            <div className={s.subTitle}>Доставка товаров общей стоимостью более 80 000 рублей</div>
            <table>
                <thead>
                    <tr>
                        <th>Самовывоз</th>
                        <th>Бесплатно</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Доставка по Москве внутри Садового кольца (не более 3-х часов)</td>
                        <td>3000 рублей</td>
                    </tr>
                    <tr>
                        <td>Доставка по Москве и в пределах 100 км зоны от МКАД за пределами Садового кольца</td>
                        <td>Бесплатно</td>
                    </tr>
                    <tr>
                        <td>по Московской области за каждый последующий км начиная с 101 км от МКАД</td>
                        <td>100 рублей за 1 км</td>
                    </tr>
                </tbody>
            </table>

            <div className={s.subTitle}>Доставка товаров общей стоимостью менее 80 000 рублей</div>

            <table>
                <thead>
                    <tr>
                        <th>Самовывоз</th>
                        <th>Бесплатно</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Доставка по Москве внутри Садового кольца</td>
                        <td>от 1000 рублей</td>
                    </tr>
                    <tr>
                        <td>Доставка по Москве и в пределах 100 км зоны от МКАД за пределами Садового кольца</td>
                        <td>от 1000 рублей</td>
                    </tr>
                    <tr>
                        <td>в пределах 31 км зоны от МКАД</td>
                        <td>5500 рублей</td>
                    </tr>
                    <tr>
                        <td>с 31 км от МКАД</td>
                        <td className={s.tdBig}>5500 рублей <br/>+ 100 рублей за каждый
последующий километр,
начиная с 31 км
от МКАД</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Sofa/>
        </div>
    </div>
  )
}

export default DeliveryPage