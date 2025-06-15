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

```

---

---------------------------------------------------------------------------

Git Push → GitHub Actions (or Jenkins) → Docker Build + Push
                     ↓
             Terraform Apply (Infra)
                     ↓
           EC2 pulls Docker image → Runs Container
                     ↓
       Monitored by Prometheus + Grafana
