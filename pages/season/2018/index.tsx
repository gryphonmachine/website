import { Header } from "@/components/Header";
import { Subtitle } from "@/components/Subtitle";
import { Title } from "@/components/Title";
import { Season } from "@/components/season/Season";
import Link from "next/link";

export default function Season2018() {
  return (
    <>
      <Header title="FIRST Power Up" subtitle="2018 Season" />
      <Season title="Pingu">
        <Title>Events Attended</Title>

        <Link href="/season/2018/durham" legacyBehavior>
          <a>
            <Subtitle>1. Durham College Event</Subtitle>
          </a>
        </Link>
        <Link href="/season/2018/mcmaster" legacyBehavior>
          <a>
            <Subtitle>2. McMaster University Event</Subtitle>
          </a>
        </Link>
      </Season>
    </>
  );
}
