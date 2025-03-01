docker-compose -f jenkins-docker-compose.yml down --volumes --remove-orphans
docker-compose -f jenkins-docker-compose.yml up -d --build