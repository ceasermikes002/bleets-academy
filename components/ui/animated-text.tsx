import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className={cn("w-fit", className)}>
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.span>
    </div>
  );
};
