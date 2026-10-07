"use client";

import Image from "next/image";
import Link from "next/link";
import { useSavedWorks } from "@/components/collection-button";
import { artworks } from "@/lib/art-data";

export default function CollectionPage() {
  const { saved } = useSavedWorks();
  const collection = artworks.filter((artwork) => saved.includes(artwork.id));

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[28px] bg-zinc-900 p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
        <p className="text-sm uppercase tracking-[0.22em] text-amber-200">Bibliothèque personnelle</p>
        <h1 className="mt-3 text-4xl font-semibold">Ma collection</h1>
      </div>

      {collection.length === 0 ? (
        <div className="rounded-[28px] border border-dashed border-zinc-300 bg-white p-12 text-center text-zinc-600">
          Aucune œuvre enregistrée pour le moment. Ajoutez vos premières pièces depuis le catalogue.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {collection.map((artwork) => (
            <Link href={`/tableaux/${artwork.slug}`} key={artwork.id} className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-72">
                <Image src={artwork.image} alt={artwork.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="text-sm uppercase tracking-[0.18em] text-amber-600">{artwork.period}</div>
                <h2 className="mt-3 text-2xl font-semibold text-zinc-900">{artwork.title}</h2>
                <p className="mt-2 text-sm text-zinc-600">{artwork.artist}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
