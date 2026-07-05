import { motion } from "framer-motion";

const carts = [
  { tag: "Cart #1", name: '"Tua"', desc: "Cart pertama kami. Sudah 3 tahun, catnya sudah pudar, tapi masih ngopi kencang." },
  { tag: "Cart #2", name: '"Kuda Hitam"', desc: "Yang paling sering di area perkantoran. Espresso machine-nya paling baru." },
  { tag: "Cart #3", name: '"Keliling"', desc: "Khusus event. Dilengkapi generator & umbrella besar." },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const slideIn = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function OurCart() {
  return (
    <section id="cart" className="py-16">
      <div className="mx-auto max-w-[1180px] px-6">
        <h2 className="font-display text-[28px] font-bold md:text-4xl">Ketemu Kopi Jalan.</h2>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-[1.3fr_1fr]">
          <img
            src="/images/cart-main.jpg"
            alt="Cart Kopi Jalan di jalanan"
            className="h-full max-h-[380px] w-full rounded-3xl object-cover shadow-card"
          />
          <img
            src="/images/cart-barista.jpg"
            alt="Barista Kopi Jalan menyiapkan pesanan"
            className="h-full max-h-[380px] w-full rounded-3xl object-cover shadow-card"
          />
        </div>

        <p className="mt-8 max-w-[68ch] text-[17px] text-ink-soft">
          Kami mulai dari satu cart, satu motor, dan resep kopi susu yang habis dalam 2 jam pertama.
          Sekarang kami punya 3 cart dan tim 8 orang yang tiap hari keliling kota bawa kopi untuk
          kamu. Belum ada rencana buka toko fisik — dan jujurnya, kami lebih suka begini. Lebih
          dekat ke pelanggan.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {carts.map((c) => (
            <motion.div
              key={c.tag}
              variants={slideIn}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-hairline p-6 transition"
            >
              <span className="text-xs font-extrabold uppercase tracking-wide text-accent">{c.tag}</span>
              <h3 className="mt-2 font-display text-xl font-bold">{c.name}</h3>
              <p className="mt-2.5 text-[14.5px] text-ink-soft">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-5 inline-block rounded-lg border border-dashed border-hairline bg-surface px-3 py-2 text-[11.5px] text-ink-soft">
          Gallery lengkap (antrian, detail machine, tim) menyusul saat foto asli dari lapangan tersedia
        </p>
      </div>
    </section>
  );
}
