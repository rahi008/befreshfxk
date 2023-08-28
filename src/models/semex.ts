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
	CountryCode:string;
	CurrencyTagLine:string;
	}
export interface exRtSet{
	rows:Currency_rate[];
}