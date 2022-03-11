import IAnchor from '../shared/IAnchor';

export default interface IEducation {
  name: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  anchors?: IAnchor[];
}
