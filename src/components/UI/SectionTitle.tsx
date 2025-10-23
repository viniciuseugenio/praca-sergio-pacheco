import { motion } from "motion/react";
type SectionTitleProps = {
  title: string;
  description: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <>
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ bounce: 0, type: "spring", duration: 0.6, delay: 0.1 }}
        className="font-serif text-3xl lg:text-4xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ bounce: 0, type: "spring", delay: 0.2, duration: 0.6 }}
        className="max-w-3xl text-base lg:text-lg mt-1"
      >
        {description}
      </motion.p>
    </>
  );
};

export default SectionTitle;
