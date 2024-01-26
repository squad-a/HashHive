import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface IStore {
  access_token: string;
  publication_id: string;
  setTokenAndPublicationId: (data: { id: string; token: string }) => void;
  removeTokenAndPublicationId: () => void;
}

export const useAppStore = create<IStore>()(
  persist(
    (set) => ({
      access_token: '',
      publication_id: '',
      setTokenAndPublicationId: (data) =>
        set({ access_token: data.token, publication_id: data.id }),
      removeTokenAndPublicationId: () => set({ access_token: '' })
    }),
    {
      name: 'app', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage) // (optional) by default, 'localStorage' is used
    }
  )
);
