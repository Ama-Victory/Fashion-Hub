import {configureStore} from '@reduxjs/toolkit'
import anyname from './global/features'

export const store = configureStore({
   reducer: {
    ecommerce: anyname
   }
})