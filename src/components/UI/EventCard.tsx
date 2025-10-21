import { Calendar, Clock, MapPin, Users, type LucideProps } from "lucide-react";

type EventCardProps = {
  title: string;
  children: string;
  time: string;
  date: string; // Temporary, change it later
  local: string;
  qtyPeople: string;
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
}) => {
  return (
    <div className="bg-primary/5 rounded-md shadow-sm p-6 w-full hover:scale-105 duration-300 border-primary/20 border">
      <h3 className="font-serif mb-3 font-medium text-xl">{title}</h3>
      <p className="text-sm mb-3 opacity-80">{children}</p>
      <ul className="flex flex-col gap-1">
        <EventCardInfo Icon={Calendar} text={date} />
        <EventCardInfo Icon={Clock} text={time} />
        <EventCardInfo Icon={MapPin} text={local} />
        <EventCardInfo Icon={Users} text={qtyPeople} />
      </ul>
    </div>
  );
};

export default EventCard;
