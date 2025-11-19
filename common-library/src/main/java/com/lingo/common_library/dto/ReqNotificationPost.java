package com.lingo.common_library.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Builder
public class ReqNotificationPost {
    String userId;
    String title;
    long notificationTypeId;
    String typeName;
    String message;
    String url;

}
