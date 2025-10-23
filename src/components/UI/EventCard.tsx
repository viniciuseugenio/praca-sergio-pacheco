import { Calendar, Clock, MapPin, Users, type LucideProps } from "lucide-react";
import { motion } from "motion/react";

type EventCardProps = {
  title: string;
  children: string;
  time: string;
  date: string; // Temporary, change it later
  local: string;
  qtyPeople: string;
  idx: number;
};

type EventCardInfoProps = {
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  text: string;
};

const EventCardInfo: React.FC<EventCardInfoProps> = ({ Icon, text }) => {
  return (
    <ul className="mt-2 flex items-center gap-2">
      <Icon className="h-3 w-3 sm:h-4 sm:w-4" />
      <span className="text-xs sm:text-sm">{text}</span>
    </ul>
  );
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  children,
  time,
  date,
  local,
  qtyPeople,
  idx,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 1,
        delay: 0.1 + idx * 0.06,
      }}
      viewport={{ once: true }}
      className="bg-primary/5 rounded-md shadow-sm p-6 w-full border-primary/20 border"
    >
      <h3 className="font-serif mb-3 font-medium text-xl">{title}</h3>
      <p className="text-sm mb-3 opacity-80">{children}</p>
      <ul className="flex flex-col gap-1">
        <EventCardInfo Icon={Calendar} text={date} />
        <EventCardInfo Icon={Clock} text={time} />
        <EventCardInfo Icon={MapPin} text={local} />
        <EventCardInfo Icon={Users} text={qtyPeople} />
      </ul>
    </motion.div>
  );
};

export default EventCard;
