import { motion } from "framer-motion";

interface MenuItem {
  icon: string;
  image?: string;
  name: string;
  price: string;
  badge?: string;
}

const categories: { label: string; items: MenuItem[] }[] = [
  {
    label: "Espresso Based",
    items: [
      { icon: "☕", image: "/images/menu-kopisusu.jpg", name: "Kopi Susu Kopi Jalan", price: "Rp 18k", badge: "Signature" },
      { icon: "☕", image: "/images/menu-americano.jpg", name: "Americano", price: "Rp 15k" },
      { icon: "☕", image: "/images/menu-flatwhite.jpg", name: "Flat White", price: "Rp 20k" },
      { icon: "☕", image: "/images/menu-cortado.jpg", name: "Cortado", price: "Rp 18k" },
      { icon: "☕", image: "/images/menu-espresso.jpg", name: "Espresso", price: "Rp 12k" },
      { icon: "☕", image: "/images/menu-cappuccino.jpg", name: "Cappuccino", price: "Rp 18k" },
    ],
  },
  {
    label: "Manual Brew — tersedia di spot tertentu",
    items: [
      { icon: "🫖", image: "/images/menu-pourover.jpg", name: "V60 Pour Over", price: "Rp 25k" },
      { icon: "🫖", image: "/images/menu-aeropress.jpg", name: "AeroPress", price: "Rp 22k" },
    ],
  },
  {
    label: "Non-Coffee",
    items: [
      { icon: "🍵", image: "/images/menu-matcha.jpg", name: "Matcha Latte", price: "Rp 22k" },
      { icon: "🍵", image: "/images/menu-hojicha.jpg", name: "Hojicha Latte", price: "Rp 20k" },
      { icon: "🍫", image: "/images/menu-chocolate.jpg", name: "Chocolate", price: "Rp 18k" },
      { icon: "🍋", image: "/images/menu-lemon.jpg", name: "Sparkling Lemon", price: "Rp 15k" },
    ],
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };
const card = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Menu() {
  return (
    <section id="menu" className="bg-surface py-16">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-10 max-w-[640px]">
          <h2 className="font-display text-[28px] font-bold md:text-4xl">Menu Kami</h2>
          <p className="mt-3 text-ink-soft">Simpel, jelas, enak. Tidak ada nama menu yang bikin bingung.</p>
        </div>

        <div className="flex flex-col gap-10">
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className="mb-4 text-xs font-extrabold uppercase tracking-widest text-espresso-soft">
                {cat.label}
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4"
              >
                {cat.items.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={card}
                    whileHover={{ y: -3 }}
                    className="relative flex flex-col gap-2.5 rounded-2xl border border-hairline bg-canvas p-4 shadow-none transition hover:shadow-card"
                  >
                    {item.badge && (
                      <span className="absolute right-3.5 top-3.5 rounded-full bg-accent px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-white">
                        {item.badge}
                      </span>
                    )}
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-[52px] w-[52px] rounded-2xl object-cover"
                      />
                    ) : (
                      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-surface-strong text-2xl">
                        {item.icon}
                      </div>
                    )}
                    <div className="text-[15px] font-bold">{item.name}</div>
                    <div className="font-display text-[15px] font-extrabold tabular-nums text-accent">{item.price}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2.5 text-sm text-ink-soft">
          <span>✅ Oat milk +Rp 5k</span>
          <span>✅ Extra shot +Rp 8k</span>
          <span>✅ Tambah gula? Kasih tau barista kita</span>
          <span>❌ Tidak ada tempat duduk — kecuali event dengan seating</span>
        </div>
      </div>
    </section>
  );
}
