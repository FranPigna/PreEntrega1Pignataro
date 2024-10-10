import React from 'react'

const Form = ({handleChage, submit, formData, error}) => {
    return (
        <form onSubmit={submit}> 
            {
                Object.keys(formData).map((key, i) => (
                    <>
                    <label htmlFor={key} kei={i}>Ingrese {key}</label>
                    <input type="text" name={key} id={key} onChange={handleChage} />
                    {
                        error[key] && <span>{error[key]}</span>
                    }
                    </>
                ))
            }
            <button className=''>Crear orden</button>
        </form>
    )
}

export default Form