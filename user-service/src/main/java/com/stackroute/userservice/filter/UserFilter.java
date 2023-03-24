package com.stackroute.userservice.filter;

import com.stackroute.userservice.service.CustomUserService;
import com.stackroute.userservice.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import javax.servlet.FilterChain;
import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class UserFilter extends OncePerRequestFilter {

    @Autowired
    private CustomUserService customUserService;

    @Autowired
    private JwtUtils jwtUtils;

    @Override
    public void doFilterInternal(HttpServletRequest request,HttpServletResponse response,FilterChain chain)throws IOException,ServletException {

    final String authorizationHeader=request.getHeader("Authorization");
    String contactNumber=null;
    String jwt=null;
    if(authorizationHeader!=null && authorizationHeader.startsWith("Bearer ")){
        jwt=authorizationHeader.substring(7);
        contactNumber=jwtUtils.extractUserName(jwt);
    }
    if(contactNumber!=null && SecurityContextHolder.getContext().getAuthentication()==null){
        UserDetails userDetails=this.customUserService.loadUserByUsername(contactNumber);
        if(jwtUtils.validateToken(jwt,userDetails)){
            UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken=new UsernamePasswordAuthenticationToken(
                    userDetails,null,userDetails.getAuthorities()
            );

                    usernamePasswordAuthenticationToken.setDetails(
                    new WebAuthenticationDetailsSource().buildDetails(request));

            SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
        }
    }

    chain.doFilter(request,response);
    }
}
