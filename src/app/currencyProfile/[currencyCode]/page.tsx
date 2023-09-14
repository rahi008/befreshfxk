import Image from "@/app/components/imge";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import knexInstance from "@/app/utils/knexfile";
import { Currency_rate } from "@/app/models/semex";
interface PageProps {
  params: { currencyCode: string };
}
export default async function Page({ params: { currencyCode } }: PageProps) {
  const currency = currencyCode;
  const query =
    "select * from Currency_rate where CurrencyCode='" + currency + "'";
  const result1: Currency_rate = await knexInstance.raw(query);
  console.log(result1);
  return (
    <div>
      {/* <label className="m-8 p-8 text-xl text-white">{currency}</label> */}
      <div className="hero bg-slate-400">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-400">
            <span className="flex inline-block">
              <label
                className={`text-2xl lg:text-5xl fi fi-${result1.CountryCode} w-10 mr-2 lg:mr-5`}
              />
              <h1 className="text-2xl lg:text-5xl font-bold">
                `{result1.CurrencyCode} - {result1.Currency_Name}
              </h1>
            </span>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div></div>
        </div>
      </div>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-6">
        <div className="transform scale-70 -rotate-6 translate-x-20 translate-y-30">
          <img src="/USD/US_one_dollar_bill.jpg" alt="" loading="lazy" />
        </div>
        <div className="transform scale-75 rotate-6 translate-x-2 translate-y-15">
          <img src="/USD/US_100_dollar.jpg" alt="" loading="lazy" />
        </div>
        <div className="transform scale-80 translate-y-11">
          <img
            src="/USD/50_USD_Series_2004_Note_Front.jpg"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="transform translate-y-24">
          <img
            src="/USD/US10dollarbill-Series_2004A.jpg"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="row-start-1 col-start-2 col-span-2 transform scale-50 translate-x-20 translate-y-4">
          <img src="/USD/US_$5_Series_2006_obverse.jpg" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
