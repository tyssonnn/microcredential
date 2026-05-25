package com.bangjek.DTO.request;

import com.bangjek.entity.Role;
import io.smallrye.common.constraint.NotNull;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class UpdateRequest {
    @NotBlank
    public String name;

    @Email
    @NotBlank
    public String email;

    @NotBlank
    public String phone;

    @NotNull
    public Role role;
}
