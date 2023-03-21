package com.stackroute.userservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@EnableWebMvc
public class UserServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
	}


	@Bean
	public Docket getDockect(){
		return new Docket(DocumentationType.SWAGGER_2).select().paths(PathSelectors.ant("/**")).apis(RequestHandlerSelectors.basePackage("com.stackroute.userservice")).build().apiInfo(apiDetails());

	}

	private ApiInfo apiDetails(){
		Contact contact =new Contact("aksh",null,"aksh.sood@batonsystems.com");
		ApiInfo apiInfo=new ApiInfo("User Service Api","Deals with User data","1.0","aksh.sood@batonsystems.com","Aksh",null,null);
		return apiInfo;
	}



}
