FROM openjdk
WORKDIR usr/src
ADD ./target/wallet-service-0.0.1-SNAPSHOT.jar usr/src/wallet-service-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java", "-jar", "usr/src/wallet-service-0.0.1-SNAPSHOT.jar"]