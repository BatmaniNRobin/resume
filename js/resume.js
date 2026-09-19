function viewModel() {
  this.firstName = "Mohammad";
  this.lastName = "Malik";
  this.fullName = this.firstName + " " + this.lastName;

  this.phone = "703-945-6668";
  this.email = "imalikmu@gmail.com";
  this.github = "https://github.com/batmaninrobin";
  this.website = "https://mani-malik.xyz";
  this.clearance = "Active TS/SCI";
  this.linkedin = "https://linkedin.com/in/mani-malik";

  this.sections = [
    {
      header: ["Skills"],
      subsections: [
        {
          list: [
            "Kubernetes",
            "Helm",
            "Docker",
            "Python",
            "Bash",
            "Terraform",
            "Ansible",
            "LLMs",
            "RAG",
            "Artificial Intelligence/AI",
            "Machine Learning/ML",
            "Deep Learning/DL",
            "langchain",
            "Natural Language Processing/NLP",
            "C/C++",
            "Java",
            
            
            "CUDA",
            "GCP",
            "Grafana",
            "Prometheus",
            "AWS",
            "MacOS",
            "Linux",
            "Zsh",
            "HTML/CSS",
            "ServiceNow",
            "Jira",
            // "React",
            // "Angular",
            "SQL",
            // "Android",
          ]
        }
      ]
    },
    {
      header: ["Employment"],
      subsections: [
        {
          header: [
            "Booz Allen Hamilton",
            "Machine Learning Operations Engineer",
            "July 2023 - Present"
          ],
          bullets: [
            "Sole administrator of the AWS environment for a 10-person team, covering IAM policy and user management, DNS (Route 53), and day-to-day operations.",
            "Led a 12+ month migration of an ML platform from a legacy environment to a new hardened AWS GovCloud environment, serving hundreds of developers and dozens of applications. Stood up interim dev, stage, and prod Kubernetes clusters with Terraform and Ansible so the AI team could keep building while the primary environment was still being built.",
            "Ran the GitOps cluster platform across 3 clusters and two compliance tiers using Flux and ArgoCD, including Istio, NGINX and AWS Load Balancer Controller ingress, Kyverno policy enforcement, cert-manager, Vault for secrets, and Prometheus/Loki/Grafana for monitoring and logging.",
            "Deployed LiteLLM and OpenWebUI as the gateway and interface for AWS Bedrock models and the internal ML platform, and operationalized LLM agents with LangChain and AWS Knowledge Bases (RAG).",
            "Migrated a production Postfix mail relay from a standalone server to a containerized Kubernetes deployment in 3 days with zero downtime.",
            "Implemented centralized SSO with Keycloak (OAuth) across OpenWebUI, an internal ML platform, and a proprietary application.",
            "Maintained continuous vulnerability management for dozens of applications: CI/CD pipelines (GitLab, Jenkins) with SAST/DAST, SonarQube, and image scanning (Trivy, Grype, Anchore), plus ongoing CVE triage and remediation. Automated the MLOps test suite, cutting test time from 2 days to a few hours.",
            "Integrated the Adversarial Robustness Toolbox into model-build pipelines and built a local development kit for analytic work. Earlier, worked to get LLMs running on the platform using MCP Servers and RAG using tools like LangChain.",
          ]
        },
        {
          header: [
            // "Richmond, VA (Remote)",
            "Genworth",
            "Platform Engineer",
            "July 2020 - July 2023"
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
            url: "https://www.credly.com/badges/7a6ac371-a4f1-4b8f-ae1a-b704343d1051/public_url"
          },
          header: [
            "Certified Kubernetes Administrator (CKA)",
            "October 2023 - October 2026"
          ],
        },
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
            url: "https://www.credly.com/badges/cc45d60f-5843-46e6-8521-fb548e07ff42/public_url"
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
            url: "https://www.mani-malik.xyz/blog"
          },
          header: ["Homelab | mani-malik.xyz/blog"],
          bullets: [
            "Run a Proxmox virtualization host with each service in its own LXC container, plus a Docker Compose media stack. Fronted by a Caddy reverse proxy with automatic TLS via Cloudflare DNS-01, and reachable only over Tailscale with no public exposure. Blogs on portfolio."
          ]
        },
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
