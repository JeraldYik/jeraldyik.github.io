import IAnchor from '../shared/IAnchor';
import IIcon from '../shared/IIcon';

export default interface IProject {
  name: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  anchors?: IAnchor[];
  technologies?: IIcon[];
}
