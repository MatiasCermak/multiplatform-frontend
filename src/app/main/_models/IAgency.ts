export interface IAgency {
  agency_id: number;
  name: string;
  protocol: string;
  url_service: string;
  active: boolean;
  secret_token: string;
  advertisement_plan_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
