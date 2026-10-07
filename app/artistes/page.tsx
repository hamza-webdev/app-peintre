import Image from "next/image";
import Link from "next/link";
import { artists } from "@/lib/art-data";

export default function ArtistesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[28px] bg-zinc-900 p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
        <p className="text-sm uppercase tracking-[0.22em] text-amber-200">Encyclopédie</p>
        <h1 className="mt-3 text-4xl font-semibold">Artistes majeurs</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {artists.map((artist) => (
          <Link href={`/artistes/${artist.slug}`} key={artist.slug} className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative h-72">
              <Image src={artist.portrait} alt={artist.name} fill className="object-cover" />
            </div>
            <div className="space-y-4 p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-amber-600">{artist.country}</p>
                <h2 className="mt-2 text-3xl font-semibold">{artist.name}</h2>
              </div>
              <p className="text-sm text-zinc-600">{artist.biography}</p>
              <div className="text-sm text-zinc-500">
                {artist.birthYear} – {artist.deathYear}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
