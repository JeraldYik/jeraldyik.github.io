import IEducation from '../interfaces/education';
import Month from '../enums/months';

const Education: IEducation[] = [
  {
    name: 'Nanyang Technological University (NTU)',
    location: 'Singapore',
    startDate: `${Month.AUGUST} 2017`,
    endDate: `${Month.DECEMBER} 2021`,
    description: [
      'B.Eng (with Hons) for Renaissance Engineering Programme (REP) specialising in Computer Science (GPA 4.83/5, 1st Class)',
      'MSc in Science & Technology Management'
    ],
    anchors: [
      {
        label: 'Official REP Website',
        link: 'https://www.ntu.edu.sg/admissions/undergraduate/premier-scholar-programmes/renaissance-engineering-programme'
      }
    ]
  },
  {
    name: 'University of California, Berkeley (UCB)',
    location: 'Berkeley, California',
    startDate: `${Month.AUGUST} 2019`,
    endDate: `${Month.MAY} 2020`,
    description: ['Bachelor of Computer Science (EECS) (GPA 3.485/5)', 'Concurrent with REP during the 3rd year of studies'],
    anchors: [
      {
        label: 'Official UCB EECS Website',
        link: 'https://eecs.berkeley.edu/'
      }
    ]
  },
  {
    name: 'Zagreb School of Economics & Management (ZSEM)',
    location: 'Zagreb, Croatia',
    startDate: `${Month.MAY} 2018`,
    endDate: `${Month.JUNE} 2018`,
    description: ['Attained High Distinction for Applied Creativity & Innovation', 'Attained 92/100 for Croatian Studies'],
    anchors: [
      {
        label: 'Official ZSEM Website',
        link: 'https://zsem.hr/en/'
      }
    ]
  },
  {
    name: 'Victoria Junior College (VJC)',
    location: 'Singapore',
    startDate: `${Month.JANURARY} 2013`,
    endDate: `${Month.DECEMBER} 2014`,
    description: [
      'Graduated with UAS of 87.5/90, consistently attaining As & Bs throughout the 2 years in Junior College',
      'Attained Distinction for H3 Physics'
    ],
    anchors: [
      {
        label: 'Official VJC Website',
        link: 'https://victoriajc.moe.edu.sg/'
      }
    ]
  }
];

export default Education;
