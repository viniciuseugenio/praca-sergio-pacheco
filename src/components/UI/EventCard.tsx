import { Calendar, Clock } from "lucide-react";

type EventCardProps = {
  img: string;
  title: string;
  children: string;
  time: string;
  date: string; // Temporary, change it later
};

const EventCard: React.FC<EventCardProps> = ({
  img,
  title,
  children,
  time,
  date,
}) => {
  return (
    <div className="rounded-md min-h-96 shadow-sm hover:scale-105 duration-300 border-primary/20 border max-w-96">
      <div className="max-h-52 max-w-96 rounded-t-md overflow-hidden items-center justify-center flex">
        <img className="h-full w-full object-cover" src={img} />
      </div>
      <div className="mt-4 px-4 pb-4">
        <h3 className="font-serif font-bold text-xl">{title}</h3>
        <div className="flex gap-6">
          <div className="mt-2 flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{time}</span>
          </div>

          <div className="mt-2 flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{date}</span>
          </div>
        </div>
        <p className="text-sm mt-2">{children}</p>
      </div>
    </div>
  );
};

export default EventCard;
