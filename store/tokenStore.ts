import { create } from "zustand";
import { persist } from "zustand/middleware";
import jsonwebtoken from 'jsonwebtoken';

const tokenStore = (set: any) => ({
  token: null,
  setToken: (token: string) => {
	set({ token });
  },
});

const useTokenStore = create(persist(tokenStore, { name: "token" }));

export default useTokenStore;
