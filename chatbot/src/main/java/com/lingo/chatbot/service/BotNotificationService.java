package com.lingo.chatbot.service;

import com.lingo.chatbot.httpClient.NotifyClient;
import com.lingo.chatbot.model.NotifyRequest;
import com.lingo.chatbot.model.ReqBroadCast;
import com.lingo.common_library.dto.ReqNotificationPost;
import com.lingo.common_library.dto.ResNotification;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.stereotype.Service;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE)
@Data
public class BotNotificationService {

    final NotifyClient notifyClient;

    // injected dynamically from ChatbotService to avoid asking user
    String userId;

    @Tool(
            name = "notifyUser",
            description = """
            Notify a single user. DO NOT ask for userId — it is always handled automatically.
            Just provide notificationTypeId, typeName, title, message, and optional url.
        """
    )
    public ResNotification notifyUserByChatbot(ReqNotificationPost request) {

        request.setUserId(userId);


        return notifyClient.createNotification(request).getBody();
    }

    @Tool(
            name = "notifyAllUser",
            description = """
        Send a notification to ALL users in the system.
        Do NOT ask for userId.
        Not require: notificationTypeId (or typeName), title, message, and optional url, These information 
        is already in the system prompt.
    """
    )
    public String notifyAllUser(ReqBroadCast reqBroadcast) {
        return notifyClient.broadcastNotification(reqBroadcast).getBody();
    }
}
