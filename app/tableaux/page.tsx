"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ArtCard } from "@/components/art-card";
import { artworks, periods } from "@/lib/art-data";

export default function TableauxPage() {
  const [query, setQuery] = useState("");
  const [period, setPeriod] = useState("Tous");

  const filteredArtworks = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return artworks.filter((artwork) => {
      const matchesPeriod = period === "Tous" || artwork.period === period;
      const haystack = [
        artwork.title,
        artwork.artist,
        artwork.country,
        artwork.period,
        artwork.movement,
        artwork.technique,
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = !normalized || haystack.includes(normalized);
      return matchesPeriod && matchesQuery;
    });
  }, [period, query]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[28px] bg-zinc-900 p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
        <p className="text-sm uppercase tracking-[0.22em] text-amber-200">Catalogue</p>
        <h1 className="mt-3 text-4xl font-semibold">Tableaux et œuvres majeures</h1>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <label className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-zinc-200">
            <Search className="h-4 w-4 text-amber-200" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher un tableau, artiste, pays ou mouvement..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
            />
          </label>

          <select
            value={period}
            onChange={(event) => setPeriod(event.target.value)}
            className="rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-zinc-100 outline-none"
          >
            <option value="Tous">Tous</option>
            {periods.map((item) => (
              <option key={item.slug} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-8 flex items-center justify-between text-sm text-zinc-600">
        <span>{filteredArtworks.length} œuvres affichées</span>
        <span>Recherche intelligente • filtres avancés</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredArtworks.map((artwork) => (
          <ArtCard key={artwork.id} artwork={artwork} />
        ))}
      </div>

      {filteredArtworks.length === 0 && (
        <div className="mt-10 rounded-[24px] border border-dashed border-zinc-300 bg-white p-10 text-center text-zinc-600">
          Aucun résultat ne correspond à votre recherche.
        </div>
      )}
    </div>
  );
}
