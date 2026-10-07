import Image from "next/image";
import Link from "next/link";
import { Calendar, Download, MapPin, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { CollectionButton } from "@/components/collection-button";
import { artworks } from "@/lib/art-data";

export default function ArtworkDetailPage({ params }: { params: { slug: string } }) {
  const artwork = artworks.find((item) => item.slug === params.slug);

  if (!artwork) {
    notFound();
  }

  const related = artworks.filter((item) => item.artist === artwork.artist && item.id !== artwork.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
        <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative h-[500px] w-full">
            <Image src={artwork.image} alt={artwork.title} fill className="object-cover" priority />
          </div>

          <div className="space-y-6 p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs uppercase tracking-[0.22em] text-amber-700">
                {artwork.period}
              </span>
              <CollectionButton id={artwork.id} />
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">{artwork.country}</p>
              <h1 className="mt-3 text-4xl font-semibold text-zinc-900">{artwork.title}</h1>
              <p className="mt-3 text-lg text-zinc-600">{artwork.artist}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-zinc-100 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Date</div>
                <div className="mt-2 text-lg font-medium">{artwork.year}</div>
              </div>
              <div className="rounded-2xl bg-zinc-100 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Mouvement</div>
                <div className="mt-2 text-lg font-medium">{artwork.movement}</div>
              </div>
              <div className="rounded-2xl bg-zinc-100 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Technique</div>
                <div className="mt-2 text-lg font-medium">{artwork.technique}</div>
              </div>
              <div className="rounded-2xl bg-zinc-100 p-4">
                <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">Dimensions</div>
                <div className="mt-2 text-lg font-medium">{artwork.dimensions}</div>
              </div>
            </div>

            <div className="space-y-4 text-zinc-600">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-amber-600" />
                <span>{artwork.museum}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-amber-600" />
                <span>{artwork.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>{artwork.license}</span>
              </div>
            </div>

            <a
              href={artwork.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white"
            >
              <Download className="h-4 w-4" /> Source officielle
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-zinc-900">Histoire de l&apos;œuvre</h2>
            <p className="mt-4 text-base leading-8 text-zinc-600">{artwork.history}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900">Analyse artistique</h2>
            <p className="mt-4 text-base leading-8 text-zinc-600">{artwork.artisticAnalysis}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-zinc-900">Description</h2>
            <p className="mt-4 text-base leading-8 text-zinc-600">{artwork.description}</p>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[28px] bg-zinc-900 p-6 text-white">
            <h3 className="text-xl font-semibold">À propos de l&apos;artiste</h3>
            <Link href={`/artistes/${artwork.artistSlug}`} className="mt-4 inline-block text-amber-200">
              {artwork.artist}
            </Link>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{artwork.movement}</p>
            <p className="mt-2 text-sm text-zinc-400">{artwork.country}</p>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-white p-6">
            <h3 className="text-xl font-semibold text-zinc-900">Œuvres connexes</h3>
            <div className="mt-4 space-y-4">
              {related.map((item) => (
                <Link key={item.id} href={`/tableaux/${item.slug}`} className="flex items-center gap-4 rounded-2xl bg-zinc-50 p-3 transition hover:bg-zinc-100">
                  <div className="relative h-20 w-20 overflow-hidden rounded-xl">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-medium text-zinc-900">{item.title}</div>
                    <div className="text-sm text-zinc-500">{item.artist}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
