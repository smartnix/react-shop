import { useState } from 'react'

const initalState = {
    cart: []
}

const useInitalState = () => {
    
    const [state, setState] = useState(initalState);
    
    const addToCart = (payload) =>{
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart:state.cart.filter(item => item.id !== payload.id)
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export {useInitalState}