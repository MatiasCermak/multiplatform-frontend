import {IInterest} from "./IInterests";

export interface IAdvertisement {
  advertisement_id: number;
  agency_id:        number;
  start_date:       Date;
  end_date:         Date;
  url_image:    string;
  file_name:        string;
  status:           string;
  provided_url:     string;
  interests:        IInterest[] | [];
  created_at:       Date;
  updated_at:       Date;
  deleted_at:       Date;
}
