import React, { useState } from 'react'

const ItemCount = ({ stock }) => {
    const [contador, setContador] = useState(1)

    const restarContador = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const aumentarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    return (
        <div className='contador'>
            <button onClick={restarContador}> - </button>
            {contador}
            <button onClick={aumentarContador}> + </button>
        </div>
    )
}

export default ItemCount