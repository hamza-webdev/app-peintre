import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="text-sm uppercase tracking-[0.22em] text-amber-600">Erreur 404</p>
      <h1 className="mt-4 text-5xl font-semibold text-zinc-900">Page introuvable</h1>
      <p className="mt-4 text-base text-zinc-600">Cette œuvre ou cette section n&apos;existe pas dans la bibliothèque.</p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
