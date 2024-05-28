pipeline {
    agent any

    environment {
        // Define environment variables here if needed
        NODE_VERSION = '14'
    }

    tools {
        nodejs "${NODE_VERSION}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone the repository
                git branch: 'main', url: 'https://github.com/atharv02-git/SIT-753-6.2HD.git'
            }
        }

        stage('Build') {
            steps {
                // Build the Node.js application
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                // Run tests
                bat 'npm test'
            }
        }

        stage('Code Quality Analysis') {
            steps {
                // Run SonarQube analysis
                withSonarQubeEnv('SonarQube') {
                    bat 'sonar-scanner -Dsonar.projectKey=my-nodejs-app -Dsonar.sources=. -Dsonar.host.url=http://your-sonarqube-server:9000'
                }
            }
        }

        stage('Deploy to Staging') {
            steps {
                // Deploy to a staging environment
                bat '''
                powershell -Command "Copy-Item -Recurse -Force * \\\\your-staging-server\\path\\to\\deployment\\dir"
                powershell -Command "Invoke-Command -ComputerName your-staging-server -ScriptBlock { cd C:\\path\\to\\deployment\\dir; npm install --production; pm2 restart all }"
                '''
            }
        }

        stage('Release to Production') {
            steps {
                // Deploy to production
                bat '''
                powershell -Command "Copy-Item -Recurse -Force * \\\\your-production-server\\path\\to\\deployment\\dir"
                powershell -Command "Invoke-Command -ComputerName your-production-server -ScriptBlock { cd C:\\path\\to\\deployment\\dir; npm install --production; pm2 restart all }"
                '''
            }
        }

        stage('Monitoring and Alerting') {
            steps {
                // Configure monitoring and alerting
                echo 'Monitoring setup (e.g., Datadog, New Relic)'
                // Placeholder for actual monitoring setup
            }
        }
    }

    post {
        always {
            // Clean up actions
            cleanWs()
        }
    }
}
