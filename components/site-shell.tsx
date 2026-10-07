import Link from "next/link";
import { Compass, GalleryVerticalEnd, Heart, Search, ShieldCheck, Sparkles } from "lucide-react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/tableaux", label: "Tableaux" },
  { href: "/artistes", label: "Artistes" },
  { href: "/epoques", label: "Époques" },
  { href: "/mouvements", label: "Mouvements" },
  { href: "/collection", label: "Ma collection" },
  { href: "/admin", label: "Admin" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f7f3ee] text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f3ee]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-amber-200">
              <GalleryVerticalEnd className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-zinc-500">Peintre</div>
              <div className="text-lg font-semibold">Bibliothèque mondiale</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-zinc-700 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-zinc-950">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm sm:flex">
              <Search className="h-4 w-4" /> Recherche
            </button>
            <button className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-700">
              Explorer
            </button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-black/5 bg-[#f2efe9]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-amber-200">
                <Sparkles className="h-5 w-5" />
              </div>
              <div className="text-lg font-semibold">Peintre</div>
            </div>
            <p className="max-w-md text-sm leading-7 text-zinc-600">
              Une bibliothèque numérique du patrimoine pictural, pensée pour découvrir, comparer et classer les grandes œuvres de l’histoire de l’art.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              <Compass className="h-4 w-4" /> Découverte
            </div>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>Œuvres du jour</li>
              <li>Artistes iconiques</li>
              <li>Périodes historiques</li>
            </ul>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              <ShieldCheck className="h-4 w-4" /> Droits et sources
            </div>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>Domaines publics</li>
              <li>Open Access</li>
              <li>Sources vérifiées</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/5 py-4 text-center text-sm text-zinc-500">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 sm:px-6 lg:px-8">
            <Heart className="h-4 w-4 text-rose-400" />
            Collection du patrimoine visuel
          </div>
        </div>
      </footer>
    </div>
  );
}
