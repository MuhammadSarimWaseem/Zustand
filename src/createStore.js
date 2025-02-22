import { create } from "zustand";

const useStore = create((set) => ({
    num: 0, // Initial value
    setNum: (newNum) => set({ num: newNum }), // Setter function
}));

export default useStore;