import { motion } from "framer-motion";

interface DaySchedule {
  day: string;
  location: string;
  area: string;
  hours: string;
}

interface Props {
  days: DaySchedule[];
  todayName: string;
}

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const row = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

export default function JadwalMingguan({ days, todayName }: Props) {
  return (
    <section id="jadwal" className="bg-surface py-16">
      <div className="mx-auto max-w-[1180px] px-6">
        <div className="mb-10 max-w-[640px]">
          <h2 className="font-display text-[28px] font-bold md:text-4xl">Di Mana Kami Minggu Ini?</h2>
          <p className="mt-3 text-ink-soft">
            Ini jadwal rutin kami. Tapi selalu cek IG untuk konfirmasi — kadang ada perubahan mendadak.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-[15px]">
            <thead>
              <tr>
                {["Hari", "Lokasi", "Jam"].map((h) => (
                  <th key={h} className="border-b-2 border-hairline pb-3 text-left text-xs font-semibold uppercase tracking-wide text-ink-soft">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <motion.tbody variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              {days.map((d) => {
                const isToday = d.day === todayName;
                return (
                  <motion.tr
                    key={d.day}
                    variants={row}
                    className={isToday ? "bg-accent-tint" : "transition hover:bg-surface-strong"}
                  >
                    <td className="p-4 first:rounded-l-xl last:rounded-r-xl">
                      {isToday && (
                        <motion.span
                          className="mr-2 inline-block h-2 w-2 rounded-full bg-accent"
                          animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                      {d.day}
                    </td>
                    <td className="p-4">{d.location}</td>
                    <td className="p-4 first:rounded-l-xl last:rounded-r-xl">{d.hours}</td>
                  </motion.tr>
                );
              })}
            </motion.tbody>
          </table>
        </div>

        <p className="mt-5 text-sm text-ink-soft">
          Kami juga menerima request lokasi! Kalau kompleks atau kantor kamu mau dikunjungi, hubungi kami.
        </p>
      </div>
    </section>
  );
}
