pipeline {
  agent any
    // tools {
    //     maven 'maven-x' 
    // }
  stages {
    stage('Build') {
      steps {
        echo 'Demo Build Message'
        sh "mvn clean install"
      }
      post{
        success {
          echo 'Success and archiving it'
          // archiveArtifacts artifacts: '**/target/*.'
        }
      }
    }

    stage('Linux Tests') {
      parallel {
        stage('Linux Tests') {
          steps {
            echo 'Linux Test'

          }
        }


      }
    }

    stage('Deploy Staging') {
      steps {
        echo 'Deploy to staging environment'
        input 'OK to deploy to product'
      }
    }

    stage('Deploy Production') {
      steps {
        echo 'Deploy to Prod'
      }
    }

  }
}
