import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthMe, selectIsAdmin, selectIsAuth } from '../../redux/slices/auth'
import axios from '../../axios'
import s from './AdminPage.module.sass'
import { fetchRemoveGoods } from '../../redux/slices/goods'
function AdminPage() {
    const dispatch = useDispatch()
    const [role, setRole] = useState('user')

    const [title, setTitle] = useState("")
    const [par, setPar] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [imageUrl1, setImageUrl1] = useState("")
    const [imageUrl2, setImageUrl2] = useState("")
    const [deletingTitle, setDeletingTitle] = useState("")
    const [style, setStyle] = useState("")
    const [author, setAuthor] = useState("")


    const[successCreate, setSuccessCreate] = useState(false)
    const[successDelete, setSuccessDelete] = useState(false)


    const inputFileRef = useRef()
    const inputFileRef1 = useRef()
    const inputFileRef2 = useRef()
    

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChangePar = (e) => {
        setPar(e.target.value)
    }
    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }
    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleDeletingTitle = (e) => {
        setDeletingTitle(e.target.value)
    }
    const handleChangeStyle = (e) => {
        setStyle(e.target.value)
    }
    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value)
    }
    const handleChangeFile = async(e) => {
        try {
            const formData = new FormData()
            const file = e.target.files[0];
            formData.append('image', file);

            const { data } = await axios.post('/upload', formData)
            setImageUrl(`https://intuitive-charisma-production.up.railway.app${data.url}`)
        } catch (error) {
            console.log(error)
        }
    }
    const handleChangeFile1 = async(e) => {
        try {
            const formData = new FormData()
            const file = e.target.files[0];
            formData.append('image', file);

            const { data } = await axios.post('/upload', formData)
            setImageUrl1(`https://intuitive-charisma-production.up.railway.app${data.url}`)
        } catch (error) {
            console.log(error)
        }
    }
    const handleChangeFile2 = async(e) => {
        try {
            const formData = new FormData()
            const file = e.target.files[0];
            formData.append('image', file);

            const { data } = await axios.post('/upload', formData)
            setImageUrl2(`https://intuitive-charisma-production.up.railway.app${data.url}`)
        } catch (error) {
            console.log(error)
        }
    }

    const onSubmit = async () => {
        try{
            const fields = {
                title,
                text: par,
                price, 
                category,
                imageUrl,
                imageUrl1,
                imageUrl2,
                author,
                style
            }
            const { data } = await axios.post('/posts', fields)
            if(data){
                setSuccessCreate(true)
                setTimeout(() => {
                    setSuccessCreate(false)
                }, 5000)
            }

        }catch(err) {
            console.log(err)
        }

    }

    const onDelete = () => {
        dispatch(fetchRemoveGoods(deletingTitle))
        .then(data => {
            if(data){
                setSuccessDelete(true)
                setTimeout(() => {
                    setSuccessDelete(false)
                }, 5000)
            }
        })
        .catch((err) => console.log(err))
    }


    useEffect(() => {
        dispatch(fetchAuthMe())
            .then(data => {
                console.log(data)
                if (data.payload.role != undefined) {
                    setRole(data.payload.role)
                } else {
                    setRole('user')
                }
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className={s.container}>
            <div className={s.innerContainer}>
                {
                    role == "admin" ? 
                        <>
                            <div className={s.createPost}>
                                <h1>Создать товар</h1>
                                <input onChange={(e) => {handleChangeTitle(e)}} type="text" placeholder='Название товара'/>
                                <input onChange={(e) => {handleChangePrice(e)}} type="text" placeholder='Цена'/>
                                <input onChange={(e) => {handleChangeStyle(e)}} type="text" placeholder='Стиль'/>
                                <input onChange={(e) => {handleChangeAuthor(e)}} type="text" placeholder='Производитель'/>
                                <textarea onChange={(e) => {handleChangePar(e)}} placeholder='основной текст товара'/>
                                <select  onChange={(e) => {handleChangeCategory(e)}}>
                                    <option value="Мебель со склада">Мебель со склада</option>
                                    <option value="Гостиные">Гостиные</option>
                                    <option value="Мягкая мебель">Мягкая мебель</option>
                                    <option value="Кровати">Кровати</option>
                                    <option value="Мебель для ванны">Мебель для ванны</option>
                                    <option value="Детские">Детские</option>
                                    <option value="Кухни">Кухни</option>
                                    <option value="Люстры">Люстры</option>
                                    <option value="Бра">Бра</option>
                                    <option value="Шторы">Шторы</option>
                                    <option value="Постельное белье">Постельное белье</option>
                                    <option value="Для сервировки стола">Для сервировки стола</option>
                                    <option value="Вазы">Вазы</option>
                                    <option value="Посуда">Посуда</option>
                                    <option value="Декор">Декор</option>
                                    <option value="Картины">Картины</option>
                                    <option value="Специальное предложение">Специальное предложение</option>
                                    <option value="Кабинеты">Кабинеты</option>
                                </select>
                                <input type="file" onChange={(e) => handleChangeFile(e)} hidden ref={inputFileRef}/>
                                <input type="file" onChange={(e) => handleChangeFile1(e)} hidden ref={inputFileRef1}/>
                                <input type="file" onChange={(e) => handleChangeFile2(e)} hidden ref={inputFileRef2}/>
                                <button onClick={() => {inputFileRef.current.click()}}>Загрузать картинку 1</button>
                                <button onClick={() => {inputFileRef1.current.click()}}>Загрузать картинку 2</button>
                                <button onClick={() => {inputFileRef2.current.click()}}>Загрузать картинку 3</button>
                                {
                                    imageUrl && (
                                        <img style={{width: "100px"}} src={`https://intuitive-charisma-production.up.railway.app${imageUrl}`} alt="" />
                                    )
                                }
                                <button onClick={onSubmit} className={s.submitBtn}>Опубликовать</button>
                                {
                                    successCreate &&
                                    <h1>✅Успешно опубликован товар✅</h1>
                                }
                            </div>

                            <div className={s.deletePost}>
                                <h1>Удалить товар</h1>
                                <input type="text" placeholder='Название товара: ' onChange={(e) => handleDeletingTitle(e)} />
                                <button onClick={onDelete}>Удалить товар</button>
                                {
                                    successDelete &&
                                    <h1>✅Успешно удалён товар✅</h1>
                                }
                            </div>
                        </>
                        
                    
                    
                    
                    : <p>no access</p>
                }
            </div>
        </div>
    )
}

export default AdminPage