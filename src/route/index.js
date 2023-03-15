// Підключаємо технологію express для back-end сервера
const express = require('express')
const { ids } = require('webpack')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  address: 'Україна, м. Київ, вул. Банкова, 11.',
  salary: '600$ в місяць',
}

var footer = {
  social: {
    email: {
      text: 'ivanivanov@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/summary', function (req, res) {
  res.render('summary', {
    page: { title: ' Resume|Summary' },

    header,

    main: {
      summary: {
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
        title: 'Summary',
      },

      experience: {
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
        title: 'Other experience',
      },
    },
    footer,
  })
})

router.get('/skills', function (req, res) {
  res.render('skills', {
    page: { title: ' Resume|Skills ' },

    header,

    main: {
      hobbies: [
        { name: 'Граю в баскетбол', isMain: true },
        { name: 'Активний відпочинок', isMain: false },
        { name: 'Люблю малювати', isMain: true },
      ],
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },

        {
          name: 'VS CODE',
          point: 8,
          isTop: false,
        },

        {
          name: 'Git',
          point: 7,
        },
        {
          name: 'Terminal',
          point: 6,
        },
        {
          name: 'NPM',
          point: 5,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
    },
    footer,
  })
})
router.get('/educ', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume|Education',
    },

    header,

    main: {
      certificates: [
        {
          name: 'diplom it-brains',
          id: 1235,
        },
        {
          name: 'Certificat president company',
          id: 1236,
        },
        {
          name: 'Diplom study of scholl',
          id: 1237,
        },
      ],
      educations: [
        {
          name: 'Відкритий міжнародний університет розвитку людини «Україна»',
          isend: false,
        },
        {
          name: 'Державний університет телекомунікацій',
          isend: true,
        },
        {
          name: 'Київський міжнародний університет',
          isend: true,
        },
        {
          name: 'Київський університет імені Бориса Грінченка',
          isend: true,
        },
        {
          name: 'Київський національний економічний університет імені Вадима Гетьмана',
          isend: false,
        },
        {
          name: 'Київський національний лінгвістичний університет',
          isend: true,
        },
      ],
    },
    footer,
  })
})
router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    page: { title: 'Resume|work' },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://www.it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              stackAmount: 22,
              awardAmount: 254,
              name: 'resume',
              url: 'https://resume.com.ua/',
              about:
                'Get port from environment and store in Express.',
              stacks: [
                {
                  name: 'React.Js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'NodeJs',
                },
              ],
              awards: [
                {
                  name: 'super-puper devoleper',
                },
                {
                  name: 'super-puper engineer',
                },
              ],
            },
          ],
        },
      ],
    },
    footer,
  })
})

router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',
    page: { title: 'Resume|person' },
    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            'Developed new features for Google Maps',
            'Worked on improving search algorithms',
          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
