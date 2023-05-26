pipeline {
  agent any
    // tools {
    //     maven 'maven-x' 
    // }
  options {
    buildDiscarder(logRotator('2','2','2','1'))
  }
  stages {
    stage('Build') {
      steps {
        echo 'Demo Build Message'
        sh "mvn clean install -DskipTests"
      }
    
    }

    stage('Linux Tests') {
      // parallel {
        stage('Run Tests') {
          steps {
            echo 'Running Tests'
            sh 'mvn test'
          }
        }
      post{
        success {
          echo 'Success and archiving it'
          archiveArtifacts artifacts: '**/target/*.jar'
        }
        changed{
          echo 'versioning'
          // sh 'mkdir -p versions/ cp $(find ../ -name "**/target/*.jar") versions/credwiz-$BUILD_ID'
          
        }
      }


      // }
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
