# -------- BUILD STAGE --------
FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /build
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# -------- RUN STAGE --------
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /build/target/gemini-chat-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
