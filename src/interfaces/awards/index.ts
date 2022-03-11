export default interface IAward {
  name: string;
  location: string;
  award: string | string[];
  startDate: string;
  endDate?: string;
  description: string[];
}
