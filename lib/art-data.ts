export type Artwork = {
  id: string;
  slug: string;
  title: string;
  artist: string;
  artistSlug: string;
  year: string;
  period: string;
  movement: string;
  country: string;
  technique: string;
  material: string;
  museum: string;
  location: string;
  description: string;
  history: string;
  artisticAnalysis: string;
  image: string;
  sourceUrl: string;
  source: string;
  license: string;
  publicDomain: boolean;
  downloadAllowed: boolean;
  dimensions: string;
};

export type Artist = {
  slug: string;
  name: string;
  country: string;
  birthYear: string;
  deathYear: string;
  movement: string;
  portrait: string;
  biography: string;
  highlights: string[];
};

export type Period = {
  slug: string;
  name: string;
  years: string;
  description: string;
  keyArtists: string[];
};

export const artworks: Artwork[] = [
  {
    id: "mona-lisa",
    slug: "la-joconde",
    title: "La Joconde",
    artist: "Léonard de Vinci",
    artistSlug: "leonard-de-vinci",
    year: "1503-1519",
    period: "Renaissance",
    movement: "Renaissance",
    country: "Italie",
    technique: "Huile sur panneau",
    material: "Bois",
    museum: "Musée du Louvre",
    location: "Paris, France",
    description: "Portrait emblématique de la Renaissance, célèbre pour son sourire énigmatique et sa finesse psychologique.",
    history: "Le tableau a été réalisé à Florence puis probablement conservé à l'atelier du maître avant d'entrer au Louvre au XVIe siècle.",
    artisticAnalysis: "La composition privilégie la sérénité, la sfumato et le réalisme subtil des contours, avec une lumière douce qui enveloppe le visage.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80",
    sourceUrl: "https://www.louvre.fr/",
    source: "Musée du Louvre",
    license: "Domaine public / accès public",
    publicDomain: true,
    downloadAllowed: true,
    dimensions: "77 × 53 cm",
  },
  {
    id: "starry-night",
    slug: "la-nuit-etoilee",
    title: "La Nuit étoilée",
    artist: "Vincent van Gogh",
    artistSlug: "vincent-van-gogh",
    year: "1889",
    period: "Post-impressionnisme",
    movement: "Post-impressionnisme",
    country: "Pays-Bas",
    technique: "Huile sur toile",
    material: "Toile",
    museum: "Musée d'Orsay",
    location: "Paris, France",
    description: "Une composition tourmentée et lumineuse qui transforme le ciel en vibration émotionnelle.",
    history: "Peint à Saint-Rémy-de-Provence, alors que Van Gogh vivait une période de grande intensité créatrice.",
    artisticAnalysis: "Les traits tourbillonnants, les coups de pinceau ondulants et les couleurs contrastées expriment l'intensité intérieure de l'artiste.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80",
    sourceUrl: "https://www.musee-orsay.fr/",
    source: "Musée d'Orsay",
    license: "Accès public",
    publicDomain: true,
    downloadAllowed: true,
    dimensions: "73.7 × 92.1 cm",
  },
  {
    id: "birth-of-venus",
    slug: "naissance-de-venus",
    title: "La Naissance de Vénus",
    artist: "Sandro Botticelli",
    artistSlug: "sandro-botticelli",
    year: "1484-1486",
    period: "Renaissance",
    movement: "Renaissance",
    country: "Italie",
    technique: "Tempera sur toile",
    material: "Toile",
    museum: "Galeries des Offices",
    location: "Florence, Italie",
    description: "La déesse émerge d'une conque marine dans une scène d'une élégance classique et mythique.",
    history: "Œuvre de la cour des Médicis, elle représente le goût humaniste et la mythologie renaissante.",
    artisticAnalysis: "L'équilibre des formes, la grâce des lignes et la tonalité délicate soulignent la beauté idéale de l'Antiquité.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1200&q=80",
    sourceUrl: "https://www.uffizi.it/",
    source: "Galeries des Offices",
    license: "Domaine public",
    publicDomain: true,
    downloadAllowed: true,
    dimensions: "172.5 × 278.5 cm",
  },
  {
    id: "impression-sunrise",
    slug: "impression-soleil-levant",
    title: "Impression, soleil levant",
    artist: "Claude Monet",
    artistSlug: "claude-monet",
    year: "1872",
    period: "Impressionnisme",
    movement: "Impressionnisme",
    country: "France",
    technique: "Huile sur toile",
    material: "Toile",
    museum: "Musée Marmottan Monet",
    location: "Paris, France",
    description: "Ce paysage de la baie d'Honfleur affirme une nouvelle manière d'aborder la lumière et la perception.",
    history: "Le tableau fut exposé au Salon des refusés et devint un symbole du mouvement impressionniste.",
    artisticAnalysis: "Des touches visibles, des reflets de couleur et une atmosphère flottante donnent au tableau sa modernité.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    sourceUrl: "https://www.marmottan.fr/",
    source: "Musée Marmottan Monet",
    license: "Accès public",
    publicDomain: true,
    downloadAllowed: true,
    dimensions: "48 × 63 cm",
  },
  {
    id: "guernica",
    slug: "guernica",
    title: "Guernica",
    artist: "Pablo Picasso",
    artistSlug: "pablo-picasso",
    year: "1937",
    period: "Art moderne",
    movement: "Cubisme / Réalisme expressionniste",
    country: "Espagne",
    technique: "Huile sur toile",
    material: "Toile",
    museum: "Museo Reina Sofía",
    location: "Madrid, Espagne",
    description: "Une œuvre monumentale sur la violence de la guerre et la souffrance humaine.",
    history: "Commandée pour le pavillon espagnol à l'Exposition universelle de Paris, elle devient un symbole politique mondial.",
    artisticAnalysis: "Les formes fragmentées et les contrastes dramatiques rendent le chaos, la terreur et le désespoir.",
    image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=1200&q=80",
    sourceUrl: "https://www.museoreinasofia.es/",
    source: "Museo Reina Sofía",
    license: "Accès public",
    publicDomain: true,
    downloadAllowed: true,
    dimensions: "349.3 × 776.6 cm",
  },
  {
    id: "great-wave",
    slug: "la-grande-vague-de-kanagawa",
    title: "La grande vague de Kanagawa",
    artist: "Katsushika Hokusai",
    artistSlug: "katsushika-hokusai",
    year: "1831",
    period: "Période Edo",
    movement: "Ukiyo-e",
    country: "Japon",
    technique: "Estampe sur bois",
    material: "Bois",
    museum: "The Met Fifth Avenue",
    location: "New York, États-Unis",
    description: "Une œuvre emblématique du Japon classique, célébrée pour son énergie et son équilibre.",
    history: "Issue de la série Trésors du monde flottant, elle devient une référence mondiale dans l'estampe japonaise.",
    artisticAnalysis: "Les courbes de la vague, les lignes de la perspective et les contrastes de plan produisent un dynamisme intense.",
    image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?auto=format&fit=crop&w=1200&q=80",
    sourceUrl: "https://www.metmuseum.org/",
    source: "The Met",
    license: "Domaine public",
    publicDomain: true,
    downloadAllowed: true,
    dimensions: "25.7 × 38.2 cm",
  },
  {
    id: "persistance-memory",
    slug: "la-persistance-de-la-memoire",
    title: "La persistance de la mémoire",
    artist: "Salvador Dalí",
    artistSlug: "salvador-dali",
    year: "1931",
    period: "Art moderne",
    movement: "Surréalisme",
    country: "Espagne",
    technique: "Huile sur toile",
    material: "Toile",
    museum: "Museum of Modern Art",
    location: "New York, États-Unis",
    description: "Une image onirique où le temps s'effondre dans un paysage aux formes liquides et déformées.",
    history: "Considérée comme un chef-d'œuvre du surréalisme, elle synthétise rêve, mémoire et anxiété.",
    artisticAnalysis: "Les montres molles, le paysage désertique et la perspective déstruite évoquent le clivage entre conscience et inconscient.",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?auto=format&fit=crop&w=1200&q=80",
    sourceUrl: "https://www.moma.org/",
    source: "MoMA",
    license: "Accès public",
    publicDomain: true,
    downloadAllowed: true,
    dimensions: "24 × 33 cm",
  },
  {
    id: "night-watch",
    slug: "la-ronde-de-nuit",
    title: "La Ronde de nuit",
    artist: "Rembrandt",
    artistSlug: "rembrandt",
    year: "1642",
    period: "Baroque",
    movement: "Baroque",
    country: "Pays-Bas",
    technique: "Huile sur toile",
    material: "Toile",
    museum: "Rijksmuseum",
    location: "Amsterdam, Pays-Bas",
    description: "Un tableau de parade de la milice civique, construit en clair-obscur et en mouvement.",
    history: "Commandée par la milice de Saint George et devenue un symbole de la cité d'Amsterdam.",
    artisticAnalysis: "Le clair-obscur, la diagonale et les gestes du groupe déroulent une scène dramatique et vivante.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    sourceUrl: "https://www.rijksmuseum.nl/",
    source: "Rijksmuseum",
    license: "Accès public",
    publicDomain: true,
    downloadAllowed: true,
    dimensions: "363 × 437 cm",
  },
  {
    id: "school-of-athens",
    slug: "l-ecole-d-athenes",
    title: "L'École d'Athènes",
    artist: "Raphaël",
    artistSlug: "raphael",
    year: "1509-1511",
    period: "Renaissance",
    movement: "Renaissance",
    country: "Italie",
    technique: "Fresque",
    material: "Plâtre",
    museum: "Palais apostolique",
    location: "Vatican, Italie",
    description: "Une fresque allégorique qui réunit philosophes, mathématiciens et savants de l'Antiquité.",
    history: "Commandée pour la suite de la Stanza della Segnatura, elle célèbre la sagesse et la connaissance.",
    artisticAnalysis: "La perspective centrale, les figures monumentales et le dialogue entre personnages illustrent l'idéal humaniste.",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80",
    sourceUrl: "https://www.vaticanstate.va/",
    source: "Vatican",
    license: "Domaine public",
    publicDomain: true,
    downloadAllowed: true,
    dimensions: "500 × 770 cm",
  },
  {
    id: "les-demoiselles",
    slug: "les-demoiselles-d-avignon",
    title: "Les Demoiselles d'Avignon",
    artist: "Pablo Picasso",
    artistSlug: "pablo-picasso",
    year: "1907",
    period: "Art moderne",
    movement: "Cubisme",
    country: "Espagne",
    technique: "Huile sur toile",
    material: "Toile",
    museum: "Museum of Modern Art",
    location: "New York, États-Unis",
    description: "Une oeuvre radicale qui bouleverse la représentation classique du corps et de l'espace.",
    history: "Elle marque une étape décisive dans la construction du cubisme et de la modernité.",
    artisticAnalysis: "Les formes géométrisées, les visages frontaux et la composition découpée expriment la rupture avec la tradition.",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c90a?auto=format&fit=crop&w=1200&q=80",
    sourceUrl: "https://www.moma.org/",
    source: "MoMA",
    license: "Accès public",
    publicDomain: true,
    downloadAllowed: true,
    dimensions: "243.9 × 233.7 cm",
  },
];

