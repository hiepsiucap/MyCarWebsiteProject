package com.mycar.nhom13.Authentication;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.preauth.PreAuthenticatedAuthenticationToken;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Optional;
import java.util.stream.Stream;

public class CookiesAuthenticationFilter extends OncePerRequestFilter {
    public static final String COOKIE_NAME = "auth_by_cookie";

    public CookiesAuthenticationFilter(UserAuthProvider userAuthProvider) {
        this.userAuthProvider = userAuthProvider;
    }

    private UserAuthProvider userAuthProvider;

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest  request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {
        Cookie[] cookies = request.getCookies();
        Cookie cookieAuth = null;
        for (int i =0; i< cookies.length; i++){
            if(cookies[i].getName().equals(COOKIE_NAME)){
                cookieAuth = cookies[i];
                break;
            }
        }
        if (cookieAuth != null) {
            String token = cookieAuth.getValue();
            System.out.println(token);
            SecurityContextHolder.getContext().setAuthentication(
                    userAuthProvider.validateCookies(token));
        }

        filterChain.doFilter(request, response);
    }
}
