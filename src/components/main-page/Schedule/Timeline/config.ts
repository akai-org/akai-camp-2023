import { Timeline } from "components/main-page/types";

export const timelineList: Timeline[] = [
  {
    title: "Rejestracja uczestiników",
    hour: "9:00",
    location: "Centrum wykładowe PP",
  },
  {
    title: "Otwarcie wydarzenia",
    hour: "10:00",
    location: "Sala CW1",
    description:
      "We'll be set up next to the entrance so that you can check-in for the conference. Have your evenea ticket ready. Once you get in, grab a coffee, meet old friends, make new friends, visit our sponsor booths or make yourself familiar with the venue.",
    topics: [
      {
        title: "xyz",
        abstract: "abstract xyz",
        panel: "universal",
        lecturer: {
          avatar: "path to avatar",
          fullName: "prof. dr hab. inż. Mikołaj Morzy",
          biography: "bio About Morzy",
        },
      },
    ],
  },
  {
    title: "Pierwsza sesja prelekcji",
    hour: "10:30",
    location: "Sale CW1 i CW2",
  },
  {
    title: "Przerwa kawowa + networking",
    hour: "12:00",
    location: "Sala BT027",
  },
  {
    title: "Druga sesja prelekcji",
    hour: "13:00",
    location: "Sale CW1 i CW2",
  },
  {
    title: "Przerwa obiadowa",
    hour: "14:30",
    location: "Sala BT027",
  },
  {
    title: "Trzecia sesja prelekcji",
    hour: "15:30",
    location: "Sale CW1 i CW2",
  },
  {
    title: "Zakończenie wydarzenia",
    hour: "17:00",
    location: "Sala CW1",
  },
];
