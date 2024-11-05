import {createContext, useReducer } from "react";

export const EcommerceContext = createContext([])



const initialState=[];
const reducer =(state, action)=>{
        switch(action.type){
            case "AddToCart":{
            return[...state,action.payload]
            
            }case "removeCart":{
                return state.filter((e)=>e.id !== action.payload)
            }case "clear":{
                return state=[];

            }
            case "increase QTY":{
                const item =state.map((e)=>{
                    if(e.id === action.payload.id){
                        e.QTY +=1

                    }else{
                        return 0
                    }
                })
                return item;

            }


            
           



            default:{
                throw new Error()
            }
        }

    }

const EcommerceProvider=({children})=>{
    const [cart, dispatch]=useReducer(reducer,initialState)

    // useEffect(()=>{
    //     const total=cart.reduce((a,e)=>e.price + a, 0)
    //     setTotal
    // },[cart])

    return(
        <EcommerceContext.Provider value={{cart, dispatch}}>
            {children}

        </EcommerceContext.Provider>
 
    )
}



export default EcommerceProvider