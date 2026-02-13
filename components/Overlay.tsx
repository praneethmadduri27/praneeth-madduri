"use client";

import { motion, useTransform } from "framer-motion";
import { useScrollContext } from "./ScrollContext";

export default function Overlay() {
    const scrollYProgress = useScrollContext();

    const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -50]);
    const o1 = useTransform(scrollYProgress, [0, 0.1, 0.25], [1, 1, 0]);

    const y2 = useTransform(scrollYProgress, [0.3, 0.6], [50, -50]);
    const o2 = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [0, 1, 0]);

    const y3 = useTransform(scrollYProgress, [0.65, 0.95], [50, -50]);
    const o3 = useTransform(scrollYProgress, [0.65, 0.8, 0.95], [0, 1, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* Section 1: Introduction */}
            <motion.div
                style={{ y: y1, opacity: o1 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            >
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white/90 mb-4 mix-blend-difference">
                    Praneeth M S
                </h1>
                <p className="text-xl md:text-3xl font-light text-white/70 max-w-2xl leading-relaxed">
                    Digital Transformation & BFSI Consultant
                </p>
            </motion.div>

            {/* Section 2: Expertise */}
            <motion.div
                style={{ y: y2, opacity: o2 }}
                className="absolute inset-0 flex items-center justify-start p-8 md:px-24"
            >
                <div className="max-w-3xl backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/5">
                    <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 leading-tight">
                        Bridging <span className="text-blue-400">Banking Operations</span>, Compliance & InfoSec.
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                        Specializing in scalable technology solutions for financial institutions.
                        I strengthen risk governance while enabling digital efficiency through
                        hands-on experience in Core Banking Systems and IT Control Frameworks.
                    </p>
                </div>
            </motion.div>

            {/* Section 3: Impact */}
            <motion.div
                style={{ y: y3, opacity: o3 }}
                className="absolute inset-0 flex items-center justify-end p-8 md:px-24"
            >
                <div className="max-w-3xl text-right backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/5">
                    <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 leading-tight">
                        Data-Driven <span className="text-purple-400">Risk Governance.</span>
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                        From Loan Portfolio Analytics to RBI Compliance Frameworks.
                        Delivering audit readiness through digital control testing and
                        internal system validation.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
