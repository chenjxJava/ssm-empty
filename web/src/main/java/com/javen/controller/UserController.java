package com.javen.controller;

import com.chenjx.sys.model.User;
import com.chenjx.sys.service.UserService;
import common.entity.WebResultEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * create by chenjx 2017/12/5
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/getAllUser")
    public void getAllUser(HttpServletRequest request, HttpServletResponse response) {
        WebResultEntity result = new WebResultEntity();
        List<User> userList = userService.findAllList();
        result.setData(userList);
        result.setMessage("success");
        result.printJson(result,response);
    }
}
