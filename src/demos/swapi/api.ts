import { SWPeopleResponse, SWPersonT } from "./types";

const loadPeople = async (): Promise<SWPersonT[]> => {
  const peopleFromStorage = localStorage.getItem("sw-people");
  if (peopleFromStorage) {
    return JSON.parse(peopleFromStorage);
  }
  const json: SWPeopleResponse = await fetch(
    "https://swapi.dev/api/people/"
  ).then((r) => r.json());
  localStorage.setItem("sw-people", JSON.stringify(json.results));
  return json.results;
};

export const API = { loadPeople };
