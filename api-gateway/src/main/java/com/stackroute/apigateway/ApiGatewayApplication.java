package com.stackroute.apigateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@EnableEurekaClient
@CrossOrigin
public class ApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
	}


	@Bean
	public RouteLocator gatewayRoutes(RouteLocatorBuilder builder){
		return builder.routes()
				.route( r->r.path("/user/**")
						.filters(f->f.dedupeResponseHeader("Access-Control-Allow-Origin","RETAIN_UNIQUE"))
						.uri("lb://USER-SERVICE"))
				.route(r->r.path("/wallet/**")
						.filters(f->f.dedupeResponseHeader("Access-Control-Allow-Origin","RETAIN_UNIQUE"))
						.uri("lb://WALLET-SERVICE"))
				.route(r->r.path("/**")
						.filters(f->f.dedupeResponseHeader("Access-Control-Allow-Origin","RETAIN_UNIQUE"))
						.uri("http://localhost:3000/")).build();
	}
}
