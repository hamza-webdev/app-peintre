"use client";

import { useEffect, useState } from "react";
import { Heart, HeartOff } from "lucide-react";

const STORAGE_KEY = "peintre-collection";

export function useSavedWorks() {
  const [saved, setSaved] = useState<string[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    }
  }, [saved]);

  const toggle = (id: string) => {
    setSaved((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  };

  return { saved, toggle };
}

export function CollectionButton({ id }: { id: string }) {
  const { saved, toggle } = useSavedWorks();
  const active = saved.includes(id);

  return (
    <button
      onClick={() => toggle(id)}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10"
      aria-label={active ? "Retirer de ma collection" : "Ajouter à ma collection"}
    >
      {active ? <HeartOff className="h-4 w-4" /> : <Heart className="h-4 w-4" />}
      {active ? "Dans ma collection" : "Ajouter"}
    </button>
  );
}
