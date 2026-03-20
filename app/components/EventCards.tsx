import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Event } from "@/lib/constants";

const EventCards = ({ title, image, location, date, time, slug }: Event) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src={image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        {/* <CardAction>
          <Badge variant="secondary">{slug}</Badge>
        </CardAction> */}
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <div className="flex items-center gap-2">
            <img src="/icons/pin.svg" alt="Location" width={12} height={12} />
            {location}
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="flex items-center gap-2 mr-4 text-xs">
          <img src="/icons/calendar.svg" alt="Date" width={12} height={12} />
          {date}
        </div>
        <div className="flex items-center gap-2 text-xs">
          <img src="/icons/clock.svg" alt="Time" width={12} height={12} />
          {time}
        </div>
      </CardFooter>
    </Card>
  );
};

export default EventCards;
