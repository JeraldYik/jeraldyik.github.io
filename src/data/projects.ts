import IProject from '../interfaces/projects';
import Month from '../enums/months';

const Projects: Array<IProject> = [
  {
    name: 'Personal Portfolio Site',
    startDate: `${Month.MAY} 2019`,
    location: 'Singapore',
    description: [
      'This personal portfolio site is created using ReactJS, together with Bootstrap and other styling tools and built-in components',
      'Initially a static HTML site, I took the effort to completely overhaul the codebase, creating a React Application from scratch to incorporate responsiveness, as well as other lovely functions and benefits ReactJS provides'
    ],
    technologies: [
      {
        label: 'ReactJS', 
        icon: ''
      },
      {
        label: 'Sass',
        icon: ''
      },
      {
        label: 'Bootstrap',
        icon: ''
      }
    ]
  },
  {
    name: 'Renaissance Capstone Project (Final Year Project)',
    location: 'NTU, Singapore',
    startDate: `${Month.JUNE} 2020`,
    description: [
      'Responsible for implementing the infrastructure and logic on the topic of Differential Privacy on a CNN model that utilises peer-to-peer federated learning for training',
      'Conducted Final Presentation to a panel of course heads, spearheading technical explanations and discussions of the implementations and underlying concepts',
      'Received an A as a Final Grade'
    ],
    anchors: [
      {
        label: 'Repository',
        link: 'https://github.com/JeraldYik/rcp-colab-notebooks'
      }
    ],
    technologies: [
      {
        label: 'Python',
        icon: ''
      },
      {
        label: 'Deep Learning',
        icon: ''
      },
      {
        label: 'Federated Learning',
        icon: ''
      },
      {
        label: 'Differential Privacy',
        icon: ''
      },
      {
        label: 'Jupyter',
        icon: ''
      },
      {
        label: 'AWS',
        icon: ''
      },
      {
        label: 'GCP',
        icon: ''
      }
    ]
  },
  {
    name: 'Nearby Eateries Webpage',
    startDate: `${Month.DECEMBER} 2020`,
    endDate: `${Month.DECEMBER} 2020`,
    location: 'Singapore',
    description: ['Created a Full-stack end-to-end Webpage as a side project to practice what I have learnt during my stint in GovTech'],
    anchors: [
      {
        label: 'Website',
        link: 'https://nearby-food-web.herokuapp.com/'
      },
      {
        label: 'Repository',
        link: 'https://github.com/JeraldYik/nearby-food-web'
      }
    ],
    technologies: [
      {
        label: 'Typescript',
        icon: ''
      },
      {
        label: 'ReactJS',
        icon: ''
      },
      {
        label: 'NextJS',
        icon: ''
      },
      {
        label: 'Semantic UI',
        icon: ''
      },
      {
        label: 'Google Developer',
        icon: ''
      },
      {
        label: 'API',
        icon: ''
      }
    ]
  },
  {
    name: 'Telegram Bot',
    startDate: `${Month.NOVEMBER} 2020`,
    endDate: `${Month.NOVEMBER} 2020`,
    location: 'Singapore',
    description: ['Created a Telegram Bot that includes many features to not only convenient everyday life, but also as a learning platform'],
    anchors: [
      {
        label: 'Telegram Bot',
        link: 'https://t.me/jyik001_test_bot'
      },
      {
        label: 'Repository',
        link: 'https://github.com/JeraldYik/telegram-bot'
      }
    ],
    technologies: [
      {
        label: 'Typescript',
        icon: ''
      },
      {
        label: 'Telegram',
        icon: ''
      },
      {
        label: 'API',
        icon: ''
      }
    ]
  },
  {
    name: 'CZ4013 Distributed Systems Booking System Project',
    startDate: `${Month.FEBRUARY} 2021`,
    endDate: `${Month.APRIL} 2021`,
    location: 'NTU, Singapore',
    description: ['Completed a project in Java to implement a booking system, with full implementation of serialisation/de-seralisation, and UDP socket communication.'],
    anchors: [
      {
        label: 'Repository',
        link: 'https://github.com/JeraldYik/cz4013'
      }
    ],
    technologies: [
      {
        label: 'Java',
        icon: ''
      },
      {
        label: 'Socket Programming',
        icon: ''
      },
      {
        label: 'Serialisation',
        icon: ''
      }
    ]
  },
  {
    name: 'CZ4153 Blockchain Decentralised Domain Registrar',
    startDate: `${Month.SEPTEMBER} 2020`,
    endDate: `${Month.NOVEMBER} 2020`,
    location: 'NTU, Singapore',
    description: [
      'Completed an end-to-end project on a decentralised domain registrar, using "commit-and-reveal" bidding process',
      'Front-end in React (Javascript), Back-end in Solidity on the Ethereum Blockchain'
    ],
    anchors: [
      {
        label: 'Repository',
        link: 'https://github.com/JeraldYik/CZ4153_dApp'
      }
    ],
    technologies: [
      {
        label: 'Solidity',
        icon: ''
      },
      {
        label: 'Blockchain',
        icon: ''
      },
      {
        label: 'ReactJS',
        icon: ''
      },
      {
        label: 'Javascript',
        icon: ''
      }
    ]
  },
  {
    name: 'Data Science Society',
    location: 'UCB, Berkeley',
    startDate: `${Month.SEPTEMBER} 2019`,
    endDate: `${Month.DECEMBER} 2019`,
    description: [
      'Brainstorm creative ideas to construct critical analysis with hundreds of datasets',
      'Delivering a presentation at Research Symposium with a 1000-strong audience'
    ],
    technologies: [
      {
        label: 'Python',
        icon: ''
      },
      {
        label: 'Jupyter',
        icon: ''
      },
      {
        label: 'Pandas',
        icon: ''
      },
      {
        label: 'Kaggle',
        icon: ''
      }
    ]
  },
  {
    name: 'Reverb, A ReDesign Project',
    location: 'NTU, Singapore',
    startDate: `${Month.JANURARY} 2019`,
    endDate: `${Month.MAY} 2019`,
    description: [
      'Worked with a team of 6 from different engineering specialization to create a novel prototype to aid elements of society',
      'Created a prototype to aid the hearing-impaired with aural situational awareness'
    ],
    anchors: [
      {
        label: 'E-Pamphlet',
        link: 'https://jeraldyik.github.io/redesign.pamphlet/index.html'
      }
    ],
    technologies: [
      {
        label: 'HTML',
        icon: ''
      },
      {
        label: 'CSS',
        icon: ''
      },
      {
        label: 'Javscript',
        icon: ''
      },
      {
        label: 'Raspberry Pi',
        icon: ''
      },
      {
        label: 'Python',
        icon: ''
      }
    ]
  },
  {
    name: 'National Data Science Challenge - Product Category Classification',
    location: 'Singapore',
    startDate: `${Month.MARCH} 2019`,
    endDate: `${Month.MARCH} 2019`,
    description: [
      'Worked with a team of 4 to establish & fine-tune product classification models with high accuracy',
      'Implemented neural networks such as Long Short Term Memory (LSTM) & Transformer (Trf), as well as ensembled networks using Stacking & Logistic Regression',
      'Achieved top 11% in the competition'
    ],
    technologies: [
      {
        label: 'Python',
        icon: ''
      },
      {
        label: 'Machine Learning',
        icon: ''
      },
    ]
  },
  {
    name: 'SecondLife',
    location: 'NTU, Singapore',
    startDate: `${Month.AUGUST} 2018`,
    endDate: `${Month.NOVEMBER} 2018`,
    description: [
      'Created a Recycling station Android application from scratch for a Software Engineering Module',
      'Utilised various API, including Google Maps, National Environmental Agency (NEA)',
      {
        'Application is able to:': [
          "Determine type of recyclables through a 'checkout' system",
          'Find nearest recycling station to user based on type of recyclables obtained',
          'Provide users with the nearest route from current location to recycling station',
          'Communicate with user via a chatbot that uses IBM Watson API'
        ]
      }
    ],
    anchors: [
      {
        label: 'Repository',
        link: 'https://github.com/JeraldYik/secondlife'
      },
      {
        label: 'Landing Page',
        link: 'https://jeraldyik.github.io/secondlife/index.html'
      }
    ],
    technologies: [
      {
        label: 'Java',
        icon: ''
      },
      {
        label: 'Object-Oriented Programming',
        icon: ''
      },
      {
        label: 'API',
        icon: ''
      },
      {
        label: 'Natural Language Progressing',
        icon: ''
      },
    ]
  },
  {
    name: 'CodeIT Credit Suisse',
    location: 'Singapore',
    startDate: `${Month.SEPTEMBER} 2018`,
    endDate: `${Month.SEPTEMBER} 2018`,
    description: [
      'Successfully passed the intensive preliminary test amomg thousands of applicants',
      'Requires participant to be proficient in JSON & PaaS, as well as be quick on efficient algorithm construction',
      'Spent the full 27 hours of non-stop rigorous coding to clear challenges'
    ],
    technologies: [
      {
        label: 'Javascript',
        icon: ''
      },
      {
        label: 'Python',
        icon: ''
      },
      {
        label: 'NodeJS',
        icon: ''
      },
    ]
  }
];

export default Projects;
