import React from 'react'
import s from './PolicyPage.module.sass'
function PolicyPage() {
  return (
    <div className={s.container}>
        <div className={s.innerContainer}>
            <h1>
            Политика конфиденциальности
            </h1>
            <p>
            ООО "Мебель Эрмитаж" уважает ваше право на конфиденциальность и стремится к защите вашей личной информации. Мы собираем и обрабатываем персональные данные (имя, адрес электронной почты, номер телефона и почтовый адрес) для обработки заказов, предоставления информации о наших продуктах и услугах, а также для улучшения работы нашего веб-сайта.
Мы не продаем, не арендуем и не передаем вашу персональную информацию третьим лицам, за исключением случаев, предусмотренных законом или с вашего согласия. Мы принимаем разумные меры для защиты вашей персональной информации.
Если у вас есть вопросы или замечания по поводу нашей Политики конфиденциальности, пожалуйста, свяжитесь с нами по телефону: +7 (495) 741-99-96.
            </p>

            <h1>
            Соглашение на обработку персональных данных
            </h1>
            <p>
            Настоящим я, [Ф.И.О.], даю согласие ООО "Мебель Эрмитаж" на обработку моих персональных данных (имя, адрес электронной почты, номер телефона, почтовый адрес) для обработки заказов и предоставления информации о продуктах и услугах.

Я ознакомлен с правом на доступ к своим персональным данным, их исправление, удаление, ограничение обработки и правом на отзыв согласия на обработку персональных данных. Для реализации этих прав я могу связаться с Компанией по телефону: +7 (123) 456-78-90.

Настоящее согласие действует до момента его отзыва путем направления соответствующего уведомления Компании. В случае отзыва согласия Компания обязуется прекратить обработку и уничтожить мои персональные данные в течение 30 дней с момента получения уведомления.

            </p>
        </div>

    </div>
  )
}

export default PolicyPage