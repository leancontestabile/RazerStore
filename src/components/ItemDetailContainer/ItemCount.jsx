import React, { useState } from 'react'

const ItemCount = () => {
    const [contador, setContador] = useState(1)

    const restarContador = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const aumentarContador = () => {
        setContador(contador + 1)
    }

    return (
        <div>
            <button onClick={restarContador}>-</button>
            {contador}
            <button onClick={aumentarContador}>+</button>
        </div>
    )
}

export default ItemCount