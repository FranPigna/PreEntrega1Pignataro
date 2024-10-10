import React from 'react'
import './CheckoutForm.css'

const Form = ({handleChage, submit, formData, error}) => {
    return (
        <form className='Formulario' onSubmit={submit}> 
            {
                Object.keys(formData).map((key, i) => (
                    <>
                    <label htmlFor={key} kei={i}>Ingrese su {key}:</label>
                    <input className='controls' type="text" name={key} id={key} onChange={handleChage} />
                    {
                        error[key] && <span>{error[key]}</span>
                    }
                    </>
                ))
            }
            <button className='BtFormulario'>Crear orden</button>
        </form>
    )
}

export default Form