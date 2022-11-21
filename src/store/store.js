import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../reducer/reducer'

export default configureStore({
  reducer: {
    app: appReducer,
  },
})