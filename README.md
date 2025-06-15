# 🚀 Enterprise-Grade Infrastructure Automation with Terraform + AWS

A production-ready DevOps project designed to automate the provisioning, deployment, and monitoring of a Dockerized Node.js application using **Terraform**, **AWS**, and **CI/CD** pipelines.

---

## 🎯 Objective

To simulate a real-world enterprise-level infrastructure by:

- Automating infrastructure provisioning using **Terraform**
- Dockerizing a Node.js application
- Implementing modern **CI/CD pipelines**
- Enabling **GitOps workflows**
- Deploying on **AWS EC2**
- Monitoring via **Prometheus + Grafana**
- Optimizing for cost using best practices

---

## 🔧 Technologies & Tools

| Category             | Tools/Technologies |
|----------------------|--------------------|
| 🧱 Infrastructure     | Terraform, AWS (EC2, VPC, ALB, IAM, S3, RDS, CloudWatch, Route 53) |
| 🐳 Containerization   | Docker, DockerHub |
| 🔁 CI/CD             | GitHub Actions, Jenkins (coming soon) |
| 🔒 Secrets Management | AWS Secrets Manager / HashiCorp Vault (planned) |
| 📈 Monitoring         | Prometheus + Grafana (planned) |
| ⚙ Automation & GitOps| GitHub Actions + Terraform |

---

## ✅ Work Completed So Far

### 1. 📦 Application Layer

- Built a Node.js app (Express + Views + Public)
- Healthcheck implemented (`healthcheck.js`)
- Configured `Dockerfile.dev` and `Dockerfile.prod`
- Created `.env`, `.dockerignore`, `.gitignore`

### 2. 🐳 Dockerization

- Dockerized app using `Dockerfile.prod`
- Tested image locally

### 3. 🔁 CI/CD Pipeline (GitHub Actions)

