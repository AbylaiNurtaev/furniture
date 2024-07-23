import React from 'react'
import s from './CatalogItem.module.sass'
import { useNavigate } from 'react-router-dom'

function CatalogItem({width, src, text, textWidth, href}) {
  const navigate = useNavigate()
  return (
    <div className={s.container} style={{width}}>
        <img src={src} alt="image" onClick={() => navigate(href)} />
        <div className={s.bottom} style={{width: textWidth}}>
            <p>{text}</p>
            <img className={s.lightIcon} src="/icons/up right.png" alt="" />
            <img className={s.boldIcon} src="/icons/up_right_bold.png" alt="dsads" />
            
        </div>
    </div>
  )
}

export default CatalogItem