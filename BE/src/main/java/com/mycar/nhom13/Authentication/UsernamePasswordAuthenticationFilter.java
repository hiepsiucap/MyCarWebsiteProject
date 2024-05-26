package com.mycar.nhom13.Authentication;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.mycar.nhom13.Dto.LoginDTO;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpMethod;
import org.springframework.lang.NonNull;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

public class UsernamePasswordAuthenticationFilter extends OncePerRequestFilter {
	private static final ObjectMapper MAPPER = new ObjectMapper();

	private final UserAuthProvider userAuthenticationProvider;

	public UsernamePasswordAuthenticationFilter(UserAuthProvider userAuthenticationProvider) {
		this.userAuthenticationProvider = userAuthenticationProvider;
	}

	@Override
	protected void doFilterInternal(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response,
			@NonNull FilterChain filterChain) throws ServletException, IOException {
		if ("/login".equals(request.getServletPath()) && HttpMethod.POST.matches(request.getMethod())) {
			LoginDTO loginDTO = MAPPER.readValue(request.getInputStream(), LoginDTO.class);

			SecurityContextHolder.getContext().setAuthentication(userAuthenticationProvider.validateLogin(loginDTO));

		}

		filterChain.doFilter(request, response);
	}
}
