export interface HomeAssistant {
  states: {
    [entityId: string]: {
      state: string;
      attributes: Record<string, any>;
      entity_id: string;
      last_changed: string;
      last_updated: string;
    };
  };
  callService: (
    domain: string,
    service: string,
    data?: Record<string, any>,
    target?: Record<string, any>,
    notifyOnError?: boolean,
    returnResponse?: boolean
  ) => Promise<any>;
  callWS: (message: Record<string, any>) => Promise<any>;
  language: string;
  themes: {
    darkMode: boolean;
  };
}

export interface LovelaceCardConfig {
  type: string;
  [key: string]: any;
}

export interface LovelaceCard extends HTMLElement {
  hass?: HomeAssistant;
  setConfig(config: LovelaceCardConfig): void;
  getCardSize?(): number | Promise<number>;
}
