package com.mycar.nhom13.Authentication;

import com.mycar.nhom13.Dto.LoginDTO;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.Service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationToken;
import org.springframework.stereotype.Component;

import java.util.Collections;

@Component
public class UserAuthProvider {
	@Autowired
	private AuthService authService;

//    @Override
//    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
//        TaiKhoan user = null;
//        if (authentication instanceof UsernamePasswordAuthenticationToken) {
//            user = authService.authenticate(
//                    new LoginDTO((String) authentication.getPrincipal(), (String) authentication.getCredentials())
//            );
//        }
//        else if (authentication instanceof PreAuthenticatedAuthenticationToken){
//            user = authService.findByToken((String) authentication.getPrincipal());
//        }
//
//        if (user == null) return null;
//
//        return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
//    }
//
//    @Override
//    public boolean supports(Class<?> aClass) {
//        return true;
//    }

	public Authentication validateLogin(LoginDTO loginDTO) {
		User user = authService.authenticate(loginDTO);
		return new UsernamePasswordAuthenticationToken(user, null, Collections.emptyList());
	}

	public Authentication validateCookies(String cookies) {
		User user = authService.findByToken(cookies);
		return new PreAuthenticatedAuthenticationToken(user, null, Collections.emptyList());
	}
}
