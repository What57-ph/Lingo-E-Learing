package com.lingo.account.dto.identity;

import lombok.Builder;

@Builder
public record TokenExchangeRequest(String grant_type, String client_id, String client_secret, String scope) {
}
