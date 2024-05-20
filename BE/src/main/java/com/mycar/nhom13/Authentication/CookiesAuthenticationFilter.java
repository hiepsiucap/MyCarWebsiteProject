package com.mycar.nhom13.Authentication;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.lang.NonNull;
import org.springframework.security.core.context.SecurityContextHolder;
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
        Optional<Cookie> cookieAuth = Stream.of(Optional.ofNullable(request.getCookies()).orElse(new Cookie[0]))
                .filter(cookie -> COOKIE_NAME.equals(cookie.getName()))
                .findFirst();

        if (!"/register".equals(request.getServletPath())) {
            if (cookieAuth.isPresent()) {
                String token = cookieAuth.get().getValue();
                SecurityContextHolder.getContext().setAuthentication(
                        userAuthProvider.validateCookies(token));
            }
        }
        filterChain.doFilter(request, response);
    }
}
