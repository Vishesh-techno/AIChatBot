FROM eclipse-temurin:21-jre

WORKDIR /app

COPY target/gemini-chat-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

ENV GEMINI_API_KEY=""

CMD ["java", "-jar", "app.jar"]
