import {notification} from "antd";
import {NotificationPlacement} from "antd/es/notification/interface";


type NotificationType = "success" | "info" | "warning" | "error";
export const customNotification = (
    type: NotificationType,
    placement: NotificationPlacement,
    title: string,
    text?: string[] | string,
) => {
    notification[type]({
        message: title,
        description: text,
        placement,
    });
};
