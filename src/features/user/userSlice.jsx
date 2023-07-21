import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  isLoading: false,
  user: null,
}
// console.log(initialState);  //{isLoading:false, user:null}

const userSlice = createSlice({
  name: 'user',
  initialState,
})

// console.log(initialState); //{isLoading:false, user:null}
// console.log(userSlice.name); // user

export default userSlice.reducer;
