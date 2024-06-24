import { createContext } from 'react';
import { LoaderProps } from 'shared/types';

export const LoaderContext = createContext<LoaderProps>({
  isLoading: true,
});
