mvn clean install
java -Dserver.port=4001 -Dspring.profiles.active=prod -jar target/website-0.0.1-SNAPSHOT.jar &
