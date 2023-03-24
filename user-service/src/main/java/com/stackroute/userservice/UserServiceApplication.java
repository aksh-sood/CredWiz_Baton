package com.stackroute.userservice;

import org.mapstruct.BeanMapping;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
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
//@EnableEurekaClient
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

	@Bean
	@BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}
//	public UserMapper userMapper(){
//		return new UserMapper() {
//			@Override
//			public void updateUserFromDto(UserDto userDto, User entity) {
//				User user =new ModelMapper().map(userDto,User.class);
//			}
//
//			@Override
//			public void updateDtoFromUser(User user, UserDto userDto) {
//
//			}
//		}
//	}






}
