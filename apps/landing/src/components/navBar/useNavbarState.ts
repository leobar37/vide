import { combine } from 'zustand/middleware';
import create from 'zustand';
export const useNavBarState = create(
  combine(
    {
      openNavbar: false,
      isMobile: false,
    },
    (set) => {
      return {
        set: set,
      };
    }
  )
);
