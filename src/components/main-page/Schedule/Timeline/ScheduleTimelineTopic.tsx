import { Topic } from "../../types";
import Lectuer from "components/ui/Lectuer/Lecturer";
export default function ScheduleTimelineTopic({
  title,
  abstract,
  lecturer,
}: Topic) {
  return (
    <article className="topic">
      {/* to powinien być dropdown */}
      <h4 className="topic__title">{title}</h4>
      {/* tu wyjedzie reszta informacji */}
      <p>{abstract}</p>
      <Lectuer
        avatar={lecturer.avatar}
        biography={lecturer.biography}
        fullName={lecturer.fullName}
      />
    </article>
  );
}
