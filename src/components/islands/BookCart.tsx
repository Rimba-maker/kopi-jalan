import { motion } from "framer-motion";

const packages = [
  {
    icon: "☕",
    name: "Basic",
    price: "Mulai Rp 1.5 jt",
    desc: "Untuk event kecil, max 50 orang",
    features: ["1 cart + 1 barista", "Durasi 3 jam", "Menu espresso based & non-coffee", "Consumables termasuk", "Min. pemesanan H-3"],
    featured: false,
  },
  {
    icon: "🎪",
    name: "Standard",
    price: "Mulai Rp 2.8 jt",
    desc: "Untuk event menengah, max 150 orang",
    features: ["1 cart + 2 barista", "Durasi 5 jam", "Full menu termasuk manual brew", "Consumables + standing banner", "Min. pemesanan H-5"],
    featured: true,
  },
  {
    icon: "🏆",
    name: "Premium",
    price: "Mulai Rp 5 jt+",
    desc: "Wedding, corporate besar, 150+ orang",
    features: ["2 cart + 3 barista", "Durasi flexible (8 jam)", "Full menu + custom name di cup", "Backdrop, signage, setup premium", "Min. pemesanan H-14"],
    featured: false,
  },
];

const addons = [
  ["Custom cup printing", "+Rp 500k"],
  ["Tambah 1 jam", "+Rp 400k/jam"],
  ["Manual brew station", "+Rp 750k"],
  ["Sweetener & syrup bar", "+Rp 350k"],
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function BookCart() {
  return (
    <section id="book" className="py-16">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-10 grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-[28px] font-bold md:text-4xl">Sewa Cart Kopi Jalan Untuk Eventmu.</h2>
            <p className="mt-3 max-w-[46ch] text-ink-soft">
              Wedding, corporate gathering, ulang tahun, bazaar, festival — kami datang, setup, brew, dan pulang bersih.
            </p>
          </div>
          <img
            src={import.meta.env.BASE_URL + "images/book-event.jpg"}
            alt="Coffee station untuk event dan wedding"
            className="h-[220px] w-full rounded-3xl object-cover shadow-card md:h-[260px]"
          />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={card}
              whileHover={{ y: -4 }}
              className={`relative flex flex-col rounded-3xl border-[1.5px] p-7 transition ${
                pkg.featured ? "border-accent shadow-card" : "border-hairline"
              }`}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-white">
                  Paling Populer
                </span>
              )}
              <div className="font-display text-xl font-extrabold">
                {pkg.icon} {pkg.name}
              </div>
              <div className="mt-1.5 text-[15px] font-bold text-accent">{pkg.price}</div>
              <div className="mt-1 text-[13.5px] text-ink-soft">{pkg.desc}</div>
              <ul className="mt-5 flex flex-grow flex-col gap-2.5 text-[14.5px]">
                {pkg.features.map((f) => (
                  <li key={f} className="relative pl-[22px]">
                    <span className="absolute left-0 font-extrabold text-accent">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 rounded-2xl bg-surface p-7">
          <div className="mb-3.5 text-xs font-extrabold uppercase tracking-wide text-ink-soft">Add-ons</div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-6 gap-y-2.5 text-[14.5px]">
            {addons.map(([name, price]) => (
              <div key={name}>
                {name} <span className="font-bold tabular-nums text-accent">{price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#"
            className="rounded-full bg-accent px-6 py-3.5 text-[15px] font-bold text-white shadow-card transition hover:bg-accent-active"
          >
            Tanya Ketersediaan via WA
          </a>
        </div>
      </div>
    </section>
  );
}
