import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IStore {
  access_token: string;
  setAccessToken: (token: string) => void;
  removeToken: () => void;
}

export const useAppStore = create<IStore>()(
  persist(
    (set) => ({
      access_token: '',
      setAccessToken: (token) => set({ access_token: token }),
      removeToken: () => set({ access_token: '' })
    }),
    {
      name: 'app', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage) // (optional) by default, 'localStorage' is used
    }
  )
);
