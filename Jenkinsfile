pipeline {
    agent any
    environment {
        IMAGE_NAME = "docker-avance-app"
        DOCKERHUB_USERNAME = "pmaldi"
    }
    stages {
        stage('Prepare') {
            steps {
                echo 'Prepare'
                sh "whoami"
                git credentialsId: 'GitHub', url: 'https://github.com/O-clock-Hati/docker-avance-app-pmaldi'
                // Nous pouvons également utiliser la commande sh pour faire ce clone.
                // sh "git clone .."
            }
        }
        stage('Build') {
            steps {
                echo 'Build'
                sh "docker build -t ${DOCKERHUB_USERNAME}/${IMAGE_NAME}:${BUILD_NUMBER} -f Dockerfile.prod ."
                sh "docker images"
            }
        }
        stage('Test') {
            steps {
                echo 'Test'
                sh "docker inspect ${DOCKERHUB_USERNAME}/${IMAGE_NAME}:${BUILD_NUMBER}"
            }
        }
        stage('Publish') {
            steps {
                echo 'Publish'
                withCredentials([usernamePassword(credentialsId: 'DockerHub', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_EMAIL')]) {
                    sh "echo $DOCKERHUB_PASSWORD | docker login --username $DOCKERHUB_EMAIL --password-stdin"
                    sh "docker push ${DOCKERHUB_USERNAME}/${IMAGE_NAME}:${BUILD_NUMBER}"
                }
            }
        }
    }
}
