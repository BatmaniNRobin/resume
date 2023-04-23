function viewModel() {
  this.firstName = "Mohammad";
  this.lastName = "Malik";
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
            "Angular",
            "Vercel",
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
            "Helm",
            "CUDA",
            "GCP",
            "Grafana",
            "Prometheus",
            "AWS",
            "Terraform",
            "Azure",
            "Airflow",
            "Jenkins",
            "MacOS",
            "Linux",
            "Windows",
            "Zsh",
            "ServiceNow",
            "Jira",
            "Artificial Intelligence/AI",
            "Machine Learning/ML",
            "Deep Learning/DL",
            ""
          ]
        }
      ]
    },
    {
      header: ["Employment"],
      subsections: [
        {
          header: [
            "Richmond, VA (Remote)",
            "Genworth",
            "Platform Engineer",
            "July 2020 - Present"
          ],
          bullets: [
            "Migration of on-prem Gitlab omnibus install to a Kubernetes Cluster deployment",
            "setup dynamic storage provisioning on NFS volumes, setup various Airflows DAGs",
            "Setup Microsoft ADCS Issuer to work with Cert-Manager through a non-maintained open-source 3rd-party application to enable the first automated certificate generation and distribution, reducing human overhead and manual downtime during rotation of certificates",
            "Enhancements done to front facing website using Java (Spring), and AngularJS 1.0",
            "Developed Automated CI/CD deployment pipelines using Gitlab and integration with CyberArk, ServiceNow, Informatica/Powercenter, Oracle, and Greenplum DB using Python and Bash scripts speeding up deployments by 180% and reducing human merge errors by 85%",
            "Migration of on-prem single node Gitlab install to a distributed Kubernetes Cluster using Helm to employ disaster recovery methods, and increase both fault tolerance, scalability by a scale of 3",
            "Built, deployed, and administered various rancher Kubernetes clusters with dynamic storage provisioning on NFS volumes, cert-manager, grafana, and prometheus, alongside Nginx and traefik with ssl termination via F5",
            "Mentored and led 2 interns and 1 Engineer in current processes and administration techniques of systems, and deploy Metaflow to Airflow with K8s backend",
            "Added system and application performance metrics using OpenTelemetry, Prometheus, including designs and visualizations in Grafana"
          ]
        },
      ]
    },
    {
      header: ["Education"],
      subsections: [
        {
          header: [
            // "Richmond, VA",
            "Master of Science",
            " Virginia Commonwealth University",
            "Spring 2020 - Spring 2022"
          ],
          bullets: [
            "Major in Data Science and Machine Learning",
          ]
        },
        {
          header: [
            // "Richmond, VA",
            "Bachelor of Science",
            "Virginia Commonwealth University",
            "Fall 2016 - Spring 2020"
          ],
          bullets: [
            "Major in Computer Science with a Concentration in Cybersecurity",
            "Minor in Mathematics",
          ]
        }
      ]
    },
    {
      header: ["Certifications"],
      subsections: [
        {
          decorators: {
            url: "https://www.credly.com/badges/da70215b-03fe-4a90-9318-deea341bfa41/public_url"
          },
          header: [
            "HashiCorp Terraform Associates (003)",
            "April 2023 - April 2025"
          ],
        },
        {
          decorators: {
            url: "https://www.credly.com/badges/cc45d60f-5843-46e6-8521-fb548e07ff42"
          },
          header: [
            "AWS Solutions Architect - Associate",
            "January 2021 - January 2024"
          ],
        },
        {
          decorators: {
            url: "https://courses.edx.org/certificates/243487c8a7cf4b3aa4737f0c9826ff9c"
          },
          header: [
            "Databases: Advanced Topics in SQL",
            "July 2020"
          ],
        }
      ]
    },
    {
      header: ["Prominent Projects"],
      subsections: [
        {
          decorators: {
            icon: "gitlab",
            url: " https://www.youtube.com/watch?v=7Pm8kUGsIBo&list=PLFGfElNsQthbvvLUpPd5uNXbLb6B_6D2w&index=6&t=1s"
          },
          header: ["Gitlab Commit DevOps Presenter", "2021"],
          bullets: [
            "Gave a presentation regarding the process and challenges of a migration of Gitlab from an on-prem state to within a Kubernetes cluster"
          ]
        },
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
      header: ["Leadership"],
      subsections: [
        {
          header: ["Vice President of RamDev", "Fall 2018 - Spring 2020"],
          bullets: [
            "Organize weekly tech-talks by companies and students discussing real world applications",
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
            "Summer 2020 - Spring 2022"
          ],
          bullets: [
            "~Help the department choose new faculty members",
            "~Help out with events, such as local hack day, for prospective and current computer science students"
          ]
        },
        {
          header: ["Vice President of Linux Users Group Club", "Fall 2018 - Spring 2020"], 
          bullets: [
            "Organize weekly meetings to discuss and present various topics within the Linux community",
            "contribute to the development and discussion of open-source Linux projects"
          ]
        },
        {
          header: ["Google Student Developer Lead", "Fall 2019 - Spring 2020"],
          bullets: [
            "Manage a student developer club including monthly workshops on Google Cloud"
          ]
        },
        {
          header: ["FormulaSAE", "Fall 2018 - Spring 2020"],
          bullets: [
            "Design and build a formula race car from scratch to compete in annual competition"
          ]
        },
        {
          header: ["American Sign Language(ASL) Club", "Fall 2019 - Spring 2022"],
          bullets: [
            "Learn American Sign Language and Deaf culture in an open hands-on (pun intended) environment"
          ]
        },
      ]
    },
  ];
}
