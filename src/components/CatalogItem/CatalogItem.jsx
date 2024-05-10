import React from 'react'
import s from './CatalogItem.module.sass'

function CatalogItem({width, src, text, textWidth}) {
  return (
    <div className={s.container} style={{width}}>
        <img src={src} alt="image" />
        <div className={s.bottom} style={{width: textWidth}}>
            <p>{text}</p>
            <img className={s.lightIcon} src="/icons/up right.png" alt="" />
            <img className={s.boldIcon} src="/icons/up_right_bold.png" alt="dsads" />
            
        </div>
    </div>
  )
}

export default CatalogItem