import { Topic } from "../types";
import Lectuer from "components/ui/Lectuer/Lectuer";
export default function ScheduleTimelineTopic({title, abstract, lectuer}: Topic){
    return (
        <article className="topic">
            {/* to powinien być dropdown */}
            <h4 className="topic__title">{title}</h4>
            {/* tu wyjedzie reszta informacji */}
            <p>{abstract}</p>
            <Lectuer  avatar={lectuer.avatar} biography={lectuer.biography} nameAndSurname={lectuer.nameAndSurname}/>

        </article>
    )
}