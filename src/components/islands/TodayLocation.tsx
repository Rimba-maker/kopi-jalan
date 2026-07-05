import { motion } from "framer-motion";

interface Props {
  day: string;
  location: string;
  address: string;
  open: string;
  close: string;
  note: string;
  mapsUrl: string;
}

const pinDrop = {
  hidden: { opacity: 0, y: -30, scale: 0.5 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 200, damping: 15 } },
};

export default function TodayLocation({ day, location, address, open, close, note, mapsUrl }: Props) {
  const rows = [
    ["Hari", day],
    ["Lokasi", location],
    ["Alamat", address],
    ["Jam", `${open} – ${close}`],
    ["Note", note],
  ];

  return (
    <section id="today" className="py-16">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-10 max-w-[640px]">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-tint px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
            📍 Update Manual Harian
          </span>
          <h2 className="mt-3.5 font-display text-[28px] font-bold md:text-4xl">Kami Ada Di Sini Hari Ini</h2>
        </div>

        <div className="grid overflow-hidden rounded-3xl border border-hairline shadow-card md:grid-cols-2">
          <div className="relative min-h-[260px] bg-surface bg-[length:28px_28px] bg-[image:linear-gradient(var(--color-hairline)_1px,transparent_1px),linear-gradient(90deg,var(--color-hairline)_1px,transparent_1px)]">
            <motion.div
              variants={pinDrop}
              initial="hidden"
              animate="visible"
              className="absolute left-[46%] top-[42%]"
            >
              <motion.div
                className="absolute -inset-3.5 rounded-full bg-accent"
                animate={{ scale: [1, 2.6], opacity: [0.4, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              />
              <svg width="34" height="34" viewBox="0 0 24 24" fill="var(--color-accent)" className="relative">
                <path d="M12 2C7.6 2 4 5.6 4 10c0 5.6 8 12 8 12s8-6.4 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4 p-8">
            {rows.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-hairline pb-3.5 text-[15px] last:border-none last:pb-0">
                <span className="font-semibold text-ink-soft">{k}</span>
                <span className="text-right font-bold">{v}</span>
              </div>
            ))}
            <a
              href={mapsUrl}
              className="mt-2 inline-flex justify-center rounded-full bg-accent px-6 py-3.5 text-[15px] font-bold text-white shadow-card transition hover:bg-accent-active"
            >
              Buka di Google Maps
            </a>
            <p className="text-[13px] italic text-ink-soft">
              Jadwal bisa berubah. Selalu cek Instagram kami @kopijalan.id untuk update terkini.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
