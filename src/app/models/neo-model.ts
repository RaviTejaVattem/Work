export interface Distance {
  estimated_diameter_min: string;
  estimated_diameter_max: string;
}

export interface EstimatedDiameter {
  kilometers: Distance;
  meters: Distance;
  miles: Distance;
  feet: Distance;
}

export interface NEO {
  links: string;
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: string;
  is_sentry_object: boolean;
  date?: string;
}

export interface NeoByDate {
  [key: string]: NEO[];
}

export interface NeoResponse {
  links: string;
  element_count: string;
  near_earth_objects: NeoByDate;
}

export interface DialogData {
  id: number;
  rowData: NEO;
}