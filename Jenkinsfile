pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('Start') {
            steps {
                echo 'Build is starting'
            }
        }
        stage('Clone github repository') {
            steps {
                git url: 'https://github.com/CarltonK/expresswithnodejs.git', branch: 'main'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('End') {
            steps {
                echo 'Build is finished'
            }
        }
    }
}
