export interface IPartner {
  partner_id: number;
  name: string;
  protocol: string;
  url_service: string;
  login_fee: number;
  register_fee: number;
  active: boolean;
  secret_token: string;
  image_url: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export interface IWatchContent {
  status?: number;
  message?: string;
  visualisationLink?: string;
}
