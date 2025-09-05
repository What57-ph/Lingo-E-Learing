package com.lingo.account.mapper;

import com.lingo.account.dto.request.ReqAccountDTO;
import com.lingo.account.dto.response.ResAccountDTO;
import com.lingo.account.model.Account;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

@Mapper(componentModel = "spring")
@Component
public interface AccountMapper {

  @Mapping(target = "id", ignore = true)
  @Mapping(target = "keycloakId", source = "keycloakId")
  Account toModel(ReqAccountDTO reqAccountDTO, String keycloakId);

  ResAccountDTO toResDTO(Account account);

}
