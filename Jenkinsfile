node {
   echo 'Hello World'

    stage ('get code') {
        // Get some code from a GitHub repository
        // git 'https://github.com/drsaaron/QuoteOfTheDayServices.git'
        git 'git@github.com:drsaaron/QuoteOfTheDayUI-react.git'
    }
    
    stage ('initialize node') {
        sh "npm prune"
        sh "npm install"
    }
    
    stage ('build') {
        sh "npm run webpack"
    }
    
    stage ('docker build') {
        sh "docker build -t quoteofthedayui-react ."
    }
    
    stage ('docker push') {
        sh "docker tag quoteofthedayui-react drsaaron/quoteofthedayui-react:latest"
        sh "docker push drsaaron/quoteofthedayui-react:latest"
    }
}
