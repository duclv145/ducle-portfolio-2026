"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experience = [
  {
    period: "08/2022 - 10/2023",
    company: "Hung Thai Technology Co., Ltd.",
    role: "Designer",
  },
  {
    period: "05/2022 - 01/2022",
    company: "HS Ad Vietnam Co., Ltd.",
    role: "Designer",
  },
  {
    period: "03/2020 - 05/2021",
    company: "Yeah1 Group Joint Stock Company",
    role: "Designer",
  },
  {
    period: "07/2019 - 12/2019",
    company: "Dolce by Wyndham Hanoi Golden Lake Hotel",
    role: "Designer",
  },
  {
    period: "11/2017 - 05/2019",
    company: "FPT Online — VnExpress",
    role: "Designer",
  },
  {
    period: "02/2015 - 11/2017",
    company: "DVH-Bransons Co., Ltd.",
    role: "Designer",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/5 px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background">
            <Briefcase className="h-3.5 w-3.5" />
            10+
          </span>
          <h2 className="text-base font-medium tracking-tight text-foreground sm:text-lg">
            Years in the industry
          </h2>
        </div>

        <ol className="mt-12 space-y-10 sm:mt-16">
          {experience.map((item, i) => (
            <motion.li
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.04,
              }}
              className="grid grid-cols-1 gap-2 sm:grid-cols-[200px_1fr_1fr] sm:gap-8 lg:grid-cols-[260px_1fr_1fr] lg:gap-12"
            >
              <span className="font-mono text-sm text-muted sm:text-base">
                {item.period}
              </span>
              <span className="text-lg font-medium text-foreground sm:text-xl">
                {item.company}
              </span>
              <span className="text-base text-foreground/80 sm:text-lg">
                {item.role}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
