import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Heart, Palette, Search, ShieldCheck, Sparkles } from "lucide-react";
import { ArtCard } from "@/components/art-card";
import { artworks, artists, periods, featuredArtwork, dailySpotlight } from "@/lib/art-data";

export default function Home() {
  return (
    <div className="bg-[#f7f3ee]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={featuredArtwork.image} alt={featuredArtwork.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1918]/90 via-[#1a1918]/65 to-[#1a1918]/25" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pt-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-amber-200 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" /> Musée numérique
            </span>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Explorez l&apos;histoire de la peinture mondiale
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-200">
              Découvrez les grands maîtres, les chefs-d&apos;œuvre et les mouvements artistiques qui ont façonné le patrimoine visuel mondial.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/tableaux" className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-amber-200">
                <Search className="h-4 w-4" /> Explorer les œuvres
              </Link>
              <Link href="/artistes" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                <Palette className="h-4 w-4" /> Découvrir les artistes
              </Link>
            </div>
          </div>

          <div className="mt-12 grid max-w-xl gap-4 md:grid-cols-3">
            {[
              { label: "Œuvres", value: "120+" },
              { label: "Artistes", value: "38" },
              { label: "Époques", value: "12" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="text-3xl font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-zinc-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Collection phare</p>
            <h2 className="mt-2 text-3xl font-semibold text-zinc-900">Œuvres à découvrir</h2>
          </div>
          <Link href="/tableaux" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition hover:text-zinc-950">
            Voir tout <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {artworks.slice(0, 6).map((artwork) => (
            <ArtCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-[#f1eadf]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Découverte du jour</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-900">L&apos;artiste du jour</h2>
            <div className="mt-8 flex items-center gap-6 rounded-[30px] border border-black/5 bg-white p-5 shadow-sm">
              <div className="relative h-36 w-28 overflow-hidden rounded-2xl">
                <Image src={dailySpotlight.artist.portrait} alt={dailySpotlight.artist.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-amber-600">{dailySpotlight.artist.movement}</p>
                <h3 className="mt-2 text-3xl font-semibold">{dailySpotlight.artist.name}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-zinc-600">{dailySpotlight.artist.biography}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 rounded-[32px] bg-zinc-900 p-7 text-white shadow-2xl">
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-amber-200">
              <Clock3 className="h-4 w-4" /> Époque du jour
            </div>
            <h3 className="text-3xl font-semibold">{dailySpotlight.period.name}</h3>
            <p className="text-zinc-300">{dailySpotlight.period.description}</p>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200">
              <ShieldCheck className="h-4 w-4 text-emerald-300" /> Source vérifiée: {dailySpotlight.museum}
            </div>
            <Link href="/epoques" className="inline-flex items-center gap-2 text-sm font-medium text-amber-200">
              Explorer les périodes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-zinc-500">Éditions culturelles</p>
            <h2 className="mt-2 text-3xl font-semibold text-zinc-900">Périodes majeures</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {periods.map((period) => (
            <Link href="/epoques" key={period.slug} className="rounded-[26px] border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-600">{period.years}</p>
              <h3 className="mt-4 text-2xl font-semibold text-zinc-900">{period.name}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{period.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[36px] bg-zinc-900 p-8 text-white shadow-[0_25px_60px_rgba(15,23,42,0.35)] lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-amber-200">Ma collection</p>
              <h2 className="mt-2 text-3xl font-semibold">Créez votre bibliothèque personnelle</h2>
            </div>
            <Link href="/collection" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-900">
              <Heart className="h-4 w-4" /> Voir ma collection
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {artists.slice(0, 3).map((artist) => (
              <div key={artist.slug} className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-amber-200">{artist.country}</div>
                <h3 className="mt-3 text-2xl font-semibold">{artist.name}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{artist.highlights.join(" • ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
