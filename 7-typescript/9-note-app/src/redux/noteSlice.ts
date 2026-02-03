import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Note, NoteValues } from "../types";
import { v4 } from "uuid";

const initialState: { notes: Note[] } = { notes: [] };

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteValues>) => {
      // payload olarak gelen nota id ekle
      const newNote: Note = {
        id: v4(),
        ...action.payload,
      };

      // notu diziye
      state.notes.push(newNote);
    },

    deleteNote: (state, action: PayloadAction<string>) => {
      // kaldırılacak elemanın sırasısnı bul
      const index = state.notes.findIndex((note) => note.id === action.payload);

      // diziden elemanı kaldır
      state.notes.splice(index, 1);
    },

    updateNote: (state, action: PayloadAction<{ id: string; values: NoteValues }>) => {
      // düzenlenicek elemanın sırasını bul
      const index = state.notes.findIndex((note) => note.id == action.payload.id);

      // dizideki sırası bilinen elamanı güncelle
      state.notes[index] = { id: action.payload.id, ...action.payload.values };
    },
  },
});

export default noteSlice.reducer;

export const { addNote, deleteNote, updateNote } = noteSlice.actions;
