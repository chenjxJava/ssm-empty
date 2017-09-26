package com.javen.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.ExcessiveAttemptsException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.chenjx.common.entity.WebResultEntity;
import com.chenjx.common.utils.PasswordHelper;
import com.javen.sys.model.Permissions;
import com.javen.sys.model.Role;
import com.javen.sys.model.User;
import com.javen.sys.service.UserService;

@Controller  
@RequestMapping("/login")
// /user/**
public class LoginController {
	private static Logger log=LoggerFactory.getLogger(LoginController.class);
	 @Autowired
	 private UserService userService;

	 private String CURRENT_USER_INFO = "current_user_info";

	 @RequestMapping(value = "/register.html", method = {RequestMethod.POST})
	 public String register(HttpServletRequest request, User user) {

		 String username = request.getParameter("username");
		 String password = request.getParameter("password");
		 PasswordHelper passwordHelper = new PasswordHelper();
		 Map<String, Object> generatePassword = passwordHelper.generatePassword(password);
		 user.setPassword(generatePassword.get("password").toString());
		 user.setSalt(generatePassword.get("salt").toString());
		 userService.insert(user);
		 return "index";
	 }

    @RequestMapping(value = "/login.html", method = {RequestMethod.POST})
    public void login(HttpServletRequest request, HttpServletResponse response, User user) throws Exception {
         /** shiro登录方式：根据用户名获取密码，密码为null非法用户；有密码检查是否用户填写的密码
         * 登录成功后无需往httpsession中存放当前用户，这样就跟web容器绑定，关联太紧密；它自己创建
         * subject对象，实现自己的session。这个跟web容器脱离，实现松耦合。*/

        WebResultEntity result = new WebResultEntity();
        //调用shiro判断当前用户是否是系统用户
        Subject subject = SecurityUtils.getSubject();   //得到当前用户
        //shiro是将用户录入的登录名和密码（未加密）封装到token对象中
        String userName = user.getUsername();
        String password = user.getPassword();
        UsernamePasswordToken token = new UsernamePasswordToken(userName,password);

        try{
            subject.login(token);   //自动调用AuthRealm.doGetAuthenticationInfo

   					//写seesion，保存当前user对象
            User curUser = (User)subject.getPrincipal();            //从shiro中获取当前用户
            List<Role> roles = curUser.getRoles();
            for(Role role :roles){
                List<Permissions> permissions =  role.getPermissions();
                for (Permissions permission : permissions) {
                    System.out.println(permission.getDescription());
                }
            }
            HttpSession session = request.getSession();
            session.setAttribute(CURRENT_USER_INFO, curUser);
					//Principal 当前用户对象
        } catch (UnknownAccountException e) {
            e.printStackTrace();
            result.setErrorMessageAndData("用户名或者密码错误！", user.getUsername());
        } catch (LockedAccountException e) {
            e.printStackTrace();
            result.setErrorMessageAndData("该账号已被锁定，请稍后在试!", user.getUsername());
        } catch (IncorrectCredentialsException e) {
            e.printStackTrace();
            result.setErrorMessageAndData("用户名或者密码错误!", user.getUsername());
        } catch (ExcessiveAttemptsException e) {
            e.printStackTrace();
            result.setErrorMessageAndData("登录次数过多，请稍后在试！", user.getUsername());
        } catch (Exception e) {
            e.printStackTrace();
            result.setErrorMessageAndData("系统异常！", user.getUsername());
        }
        result.printJson(result, response);
    }

