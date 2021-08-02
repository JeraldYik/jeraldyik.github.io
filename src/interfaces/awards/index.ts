export default interface IAward {
  name: string;
  location: string;
  award: string | Array<string>;
  startDate: string;
  endDate?: string;
  description: Array<string>;
}