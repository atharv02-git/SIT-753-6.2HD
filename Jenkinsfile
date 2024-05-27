pipeline {
    agent any
    tools {
        maven '3.9.6'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
                git url: 'https://github.com/atharv02-git/SIT-753-6.2HD.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                echo 'Building...'
                // Add your build commands here, e.g., mvn clean install for a Maven project
               // Print the directory contents to ensure the pom.xml is present
                bat 'dir'
                // Run Maven to clean and package the project
                bat 'mvn clean package'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                // Add your test commands here, e.g., mvn test for a Maven project
                bat 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add your deploy commands here, e.g., copying files to a server
                // sh 'scp target/myapp.jar user@server:/path/to/deploy/'
                // or using a deploy tool, e.g., Ansible, Docker, etc.
            }
        }

        stage('Release') {
            steps {
                echo 'Releasing...'
                // Add your release commands here, e.g., tagging the repo, notifying stakeholders
                // sh 'git tag -a v1.0 -m "Release version 1.0"'
                // sh 'git push origin --tags'
                // or notifying stakeholders via email or messaging service
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
            // You can add notifications for successful builds here
        }
        failure {
            echo 'Pipeline failed!'
            // You can add notifications for failed builds here
        }
    }
}
