export type SWPersonT = {
  name: string;
  url: string;
  height: string;
  gender: string;
  hair_color: string;
  skin_color: string;
  homeworld: string;
};
export type SWHomeWorld = { name: string };
export type SWPeopleResponse = { results: SWPersonT[] };
