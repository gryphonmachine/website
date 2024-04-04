import { Title } from "@/components/Title";
import { SeasonEvent } from "@/components/season/SeasonEvent";
import Link from "next/link";

export const EventsScreen2024 = () => {
  return (
    <>
      <Title>Events Attended</Title>
      <div className="flex flex-col">
        <Link href="/season/2024/durham" legacyBehavior>
          <a className="mb-5">
            <SeasonEvent
              title="Durham College District Event"
              date="March 15th - March 17th, 2024"
            />
          </a>
        </Link>
        <Link href="/season/2024/waterloo" legacyBehavior>
          <a>
            <SeasonEvent
              title="Waterloo University District Event"
              date="March 21st - March 23rd, 2024"
            />
          </a>
        </Link>
      </div>
    </>
  );
};
