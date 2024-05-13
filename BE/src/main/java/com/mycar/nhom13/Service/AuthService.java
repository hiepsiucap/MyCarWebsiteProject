package com.mycar.nhom13.Service;

import com.mycar.nhom13.Dto.LoginDTO;
import com.mycar.nhom13.Entity.TaiKhoan;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.CharBuffer;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Objects;

@Service
public class AuthService {

    @Autowired
    private TaiKhoanService userService;
    private final PasswordEncoder passwordEncoder;

    @Value("${security.jwt.token.secret-key:secret-key}")
    private String secretKey;

    public AuthService(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public TaiKhoan authenticate(LoginDTO loginDTO) {

        TaiKhoan user = userService.findByTenTK(loginDTO.getUsername());

        if (passwordEncoder.matches((loginDTO.getPassword()), user.getMatKhau())) {
            return user;
        }
        throw new RuntimeException("Invalid password");
    }

    public TaiKhoan findByLogin(String login) {
        TaiKhoan user = userService.findByTenTK(login);
        if (user == null) {
            throw new RuntimeException("Invalid login");
        }
        else return user;
    }

    public String createToken(TaiKhoan user) {
        return user.getMaTK() + "&" + user.getTenTK() + "&" + calculateHmac(user);
    }

    public TaiKhoan findByToken(String token) {
        String[] parts = token.split("&");

        long userId = Long.valueOf(parts[0]).longValue();
        String login = parts[1];
        String hmac = parts[2];

        TaiKhoan user = findByLogin(login);

        if (!hmac.equals(calculateHmac(user)) || userId != user.getMaTK()) {
            throw new RuntimeException("Invalid Cookie value");
        }

        return user;
    }


    private String calculateHmac(TaiKhoan user) {
        byte[] secretKeyBytes = Objects.requireNonNull(secretKey).getBytes(StandardCharsets.UTF_8);
        byte[] valueBytes = Objects.requireNonNull(user.getMaTK() + "&" + user.getTenTK()).getBytes(StandardCharsets.UTF_8);

        try {
            Mac mac = Mac.getInstance("HmacSHA512");
            SecretKeySpec secretKeySpec = new SecretKeySpec(secretKeyBytes, "HmacSHA512");
            mac.init(secretKeySpec);
            byte[] hmacBytes = mac.doFinal(valueBytes);
            return Base64.getEncoder().encodeToString(hmacBytes);

        } catch (NoSuchAlgorithmException | InvalidKeyException e) {
            throw new RuntimeException(e);
        }
    }
}
