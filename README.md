                          +-------------------------+
                          |      GitHub Repo        |
                          |  (Code + Terraform)     |
                          +-----------+-------------+
                                      |
                                      v
                        +------------------------------+
                        |     GitHub Actions CI/CD     |
                        |   (.github/workflows/...)    |
                        +------------------------------+
                          |         |
        +----------------+         +--------------------------+
        |                                          |
        v                                          v
+-------------------+                    +--------------------------+
| Build Docker Image|                    |   Terraform Infra Deploy |
| from ./app folder |                    | (optional - later stage) |
+-------------------+                    +--------------------------+
        |
        v
+-----------------------------+
| Push Image to Docker Hub   |
| elonerajeev/infra-app:latest|
+-----------------------------+
        |
        v
+--------------------------+
| Jenkins CI/CD (Optional)|
| (Jenkinsfile based)     |
+--------------------------+
        |
        v
+--------------------------+
| Deploy Docker Image     |
| to AWS EC2 (manually or |
|  via Terraform userdata)|
+--------------------------+
        |
        v
+--------------------------+
| App Running on AWS EC2  |
| with Prometheus + Grafana|
+--------------------------+




---------------------------------------------------------------------------

Git Push → GitHub Actions (or Jenkins) → Docker Build + Push
                     ↓
             Terraform Apply (Infra)
                     ↓
           EC2 pulls Docker image → Runs Container
                     ↓
       Monitored by Prometheus + Grafana
