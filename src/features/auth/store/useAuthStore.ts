import { create } from 'zustand';
import { AuthState } from 'features/auth/types';
import { authSlice } from 'features/auth/slices';

export const useAuthStore = create<AuthState>(authSlice);
