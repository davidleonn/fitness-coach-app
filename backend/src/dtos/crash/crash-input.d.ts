export interface CrashInputDTO {
  title: string;
  type: string;
  properties: Properties;
  additionalProperties: boolean;
  required: string[];
}

export interface Properties {
  type: Type;
  message: Message;
}

export interface Type {
  type: string;
}

export interface Message {
  type: string;
}
