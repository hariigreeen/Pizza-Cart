import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: ''
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.query = action.payload.toLowerCase();
        }
    }
});

export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;