    @RequestMapping(value = "/logout.html", method = {RequestMethod.GET})
    public String logout(HttpServletRequest request){
        HttpSession session = request.getSession();
        session.removeAttribute(CURRENT_USER_INFO);      //删除session
        return "logout";
    }


/**
     * 短信验证通过，进行多账号选择
     * @param mobilephone
     * @param request
     * @return


    @RequestMapping(value = "/chooseAccount.html", method = RequestMethod.POST, produces = "text/html;charset=utf-8")
    public String chooseAccount(@RequestParam String mobilephone, HttpServletRequest request) {
        //查询所有用户
UserInfoEntity userInfo = new UserInfoEntity();
        userInfo.setUserPhone(mobilephone);
        UserEntity user = new UserEntity();
        user.setUserInfo(userInfo);
        List<UserEntity> userList = userService.queryUserList(user);
        request.setAttribute("userList", userList);

        return "chooseAccount";
    }

*
     * 手机登入
     * @param id
     * @param request
     * @return


    @RequestMapping(value = "/login2.html", method = RequestMethod.POST, produces = "text/html;charset=utf-8")
    public String login2(String id, HttpServletRequest request) {
        MobileCodeToken token = null;
        try {
            if (StringUtils.isEmpty(id)) {
                request.setAttribute("errMsg", "账号或密码不能为空！");
                request.setAttribute("id", id);
                return "login";
            }
            Subject subject = SecurityUtils.getSubject();
            token = new MobileCodeToken(id);
            subject.login(token);
            if (subject.isAuthenticated()) {
                request.removeAttribute("errMsg");
            } else {
                request.setAttribute("errMsg", "用户名或者密码错误！");
                request.setAttribute("id", id);
                return "login";
            }
        } catch (UnknownAccountException e) {
            e.printStackTrace();
            request.setAttribute("errMsg", "用户名或者密码错误!");
            request.setAttribute("id", id);
            return "login";
        } catch (LockedAccountException e) {
            e.printStackTrace();
            request.setAttribute("errMsg", "该账号已被锁定，请稍后在试!");
            request.setAttribute("id", id);
            return "login";
        } catch (IncorrectCredentialsException e) {
            e.printStackTrace();
            request.setAttribute("errMsg", "用户名或者密码错误!");
            request.setAttribute("id", id);
            return "login";
        } catch (ExcessiveAttemptsException e) {
            e.printStackTrace();
            request.setAttribute("errMsg", "登录次数过多，请稍后在试！");
            request.setAttribute("id", id);
            return "login";
        } catch (Exception e) {
            e.printStackTrace();
            request.setAttribute("errMsg", "系统异常！");
            request.setAttribute("id", id);
            return "login";
        }
        return "redirect:index.html";
    }

    @RequestMapping(value = "/index.html")
    public String index(HttpServletRequest request) {
        Map<String, Object> _moneyMap = null;
        try {
UserEntity user = (UserEntity) SecurityUtils.getSubject().getPrincipal();

*
             * 查询用户余额信息,admin用户直接忽略

            request.setAttribute("userInfo", user);
            if ("3".equals(user.getUserType()) || StringUtils.isEmpty(user.getUserType())) {
                return "management/index";
            } else {
                _moneyMap = userService.checkBalances(user);
            }
            request.setAttribute("moneyInfo", _moneyMap);

        } catch (Exception e) {
            e.printStackTrace();
            SecurityUtils.getSubject().logout();
            return "redirect:login.html";
        }
        return "index";
    }


*
     * 获取短信验证码(登入)
     *
     * @param request
     * @param response


    @ResponseBody
    @RequestMapping(value = { "/SmsMessage3.do" }, method = {
      org.springframework.web.bind.annotation.RequestMethod.POST })
    public void SmsMessage3(String mobilePhone, HttpServletRequest request, HttpServletResponse response) {
ResultEntity result = null;
        try {
            QuerySendDetailsResponse querySendDetailsResponse = smsService.querySendDetails(mobilePhone);

            if (querySendDetailsResponse.getSmsSendDetailDTOs().size() > 9) {
                result = new ResultEntity();
                result.setErrorMessage("今日的短信次数已达上限");
                result.printJson(result, response);
                return;
            }

            UserEntity user1 = new UserEntity();
            UserInfoEntity userInfo = new UserInfoEntity();
            userInfo.setUserPhone(mobilePhone);
            user1.setUserInfo(userInfo);


            SendSmsResponse sendSmsResponse = smsService.smsMessage("1", user1);

            if (sendSmsResponse.getCode() != null && sendSmsResponse.getCode().equals("OK")) {
                result = new ResultEntity();
                result.setMessage("发送成功！");
            } else {
                result = new ResultEntity();
                result.setErrorMessage("短信请求次数过于频繁，请一小时之后再试！");
            }
        } catch (Exception e) {
            e.printStackTrace();
            result = new ResultEntity();
            result.setErrorMessage("系统异常");
        }
        result.printJson(result, response);

    }*/

}
