'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[24px] font-bold leading-tight flex space-x-2 items-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-widest">
          BLEETS
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-widest">
          Academy
        </span>
      </motion.div>
    </Link>
  );
};
