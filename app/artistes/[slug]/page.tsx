import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artists, artworks } from "@/lib/art-data";

export default function ArtistDetailPage({ params }: { params: { slug: string } }) {
  const artist = artists.find((item) => item.slug === params.slug);

  if (!artist) {
    notFound();
  }

  const artistWorks = artworks.filter((artwork) => artwork.artistSlug === artist.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
        <div className="grid gap-8 p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
          <div className="relative h-[420px] overflow-hidden rounded-[28px]">
            <Image src={artist.portrait} alt={artist.name} fill className="object-cover" />
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-amber-600">{artist.movement}</p>
            <h1 className="mt-3 text-5xl font-semibold text-zinc-900">{artist.name}</h1>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-zinc-600">
              <span>Pays : {artist.country}</span>
              <span>Naissance : {artist.birthYear}</span>
              <span>Décès : {artist.deathYear}</span>
            </div>
            <p className="mt-6 text-base leading-8 text-zinc-600">{artist.biography}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {artist.highlights.map((highlight) => (
                <span key={highlight} className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-3xl font-semibold text-zinc-900">Œuvres majeures</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {artistWorks.map((artwork) => (
            <Link href={`/tableaux/${artwork.slug}`} key={artwork.id} className="overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-64">
                <Image src={artwork.image} alt={artwork.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <div className="text-sm uppercase tracking-[0.18em] text-amber-600">{artwork.period}</div>
                <h3 className="mt-3 text-2xl font-semibold text-zinc-900">{artwork.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{artwork.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
