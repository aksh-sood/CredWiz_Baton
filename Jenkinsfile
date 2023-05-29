pipeline {
  agent any
    // tools {
    //     maven 'maven-x' 
    // }
  options {
    buildDiscarder(logRotator(numToKeepStr: '2', artifactNumToKeepStr: '2',daysToKeepStr:'2',artifactDaysToKeepStr: '1'))
  }
  stages {
    stage('Build') {
      steps {
        echo 'Demo Build Message'
        sh "mvn clean install -DskipTests"
      }
    
    }

    stage('Run Tests') {
          steps {
            echo 'Running Tests'
            sh 'mvn test'
          }
      post{
        success {
          echo 'Success and archiving it'
          archiveArtifacts artifacts: '**/target/*.jar'
          echo 'versioning'
          sh 'mkdir -p versions/ cp $(find ../ -name "**/target/*.jar") versions/credwiz-$BUILD_ID'

        }
        changed{
          echo 'versioning'
          sh 'mkdir -p versions/ cp $(find ../ -name "**/target/*.jar") versions/credwiz-$BUILD_ID'
          
        }
      }
    }

    stage('checkstyle analysis'){
      steps{
        sh 'mvn checkstyle:checkstyle'
      }
    }

    stage('Sonar Analysis'){
      environment{
        scannerhome = tool 'sonar'
      }
      steps{
        withSonarQubeEnv('sonar'){
        sh '''${scannerHome}/bin/sonar-scanner -Dsonar.projectKey=credwiz \
        -Dsonar.projectName=vprofile-repo \
        -Dsonar.projectVersion=1.0 \
        -Dsonar.sources=user-servicesrc/ \
        -Dsonar.java.binaries=target/test-classes/com/stackroute/userservice \
        -Dsonar.junit.reportsPath=target/jacoco.exec \
        -Dsonar.jacoco.reportspath=target/jacoco.exec \
        -Dsonar.java.checkstyle.reportPaths=target/checkstyle-result.xml
        '''
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
