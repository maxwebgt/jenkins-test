#!groovy

import jenkins.model.Jenkins
import hudson.security.csrf.DefaultCrumbIssuer

def instance = Jenkins.getInstance()

// Configure CSRF protection correctly
def crumbIssuer = new DefaultCrumbIssuer(true)
instance.setCrumbIssuer(crumbIssuer)

// Save configuration
instance.save()
println "CSRF Protection configured correctly"