export const artists: Artist[] = [
  {
    slug: "leonard-de-vinci",
    name: "Léonard de Vinci",
    country: "Italie",
    birthYear: "1452",
    deathYear: "1519",
    movement: "Renaissance",
    portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    biography: "Inventeur, scientifique et artiste, Léonard de Vinci a transformé la peinture par son observation minutieuse et sa maîtrise de la lumière.",
    highlights: ["La Joconde", "La Cène", "La Vierge aux rochers"],
  },
  {
    slug: "vincent-van-gogh",
    name: "Vincent van Gogh",
    country: "Pays-Bas",
    birthYear: "1853",
    deathYear: "1890",
    movement: "Post-impressionnisme",
    portrait: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    biography: "Van Gogh a porté la peinture vers une expression émotionnelle intense, à travers des couleurs et des gestes audacieux.",
    highlights: ["La Nuit étoilée", "Les Tournesols", "La Chambre à Arles"],
  },
  {
    slug: "claude-monet",
    name: "Claude Monet",
    country: "France",
    birthYear: "1840",
    deathYear: "1926",
    movement: "Impressionnisme",
    portrait: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    biography: "Monet a capté la lumière naturelle et l'atmosphère avec une palette novatrice et des effets de couleur flottants.",
    highlights: ["Impression, soleil levant", "Les Nymphéas", "La Cathédrale de Rouen"],
  },
  {
    slug: "pablo-picasso",
    name: "Pablo Picasso",
    country: "Espagne",
    birthYear: "1881",
    deathYear: "1973",
    movement: "Cubisme",
    portrait: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80",
    biography: "Picasso a repoussé les limites de l'art moderne et influencé plusieurs générations d'artistes.",
    highlights: ["Guernica", "Les Demoiselles d'Avignon", "Le Jeune homme au gibus"],
  },
  {
    slug: "raphael",
    name: "Raphaël",
    country: "Italie",
    birthYear: "1483",
    deathYear: "1520",
    movement: "Renaissance",
    portrait: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    biography: "Raphaël a incarné l'idéal de la Renaissance par la clarté de ses compositions et la perfection de la figure humaine.",
    highlights: ["L'École d'Athènes", "La Transfiguration", "La Belle Jardinière"],
  },
];

