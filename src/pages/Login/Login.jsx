import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogin, selectIsAuth } from '../../redux/slices/auth'
import { useNavigate } from 'react-router-dom'

import s from './Login.module.sass'

function Login() {

    const [email, setEmail] = useState('')    
    const [password, setPassword] = useState('')    

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const onSubmit = async() => {
        const data = await dispatch(fetchLogin({email, password}))
        if(!data.payload){
            return alert('Не удалось авторизоваться!')
        }
        if('token' in data.payload){
            window.localStorage.setItem('token', data.payload.token)
            navigate('/')
        }
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }


    return (
        <div className={s.container}>
            <div className={s.innerContainer}>
                <div className={s.left}>
                    <h1>Вход</h1>
                    <p className={s.par}>Войдите в свой аккаунт</p>
                    <input
                    className={s.emailInput}
                    type="text"
                    placeholder='Введите вашу почту'
                    onChange={(e) => handleChangeEmail(e)}
                    />
                    <input
                    type="password"
                    placeholder='Введите ваш пароль'
                    onChange={(e) => handleChangePassword(e)}
                    />

                    <button onClick={onSubmit}>Войти</button>

                    <p onClick={() => {navigate('/registration')}} className={s.link}>Нету аккаунта? Зарегестрироваться</p>
                </div>

                <img className={s.right} src="/information/info1.png" alt="" />
            </div>
        </div>
    )
}

export default Login