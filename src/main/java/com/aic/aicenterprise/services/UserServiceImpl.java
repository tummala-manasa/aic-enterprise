package com.aic.aicenterprise.services;

import com.aic.aicenterprise.entities.UserEntity;
import com.aic.aicenterprise.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import static java.util.Collections.emptyList;
import static java.util.Objects.nonNull;

@Slf4j
@Service
public class UserServiceImpl implements UserDetailsService, UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public boolean saveUser(UserEntity userEntity) {
        UserEntity userFromDB = userRepository.findByEmail(userEntity.getEmail());

        if (nonNull(userFromDB)) { // User already created an account
            if (nonNull(userFromDB.getPassword())) { // User already created an Email account
                if (nonNull(userEntity.getPassword())) // User trying to create a duplicate Email account
                    return false;
                else { // Merging existing email with new Gmail login
                    userEntity.setPassword(userFromDB.getPassword());
                    userEntity.setPhoneNumber(userFromDB.getPhoneNumber());
                }
            } else { // User already created a Gmail account
                if (nonNull(userEntity.getPassword())) // Merging existing Gmail with new Email login
                    userEntity.setImageUrl(userFromDB.getImageUrl());
            }
        }

        UserEntity savedUserEntity = userRepository.save(userEntity);
        return savedUserEntity.getEmail().equals(userEntity.getEmail());
    }

    @Override
    public UserEntity findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity applicationUserEntity = userRepository.findByEmail(username);
        if (applicationUserEntity == null) {
            throw new UsernameNotFoundException(username);
        }
        return new org.springframework.security.core.userdetails.User(
                applicationUserEntity.getEmail(),
                applicationUserEntity.getPassword(),
                emptyList()
        );
    }

}
