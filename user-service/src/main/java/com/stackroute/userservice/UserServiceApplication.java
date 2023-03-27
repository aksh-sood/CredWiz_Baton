package com.stackroute.userservice;

import org.mapstruct.BeanMapping;
import org.mapstruct.NullValuePropertyMappingStrategy;
import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
@EnableWebMvc
@EnableEurekaClient
public class UserServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
	}

//	@Bean
//	@BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
//	public ModelMapper modelMapper(){
//		return new ModelMapper();
//	}
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
