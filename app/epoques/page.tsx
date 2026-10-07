import { periods } from "@/lib/art-data";

export default function EpoquesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[28px] bg-zinc-900 p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
        <p className="text-sm uppercase tracking-[0.22em] text-amber-200">Chronologie</p>
        <h1 className="mt-3 text-4xl font-semibold">Époques et périodes artistiques</h1>
      </div>

      <div className="space-y-6">
        {periods.map((period) => (
          <article key={period.slug} className="rounded-[28px] border border-black/5 bg-white p-7 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-amber-600">{period.years}</p>
                <h2 className="mt-2 text-3xl font-semibold text-zinc-900">{period.name}</h2>
              </div>
              <div className="text-sm text-zinc-500">Artistes clés : {period.keyArtists.join(" • ")}</div>
            </div>
            <p className="mt-5 text-base leading-8 text-zinc-600">{period.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
