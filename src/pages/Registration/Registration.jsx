import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import s from './Registration.module.sass'
import { fetchRegister } from '../../redux/slices/auth'

function Registration() {
    const [name, setName] = useState('')    
    const [email, setEmail] = useState('')    
    const [password, setPassword] = useState('')
    const [passwordConfirm, setConfirmPassword] = useState('')

    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPass, setErrorPass] = useState(false)
    const [errorConfirm, setErrorConfirm] = useState(false)


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
        if (errorEmail) {
            checkEmail(e.target.value) // обновляем проверку email
        }
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
        if (errorPass) {
            checkPassword(e.target.value) // обновляем проверку пароля
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if (errorConfirm) {
            checkConfirmPass(password, e.target.value) // обновляем проверку подтверждения пароля
        }
    }

    const checkEmail = (value) => {
        const domains = ['gmail', 'email', 'mail', 'outlook'];
        if (value.includes('@') && domains.some(domain => value.includes(domain))) {
            setErrorEmail(false);
        } else {
            setErrorEmail(true);
        }
    }

    const checkPassword = (value) => {
        if (value.length > 5) {
            setErrorPass(false);
        } else {
            setErrorPass(true);
        }
    }

    const checkConfirmPass = (pass, confirmPass) => {
        if (pass === confirmPass) {
            setErrorConfirm(false);
        } else {
            setErrorConfirm(true);
        }
    }

    const onSubmit = async () => {
        if(!errorConfirm && !errorEmail && !errorPass){
            const data = await dispatch(fetchRegister({email, fullName: name, password}))

            if(!data.payload){
                return alert('Не удалось авторизоваться!')
            }
            if('token' in data.payload){
                window.localStorage.setItem('token', data.payload.token)
            }
        }
    }   

    return (
        <div className={s.container}>
            <div className={s.innerContainer}>
                <div className={s.left}>
                    <h1>Регистрация</h1>
                    <p className={s.par}>Зарегистрировать новый аккаунт</p>
                    <input
                        className={s.emailInput}
                        type="text"
                        placeholder='Введите вашу почту'
                        value={email}
                        onChange={handleChangeEmail}
                        onBlur={() => checkEmail(email)}
                    />
                    {
                        errorEmail ? 
                        <p style={{color: 'red'}}>*Неверный формат почты</p> : null
                    }
                    <input
                        className={s.nameInput}
                        type="text"
                        placeholder='Введите ваше имя'
                        value={name}
                        onChange={handleChangeName}
                    />
                    <input
                        type="password"
                        placeholder='Введите ваш пароль'
                        value={password}
                        onChange={handleChangePassword}
                        onBlur={() => checkPassword(password)}
                    />
                    {
                        errorPass ? 
                        <p style={{color: 'red'}}>*Слишком короткий пароль</p> : null
                    }
                    <input
                        type="password"
                        placeholder='Подтвердите ваш пароль'
                        value={passwordConfirm}
                        onChange={handleConfirmPassword}
                        onBlur={() => checkConfirmPass(password, passwordConfirm)}
                    />
                    {
                        errorConfirm ? 
                        <p style={{color: 'red'}}>*Пароли не совпадают</p> : null
                    }
                    <button onClick={onSubmit}>Зарегистрироваться</button>
                </div>

                <img className={s.right} src="/images/описание.png" alt="" />
            </div>
        </div>
    )
}

export default Registration
