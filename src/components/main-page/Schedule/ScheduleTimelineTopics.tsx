import { title } from "process"
import { Topic } from "../types"
import ScheduleTimelineTopic from "./ScheduleTimelineTopic"

type ScheduleTimelineProps = {
    topics: Topic[]
}

export default function ScheduleTimelineTopics({topics}: ScheduleTimelineProps){
    return (
        <>{
        topics.map(({title, abstract, lectuer}: Topic) => <ScheduleTimelineTopic key=   {title} title={title} abstract={abstract} lectuer={lectuer} />)
}
        </>
    )
}