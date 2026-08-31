FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY pom.xml ./
RUN mvn -q -DskipTests dependency:go-offline

COPY src ./src

EXPOSE 8081

CMD ["mvn", "spring-boot:run"]
