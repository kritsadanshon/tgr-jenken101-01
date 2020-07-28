# Pipeline
```
pipeline {
    environment {
        registry = "dockertgr/kritsadanshons-app"
        registryCredential = 'dockertgr'
        dockerImage = ''
        dockerHost = '10.148.15.193:2375'
    }
    agent any
    stages {
        stage('Cloning project from github') {
            steps {
                git 'https://github.com/kritsadanshon/tgr-jenken101-01.git'
            }
        }
        stage('Run unittest') {
            steps {
                sh 'npm install'
                sh 'npm run coverage'
            }
        }
        stage('Building container image') {
            steps {
                script {
                    dockerImage = docker.build registry + ":development"
                }
            }
        }
        stage('Public container image to docker hub') {
            steps {
                script {
                    docker.withRegistry( '', registryCredential ) {
                        dockerImage.push()
                    }
                }
            }
        }
        stage('Cleaning up') {
            steps {
                sh "docker rmi $registry:development"
            }
        }
        stage('Deployment to UAT Server') {
            steps {
                sh "[ -z \$(docker -H=${dockerHost} ps -aq) ] &&  echo \"Container 0 running...\"  || docker -H=${dockerHost} stop \$(docker -H=${dockerHost} ps -aq)"
                sh "[ -z \$(docker -H=${dockerHost} ps -aq) ] &&  echo \"Container 0 running...\"  || docker -H=${dockerHost} rm   \$(docker -H=${dockerHost} ps -aq)"
                sh "docker -H=${dockerHost} pull ${registry}:development"
                sh "docker -H=${dockerHost} run -it -d -p 80:3000 ${registry}:development"
            }
        }
    }
}

```
