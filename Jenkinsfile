pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'elonerajeev/infra-app:latest'
        DOCKER_CREDENTIALS_ID = 'dockerhub-creds'  // Jenkins credentials ID
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE -f app/Dockerfile.prod ./app'
                }
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${env.DOCKER_CREDENTIALS_ID}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh 'docker push $DOCKER_IMAGE'
            }
        }
    }

    post {
        success {
            echo '✅ Docker image pushed successfully!'
        }
        failure {
            echo '❌ Build or push failed!'
        }
    }
}
