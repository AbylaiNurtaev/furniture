import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAdmin, selectIsAuth } from '../../redux/slices/auth';
import axios from '../../axios';
import s from './AdminPage.module.sass';
import { fetchRemoveGoods } from '../../redux/slices/goods';
import { deleteCall, getCalls } from '../../redux/slices/call';

function AdminPage() {
    const dispatch = useDispatch();
    const [role, setRole] = useState('user');
    const [title, setTitle] = useState('');
    const [par, setPar] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('Гостиные');
    const [images, setImages] = useState([]);
    const [deletingTitle, setDeletingTitle] = useState('');
    const [style, setStyle] = useState('');
    const [author, setAuthor] = useState('');
    const [tone, setTone] = useState('светлый');
    const [calls, setCalls] = useState([]);
    const [successCreate, setSuccessCreate] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);
    const inputFileRefs = useRef([]);

    const handleChangeTitle = (e) => setTitle(e.target.value);
    const handleChangePar = (e) => setPar(e.target.value);
    const handleChangeTone = (e) => setTone(e.target.value);
    const handleChangePrice = (e) => setPrice(e.target.value);
    const handleChangeCategory = (e) => setCategory(e.target.value);
    const handleDeletingTitle = (e) => setDeletingTitle(e.target.value);
    const handleChangeStyle = (e) => setStyle(e.target.value);
    const handleChangeAuthor = (e) => setAuthor(e.target.value);

    const handleChangeFile = async (e, index) => {
        try {
            const formData = new FormData();
            const file = e.target.files[0];
            formData.append('image', file);
            const { data } = await axios.post('/upload', formData);
            console.log("URL DATA", data.url)
            const imageUrl = `${process.env.REACT_APP_BASE_URL}${data.url}`;
            setImages((prevImages) => {
                const newImages = [...prevImages];
                newImages[index] = imageUrl;
                return newImages;
            });
            console.log("Картины", images)

        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = async () => {
        try {
            const fields = {
                title: title.trim(),
                text: par,
                price,
                category,
                images,
                author,
                style,
                tone,
            };
            console.log(images)
            const { data } = await axios.post('/posts', fields);
            if (data) {
                setSuccessCreate(true);
                setTimeout(() => {
                    setSuccessCreate(false);
                }, 5000);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const onDelete = () => {
        dispatch(fetchRemoveGoods(deletingTitle))
            .then((data) => {
                console.log("SICS", data);
                if (data.payload) {
                    setSuccessDelete(true);
                    setTimeout(() => {
                        setSuccessDelete(false);
                    }, 5000);
                }else{
                    alert('Ошибка при удалении товара')
                }
            })
            .catch((err) => console.log(err));
    };

    // const deleteCall1 = (w) => {
    //     dispatch(deleteCall(w))
    //         .then((data) => {
    //             const deleted = calls.find((elem) => elem.phone == w);
    //             setCalls((prev) => prev.filter((elem) => elem.phone !== deleted.phone && elem.name !== deleted.name));
    //         })
    //         .catch((err) => console.log(err));
    // };

    useEffect(() => {
        dispatch(fetchAuthMe())
            .then((data) => {
                console.log(data);
                if (data.payload.role != undefined) {
                    setRole(data.payload.role);
                } else {
                    setRole('user');
                }
            })
            .catch((err) => console.log(err));

        dispatch(getCalls()).then((data) => {
            setCalls(data.payload);
        });
    }, []);

    return (
        <div className={s.container}>
            <div className={s.innerContainer}>
                {role == 'admin' ? (
                    <>
                        <div className={s.createPost}>
                            <h1>Создать товар</h1>
                            <input onChange={handleChangeTitle} type="text" placeholder="Название товара" />
                            <input onChange={handleChangePrice} type="text" placeholder="Цена" />
                            <input onChange={handleChangeStyle} type="text" placeholder="Стиль" />
                            <input onChange={handleChangeAuthor} type="text" placeholder="Производитель" />
                            <textarea onChange={handleChangePar} placeholder="Основной текст товара" />
                            <select onChange={handleChangeCategory}>
                                <option value="Гостиные">Гостиные</option>
                                <option value="Мягкая мебель">Мягкая мебель</option>
                                <option value="Спальни">Спальни</option>
                                <option value="Прихожие">Прихожие</option>
                                <option value="Мебель для ванны">Мебель для ванны</option>
                                <option value="Детская мебель">Детская мебель</option>
                                <option value="Кухни">Кухни</option>
                                <option value="Люстры">Люстры</option>
                                <option value="Бра">Бра</option>
                                <option value="Шторы">Шторы</option>
                                <option value="Постельное белье">Постельное белье</option>
                                <option value="Для сервировки стола">Для сервировки стола</option>
                                <option value="Вазы">Вазы</option>
                                <option value="Посуда">Посуда</option>
                                <option value="Декор">Декор</option>
                                <option value="Наши работы">Наши работы</option>
                                <option value="Картины">Картины</option>
                                <option value="Фабрики">Фабрики</option>
                            </select>
                            <select onChange={handleChangeTone}>
                                <option value="светлый">Светлый</option>
                                <option value="тёмный">Тёмный</option>
                            </select>
                            {[...Array(7)].map((_, index) => (
                                <div key={index}>
                                    <input
                                        type="file"
                                        onChange={(e) => handleChangeFile(e, index)}
                                        hidden
                                        ref={(el) => (inputFileRefs.current[index] = el)}
                                    />
                                    <button onClick={() => inputFileRefs.current[index].click()}>
                                        Загрузить картинку {index + 1}
                                    </button>
                                    {images[index] && (
                                        <img
                                            style={{ width: '100px' }}
                                            src={images[index]}
                                            alt={`Картинка ${index + 1}`}
                                        />
                                    )}
                                </div>
                            ))}
                            <button onClick={onSubmit} className={s.submitBtn}>
                                Опубликовать
                            </button>
                            {successCreate && <h1>✅Успешно опубликован товар✅</h1>}
                        </div>

                        <div className={s.deletePost}>
                            <h1>Удалить товар</h1>
                            <input type="text" placeholder="Название товара: " onChange={handleDeletingTitle} />
                            <button onClick={onDelete}>Удалить товар</button>
                            {successDelete && <h1>✅Успешно удалён товар✅</h1>}
                        </div>

                        {/* <div className={s.calls}>
                            <h1>Звонки</h1>
                            {calls &&
                                calls.map((elem, index) => (
                                    <div key={index} className={s.block}>
                                        <p>{elem.name}</p>
                                        <p>{elem.phone}</p>
                                        <img
                                            onClick={() => deleteCall1(elem.phone)}
                                            src="https://cdn-icons-png.flaticon.com/512/1345/1345823.png"
                                            alt=""
                                        />
                                    </div>
                                ))}
                        </div> */}
                    </>
                ) : (
                    <p>No access</p>
                )}
            </div>
        </div>
    );
}

export default AdminPage;
