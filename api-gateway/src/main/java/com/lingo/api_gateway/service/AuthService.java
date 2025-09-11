package com.lingo.api_gateway.service;

import com.lingo.api_gateway.dto.identity.*;
import lombok.RequiredArgsConstructor;
import lombok.experimental.NonFinal;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthService {
  private final AuthenClient authenClient;

  @Value("${idp.client-id}")
  @NonFinal
  String clientId;

  @Value("${idp.client-secret}")
  @NonFinal
  String clientSecret;

  public TokenExchangeResponse loginAccount(ReqAccountDTO request) {
    log.info("loginAccount: {}", request);
    try {
      TokenExchangeResponse res = this.authenClient.exchangeClientToken(
              new TokenExchangeRequest("password", clientId, clientSecret,
                      "openid", request.getUsername(), request.getPassword()));


      return res;
    } catch (Exception e) {
      log.error("loginAccount error: {}", e.getMessage());
      return null;
    }
  }

//  public TokenExchangeResponse getRefreshAccessToken(ReqTokenRefreshDTO request) {
    public TokenExchangeResponse getRefreshAccessToken(String refreshToken) {
    log.info("loginAccount: {}", refreshToken);
    try {
      TokenExchangeResponse res = this.authenClient.refreshAccessToken(
              new RefreshTokenExchangeRequest("refresh_token",
                      clientId, clientSecret, refreshToken));

      return res;
    } catch (Exception e) {
      log.error("loginAccount error: {}", e.getMessage());
      return null;
    }
  }


}
