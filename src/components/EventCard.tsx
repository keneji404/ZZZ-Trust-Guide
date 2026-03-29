"use client";
import { Check, Star, CornerDownRight } from "lucide-react";
import { TrustEvent, TrustResult } from "../data/agents";
import { useProgressStore } from "../store/useProgressStore";

const getResultUI = (result: TrustResult) => {
  switch (result) {
    case "Significant":
      return {
        color: "text-[#ff9d00]",
        icon: "/eventIcons/significant.webp",
      };
    case "Normal":
      return {
        color: "text-[#4ade80]",
        icon: "/eventIcons/normal.webp",
      };
    case "Decrease":
      return {
        color: "text-[#3b82f6]",
        icon: "/eventIcons/decrease.webp",
      };
    default:
      return {
        color: "text-foreground/50",
        icon: "",
      };
  }
};

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

      {/* location image */}
      {event.image && (
        <div className="mb-4 w-full aspect-video rounded-lg overflow-hidden relative">
          <img
            src={event.image}
            alt={`Location for ${event.title}`}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isCompleted ? "opacity-50" : "opacity-100"}`}
          />
        </div>
      )}

      {/* answers */}
      <div className="mt-auto pt-3">
        <div className="space-y-2">
          {event.choices?.map((choice, index) => {
            const ui = getResultUI(choice.result);

            // check if answers within an array
            const steps = Array.isArray(choice.text)
              ? choice.text
              : [choice.text];

            return (
              <div
                key={index}
                className="flex items-start gap-3 bg-background p-3 rounded-lg border-2 border-border-soft"
              >
                <img
                  src={ui.icon}
                  alt={choice.result}
                  title={choice.result}
                  className="w-6 h-6 shrink-0 mt-0.5"
                />

                <div className="flex flex-col gap-2 flex-1 pt-0.5">
                  {steps.map((step, stepIndex) => (
                    <div
                      key={stepIndex}
                      className={`flex items-start ${stepIndex > 0 ? "ml-2 sm:ml-5" : ""}`}
                    >
                      {stepIndex > 0 && (
                        <CornerDownRight
                          size={16}
                          className="text-foreground/50 shrink-0 mr-2 mt-0.5"
                        />
                      )}

                      {/* dialogue text */}
                      <span
                        className={`text-sm ${
                          choice.result === "Decrease"
                            ? "text-foreground/50"
                            : ui.color
                        }`}
                      >
                        "{step}"
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
