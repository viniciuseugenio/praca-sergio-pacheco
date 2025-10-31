import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

type SectionTitleProps = {
  title: string;
  description: string;
  button?: boolean;
  buttonLabel?: string;
  href?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  description,
  button,
  buttonLabel,
  href,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <motion.h2
          initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ bounce: 0, type: "spring", duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl lg:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ bounce: 0, type: "spring", delay: 0.2, duration: 0.6 }}
          className="mt-1 max-w-3xl text-base lg:text-lg"
        >
          {description}
        </motion.p>
      </div>
      {button && (
        <Link
          to={href}
          className="group hover:text-primary/60 text-primary mt-3 flex cursor-pointer items-center gap-1 rounded-md text-sm font-semibold duration-300 md:mt-0"
        >
          {buttonLabel}
          <ChevronRight className="h-5 w-5 duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
