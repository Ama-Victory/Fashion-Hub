import {createSlice} from '@reduxjs/toolkit'
// import AddToCart from '../AddToCart/AddToCart'

const initialState ={
    cart:[],
}

export const any = createSlice({
    name: 'ecommerce',
    initialState,
    reducers:{
        addToCart: (state, {payload})=>{
            //  state.cart.push (payload)
            //  console.log("this is my cart:",payload);
            //  Toast.success("AddToCart");
            const find = state.cart.findIndex((item)=>item?.id === payload?.id)
            if (find >=0){
                state.cart[find].QTY +=1
            }else{
                const addValue ={
                    ...payload,
                    QTY:1
                };
                 state.cart.push(addValue);
            }
        },


        deleteFromCart: (state, {payload})=>{

            // Toast.success("deleted from cart");
            state.cart = state.cart.filter(
                (item)=> item.id !== payload.id
            );
        },

        decreaseQuantity: (state, {payload})=>{
            // toast.success("decrease");
            let newCart =state.cart.map((item)=>{
                if (item.id === payload.id){
                    return {...item, QTY: item.QTY -1}
                }
                return item;
            });
            newCart=newCart.filter((item)=> item.QTY >0)
            state.cart =newCart
        },


        increaseQuantity: (state, {payload})=>{
            
            let newCart =state.cart.map((item)=>{
                if (item.id === payload.id){
                    return {...item, QTY: item.QTY +1}
                }return item
            })

            state.cart = newCart
        },
        clearCart: (state)=>{
            state.cart = []
        },

        TotalQty:(state)=>{
            state.cart=cart.length
        }
        
    }
})

export const {
  addToCart,
  deleteFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  TotalQty,
  hanlePrice,
} = any.actions;
export default any.reducer
