package com.stackroute.productwebapp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("product-webapp")
public class Controller {
    public String webapp() {
        return "index.html";
    }
}