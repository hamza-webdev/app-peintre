import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Artwork } from "@/lib/art-data";
import { CollectionButton } from "@/components/collection-button";

export function ArtCard({ artwork }: { artwork: Artwork }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.30)]">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-zinc-100">
            {artwork.period}
          </span>
          <CollectionButton id={artwork.id} />
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-amber-300">{artwork.country}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{artwork.title}</h3>
          <p className="mt-1 text-sm text-zinc-300">{artwork.artist}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-zinc-400">
          <span>{artwork.year}</span>
          <span>{artwork.movement}</span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Link
            href={`/tableaux/${artwork.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition hover:text-amber-200"
          >
            Voir les détails <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
