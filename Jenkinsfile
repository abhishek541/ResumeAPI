pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/abhishek541/ResumeAPI'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Deploy application') {
      steps {
        sh 'chmod +x deploy'
        sh './deploy'
      }
    }
    
  }
}