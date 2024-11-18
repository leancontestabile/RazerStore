import React from 'react'
import "./checkout.css"

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
    return (
            <form className='formBuyer' onSubmit={handleSubmitForm}>
                <div className='data'>
                    <label>Nombre completo</label>
                    <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} />
                </div>

                <div className='data'>
                    <label>Telefono</label>
                    <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} />
                </div>

                <div className='data'>
                    <label>Email</label>
                    <input type="email" name="mail" value={dataForm.email} onChange={handleChangeInput} />
                </div>


                <button type="submit">Enviar mi orden</button>

            </form>
    )
}

export default FormCheckout