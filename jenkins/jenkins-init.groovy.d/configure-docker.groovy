#!groovy

import jenkins.model.*
import com.cloudbees.plugins.credentials.*
import com.cloudbees.plugins.credentials.domains.Domain
import com.github.dockerjava.api.model.Ports
import io.jenkins.docker.client.DockerAPI
import io.jenkins.docker.connector.DockerComputerAttachConnector
import org.jenkinsci.plugins.docker.workflow.declarative.GlobalConfig

// Only run when Docker plugin is installed
if (Jenkins.instance.pluginManager.activePlugins.find { it.shortName == "docker-plugin" }) {
    def jenkins = Jenkins.getInstance()
    def dockerPluginConfig = jenkins.getExtensionList(GlobalConfig.class)[0]
    
    // Set Docker registry configs if needed
    dockerPluginConfig.setRegistry(null)
    dockerPluginConfig.save()
    
    jenkins.save()
}
