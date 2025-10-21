type SectionTitleProps = {
  title: string;
  description: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <>
      <h2 className="font-serif text-3xl lg:text-4xl">{title}</h2>
      <p className="max-w-3xl text-base lg:text-lg mt-1">{description}</p>
    </>
  );
};

export default SectionTitle;
