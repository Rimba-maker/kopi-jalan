import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Kopi susu Kopi Jalan itu obat kangen rumah. Dari harga, rasa, sampai orangnya — semua friendly. Tiap senin nunggu mereka di kantor.",
    name: "Desi",
    role: "HR Officer",
    initial: "D",
  },
  {
    quote: "Pake cart ini buat wedding kami. Tamu-tamu surprised ada specialty coffee. Barista-nya ramah, setup cepat, cleanup bersih. Recommend banget!",
    name: "Karin & Bagas",
    role: "Wedding 2024",
    initial: "K",
  },
  {
    quote: "Satu-satunya kopi yang bikin gue gak terlambat pagi. Soalnya gue tau jam berapa mereka ada di depan komplek.",
    name: "@workfromhomedad",
    role: "Pelanggan setia",
    initial: "@",
  },
  {
    quote: "Corporate order untuk meeting bulanan kami. Praktis, harga masuk budget, dan tim finance happy karena ada invoice resmi.",
    name: "Pak Rudi",
    role: "Finance Manager",
    initial: "R",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const card = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Testimonial() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1180px] px-6">
        <h2 className="mb-10 font-display text-[28px] font-bold md:text-4xl">Yang Ngomong Bukan Kami.</h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={card} className="rounded-2xl border border-hairline p-6">
              <p className="text-[15.5px] leading-relaxed">"{t.quote}"</p>
              <div className="mt-4 flex items-center gap-2.5">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-tint text-sm font-extrabold text-accent"
                >
                  {t.initial}
                </motion.div>
                <div>
                  <div className="text-[13.5px] font-bold">{t.name}</div>
                  <div className="text-[12.5px] text-ink-soft">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
