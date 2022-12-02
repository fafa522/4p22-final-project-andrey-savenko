import { useEffect, useState } from 'react';
import './opinionPage.css'


const OpinionPage = () => {

    const[email, setEmail] = useState('')
    const[name, setName] = useState('')
    const[emailDirty, setEmailDirty] = useState(false)
    const[nameDirty, setNameDirty] = useState(false)
    const[emailError, setEmailError] = useState('Поле обязательно для заполнения')
    const[nameError, setNameError] = useState('Поле обязательно для заполнения')
    const[formValid, setFormValid] = useState(false)
    const[gender, setGender] = useState('')
    const[comment, setComment] = useState('')
    const[checkbox, setCheckbox] = useState('')
    const[consoleAll, setConsole] = useState('')

    useEffect( () =>{
        if(emailError || nameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
        
    },[emailError, nameError])

    const genderHandler = (e) => {
        setGender(e.target.value)
    }
    const commentHandler = (e) => {
        setComment(e.target.value)
    }

    const handlerClick = (event) => {
        event.preventDefault()
       setConsole(console.log([email, name, gender, comment, checkbox]))
    } 


    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email')
        } else {
            setEmailError('')
        }

    }

    const nameHandler = (e) => {
        setName(e.target.value)
        if (!isNaN(e.target.value) === true) {
            setNameError('Имя некорректно')
        }else {
            setNameError('')
        }

    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'name':
                setNameDirty(true)  
                break
            default:
                break
        }
    }
    
    return (
        <div className='opinion-background'>
        <div className='opinion__wrap'>
            <form>
                <div className='opinion__text'>Отзыв</div>
                <div className='email-wrap'>
                    <label className='email-text' htmlFor='email'>Email</label>
                {emailDirty && emailError && <span className='main-email__error' id='mail__error'>{emailError}</span>}
                </div>
                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className='main-input__email' id='email' type='email' name='email' placeholder='Введите email'></input>
                <div className='name-wrap'>
                    <label className='name-text' htmlFor='name'>Имя</label>
                {nameDirty && nameError && <span className='main-name__error' id='name__error'>{nameError}</span>}
                </div>
                <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} className='main-input__name' type='name' id='name' name='name' placeholder='Введите имя' />
                <div className='textarea__wrap'>
                    <div className='textarea-text__style'>Введите ваш отзыв</div>
                    <textarea onChange={e => commentHandler(e)} className='textarea__text' name='comment' id='comment' placeholder='Отзыв...'></textarea>
                </div>
                <div className='radio__wrap'>
                    <div className='radio__name'>Пол</div>
                    <div className='radio__man'>
                        <input onChange={e => genderHandler(e)} className='radio__input-man' type='radio' name='gender' id='man' value='MAN' />
                        <label className='radio__text-man' htmlFor='man'>Мужчина</label>
                    </div>
                    <div className='radio__woman'>
                        <input onChange={e => genderHandler(e)} className='radio__input-woman' type='radio' name='gender' id='woman' value='WOMAN' />
                        <label className='radio__text-woman' htmlFor='woman'>Женщина</label>
                    </div>
                </div>
                <div className='form__checkbox'>
                    <input onChange={(e) => {setCheckbox(e.target.checked)}} id='checkbox' type='checkbox' />
                    <label id='checkbox' htmlFor='checkbox' name='checkbox' value='black'>Я согласен получать уведомления на почту</label>
                </div>
                <div className='button__wrap'>
                    <button onClick={handlerClick} value={consoleAll} disabled={!formValid} id='button__input' className='button__input'>Оставить отзыв</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default OpinionPage;