package com.lingo.account.dto.response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
public class ResAccountDTO {

  private Long id;
  private String keycloakId;
  private String userId;
  private String email;
  private String username;
  private String firstName;
  private String lastName;
//  private LocalDate dob;
  private String name;
}
