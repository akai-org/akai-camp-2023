export type Section =
  | "hero"
  | "event-details"
  | "registration"
  | "location"
  | "schedule"
  | "mentors"
  | "about"
  | "partners"
  | "faq";

export type Timeline = {
  title: string,
  place: string,
  hour: string
}