import { Calendar, Clock, MapPin, Users, type LucideProps } from "lucide-react";
import { motion } from "motion/react";
import type { Event } from "../../types/event";

type EventCardInfoProps = {
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  text: string;
};

const EventCardInfo: React.FC<EventCardInfoProps> = ({ Icon, text }) => {
  return (
    <li className="mt-2 flex items-center gap-2">
      <Icon aria-hidden="true" className="h-3 w-3 sm:h-4 sm:w-4" />
      <span className="text-xs sm:text-sm">{text}</span>
    </li>
  );
};

type EventCardProps = Event & {
  idx: number;
  children: React.ReactNode;
};

const EventCard: React.FC<EventCardProps> = ({
  idx,
  title,
  children,
  day,
  time,
  end_time,
  address,
  capacity,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    return timeString.substring(0, 5);
  };

  const timeFormatted = `${formatTime(time)} ${end_time && " - ".concat(formatTime(end_time))}`;

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
      className="bg-primary/5 border-primary/20 w-full rounded-md border p-6 shadow-sm"
    >
      <h3 className="mb-3 font-serif text-xl font-medium">{title}</h3>
      <p className="mb-3 text-sm opacity-80">{children}</p>
      <ul className="flex flex-col gap-1">
        <EventCardInfo Icon={Calendar} text={formatDate(day)} />
        <EventCardInfo Icon={Clock} text={timeFormatted} />
        <EventCardInfo Icon={MapPin} text={address} />
        <EventCardInfo Icon={Users} text={capacity} />
      </ul>
    </motion.div>
  );
};

export default EventCard;
