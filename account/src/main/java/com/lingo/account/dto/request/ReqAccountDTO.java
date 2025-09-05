package com.lingo.account.dto.request;

import lombok.Data;

@Data
public class ReqAccountDTO {
  private String email;
  private String username;
  private String firstName;
  private String lastName;
//  private LocalDate dob;
  private String name;
  private String password;
}
