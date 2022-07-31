import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [
      //   {
      //     id: 1,
      //     noteText: "Lorem ipsum dolor sit amet",
      //     color: "dark",
      //   }
    ],
  },
  reducers: {
    addToDoItem: {
      reducer: (state, action) => {
        state.notes.push(action.payload);
      },
      prepare: ({ noteText, color }) => {
        return {
          payload: {
            id: nanoid(),
            noteText,
            color,
          },
        };
      },
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToDoItem } = notesSlice.actions;

export default notesSlice.reducer;
