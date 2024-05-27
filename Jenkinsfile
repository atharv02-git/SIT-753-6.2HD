pipeline{
    agent any

    tools {
        maven 'Maven 3.9.6'
        jdk 'JDK 11'
        // SonarQube Scanner tool configuration
        sonarqubeScanner 'SonarQube Scanner'
    }

    environment {
        // SONARQUBE_SCANNER_HOME = tool name: 'SonarQube Scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
        SONARQUBE_SCANNER_HOME = tool name: 'SonarQube Scanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
    }

    stages {
        // stage checkout
        stage('Checkout') {
            steps {
                git url: 'https://github.com/atharv02-git/SIT-753-6.2HD.git', branch: 'main'
            }
        }
        // Build Stage
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'mvn clean install'
            }
        }
        // Test stage
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'mvn test'
            }
        }
        // Code quality Analysing
        stage('Code Quality Analysis') {
            steps {
                echo 'Analyzing Code Quality...'
                withSonarQubeEnv('SonarQube') {
                    sh "${env.SONARQUBE_SCANNER_HOME}/bin/sonar-scanner"
                }
            }
        }
        // Stage Deploy
        stage('Deploy'){
            steps {
                echo 'Deploying...'
                sh 'scp target/your-webapp.war user@server:/path/to/deploy/'
            }
        }
        // Stage Release
        stage('Release') {
            steps {
                echo 'Releasing...'
                sh 'git tag -a v1.0 -m "Release version 1.0"'
                sh 'git push origin --tags'
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully!'
            // Send notifications or perform other actions on success
        }
        failure {
            echo 'Pipeline failed!'
            // Send notifications or perform other actions on failure
        }
    }
}