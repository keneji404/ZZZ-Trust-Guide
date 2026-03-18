"use client";
import { useProgressStore } from "../store/useProgressStore";
import { Download, Upload } from "lucide-react";

export default function DataManager() {
  const { completedEvents, favoriteEvents, importProgress } =
    useProgressStore();

  const handleExport = () => {
    const dataStr = JSON.stringify(
      { completedEvents, favoriteEvents },
      null,
      2,
    );
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "zzz-trust-backup.json";
    link.click();
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        importProgress(json);
        alert("Progress imported successfully!");
      } catch (error) {
        alert("Invalid backup file.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex items-center gap-6 text-foreground text-sm px-4 py-2">
      <button
        onClick={handleExport}
        className="flex item items-center gap-2 hover:text-item-hover"
      >
        <Download size={20} strokeWidth={3} />{" "}
        <span className="hidden sm:inline">Export</span>
      </button>

      <label className="flex gap-2 items-center hover:text-item-hover">
        <Upload size={20} strokeWidth={3} />{" "}
        <span className="hidden sm:inline">Import</span>
        <input
          type="file"
          accept=".json"
          onChange={handleImport}
          className="hidden"
        />
      </label>
    </div>
  );
}
