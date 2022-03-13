package de.philipphofer.website.config;

import org.apache.catalina.connector.Connector;
import org.apache.coyote.ajp.AjpNioProtocol;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Configuration
@Profile("prod")
public class ServerConfig {

    @Value("${AJP_SECRET}")
    private String secret;

    @Bean
    public TomcatServletWebServerFactory servletContainer() {

        TomcatServletWebServerFactory tomcat = new TomcatServletWebServerFactory();
        Connector ajpConnector = new Connector("org.apache.coyote.ajp.AjpNioProtocol");
        AjpNioProtocol protocol = (AjpNioProtocol) ajpConnector.getProtocolHandler();
        protocol.setSecret(secret);
        ajpConnector.setPort(4000);
        ajpConnector.setSecure(true);
        tomcat.addAdditionalTomcatConnectors(ajpConnector);

        return tomcat;
    }
}