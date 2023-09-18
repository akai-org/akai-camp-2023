export type TimelineNotesProps = {
  title: string;
  hour: string;
  place: string;
  children?: JSX.Element;
};

export default function TimelineNote({
  title,
  hour,
  place,
  children,
}: TimelineNotesProps) {
  return (
    <section className="timeline-note">
      <time className="timeline-note__time" dateTime={hour}>
        {hour}
      </time>
      <h3 className="timeline-note__title">{title}</h3>
      <h4 className="timeline-note__place">{place}</h4>
      {children}
    </section>
  );
}
