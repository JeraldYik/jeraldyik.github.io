import IAward from '../interfaces/awards';
import Month from '../enums/months';

const Awards: IAward[] = [
  {
    name: 'Amazon Web Service',
    location: 'Singapore',
    award: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    startDate: `${Month.AUGUST} 2021`,
    endDate: `${Month.AUGUST} 2021`,
    description: ['Award to signify passing of AWS Academy Cloud Foundations course.']
  },
  {
    name: 'Yitu Hack-AI-Thon',
    location: 'Singapore',
    award: 'Finalist (5/100+ teams)',
    startDate: `${Month.FEBRUARY} 2019`,
    endDate: `${Month.FEBRUARY} 2019`,
    description: [
      'Worked with a team of 3 to improve performance of image detection model',
      'Underwent rigorous quick-searching and trial-and-tested methods to push the limit of base model, given limited computational resources'
    ]
  },
  {
    name: 'Renaissance Engineering Programme',
    location: 'NTU, Singapore',
    award: 'Renaissance Engineering Programme Scholarship',
    startDate: `${Month.AUGUST} 2017`,
    endDate: `${Month.AUGUST} 2017`,
    description: ['Prestigious scholarship awarded to the cream of the crop in the cohort']
  },
  {
    name: 'National Taekwondo Poomsae Competition',
    location: 'Singapore',
    award: ['Silver: Green Belt Team Male Category', 'Bronze: Yellow Belt Team Male Category', 'Bronze: Blue Belt Team Male Category'],
    startDate: `${Month.APRIL} 2013`,
    endDate: `${Month.APRIL} 2014`,
    description: ['Participated in a national competition for Taekwondo Poomsae, competing against fellow athletes from other high schools']
  }
];

export default Awards;
