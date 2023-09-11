import { Section, Heading } from "components/ui";
import React from "react";
import styles from './Schedule.timeline.module.scss'
import { Timeline } from "../types";
import TimelineNote from "./TimelineNote";
import ScheduleTimelineTopics from "./ScheduleTimelineTopics";

const timelineNotes: Timeline[] = [
    {
        title: "Rejestracja uczestiników",
        hour: "9:00",
        place: "Centrum wykładowe PP"
    },
    {
        title: "Otwarcie wydarzenia",
        hour: "10:00",
        place: "Sala CW1",
        topics: [
            {
                title: "xyz",
                abstract: "abstract xyz",
                lectuer: {
                    avatar: 'path to avatar',
                    nameAndSurname: "prof. dr hab. inż. Mikołaj Morzy",
                    biography: "bio About Morzy"
                }
            }
        ]
    },
    {
        title: "Pierwsza sesja prelekcji",
        hour: "10:30",
        place: "Sale CW1 i CW2"
    },
    {
        title: "Przerwa kawowa + networking",
        hour: "12:00",
        place: "Sala BT027"
    },
    {
        title: "Druga sesja prelekcji",
        hour: "13:00",
        place: "Sale CW1 i CW2"
    },
    {
        title: "Przerwa obiadowa",
        hour: "14:30",
        place: "Sala BT027"
    },
    {
        title: "Trzecia sesja prelekcji",
        hour: "15:30",
        place: "Sale CW1 i CW2"
    },
    {
        title: "Zakończenie wydarzenia",
        hour: "17:00",
        place: "Sala CW1"
    }


]

export function ScheduleTimeline(){

    return (
        <Section id="schedule" className={styles.container
        }>
            <Heading withAccent>Plan wydarzenia</Heading>
            <ul className="timeline">
                {timelineNotes.map(({title, hour, place, topics }: Timeline)=>
                    <li key={title} className={styles.timeline__point}>
                        {
                            topics ?
                        <TimelineNote hour={hour} title={title} place={place}>
                            <ScheduleTimelineTopics topics={topics} />
                        </TimelineNote>
                        : <TimelineNote hour={hour} title={title} place={place} />
                        }
                    </li>
                )}
            </ul>
        </Section>
    )
}