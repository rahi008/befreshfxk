export interface Currency_rate {
  atn: number;
  Currency_Name: string;
  Currency_CountryName: string;
  Selling_Rate: number;
  Buying_Rate: number;
  Entry_Date: Date;
  save_usrnam: string;
  update_usrnam: string;
  Currency_CountryFlag: string;
  Currency_Priority: number;
  update_datetime: Date;
  view_status: number;
  CurrencyCode: string;
  CountryCode: string;
  CurrencyTagLine: string;
}
export interface dtObj {
  update_datetime: Date;
}
export interface exRtSet {
  rows: Currency_rate[];
}

export interface emailReq {
  emailTo: string;
  emailSub: string;
  body: string;
}
// Create a class that implements the interface
export class emailReqB implements emailReq {
  constructor(
    public emailTo: string,
    public emailSub: string,
    public body: string
  ) {}
}
// models.ts
export interface visitor_count {
  atn: number;
  v_date: string;
  cnt: number;
}
export interface vt_cnt {
  total_count: number;
}
export interface gov_circ {
  particulars: string;
  issued_by: string;
  issue_date: Date;
  filename: string;
  viewstat: number;
}
export interface currency_news {
  atn: number;
  headline: string;
  publishDate: string;
  newsSource: string;
  newsUrl: string;
  imageFileName: string;
  save_by: string;
  save_time: Date;
}
