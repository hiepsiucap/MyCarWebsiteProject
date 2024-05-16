package com.mycar.nhom13.RestController;

import com.mycar.nhom13.Authentication.CookiesAuthenticationFilter;
import com.mycar.nhom13.Dto.RegisterDTO;
import com.mycar.nhom13.Entity.TaiKhoan;
import com.mycar.nhom13.Service.AuthService;
import com.mycar.nhom13.Service.TaiKhoanService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.nio.CharBuffer;
import java.time.Duration;
import java.time.temporal.ChronoUnit;

@RestController
public class AuthController {
    @Autowired
    public AuthController(TaiKhoanService userService, AuthService authService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.authService = authService;
        this.passwordEncoder = passwordEncoder;
    }
    private final TaiKhoanService userService;
    private final AuthService authService;
    private final PasswordEncoder passwordEncoder;



    @PostMapping("/login")
    public ResponseEntity<TaiKhoan> login(@AuthenticationPrincipal TaiKhoan user, HttpServletResponse response){
        Cookie authCookie = new Cookie(CookiesAuthenticationFilter.COOKIE_NAME, authService.createToken(user));
        authCookie.setHttpOnly(true);
        authCookie.setSecure(true);
        authCookie.setMaxAge((int) Duration.of(1, ChronoUnit.DAYS).toSeconds());
        authCookie.setPath("/");

        response.addCookie(authCookie);

        return ResponseEntity.ok(user);
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDTO registerDto) {
        if (userService.findByTenTK(registerDto.getUsername()) != null) {
            return new ResponseEntity<>("Username is taken!", HttpStatus.BAD_REQUEST);
        }

        TaiKhoan user = new TaiKhoan();
        user.setTenTk(registerDto.getUsername());
        user.setMatKhau(passwordEncoder.encode(CharBuffer.wrap(registerDto.getPassword())));

        userService.save(user);

        return new ResponseEntity<>("User registered success!", HttpStatus.OK);
    }

    @PostMapping("/signOut")
    public ResponseEntity<Void> signOut(@AuthenticationPrincipal TaiKhoan user) {
        SecurityContextHolder.clearContext();
        return ResponseEntity.noContent().build();
    }

}
