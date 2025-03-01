FROM jenkins/jenkins:lts

USER root

# Install necessary tools and Docker CLI
RUN apt-get update && \
    apt-get install -y apt-transport-https \
                       ca-certificates \
                       curl \
                       gnupg \
                       lsb-release && \
    curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg && \
    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
    $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null && \
    apt-get update && \
    apt-get install -y docker-ce-cli

# Install Docker Compose
RUN curl -L "https://github.com/docker/compose/releases/download/v2.20.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && \
    chmod +x /usr/local/bin/docker-compose && \
    ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

# Install Jenkins plugins
COPY plugins.txt /usr/share/jenkins/ref/plugins.txt
RUN jenkins-plugin-cli --plugin-file /usr/share/jenkins/ref/plugins.txt

# Set up Jenkins Configuration as Code
ENV CASC_JENKINS_CONFIG=/var/jenkins_home/casc_configs
RUN mkdir -p ${CASC_JENKINS_CONFIG}
COPY jenkins.yaml ${CASC_JENKINS_CONFIG}/jenkins.yaml

# Copy init scripts
COPY jenkins-init.groovy.d/ /usr/share/jenkins/ref/init.groovy.d/

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl -sSf http://localhost:8080/login || exit 1

USER jenkins
