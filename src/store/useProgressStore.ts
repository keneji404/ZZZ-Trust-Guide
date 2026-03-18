import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProgressState {
  completedEvents: string[]; // Array of Event IDs
  favoriteEvents: string[]; // Array of Event IDs
  showFactionOnly: boolean;
  toggleCompleted: (eventId: string) => void;
  toggleFavorite: (eventId: string) => void;
  toggleFactionFilter: () => void;
  importProgress: (data: Partial<ProgressState>) => void;
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      completedEvents: [],
      favoriteEvents: [],
      showFactionOnly: true,

      toggleCompleted: (eventId) =>
        set((state) => {
          const isCompleted = state.completedEvents.includes(eventId);
          return {
            completedEvents: isCompleted
              ? state.completedEvents.filter((id) => id !== eventId) // Remove if exists
              : [...state.completedEvents, eventId], // Add if it doesn't
          };
        }),

      toggleFavorite: (eventId) =>
        set((state) => {
          const isFavorite = state.favoriteEvents.includes(eventId);
          return {
            favoriteEvents: isFavorite
              ? state.favoriteEvents.filter((id) => id !== eventId)
              : [...state.favoriteEvents, eventId],
          };
        }),

      toggleFactionFilter: () =>
        set((state) => ({
          showFactionOnly: !state.showFactionOnly,
        })),

      importProgress: (data) =>
        set(() => ({
          completedEvents: data.completedEvents || [],
          favoriteEvents: data.favoriteEvents || [],
        })),
    }),
    {
      name: "zzz-trust-storage", // The name of the key in localStorage
    },
  ),
);
