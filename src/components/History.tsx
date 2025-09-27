import { twMerge } from "tailwind-merge";
import SectionContainer from "./UI/SectionContainer";
import SectionTitle from "./UI/SectionTitle";

type HistoryCardProps = {
  date: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

const LineDot: React.FC = () => {
  return (
    <div className="h-5 absolute left-1/2 top-1/2 -translate-y-1/2 border-3 border-white -translate-x-1/2 w-5 bg-primary rounded-full " />
  );
};

const HistoryCard: React.FC<HistoryCardProps> = ({
  date,
  title,
  children,
  className,
}) => {
  return (
    <div
      className={twMerge(
        "border-primary/20 max-w-2xl bg-primary/5 shadow-md self-center h-fit border-1 rounded-md p-6",
        className,
      )}
    >
      <h3 className="font-serif text-3xl font-semibold text-primary">{date}</h3>
      <h3 className="font-serif mt-2 text-2xl font-semibold text-primary">
        {title}
      </h3>
      <div className="flex flex-col gap-5 mt-4 leading-relaxed">{children}</div>
    </div>
  );
};

const History: React.FC = () => {
  const randomContent = (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec maximus
        ligula, eu lobortis nunc. Morbi molestie, orci sed tincidunt semper,
        lorem nibh semper nulla, vel elementum neque elit sit amet nibh. Duis
        gravida sodales ullamcorper. Sed consectetur lacus in hendrerit commodo.
        Nulla ultrices augue tincidunt dignissim tincidunt.
      </p>
      <p>
        Phasellus et pretium urna, eu tincidunt odio. Nulla est nunc,
        scelerisque a egestas at, posuere ac magna. Aliquam nec sollicitudin
        nisl, sollicitudin accumsan erat. Aenean sapien enim, gravida finibus
        fermentum eu, hendrerit vel erat. Sed consectetur lacus in hendrerit
        commodo. Nulla ultrices augue tincidunt dignissim tincidunt.
      </p>
      <p>
        Phasellus et pretium urna, eu tincidunt odio. Nulla est nunc,
        scelerisque a egestas at, posuere ac magna. Aliquam nec sollicitudin
        nisl, sollicitudin accumsan erat. Aenean sapien enim.
      </p>
    </>
  );

  return (
    <SectionContainer className="mt-32">
      <SectionTitle
        title="Nossa História"
        description="Conheça a rica história e o legado cultural da Praça Sérgio Pacheco"
      />

      <div className="relative mt-10 mb-32 flex flex-col gap-6">
        <div className="bg-primary/70 w-1 h-full hidden lg:block absolute left-1/2 -translate-x-1/2 rounded-full" />
        <div className="relative">
          <HistoryCard date="1850" title="Inauguração" className="text-right">
            {randomContent}
          </HistoryCard>
          <LineDot />
        </div>

        <div className="relative flex justify-end">
          <HistoryCard
            date="1992"
            className="self-end"
            title="Evolução e Crescimento"
          >
            {randomContent}
          </HistoryCard>
          <LineDot />
        </div>

        <div className="relative">
          <HistoryCard
            date="2015"
            className="self-end text-right"
            title="Comunidade"
          >
            {randomContent}
          </HistoryCard>
          <LineDot />
        </div>
      </div>
    </SectionContainer>
  );
};
export default History;
