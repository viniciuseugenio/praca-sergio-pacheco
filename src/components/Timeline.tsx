import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import SectionContainer from "./UI/SectionContainer";

type CardProps = React.PropsWithChildren<{
  date: string;
  title: string;
  className?: string;
  idx: number;
}>;

const LineDot: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="bg-primary absolute top-1/2 left-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-3 border-white lg:block"
    />
  );
};

const Card: React.FC<CardProps> = ({
  date,
  title,
  children,
  className,
  idx,
}) => {
  return (
    <motion.section
      role="listitem"
      tabIndex={0}
      initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", bounce: 0, delay: 0.1 + idx * 0.06 }}
      viewport={{ once: true }}
      className={twMerge(
        "border-primary/20 bg-primary/5 h-fit self-center rounded-md border-1 p-6 shadow-md lg:max-w-md xl:max-w-xl 2xl:max-w-2xl",
        className,
      )}
    >
      <h2 className="text-primary font-serif text-2xl font-semibold sm:text-3xl">
        {date}
      </h2>
      <h3 className="text-primary mt-2 font-serif text-xl font-semibold sm:text-2xl">
        {title}
      </h3>
      <div className="mt-4 flex flex-col gap-5 text-sm leading-relaxed sm:text-base">
        {children}
      </div>
    </motion.section>
  );
};

const Timeline: React.FC = () => {
  const historyItems = [
    {
      date: "1890",
      title: "Chegada da Mogiana",
      content:
        "Companhia Mogiana de Estradas de Ferro chega a Uberlândia, começando o desenvolvimento da região onde hoje é a praça.",
    },
    {
      date: "1940",
      title: "Pátio Ferroviário",
      content:
        "Local ocupado pelo pátio ferroviário da CIA. Mogiana, importante para a circulação de trens na região.",
    },
    {
      date: "1962",
      title: "Primeiro Projeto Arquitetônico",
      content:
        "Projeto de João Jorge Coury com plano de rodoviária, hotel, prefeitura, câmara e parque; não implementado.",
    },
    {
      date: "1972",
      title: "Segundo Projeto Urbanístico",
      content:
        "Novo projeto com foco político-administrativo e área de lazer, também não integralmente implementado.",
    },
    {
      date: "1976",
      title: "Inauguração da Praça",
      content:
        "Praça inaugurada com projeto de Ary Garcia Roza e Roberto Burle Marx, com lagos, árvores e espaço para convivência.",
    },
    {
      date: "Pós-1976",
      title: "Redesenho e Alterações",
      content:
        "Nova gestão modifica praça, retira espelho d’água, rebaixa canteiros e integra avenidas, descaracterizando o projeto original.",
    },
    {
      date: "Década de 2000",
      title: "Espaço Público de Lazer",
      content:
        "Praça consolidada como local de lazer, esporte e eventos culturais para a população local.",
    },
    {
      date: "2019-2025",
      title: "Revitalizações e Manutenções",
      content:
        "Obras de manutenção, revitalização de quadra esportiva, melhorias no espaço público e programa “Adote uma Praça”.",
    },
  ];

  return (
    <SectionContainer className="mt-32">
      <h2 className="title mb-3 text-3xl">Linha do tempo da praça</h2>

      <ol className="relative mt-10 flex flex-col justify-items-center gap-y-10 lg:justify-items-normal lg:gap-y-4">
        {/* Vertical timeline line */}
        <div
          aria-hidden="true"
          className="bg-primary/70 absolute left-1/2 hidden h-full w-1 -translate-x-1/2 rounded-full lg:block"
        />
        {historyItems.map((item, idx) => (
          <ol
            key={item.date}
            className={twMerge(
              "relative flex",
              idx % 2 === 1 ? "justify-end" : "",
            )}
          >
            <Card
              idx={idx}
              date={item.date}
              title={item.title}
              className={idx % 2 === 0 ? "self-end lg:text-right" : ""}
            >
              <p>{item.content}</p>
            </Card>
            <LineDot />
          </ol>
        ))}
      </ol>
    </SectionContainer>
  );
};
export default Timeline;
