import Head from "next/head";
import {
  Hero,
  EventDetailsExtended,
  Registration,
  Location,
  Partners,
  FAQ,
  ScheduleTimeline,
} from ".";

export function Content() {
  return (
    <>
      <Head>
        <title>AKAI Camp 2023</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <EventDetailsExtended />
      <Registration />
      <Location />
      <ScheduleTimeline />
      <Partners />
      <FAQ />
    </>
  );
}
