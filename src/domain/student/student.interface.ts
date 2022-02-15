import { Class } from "../class/class.interface";

export interface Student {
  id: number;
  name: string;
  githubProfile: string;
  projectList: Array<string>;
  class: Class;
}
