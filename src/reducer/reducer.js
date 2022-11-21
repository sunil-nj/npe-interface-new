import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    userDetails: '',
    fundDetails: '',
    fundStatus: '',
    paymentStatus: '',
    accountDetails: ''
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setUserDetails: (state, action) => {
        //state.userDetails = action.payload;
        let newState= Object.assign({},state,{userDetails:action.payload});
        return newState;
    },
    setFundDetails: (state, action) => {
        let newState= Object.assign({},state,{fundDetails:action.payload});
        return newState;
    },
    setFundStatus: (state, action) => {
        let newState= Object.assign({},state,{fundStatus:action.payload});
        return newState;
    },
    setPaymentStatus: (state, action) => {
      let newState= Object.assign({},state,{paymentStatus:action.payload});
      return newState;
    },
    setAccountDetails: (state, action) => {
      let newState= Object.assign({},state,{accountDetails:action.payload});
      return newState;
    } 
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setUserDetails, setFundDetails, setFundStatus, setPaymentStatus, setAccountDetails } = appSlice.actions

export default appSlice.reducer