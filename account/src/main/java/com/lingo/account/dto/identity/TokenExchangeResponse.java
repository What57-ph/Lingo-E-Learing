package com.lingo.account.dto.identity;

import lombok.Builder;

@Builder
public record TokenExchangeResponse(String access_token, String expires_in, String refresh_expires_in,
                                    String token_type, String id_token, String scope) {
}
