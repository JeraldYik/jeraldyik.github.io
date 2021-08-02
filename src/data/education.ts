import IEducation from '../interfaces/education'
import Month from '../enums/months'

const Education: Array<IEducation> = [
  {
    name: 'Nanyang Technological University (NTU)',
    location: 'Singapore',
    startDate: `${Month.AUGUST} 2017`,
    endDate: `${Month.DECEMBER} 2021`,
    description: [
      'B.Eng (with Hons) for Renaissance Engineering Programme (REP) specialising in Computer Science (GPA 4.83/5, 1st Class)',
      'MSc in Science & Technology Management'
    ]
  },
  {
    name: 'University of California, Berkeley (UCB)',
    location: 'Berkeley, California',
    startDate: `${Month.AUGUST} 2019`,
    endDate: `${Month.MAY} 2020`,
    description: [
      'Bachelor of Computer Science (GPA 3.485/5)',
      'Concurrent with REP during the 3rd year of studies'
    ]
  },
  {
    name: 'Zagreb School of Economics & Management (ZSEM)',
    location: 'Zagreb, Croatia',
    startDate: `${Month.MAY} 2018`,
    endDate: `${Month.JUNE} 2018`,
    description: [
      'Attained High Distinction for Applied Creativity & Innovation',
      'Attained 92/100 for Croatian Studies'
    ]
  },
  {
    name: 'Victoria Junior College',
    location: 'Singapore',
    startDate: `${Month.JANURARY} 2013`,
    endDate: `${Month.DECEMBER} 2014`,
    description: [
      'Graduated with UAS of 87.5/90, consistently attaining As & Bs throughout the 2 years in Junior College',
      'Attained Distinction for H3 Physics'
    ]
  }
]

export default Education