export const periods: Period[] = [
  {
    slug: "renaissance",
    name: "Renaissance",
    years: "XIVe-XVIe siècle",
    description: "Époque de redécouverte de l'Antiquité, de l'humanisme et de l'invention de la perspective.",
    keyArtists: ["Léonard de Vinci", "Raphaël", "Botticelli"],
  },
  {
    slug: "baroque",
    name: "Baroque",
    years: "XVIe-XVIIIe siècle",
    description: "Le mouvement baroque met l'accent sur le mouvement, le dramatique et le clair-obscur.",
    keyArtists: ["Rembrandt", "Caravage", "Rubens"],
  },
  {
    slug: "impressionnisme",
    name: "Impressionnisme",
    years: "XIXe siècle",
    description: "L'impressionnisme privilégie la lumière, les effets atmosphériques et la sensation immédiate.",
    keyArtists: ["Claude Monet", "Edgar Degas", "Auguste Renoir"],
  },
  {
    slug: "post-impressionnisme",
    name: "Post-impressionnisme",
    years: "Fin XIXe siècle",
    description: "Série de mouvements héritiers de l'impressionnisme, mais plus structurés et expressifs.",
    keyArtists: ["Van Gogh", "Gauguin", "Cézanne"],
  },
  {
    slug: "modern-art",
    name: "Art moderne",
    years: "1900-1950",
    description: "Période de ruptures formelles, de modernité et d'expérimentations radicales.",
    keyArtists: ["Picasso", "Dalí", "Matisse"],
  },
];

export const movements = [
  { name: "Renaissance", count: 3 },
  { name: "Baroque", count: 2 },
  { name: "Impressionnisme", count: 2 },
  { name: "Post-impressionnisme", count: 1 },
  { name: "Cubisme", count: 2 },
  { name: "Surréalisme", count: 1 },
];

export const countries = ["France", "Italie", "Espagne", "Pays-Bas", "Japon", "États-Unis"];

export const featuredArtwork = artworks[0];

export const dailySpotlight = {
  artist: artists[1],
  period: periods[3],
  museum: "Musée d'Orsay",
};
