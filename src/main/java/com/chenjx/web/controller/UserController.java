package com.chenjx.web.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.chenjx.common.entity.WebResultEntity;
import com.chenjx.sys.model.User;
import com.chenjx.sys.service.UserService;

/**
 * create by chenjx 2017/12/5
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/getAllUser",method = RequestMethod.POST)
    public void getAllUser(HttpServletRequest request, HttpServletResponse response) {
        WebResultEntity result = new WebResultEntity();
        List<User> userList = userService.findAllList();
        result.setData(userList);
        result.setMessage("success");
        result.printJson(result,response);
    }
}
