import IAnchor from "../shared/IAnchor";

export default interface IProject {
  name: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: Array<{[key:string]: Array<string>} | string>;
  anchors?: Array<IAnchor>;
  image?: string;
  technologies?: Array<string>;
}