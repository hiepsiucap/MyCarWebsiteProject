package com.mycar.nhom13.Authentication;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	private final UserAuthEntryPoint userAuthEntryPoint;
	private final UserAuthProvider userAuthProvider;

	public SecurityConfig(UserAuthEntryPoint userAuthenticationEntryPoint,
			UserAuthProvider userAuthenticationProvider) {
		this.userAuthEntryPoint = userAuthenticationEntryPoint;
		this.userAuthProvider = userAuthenticationProvider;
	}

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http.exceptionHandling(ex -> ex.authenticationEntryPoint(userAuthEntryPoint))
				.addFilterBefore(new UsernamePasswordAuthenticationFilter(userAuthProvider),
						BasicAuthenticationFilter.class)
				.addFilterBefore(new CookiesAuthenticationFilter(userAuthProvider),
						UsernamePasswordAuthenticationFilter.class)
				.csrf(AbstractHttpConfigurer::disable)
				.sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
				.logout(logout -> logout.deleteCookies(CookiesAuthenticationFilter.COOKIE_NAME))
				.authorizeHttpRequests(auth -> auth.requestMatchers(new AntPathRequestMatcher("/api/cars/**"))
						.permitAll().requestMatchers(new AntPathRequestMatcher("/register")).permitAll().anyRequest()
						.authenticated());

		return http.build();
	}
}
