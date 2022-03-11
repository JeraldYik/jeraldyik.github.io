import IAnchor from '../shared/IAnchor';
import IIcon from '../shared/IIcon';

export default interface IWorkExperience {
  organisation: string;
  location: string;
  role: string;
  startDate: string;
  endDate?: string;
  technologies: IIcon[];
  description: string[];
  anchors: IAnchor[];
}
