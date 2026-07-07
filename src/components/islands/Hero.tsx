import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const mobileReveal = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="pt-14 pb-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-14 px-6 md:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.span
            variants={mobileReveal}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent-tint px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-accent"
          >
            ☕ Mobile Coffee Cart
          </motion.span>

          <motion.h1
            variants={mobileReveal}
            className="mt-4 font-display text-[34px] font-extrabold leading-[1.15] md:text-[54px]"
          >
            Kopi Enak? Kami Bawa Ke Depan Kamu.
          </motion.h1>

          <motion.p variants={mobileReveal} className="mt-5 max-w-[46ch] text-lg text-ink-soft">
            Mobile coffee cart yang keliling kota. Specialty coffee, harga yang masuk akal, dan
            senyuman gratis. Cek jadwal kami hari ini — mungkin kami ada di dekatmu.
          </motion.p>

          <motion.div variants={mobileReveal} className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#today"
              className="rounded-full bg-accent px-6 py-3.5 text-[15px] font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-accent-active"
            >
              Cek Lokasi Hari Ini
            </a>
            <a
              href="#book"
              className="rounded-full border-[1.5px] border-hairline px-6 py-3.5 text-[15px] font-bold transition hover:-translate-y-0.5 hover:border-ink-soft"
            >
              Book Cart Untuk Event
            </a>
          </motion.div>

          <motion.div variants={mobileReveal} className="mt-7 flex flex-wrap gap-2.5">
            {["☕ Buka 07.00–17.00", "📍 Lokasi Update Tiap Pagi", "🎪 Siap Untuk Event"].map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-hairline bg-surface px-3.5 py-2 text-[13px] font-semibold text-ink-soft"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="overflow-hidden rounded-[28px] shadow-card"
        >
          <img
            src={import.meta.env.BASE_URL + "images/hero-cart.jpg"}
            alt="Barista menyiapkan kopi di mobile coffee cart"
            className="aspect-[4/3.5] w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
