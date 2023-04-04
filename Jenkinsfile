pipeline {
  agent {
    node {
      label 'linux-1'
    }

  }
  stages {
    stage('Build') {
      steps {
        echo 'Demo Build Message'
        sh '''echo "This is from build shell"

'''
      }
    }

    stage('Linux Tests') {
      parallel {
        stage('Linux Tests') {
          steps {
            echo 'Linux Test'
            sh '''echo "This is from test linux shell"
'''
          }
        }

        stage('Windows Tests') {
          steps {
            echo 'This is windows test'
            sh 'echo "windows test shell"'
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