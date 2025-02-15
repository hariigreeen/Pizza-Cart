import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice(
    {
        name: 'whichPage',
        initialState: {
            page: null
        },
        reducers: {
            addpage: (state, actions) => {
                state.page = actions.payload
            }
        }
    }
)

export const { addpage } = pageSlice.actions
export default pageSlice.reducer