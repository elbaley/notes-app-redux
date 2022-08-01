import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [
      {
        id: 1,
        noteText:
          "Oğlum Zebercet, ben ölünce olur olmaz kimselere vermezsin bu odayı. Bir otelde böyle bir oda gerek.",
        color: "red",
      },
      {
        id: 2,
        noteText:
          "Orta boylu denemez; kısa da değil. Askerliğindeki ölçülere göre boyu bir altmış iki, kilosu elli dört. Şimdilerde, otuz üç yaşında, gene don-gömlek kantara çıksa ellli altı ya da ellli yedi kiloyu bulur.",
        color: "orange",
      },
      {
        id: 3,
        noteText:
          "Ankara treni geçtikten yarım saat sonra dış kapıyı demirleyip kilitledi. Gecikme üç saat değil iki saattı. Salonun ışıklarını söndürdü; odaya girdi.",
        color: "green",
      },
      {
        id: 4,
        noteText:
          "On sekiz kırk treninin geçişinden çok sonra, elleri arkasında merdivenle dış kapı arasında gidip geliyordu. Kapı açıldı: orta boylu, gençten bir adamdı.",
        color: "dark",
      },
    ],
    filterText: "",
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
    deleteToDoItem: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    },
    setFilter: (state, action) => {
      state.filterText = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToDoItem, setFilter, deleteToDoItem } = notesSlice.actions;

export default notesSlice.reducer;
