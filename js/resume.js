function viewModel() {
  this.firstName = "John";
  this.lastName = "Naylor";
  this.fullName = this.firstName + " " + this.lastName;

  this.phone = "";
  this.email = "imalikmu@gmail.com";
  this.github = "https://github.com/batmaninrobin";
  this.website = "https://mani-malik.xyz";

  this.sections = [
    {
      header: ["Skills"],
      subsections: [
        {
          list: [
            "React",
            "HTML/CSS",
            // "Angular",
            // "Vue",
            // "Flutter",
            "SQL",
            "Bash",
            "Java",
            // "Spark",
            // "Hadoop",
            "Python",
            "Android",
            // "iOS",
            // "Swift",
            // "SwiftUI",
            "C/C++",
            // "Go",
            "Docker",
            "Kubernetes",
            // "GCP",
            "AWS",
            // "Terraform",
          ]
        }
      ]
    },
    {
      header: ["Education"],
      subsections: [
        {
          header: [
            "Richmond, VA",
            "Master of Science",
            "Spring 2020 - Spring 2022"
          ],
          bullets: [
            "Master of Computer Science degree from Virginia Commonwealth University (Data Science+Machine Learning)",
          ]
        },
        {
          header: [
            "Richmond, VA",
            "Bachelor of Science",
            "Fall 2016 - Spring 2020"
          ],
          bullets: [
            "Bachelor in Computer Science degree from Virginia Commonwealth University",
          ]
        }
      ]
    },
    {
      header: ["Certifications"],
      subsections: [
        // {
        //   decorators: {
        //     url: "https://www.credly.com/badges/0be60fbb-d187-4ab0-97f0-0076c78ddaf5"
        //   },
        //   header: [
        //     "AWS Certified Machine Learning - Specialty",
        //     "November 2021 - November 2024"
        //   ],
        // },
        {
          decorators: {
            url: "https://www.youracclaim.com/badges/a4587f99-1dd4-4481-b9d5-cf2c68d5cb59/public_url"
          },
          header: [
            "AWS Solutions Architect - Associate",
            "July 2020 - July 2023" // FIXME: change date
          ],
        },
        // {
        //   decorators: {
        //     url: "https://www.credential.net/b59fb0f6-fd21-409a-afc6-843ca8495924"
        //   },
        //   header: [
        //     "Google Associate Cloud Engineer",
        //     "July 2020 - July 2022"
        //   ],
        // }
      ]
    },
    {
      header: ["Prominent Projects"],
      subsections: [
        {
          decorators: {
            icon: "github",
            url: "https://github.com/jonaylor89/WineInAMillion",
          },
          header: ["Wine in a Million", "Fall 2019"],
          bullets: [
            "Won <a href='https://devpost.com/software/wine-in-a-million'>first place</a> for GDIT's Natural Language Processing Challenge",
            "Uses BERT as a Service (AI/ML/NLP Model), Jupyter notebooks, and a wine review dataset to recommend wine to users similar to their current tastes"
          ]
        },
        {
          decorators: {
            icon: "github",
            url: "https://github.com/BatmaniNRobin/HotWheeels_Ramhacks2019"
          },
          header: ["Hot Wheels", "Fall 2019"],
          bullets: [
            "Won <a href='https://devpost.com/software/hot-wheels'>second place</a> at RamHacks 2019",
            "Uses Augmented Reality, AI, and microservices (Flask Framework) to let CarMax customers check if a car in the lot is available or not"
          ]
        },
        {
          header: ["Collegiate Cyber Defense Competition", "Spring 2019"],
          bullets: [
            "Placed 2nd at the Mid-Atlantic's Collegiate Cyber Defense Competition",
            [
              "Cyber defense competition used as a simulation for actual cyber defense in a business setting",
            ]
          ]
        },
      ]
    },
    {
      header: ["Employment"],
      subsections: [
      
      ]
    },
    {
      header: ["Leadership"],
      subsections: [
        {
          header: ["Vice President of RamDev", "Summer 2018 - Summer 2020"], // FIXME: DATES
          bullets: [
            "Organize weekly tech-talks by companies and students",
            "Invite corporate developers to speak and bring internships for students",
            "Organize Hackathon trips"
          ]
        },
        {
          header: [
            "Lead RamHacks Organizer",
            "Spring 2020 - Fall 2020"
          ],
          bullets: [
            "Annual VCU Hackathon and largest hackathon in Virginia",
            "Oversaw VCU's first all virtual hackathon during COVID-19 lockdown"
          ]
        },
        {
          header: [
            "Member of Student Advisory Board",
            "Summer 2020 - Present"
          ],
          bullets: [
            "~Help the department choose new faculty members",
            "~Help out with events, such as local hack day, for prospective and current computer science students"
          ]
        },
        {
          header: ["Vice President of Linux Users Group Club", "Summer 2018 - Fall 2019"], // FIXME dates, bullets
          bullets: [
            "Organize weekly meetings to prepare for the ACM International Collegiate Programming Contest"
          ]
        },
        {
          header: ["Google Student Developer Lead", "Fall 2020 - Spring 2021"],
          bullets: [
            "Manage a student developer club including monthly workshops on Google Cloud"
          ]
        },
      ]
    },
  ];
}
