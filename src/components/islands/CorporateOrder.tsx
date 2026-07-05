import { motion } from "framer-motion";

const cards = [
  {
    icon: "🏢",
    title: "Schedule Kunjungan Rutin",
    desc: "Kami datang ke kantor kamu setiap hari atau beberapa kali seminggu — seperti punya barista in-house tanpa biaya overhead. Min. 30 cup/kunjungan.",
  },
  {
    icon: "📦",
    title: "Bulk Order Delivery",
    desc: "Order kopi dalam jumlah banyak — kami prepare & deliver ke kantor. Cold cup tersedia untuk delivery jarak jauh.",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const card = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function CorporateOrder() {
  return (
    <section id="corporate" className="bg-surface py-16">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-10 grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-[28px] font-bold md:text-4xl">Kopi Buat Tim Kantormu?</h2>
            <p className="mt-3 text-ink-soft">Kami datang ke kantormu. Atau kamu order, kami antar.</p>
          </div>
          <img
            src="/images/corporate-office.jpg"
            alt="Kopi untuk meja kerja kantor"
            className="h-[220px] w-full rounded-3xl object-cover shadow-card md:h-[260px]"
          />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={card}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-hairline bg-canvas p-7 transition"
            >
              <div className="text-[26px]">{c.icon}</div>
              <h3 className="mt-3 font-display text-lg font-bold">{c.title}</h3>
              <p className="mt-2.5 text-[15px] text-ink-soft">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-[15px] text-ink-soft">
          50+ kantor & co-working space sudah langganan. <strong className="text-ink">Join?</strong>
        </p>
        <div className="mt-4 flex justify-center">
          <a
            href="#"
            className="rounded-full border-[1.5px] border-hairline px-6 py-3.5 text-[15px] font-bold transition hover:border-ink-soft"
          >
            Konsultasi Corporate
          </a>
        </div>
      </div>
    </section>
  );
}
