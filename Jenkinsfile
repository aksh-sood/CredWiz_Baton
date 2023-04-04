pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Demo Build Message'
        sh '''echo "This is from build shell"
sh run_build_script.sh'''
      }
    }

  }
}