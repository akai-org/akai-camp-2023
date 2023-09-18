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
  title: string;
  location: string;
  hour: string;
  description?: string;
  topics?: Topic[];
};

export type Topic = {
  title: string;
  abstract: string;
  lecturer: LecturerInfo;
  panel: "technical" | "soft-skills" | "universal";
};

export type LecturerInfo = {
  avatar: string;
  fullName: string;
  biography: string;
};
