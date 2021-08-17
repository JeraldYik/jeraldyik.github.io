import IAnchor from '../shared/IAnchor';
import IIcon from '../shared/IIcon';

export default interface IProject {
  name: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: Array<{ [key: string]: Array<string> } | string>;
  anchors?: Array<IAnchor>;
  technologies?: Array<IIcon>;
}
