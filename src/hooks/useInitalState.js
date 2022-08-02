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

    return {
        state,
        addToCart,
    }
}

export {useInitalState}