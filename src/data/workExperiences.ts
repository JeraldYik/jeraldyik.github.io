import Month from '../enums/months';
import IWorkExperience from '../interfaces/workExperiences';

/**
 * devicon: https://devicon.dev/
 */
const WorkExperiences: IWorkExperience[] = [
  {
    organisation: 'Bytedance (PIPO SG)',
    location: 'Singapore',
    role: 'Software Engineer',
    startDate: `${Month.MAY} 2022`,
    technologies: [
      {
        label: 'Golang',
        icon: 'devicon-go-line'
      },
      {
        label: 'MySQL',
        icon: 'devicon-mysql-plain'
      },
      {
        label: 'REST'
      },
      {
        label: 'RPC'
      },
      {
        label: 'GraphQL',
        icon: 'devicon-graphql-plain'
      },
      {
        label: 'Redis',
        icon: 'devicon-redis-plain'
      },
      {
        label: 'Cron'
      }
    ],
    description: ['Payment Infrastructure for Bytedance internal products', 'Advertisement-related Infrastructure'],
    anchors: [
      {
        label: 'Bytedance Official Website',
        link: 'https://www.bytedance.com/en/'
      },
      {
        label: 'Tiktok',
        link: 'https://www.tiktok.com/'
      }
    ]
  },
  {
    organisation: 'Open Government Products (OGP)',
    location: 'Singapore',
    role: 'Software Engineering Intern',
    startDate: `${Month.NOVEMBER} 2021`,
    endDate: `${Month.APRIL} 2022`,
    technologies: [
      {
        label: 'Typescript',
        icon: 'devicon-typescript-plain'
      },
      {
        label: 'AWS',
        icon: 'devicon-amazonwebservices-original'
      },
      {
        label: 'Serverless'
      },
      {
        label: 'PostgreSQL',
        icon: 'devicon-postgresql-plain'
      },
      {
        label: 'Sequelize',
        icon: 'devicon-sequelize-plain'
      },
      {
        label: 'Zendesk'
      },
      {
        label: 'NestJS',
        icon: 'devicon-nestjs-plain'
      }
    ],
    description: [
      'Worked on Covid Operations (Case Management System)',
      'Used Zendesk as a SaaS for ticket management',
      'Worked on a couple of Hackathon projects'
    ],
    anchors: [
      {
        label: 'Hackathon project: SpotlightSG website',
        link: 'http://spotlight.hack.gov.sg/'
      },
      {
        label: 'Hackathon project: SpotlightSG writeup',
        link: 'https://www.open.gov.sg/hackathon/2022/spotlight'
      },
      {
        label: 'Hackathon project: SpotlightSG repository',
        link: 'https://github.com/opengovsg/spotlightsg'
      },
      {
        label: 'Hackathon project: QuizSG website',
        link: 'https://quiz.hack.gov.sg/'
      },
      {
        label: 'Hackathon project: QuizSG writeup',
        link: 'https://www.open.gov.sg/hackathon/2022/quizsg'
      },
      {
        label: 'Hackathon project: QuizSG repository',
        link: 'https://github.com/opengovsg/quizSG'
      },
      {
        label: 'Letter of Recommendation',
        link: 'letter-of-recommendations/ogp.pdf'
      }
    ]
  },
  {
    organisation: 'Affinidi',
    location: 'Singapore',
    role: 'Software Engineering (QA Automation) Intern',
    startDate: `${Month.MAY} 2021`,
    endDate: `${Month.AUGUST} 2021`,
    technologies: [
      {
        label: 'Typescript',
        icon: 'devicon-typescript-plain'
      },
      {
        label: 'Mocha',
        icon: 'devicon-mocha-plain'
      },
      {
        label: 'Selenium',
        icon: 'devicon-selenium-original'
      },
      {
        label: 'Supertest'
      },
      {
        label: 'Playwright'
      },
      {
        label: 'k6'
      },
      {
        label: 'ReactJS',
        icon: 'devicon-react-original'
      }
    ],
    description: [
      'Contribute heavily to the testing automation processes of core products of the organisation',
      'Develop Core Software Automation Testing infrastructure',
      'Work primarily with many international colleagues from different timezones and has integrated seamlessly into asynchronous working environments.',
      'Constantly synced up with teams of products we test on for new features and updates'
    ],
    anchors: [
      {
        label: 'Self-Sovereign Identity SDK',
        link: 'https://www.affinidi.com/api'
      },
      {
        label: 'Safe Travel Application',
        link: 'https://www.safetravel.affinidi.com/'
      },
      {
        label: 'Unifier Application',
        link: 'https://unifier.affinidi.com/'
      },
      {
        label: 'Letter of Recommendation',
        link: 'letter-of-recommendations/affinidi.pdf'
      }
      // {
      //   label: 'My very own Intern Verifiable Credential!',
      //   link: 'https://affinidi.org/3lA4K0X'
      // },
      // {
      //   label: 'My kudos Verifiable Credential from Supervisor!',
      //   link: 'https://affinidi.org/3k9kp4N'
      // }
    ]
  },
  {
    organisation: 'UKEI Co-living',
    location: 'Hong Kong SAR',
    role: 'Backend Lead, Full-Stack Developer',
    startDate: `${Month.APRIL} 2021`,
    endDate: `${Month.MAY} 2022`,
    description: [
      'Responsible for the Backend operations of the application',
      'Established backend infrastructure from ground up',
      'Liase frequently with Tech Lead and front-end team to sync up criterias and workflow',
      'Contributed to front-end and full-stack efforts',
      'Working concurrently with full-time internship stint, and am successful in managing time efficiently to contribute to both projects at maximum potential'
    ],
    technologies: [
      {
        label: 'Typescript',
        icon: 'devicon-typescript-plain'
      },
      {
        label: 'NodeJS',
        icon: 'devicon-nodejs-plain'
      },
      {
        label: 'ExpressJS',
        icon: 'devicon-express-original'
      },
      {
        label: 'Docker',
        icon: 'devicon-docker-plain'
      },
      {
        label: 'MongoDB',
        icon: 'devicon-mongodb-plain'
      },
      {
        label: 'Redis',
        icon: 'devicon-redis-plain'
      },
      {
        label: 'SocketIO',
        icon: 'devicon-socketio-original'
      },
      {
        label: 'Expo'
      },
      {
        label: 'React Native',
        icon: 'devicon-react-original'
      }
    ],
    anchors: [
      {
        label: 'LinkedIn Page',
        link: 'https://hk.linkedin.com/in/ukei-coliving-2657b920b'
      }
    ]
  },
  {
    organisation: 'Government Technology Agency (GovTech)',
    location: 'Singapore',
    role: 'Full-Stack Development Intern',
    startDate: `${Month.MAY} 2020`,
    endDate: `${Month.NOVEMBER} 2020`,
    technologies: [
      {
        label: 'Typescript',
        icon: 'devicon-typescript-plain'
      },
      {
        label: 'ReactJS',
        icon: 'devicon-react-original'
      },
      {
        label: 'NextJS',
        icon: 'devicon-nextjs-original'
      },
      {
        label: 'NodeJS',
        icon: 'devicon-nodejs-plain'
      },
      {
        label: 'ExpressJS',
        icon: 'devicon-express-original'
      },
      {
        label: 'AWS',
        icon: 'devicon-amazonwebservices-original'
      },
      {
        label: 'KoaJS'
      },
      {
        label: 'Content Management System'
      }
    ],
    description: [
      'Contributed heavily to the innovation, implementation of new features, and security upkeep on the My Legacy Website',
      'Mastered the workflow of an agile environment utilising the Atlassian Ecosystem (Jira, Bitbucket, Bamboo, Confluence etc.) & working a sprint basis of 2 weeks per sprint',
      'Focussed heavily on Next.js for front-end implementation & Koa.js for back-end infrastructure',
      'Implemented a myriad of new components & interfaces on demand within a tight deadline',
      'Spearheaded the research spike and the implementation on the transition of an overhaul of rendering of content, which requires content to be dynamically rendered in the 4 major languages based on language chosen',
      'Explored Content Management System (CMS) to facilitate seamless integration of translation content and ease of input & change of content by content creators. Such CMS include Contentful & Lokalise, but our team decided on another approach as CMS do not fit nicely into our use case'
    ],
    anchors: [
      {
        label: 'Website',
        link: 'https://www.mylegacy.gov.sg/'
      },
      {
        label: 'Letter of Recommendation',
        link: 'letter-of-recommendations/govtech.pdf'
      }
    ]
  },
  {
    organisation: 'RushOwl Pte Ltd',
    location: 'Singapore',
    role: 'Data Analyst Intern',
    startDate: `${Month.JUNE} 2019`,
    endDate: `${Month.AUGUST} 2019`,
    technologies: [
      {
        label: 'InfluxDB'
      },
      {
        label: 'Grafana'
      },
      {
        label: 'ReactJS',
        icon: 'devicon-react-original'
      },
      {
        label: 'Javascript',
        icon: 'devicon-javascript-plain'
      },
      {
        label: 'Raspberry Pi',
        icon: 'devicon-raspberrypi-line'
      },
      {
        label: 'GSM/GPS'
      }
    ],
    description: [
      'Worked with the data analysis and experimentation/exploration aspect of the main project',
      'Established data collection & analysis infrastructure using InfluxDB, Chronograf, OSRM API, Go-Lang',
      'Established data visualisation platform using React for clients',
      'Configured commercially-viable GSM/GPS module using Raspberry Pi from scratch'
    ],
    anchors: [
      {
        label: 'Website',
        link: 'https://www.rushowl.sg/'
      }
    ]
  },
  {
    organisation: 'Singapore Armed Forces (SAF)',
    location: 'Singapore',
    role: 'Motor Transport Officer',
    startDate: `${Month.JANURARY} 2016`,
    endDate: `${Month.DECEMBER} 2016`,
    technologies: [
      {
        label: 'Planning'
      },
      {
        label: 'People Management'
      },
      {
        label: 'Resource Handling'
      }
    ],
    description: [
      'Responsible for the planning of job scopes and well-being of 100-odd men',
      'Responsible for a large number of resources, including 400-odd large military vehicles, making sure that they are well-serviced and well-prepared for usage in missions.',
      'Underwent rigorous physical & mental training gearing up to receive the rank of a commissioned officer',
      'Underwent intensive specialised military tactics pertaining to logistical flow, with strong emphasis on contigency plans'
    ],
    anchors: [
      {
        label: 'Official SAF Website (Transport Formation)',
        link: 'https://www.mindef.gov.sg/web/portal/army/our-forces/formations/formations-detail/transport/transport'
      }
    ]
  }
];

export default WorkExperiences;