- Configured GitHub Actions workflow:
  - ✅ Auto-build Docker image on push to `main`
  - ✅ Push image to Docker Hub [`elonerajeev/infra-app:latest`](https://hub.docker.com/r/elonerajeev/infra-app)
- Secrets securely added: `DOCKER_USERNAME`, `DOCKER_PASSWORD`

---

## 🛠️ Current Repository Structure

```

Enterprise-Grade-Infrastructure-Automation-with-Terraform-AWS/
│
├── app/                    # Node.js Application
│   ├── views/
│   ├── public/
│   ├── Dockerfile.dev
│   ├── Dockerfile.prod
│   ├── index.js
│   ├── healthcheck.js
│   ├── package.json
│   └── .env
│
├── .github/
│   └── workflows/
│       └── docker-deploy.yml   # CI/CD pipeline
│
├── terraform/               # (Planned)
│   ├── ec2.tf
│   ├── vpc.tf
│   ├── provider.tf
│   ├── variables.tf
│   └── backend.tf
│
├── Jenkinsfile              # (Planned)
├── prometheus/              # (Planned)
├── grafana/                 # (Planned)
└── README.md

```

---

## 🚧 Next Steps (Planned)

### 🔹 Infrastructure as Code (IaC)
- [ ] Provision VPC, EC2, ALB, IAM Roles using Terraform
- [ ] Configure Terraform backend using S3 + DynamoDB (state lock)
- [ ] Enable auto-deploy via EC2 user data or SSH

### 🔹 Jenkins CI/CD
- [ ] Create and test Jenkins pipeline (`Jenkinsfile`)
- [ ] Mirror GitHub Actions steps in Jenkins

### 🔹 Deployment
- [ ] SSH or Terraform remote-exec to EC2
- [ ] Pull & run Docker image (`elonerajeev/infra-app`)

### 🔹 Monitoring
- [ ] Set up Prometheus for metrics scraping
- [ ] Create Grafana dashboards
- [ ] Add basic alerting (disk usage, CPU, etc.)

### 🔹 Cost Optimization
- [ ] Use free-tier AWS resources
- [ ] Turn off EC2 when not in use (via script or manually)
- [ ] Use `t2.micro`, `gp2`, and S3 Standard IA

---

## 📸 Screenshots (Coming Soon)

- CI/CD build success
- DockerHub pushed image
- Terraform infrastructure plan
- Prometheus + Grafana dashboards

---

## 👨‍💻 Author

**Rajeev Kumar**  
DevOps & Cloud Enthusiast | Full-Stack Developer  
[GitHub](https://github.com/elonerajeev) | [LinkedIn](https://linkedin.com/in/rajeev-kumar-2209b1243)

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).


NEXT/nNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXTNEXT
NEXT
NEXT
NEXT
NEXT
































# 🚀 Enterprise-Grade Infrastructure Automation with Terraform + AWS

![Project Status](https://img.shields.io/badge/status-In_Progress-yellow)
![CI/CD](https://img.shields.io/github/actions/workflow/status/elonerajeev/Enterprise-Grade-Infrastructure-Automation-with-Terraform-AWS/build-and-deploy.yml)
![Terraform](https://img.shields.io/badge/IaC-Terraform-5e43f3?logo=terraform)
![AWS](https://img.shields.io/badge/Cloud-AWS-orange?logo=amazonaws)
![Docker](https://img.shields.io/badge/Containerized-Docker-blue?logo=docker)

---

## 📌 Project Overview

**Enterprise-Grade Infrastructure Automation** is a DevOps project where I automated the provisioning, deployment, and scalability of a full-stack Dockerized web application using **Terraform**, **AWS**, **Docker**, and **CI/CD with GitHub Actions**.

The main goal is to simulate a **production-grade cloud infrastructure** setup using best practices like Infrastructure-as-Code (IaC), automated builds, secure credential handling, and scalable cloud-native architecture.

---

## 🧰 Technologies & Tools Used

| Layer             | Tools & Services |
|------------------|------------------|
| **Cloud Provider** | AWS (EC2, VPC, ALB, IAM) |
| **IaC**           | Terraform (modular structure) |
| **Compute**       | Dockerized Node.js App on EC2 |
| **CI/CD**         | GitHub Actions |
| **Networking**    | VPC, Public Subnets, Internet Gateway |
| **Security**      | IAM Roles, Security Groups, GitHub Secrets |
| **Monitoring (Planned)** | Prometheus, Grafana |
| **Secrets Mgmt (Planned)** | AWS Secrets Manager / Vault |

---

## ⚙️ Architecture Diagram

```

\[Developer Code Push]
|
▼
\[GitHub Repository]
|
▼ (Trigger on Push)
\[GitHub Actions CI/CD]
|
├── Build Docker Image
├── Push to DockerHub
└── SSH into EC2 → Pull + Restart Container
▼
\[EC2 Instance]
|
▼
\[Dockerized Web App]
|
▼
Accessible via:

* EC2 Public IP
* (Optionally via ALB DNS / Domain)

```

---

## 🔨 Project Structure

```

terraform/
├── environments/
│   └── dev/
│       ├── main.tf
│       ├── variables.tf
│       ├── output.tf
├── modules/
│   ├── vpc/
│   ├── ec2/
│   ├── alb/
│   └── iam/
.github/
└── workflows/
└── build-and-deploy.yml

````

---

## ✅ Features Implemented

| Feature | Description |
|--------|-------------|
| ✅ Terraform Modules | Clean, reusable modules for VPC, EC2, ALB, IAM |
| ✅ Dockerized App | Full-stack app containerized using Docker |
| ✅ CI/CD Pipeline | GitHub Actions builds Docker image & deploys to EC2 |
| ✅ ALB Setup | Application Load Balancer with public subnets |
| ✅ Modular IaC | Separate folders for environments and modules |
| ✅ SSH-Based Deployment | GitHub Actions SSHs into EC2 to deploy app |

---

## 📌 Implementation Steps

### 🧱 1. Modular Terraform Infrastructure
- Created separate modules for each AWS resource (VPC, EC2, IAM, ALB).
- Used environment-specific `main.tf` in `environments/dev/`.
- Output variables passed between modules using `output.tf`.

### 🌐 2. VPC and Networking
- Defined custom VPC with:
  - Public subnets in 2 AZs
  - Internet Gateway + Route Tables
  - Security groups for EC2 and ALB

### 💻 3. EC2 + Docker
- Deployed a Dockerized Node.js app to EC2.
- Opened necessary ports for HTTP access (port 80).
- Mounted Docker volumes for persistence.

### 🚀 4. CI/CD with GitHub Actions
- On every push to `main`, the pipeline:
  1. Builds a new Docker image
  2. Pushes it to Docker Hub (`elonerajeev`)
  3. SSHs into EC2 and pulls the latest image
  4. Restarts the container

### 🛡️ 5. Secrets Handling
- Stored DockerHub credentials, SSH key, and EC2 IP as GitHub Secrets:
  - `DOCKERHUB_USERNAME`
  - `DOCKERHUB_PASSWORD`
  - `EC2_SSH_PRIVATE_KEY`
  - `EC2_HOST`

---

## ⚠️ Challenges Faced & Solutions

| Issue | Solution |
|------|----------|
| `vpc_id` missing in EC2 module | Passed output from `vpc` module correctly |
| ALB error (subnets) | Ensured at least two subnets in different AZs |
| EC2 + Subnet mismatch | Used public subnet matching VPC |
| DockerHub Login Fail | Fixed GitHub Secrets injection |
| Terraform Output Error | Defined `output.tf` in ALB module correctly |

---

## 🚧 What’s Next (Future Enhancements)

| 🔄 Feature | Status |
|-----------|--------|
| Auto-Pull Docker Image on EC2 using Watchtower | ⏳ Pending |
| HTTPS Setup (via ACM & ALB or NGINX reverse proxy) | ⏳ Pending |
| Route53 Domain Mapping | ⏳ Pending |
| Prometheus + Grafana Monitoring | ⏳ Pending |
| GitOps with ArgoCD or Helm | ⏳ Planned |
| Use AWS Secrets Manager instead of GitHub | ⏳ Planned |
| Switch EC2 to Fargate for Serverless Containers | ⏳ Optional |

---

## 🔍 How to Run This Project (Dev Environment)

1. **Clone the repo**
```bash
git clone https://github.com/elonerajeev/Enterprise-Grade-Infrastructure-Automation-with-Terraform-AWS.git
cd terraform/environments/dev
````

2. **Initialize & Apply Terraform**

```bash
terraform init
terraform plan
terraform apply
```

3. **Push Your Code**

* Any change in `main` triggers GitHub Actions → builds image → pushes to DockerHub → deploys to EC2.

---

## 🔗 Live Preview / EC2

🌐 [http://13.235.134.66](http://13.235.134.66)

*(Note: Might not be publicly available depending on current infra state)*

---

## 👨‍💻 Author

**Rajeev Kumar (aka Elone.rajeev)**
🚀 AWS DevOps Engineer | Full Stack Developer
🔗 [Portfolio](https://rajeevxportfolio.netlify.app)
🔗 [GitHub](https://github.com/elonerajeev)
🔗 [LinkedIn](https://linkedin.com/in/rajeev-kumar-2209b1243)

---

## 📌 License

MIT License

---

## ⭐️ If you like this project, give it a star!

```bash
⭐ git clone && ⭐ star the repo
```

---

```

---

## ✅ What To Do Next
You can:

- ✅ Add this `README.md` to your GitHub project
- ✅ Include project screenshots, architecture diagram, and Action logs as images (let me know if you want me to generate visuals)
- ✅ Share this on LinkedIn with a case study-style post
- 🔜 Continue with **Monitoring (Prometheus + Grafana)** setup on EC2 or Docker Compose

Would you like help with:
- Generating visual diagrams?
- Writing LinkedIn post format?
- Starting Monitoring setup?

Let me know and we’ll move forward step-by-step 👇
```
