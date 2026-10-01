pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo 'Building DevOps Academy Website...'
                bat 'dir'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing DevOps Academy Website...'
                bat 'echo Website files are present'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t devops-academy .'
            }
        }

    }
}