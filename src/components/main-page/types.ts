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
  topics?: Topic[]
}

export type Topic = {
  title: string,
  abstract: string,
  lectuer: LectuerInfo
}

export type LectuerInfo = {
  avatar: string,
  nameAndSurname: string,
  biography: string
}