import { motion } from 'framer-motion';
import React from 'react';
import { AnimatedText } from './ui/animated-text';

import { pricePlans } from "../data/priceData";

const Pricing = () => {
    return (
        <section
            id="pricing"
            className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-purple-900/20"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">
                <AnimatedText text="Choose Your Learning Path" />
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {pricePlans.map((plan, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`${plan.highlight
                            ? 'bg-gradient-to-r from-purple-800/40 to-cyan-800/40 border-cyan-400 shadow-lg shadow-cyan-500/20'
                            : 'bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border-purple-500/20'
                            } rounded-xl p-8 border hover:border-cyan-500/50 transition-all duration-300`}
                    >
                        <h3 className="text-2xl font-bold mb-2 text-cyan-300">
                            {plan.title}
                        </h3>

                        {plan.badge && (
                            <span className="inline-block mb-2 px-3 py-1 text-sm rounded-full bg-cyan-800/50 text-white font-medium">
                                {plan.badge}
                            </span>
                        )}

                        <p className="text-cyan-200 mb-2">{plan.duration}</p>

                        <div className="mb-6">
                            <p className="text-sm text-red-400 line-through">
                                ₦{plan.originalPrice.toLocaleString()}
                            </p>
                            <p className="text-3xl font-bold text-purple-400">
                                Now {plan.price}
                            </p>
                        </div>

                        <ul className="space-y-3">
                            {plan.features.map((feature, fidx) => (
                                <li
                                    key={fidx}
                                    className="flex items-center gap-2 text-cyan-100"
                                >
                                    <span className="text-cyan-400">→</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            {/* Add-ons */}
            <div className="mt-16 text-center">
                <h4 className="text-2xl font-bold mb-6 text-cyan-400">Career Boosters</h4>
                <p className="text-cyan-100 mb-6">
                    Get free career-boosting add-ons with any course: a course certificate, GitHub mentorship, LinkedIn setup, and portfolio development—all at no extra cost.
                </p>

                <div className="inline-block bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-6 border border-cyan-500/20">
                    <p className="text-cyan-200 mb-3">
                        🎓 Course Certificate – Free | 🧠 GitHub Mentorship – Free
                    </p>
                    <p className="text-cyan-200">
                        💼 LinkedIn Profile Setup – Free | 🌐 Portfolio Development – Free
                    </p>
                </div>
            </div>


        </section>
    );
};

export default Pricing;
