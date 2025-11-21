import { twMerge } from "tailwind-merge";

type SectionContainerProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  className?: string;
};

const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={twMerge(`container mx-auto px-10 sm:px-0`, className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
