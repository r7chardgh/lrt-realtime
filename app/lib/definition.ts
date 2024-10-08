export type Station = {
  status: number;
  system_time: string;
  platform_list: Platform[];
};

export type Platform = {
  platform_id: number;
  route_list: Route[];
  end_service_status: number;
};

export type Route = {
  train_length?: number;
  arrival_departure?: string;
  dest_en?: string;
  dest_ch?: string;
  time_en?: string;
  time_ch?: string;
  route_no: string;
  stop: number;
};

export type Stop = {
  route_code: string;
  route_cn: string;
  route_en: string;
};
