import { FileText, Layers3, Palette, ShieldCheck, Users } from "lucide-react";

const stats = [
  { label: "Œuvres validées", value: "152", icon: Palette },
  { label: "Artistes", value: "38", icon: Users },
  { label: "Sources vérifiées", value: "94%", icon: ShieldCheck },
  { label: "Mouvements", value: "15", icon: Layers3 },
];

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[28px] bg-zinc-900 p-8 text-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
        <p className="text-sm uppercase tracking-[0.22em] text-amber-200">Administration</p>
        <h1 className="mt-3 text-4xl font-semibold">Dashboard des collections</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-[26px] border border-black/5 bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
              <Icon className="h-5 w-5" />
            </div>
            <div className="mt-5 text-3xl font-semibold text-zinc-900">{value}</div>
            <div className="mt-2 text-sm text-zinc-600">{label}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[28px] border border-black/5 bg-white p-7 shadow-sm">
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-amber-600" />
            <h2 className="text-2xl font-semibold text-zinc-900">Validation des œuvres</h2>
          </div>
          <ul className="mt-6 space-y-4 text-sm text-zinc-600">
            <li>• La Joconde – validée</li>
            <li>• La Nuit étoilée – validée</li>
            <li>• Guernica – à vérifier</li>
          </ul>
        </div>

        <div className="rounded-[28px] border border-black/5 bg-white p-7 shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
            <h2 className="text-2xl font-semibold text-zinc-900">SOURCES ET LICENCES</h2>
          </div>
          <ul className="mt-6 space-y-4 text-sm text-zinc-600">
            <li>• Domaine public</li>
            <li>• Open Access</li>
            <li>• Musées publics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
