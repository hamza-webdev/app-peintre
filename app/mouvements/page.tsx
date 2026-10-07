import { movements } from "@/lib/art-data";

export default function MouvementsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[28px] bg-zinc-900 p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
        <p className="text-sm uppercase tracking-[0.22em] text-amber-200">Mouvements</p>
        <h1 className="mt-3 text-4xl font-semibold">Courants artistiques</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {movements.map((movement) => (
          <div key={movement.name} className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm">
            <div className="text-sm uppercase tracking-[0.2em] text-amber-600">{movement.count} œuvres</div>
            <h2 className="mt-4 text-3xl font-semibold text-zinc-900">{movement.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
