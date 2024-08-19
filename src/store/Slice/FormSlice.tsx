import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface FormData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  subject: string;
  message: string;
}

interface FormState {
  data: FormData[];
}

const initialState: FormState = {
  data: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addFormData(state, action: PayloadAction<Omit<FormData, 'id'>>) {
      const formDataWithId = { ...action.payload, id: uuidv4() };
      state.data.push(formDataWithId);
    },
    updateFormData(state, action: PayloadAction<FormData>) {
      const index = state.data.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
  },
});

export const { addFormData, updateFormData } = formSlice.actions;
export default formSlice.reducer;
