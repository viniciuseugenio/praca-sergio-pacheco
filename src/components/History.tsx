import { twMerge } from "tailwind-merge";
import SectionContainer from "./UI/SectionContainer";
import SectionTitle from "./UI/SectionTitle";
import { motion } from "motion/react";

type HistoryCardProps = React.PropsWithChildren<{
  date: string;
  title: string;
  className?: string;
  idx: number;
}>;

const LineDot: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="hidden lg:block h-4 absolute left-1/2 top-1/2 -translate-y-1/2 border-3 border-white -translate-x-1/2 w-4 bg-primary rounded-full "
    />
  );
};

const HistoryCard: React.FC<HistoryCardProps> = ({
  date,
  title,
  children,
  className,
  idx,
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0, delay: 0.1 + idx * 0.06 }}
      viewport={{ once: true }}
      className={twMerge(
        "border-primary/20 lg:max-w-md xl:max-w-xl 2xl:max-w-2xl bg-primary/5 shadow-md self-center h-fit border-1 rounded-md p-6",
        className,
      )}
    >
      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-primary">
        {date}
      </h2>
      <h3 className="font-serif mt-2 text-xl sm:text-2xl font-semibold text-primary">
        {title}
      </h3>
      <div className="flex flex-col gap-5 mt-4 text-sm sm:text-base leading-relaxed">
        {children}
      </div>
    </motion.section>
  );
};

const History: React.FC = () => {
  const randomContent = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec maximus
      ligula, eu lobortis nunc. Morbi molestie, orci sed tincidunt semper. Nulla
      ultrices augue tincidunt dignissim tincidunt.
    </p>
  );

  const historyItems = [
    {
      date: "1850",
      title: "Inauguração",
      content: randomContent,
      cardClass: "lg:text-right",
    },
    {
      date: "1992",
      title: "Evolução e Crescimento",
      content: randomContent,
    },
    {
      date: "2015",
      title: "Comunidade",
      content: randomContent,
      cardClass: "lg:text-right self-end",
    },
  ];

  return (
    <SectionContainer className="mt-32">
      <SectionTitle
        title="Nossa História"
        description="Conheça brevemente a história e o legado cultural da Praça Sérgio Pacheco"
      />

      <div className="relative mt-10 justify-items-center lg:justify-items-normal lg:gap-y-4 gap-y-10 flex flex-col">
        {/* Vertical timeline line */}
        <div
          aria-hidden="true"
          className="bg-primary/70 w-1 h-full hidden lg:block absolute left-1/2 -translate-x-1/2 rounded-full"
        />
        {historyItems.map((item, idx) => (
          <div
            key={item.date}
            className={twMerge("relative flex", idx === 1 ? "justify-end" : "")}
          >
            <HistoryCard
              idx={idx}
              date={item.date}
              title={item.title}
              className={item.cardClass}
            >
              {randomContent}
            </HistoryCard>
            <LineDot />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};
export default History;
