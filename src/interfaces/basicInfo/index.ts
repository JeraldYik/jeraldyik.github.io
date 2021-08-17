import ISocial from './ISocial';

export default interface IPortfolioBasicInfo {
  name: string;
  titles: string[];
  socials: ISocial[];
  lastUpdated: string;
}
