export interface CrashOutputDTO {
  title: string;
  type: string;
  properties: Properties;
  additionalProperties: boolean;
  required: string[];
}

export interface Properties {
  id: Id;
  type: Type;
  createdAt: CreatedAt;
  message: Message;
}

export interface Id {
  type: string;
}

export interface Type {
  type: string;
}

export interface CreatedAt {
  type: string;
}

export interface Message {
  type: string;
}
