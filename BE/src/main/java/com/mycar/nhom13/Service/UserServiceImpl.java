package com.mycar.nhom13.Service;

import com.mycar.nhom13.Dto.ChangePasswordDTO;
import com.mycar.nhom13.Entity.User;
import com.mycar.nhom13.ExceptionHandler.ResourceNotFoundException;
import com.mycar.nhom13.ExceptionHandler.UnAuthenticated;
import com.mycar.nhom13.Repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.ReflectionUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements  UserService{

    private final UserRepository userRepository;

    private final CloudinaryService cloudinaryService;

    private final PasswordEncoder passwordEncoder;


    public UserServiceImpl(UserRepository userRepository,CloudinaryService cloudinaryService,PasswordEncoder passwordEncoder){
        this.userRepository = userRepository;
        this.cloudinaryService = cloudinaryService;
        this.passwordEncoder=passwordEncoder;
    }
    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findById(int id) {
        User user = userRepository.findById(id);
        if(user == null)
            throw new ResourceNotFoundException("User id " + id +" not found");
        return user;
    }
    @Override
    public User findByEmail(String email){
        return userRepository.findByEmail(email);
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public User update(int id, Map<String, Object> fields) {

        User user = this.findById(id);

        if( user != null) {

            fields.forEach((key, value) -> {
                Field field = ReflectionUtils.findField(User.class, key);
                field.setAccessible(true);

                ReflectionUtils.setField(field, user, value);
            });
            return userRepository.save(user);
        }
        return null;


    }
    public User saveLicense(MultipartFile file, int id) throws IOException {

        User user = this.findById(id);

        if(user == null) throw new ResourceNotFoundException("User id: "+ id +" not found");
        String imageName = "user_id_"+user.getUserId();
        String folder="users/user_license";
        String url = cloudinaryService.uploadImage(file,folder,imageName);
        user.setDriverLicense(url);

        user.setDriverLicenseCheck(null);
        return userRepository.save(user);
    }
    public User saveAvatar(MultipartFile file, int id) throws IOException {
        User user = this.findById(id);

        if(user == null) throw new ResourceNotFoundException("User id: "+ id +" not found");
        String imageName = "user_id_"+user.getUserId();
        String folder="users/user_avatar";
        String url = cloudinaryService.uploadImage(file,folder,imageName);
        user.setAvatar(url);
        return userRepository.save(user);
    }

    @Override
    public User checkLicense(int staffId, int id,boolean check) {

        User staff = this.findById(staffId);

        if(staff.getRole().equals("User")){
            throw new UnAuthenticated("No permission");
        }
        else{
            String checked=(check)?"Y":"N";
            User user = userRepository.findById(id);
            user.setDriverLicenseCheck(checked);
            return userRepository.save(user);
        }
    }

    @Override
    public boolean changePassword(ChangePasswordDTO changePasswordDto, int id) {

        User currentUser = this.findById(id);

        if (!passwordEncoder.matches(changePasswordDto.getCurrentPassword(), currentUser.getPassword())) {
            return false;
        }

        // Cập nhật mật khẩu mới
        currentUser.setPassword(passwordEncoder.encode(changePasswordDto.getNewPassword()));
        userRepository.save(currentUser);

        return true;
    }


}
