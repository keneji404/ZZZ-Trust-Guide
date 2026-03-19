"use client";
import { Check, Star } from "lucide-react";
import { TrustEvent } from "../data/agents";
import { useProgressStore } from "../store/useProgressStore";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

export default function EventCard({ event }: { event: TrustEvent }) {
  const { completedEvents, favoriteEvents, toggleCompleted, toggleFavorite } =
    useProgressStore();

  const isCompleted = completedEvents.includes(event.id);
  const isFavorite = favoriteEvents.includes(event.id);

  return (
    <div
      className={`p-4 rounded-lg border-2 transition-all ${isCompleted ? "border-item-active bg-background opacity-25" : "border-border-soft/50 bg-surface shadow-surface"}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-md text-foreground">{event.title}</h3>
          <p className="text-xs text-foreground/50">{event.location}</p>
        </div>

        {/* buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => toggleFavorite(event.id)}
            className={`p-1 rounded-full border-2 border-border-soft transition-all duration-200 flex items-center justify-center
            ${isFavorite ? "bg-[#fcff00]" : "bg-item-inactive hover:bg-item-hover-grad"}`}
            title="Add to Favorites"
          >
            <div className="p-1 w-6 h-6 rounded-full flex items-center justify-center bg-item-background">
              <Star
                strokeWidth={3}
                className={
                  isFavorite
                    ? "fill-[#fcff00] text-foreground"
                    : "text-foreground/75"
                }
              />
            </div>
          </button>
          <button
            onClick={() => toggleCompleted(event.id)}
            className={`p-1 rounded-full border-2 border-border-soft transition-all duration-200 flex items-center justify-center
            ${isCompleted ? "bg-[#beff01]" : "bg-item-inactive hover:bg-item-hover-grad"}`}
            title="Mark as Complete"
          >
            <div className="p-1 w-6 h-6 rounded-full flex items-center justify-center bg-item-background">
              <Check
                strokeWidth={4}
                className={
                  isCompleted ? "text-item-active" : "text-foreground/75"
                }
              />
            </div>
          </button>
        </div>
      </div>

      {/* answers */}
      <div className="space-y-2">
        {event.choices?.map(
          (
            choice: {
              isOptimal: any;
              text:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<unknown, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactPortal
                    | ReactElement<unknown, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | null
                    | undefined
                  >
                | null
                | undefined;
            },
            index: Key | null | undefined,
          ) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className={`text-xs ${choice.isOptimal ? "text-[#beff01]" : "text-red-500"}`}
              >
                {choice.isOptimal ? "+" : "-"}
              </span>
              <span className="text-foreground text-xs">{choice.text}</span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
