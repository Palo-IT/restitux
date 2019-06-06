pipeline {
  agent any
  environment {
    FB_TOKEN = credentials('FIREBASE_TOKEN')
  }
  stages {
    stage('build') {
      steps {
        sh '''export PATH=$PATH:/usr/local/bin
export MY_IONIC_ENV=dev

#install packages
npm install
ionic build

cd functions
npm install

cd ..'''
      }
    }
    stage('deploy') {
      steps {
         sh '''export PATH=$PATH:/usr/local/bin:/usr/local/lib/node_modules/firebase-tools/bin
export MY_IONIC_ENV=dev
firebase use dev --token $FB_TOKEN
firebase deploy --token $FB_TOKEN'''
      }
    }
  }
}
