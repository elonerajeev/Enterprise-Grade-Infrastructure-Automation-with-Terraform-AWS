# 🚀 Enterprise-Grade Infrastructure Automation with Terraform + AWS

<div align="center">

![Project Banner](https://img.shields.io/badge/DevOps-Enterprise%20Grade-blue?style=for-the-badge&logo=amazon-aws)
![Build Status](https://img.shields.io/github/actions/workflow/status/elonerajeev/Enterprise-Grade-Infrastructure-Automation-with-Terraform-AWS/build-and-deploy.yml?style=for-the-badge&logo=github-actions)
![Terraform](https://img.shields.io/badge/IaC-Terraform-623CE4?style=for-the-badge&logo=terraform)
![AWS](https://img.shields.io/badge/Cloud-AWS-FF9900?style=for-the-badge&logo=amazon-aws)
![Docker](https://img.shields.io/badge/Container-Docker-2496ED?style=for-the-badge&logo=docker)

**Production-ready DevOps infrastructure automation showcasing modern cloud-native practices**

[🔥 Live Demo](http://13.235.134.66) • [📖 Documentation](#-table-of-contents) • [🛠️ Getting Started](#-quick-start) • [💼 Portfolio](https://rajeevxportfolio.netlify.app)

</div>

---

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [🏗️ Architecture](#️-architecture)
- [🧰 Technology Stack](#-technology-stack)
- [✨ Key Features](#-key-features)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🔄 CI/CD Pipeline](#-cicd-pipeline)
- [💡 Implementation Highlights](#-implementation-highlights)
- [🎯 Challenges & Solutions](#-challenges--solutions)
- [📈 Monitoring & Observability](#-monitoring--observability)
- [🔮 Future Roadmap](#-future-roadmap)
- [🤝 Contributing](#-contributing)
- [👨‍💻 Author](#-author)
- [📄 License](#-license)

---

## 🎯 Project Overview

This project demonstrates **enterprise-grade infrastructure automation** by building a complete DevOps pipeline that provisions, deploys, and manages a containerized Node.js application on AWS using modern Infrastructure-as-Code (IaC) practices.

### 🎪 What Makes This Special?

- **🔄 Fully Automated**: Zero-touch deployment from code commit to production
- **🏗️ Modular Infrastructure**: Reusable Terraform modules for scalability
- **🛡️ Security First**: IAM roles, security groups, and secrets management
- **📊 Production Ready**: Application Load Balancer, health checks, and monitoring
- **💰 Cost Optimized**: Efficient resource utilization with AWS free tier

---

## 🏗️ Architecture


<img src="https://imgr.whimsical.com/thumbnails/XMZSXzYJ7443sRN729jit2/EMJaQZzfNkFnVYmpUYhXTg" alt="A beautiful landscape" width="600" height="600" align="center">


---

## 🧰 Technology Stack

<div align="center">

| **Category** | **Technologies** |
|--------------|------------------|
| **☁️ Cloud Platform** | AWS (EC2, VPC, ALB, IAM, Route 53) |
| **🏗️ Infrastructure as Code** | Terraform (Modular Architecture) |
| **🐳 Containerization** | Docker, DockerHub Registry |
| **🔄 CI/CD Pipeline** | GitHub Actions, Automated Workflows, Jenkins |
| **🌐 Application** | Node.js, Express.js, RESTful APIs |
| **🔒 Security** | IAM Roles, Security Groups, SSH Keys |
| **📊 Monitoring** | Prometheus, Grafana, AWS CloudWatch  |
| **🔐 Secrets Management** | GitHub Secrets, AWS Secrets Manager |

</div>

---

## ✨ Key Features

### 🎯 Infrastructure Automation
- **🧩 Modular Terraform Design**: Separate modules for VPC, EC2, ALB, and IAM, Others
- **🌍 Multi-Environment Support**: Dev, staging, and production configurations
- **🔄 State Management**: Remote state storage with S3 backend and DynamoDB locking

### 🚀 Deployment Pipeline
- **⚡ Automated Builds**: Trigger on every commit to main branch
- **🐳 Container Registry**: Automated push to DockerHub
- **📡 Remote Deployment**: SSH-based deployment to EC2 instances
- **🔍 Health Monitoring**: Application health checks and status monitoring

### 🛡️ Security & Best Practices
- **🔐 Secrets Management**: Secure handling of credentials and API keys
- **🌐 Network Security**: Custom VPC with public/private subnet architecture
- **🚪 Access Control**: IAM roles and security groups with least privilege
- **🔒 SSH Hardening**: Key-based authentication and secure connections

---

## 🚀 Quick Start

### Prerequisites
```bash
# Required tools
aws --version          # AWS CLI
terraform --version    # Terraform >= 1.0
docker --version       # Docker
git --version         # Git
```

### 1️⃣ Clone & Setup
```bash
git clone https://github.com/elonerajeev/Enterprise-Grade-Infrastructure-Automation-with-Terraform-AWS.git
cd Enterprise-Grade-Infrastructure-Automation-with-Terraform-AWS
cd terraform/environments/dev
```

### 2️⃣ Configure AWS Credentials
```bash
aws configure
# Enter your AWS Access Key ID, Secret Access Key, and preferred region
```

### 3️⃣ Initialize Terraform
```bash
terraform init
terraform plan
terraform apply -auto-approve
```

### 4️⃣ Deploy Application
```bash
# Push to main branch triggers automatic deployment
# In Root Directory 
git add .
git commit -m "feat: deploy application"
git push origin main
```

---

## 📁 Project Structure

```
📦 Enterprise-Grade-Infrastructure-Automation/
├── 🏗️ terraform/
│   ├── 🌍 environments/
│   │   └── dev/
│   │       ├── main.tf              # Main configuration
│   │       ├── variables.tf         # Input variables
│   │       ├── outputs.tf           # Output values
│   │       └── terraform.tfvars     # Variable values
│   └── 📚 modules/
│       ├── vpc/                     # VPC module
│       ├── ec2/                     # EC2 module
│       ├── alb/                     # Load balancer module
│       └── iam/                     # IAM roles module
├── 🐳 app/
│   ├── src/                         # Application source
│   ├── Dockerfile.prod              # Production dockerfile
│   ├── package.json                 # Dependencies
│   └── healthcheck.js               # Health endpoint
├── 🔄 .github/
│   └── workflows/
│       └── build-and-push.yml       # CI pipeline
|       |__ deploy-to-ec2.yml        # CD Pipeline 
├── 📊 monitoring/                   # Monitoring configs
├── 🔒 secrets/                      # Secret templates
└── 📖 docs/                         # Documentation
```

---

## 🔄 CI/CD Pipeline

### Workflow Overview In Short (Not Complete Script)
```yaml
name: Build and Deploy to AWS EC2 

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: 📥 Checkout Code
      - name: 🐳 Build Docker Image
      - name: 📤 Push to DockerHub
      - name: 🚀 Deploy to EC2
```

### Pipeline Stages

| **Stage** | **Action** | **Status** |
|-----------|------------|------------|
| 🔍 **Code Analysis** | Lint and security scan | ✅ Active |
| 🏗️ **Build** | Docker image creation | ✅ Active |
| 🧪 **Test** | Unit and integration tests | ✅ Active |
| 📤 **Publish** | Push to DockerHub registry | ✅ Active |
| 🚀 **Deploy** | SSH deployment to EC2 | ✅ Active |
| ✅ **Verify** | Health check validation | ✅ Active |

---

## 💡 Implementation Highlights

### 🏗️ Modular Terraform Architecture
```hcl
# Example: VPC Module Usage
module "vpc" {
  source = "../../modules/vpc"
  
  vpc_cidr             = var.vpc_cidr
  availability_zones   = var.availability_zones
  public_subnet_cidrs  = var.public_subnet_cidrs
  
  tags = local.common_tags
}
```

### 🐳 Optimized Docker Configuration
```dockerfile
# Multi-stage build for production
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

FROM node:18-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
```

### 🔄 Automated Deployment Script
```bash
#!/bin/bash
# Deployed via GitHub Actions
docker pull elonerajeev/infra-app:latest
docker stop app-container || true
docker run -d --name app-container -p 80:3000 elonerajeev/infra-app:latest
```

---

## 🎯 Challenges & Solutions

<details>
<summary><strong>🔧 Infrastructure Challenges</strong></summary>

| **Challenge** | **Solution** | **Impact** |
|---------------|--------------|------------|
| VPC Module Dependencies | Implemented proper output references | ✅ Resolved |
| ALB Subnet Requirements | Configured multi-AZ public subnets | ⚡ Performance |
| State File Conflicts | S3 backend with DynamoDB locking | 🔒 Consistency |
| Security Group Rules | Least privilege access principles | 🛡️ Security |

</details>

<details>
<summary><strong>🚀 Deployment Challenges</strong></summary>

| **Challenge** | **Solution** | **Impact** |
|---------------|--------------|------------|
| SSH Key Management | GitHub Secrets integration | 🔐 Security |
| Docker Registry Auth | Automated token refresh | 🔄 Reliability |
| Zero-Downtime Deployment | Blue-green deployment strategy | ⚡ Availability |
| Container Health Checks | Custom health endpoint | 📊 Monitoring |

</details>

---

## 📈 Monitoring & Observability

### Current Implementation
```bash
# Health Check Endpoint
GET /health
Response: {
  "status": "ok",
  "uptime": 198.4880768,
  "memory": {
    "rss": 43302912,
    "heapTotal": 9469952,
    "heapUsed": 8140056,
    "external": 2187267,
    "arrayBuffers": 17742
  },
  "timestamp": "2025-06-16T06:49:40.055Z"
}

# Application Metrics
GET /metrics
Response: Prometheus-formatted metrics
```

### Planned Monitoring Stack
- **📊 Prometheus**: Metrics collection and alerting
- **📈 Grafana**: Visualization dashboards
- **🔍 AWS CloudWatch**: Infrastructure monitoring
- **📱 Slack Integration**: Alert notifications

---

## 🔮 Future Roadmap

### Phase 1: Enhanced Monitoring 🎯
- [ ] Prometheus + Grafana setup
- [ ] Custom application metrics
- [ ] Alerting rules configuration
- [ ] Performance dashboards

### Phase 2: Security Hardening 🔒
- [ ] AWS Secrets Manager integration
- [ ] SSL/TLS certificate automation
- [ ] Security scanning pipeline
- [ ] Compliance reporting

### Phase 3: Scalability & Performance ⚡
- [ ] Auto Scaling Groups
- [ ] Multi-region deployment
- [ ] CDN integration
- [ ] Database clustering

### Phase 4: Advanced DevOps 🚀
- [ ] GitOps with ArgoCD
- [ ] Kubernetes migration
- [ ] Service mesh implementation
- [ ] Chaos engineering

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### 🛠️ Development Setup
```bash
# Fork the repository
git clone https://github.com/elonerajeev/Enterprise-Grade-Infrastructure-Automation-with-Terraform-AWS.git

# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and test
terraform plan
docker build -t test-image .

# Submit pull request
git push origin feature/your-feature-name
```
## 👨‍💻 Author : elonerajeev

<div align="center">

<img src="https://avatars.githubusercontent.com/u/elonerajeev" width="100" height="100" style="border-radius: 50%;">

**Rajeev Kumar**  
*AWS DevOps Engineer & Cloud Architect*

[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://rajeevxportfolio.netlify.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/rajeev-kumar-2209b1243)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/elonerajeev)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:elonerajeev@gmail.com)

*"Building scalable cloud infrastructure with modern DevOps practices"*

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - Feel free to use this project for learning and development!
```

---

<div align="center">

### 🌟 If you found this project helpful, please give it a star!

[![GitHub stars](https://img.shields.io/github/stars/elonerajeev/Enterprise-Grade-Infrastructure-Automation-with-Terraform-AWS?style=social)](https://github.com/elonerajeev/Enterprise-Grade-Infrastructure-Automation-with-Terraform-AWS/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/elonerajeev/Enterprise-Grade-Infrastructure-Automation-with-Terraform-AWS?style=social)](https://github.com/elonerajeev/Enterprise-Grade-Infrastructure-Automation-with-Terraform-AWS/network/members)

**Made with ❤️ and ☕ by Rajeev Kumar**

---


</div>
