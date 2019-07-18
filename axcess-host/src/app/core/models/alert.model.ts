export class Alert {
    message: string;
    type: AlertType
}

export enum AlertType {
    Success = "success",
    Warning = "warning",
    Danger = "danger",
    Info = "info"
}