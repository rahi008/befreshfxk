import React, { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import CmbBox from "@/app/components/cmbBox";
import { Currency_rate } from "@/app/models/semex";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import { emailReq, emailReqB } from "@/app/models/semex";
import { format } from "date-fns";
import formatPhoneNumber from "../utils/phnNumberFormatter";
export const revalidate = 0;
interface IQFormInput {
  name: string;
  mobile: string;
  email: string;
  side: string;
  currency: string;
  amnt: number;
}

export default function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void; // Change the type of onClose
}) {
  const [selectedOption, setSelectedOption] = useState<string | null>("Buy");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [currencyList, setCurrencyList] = useState<Currency_rate[]>([]);
  const [Currency, setCurrency] = useState<Currency_rate | undefined>();
  const [amount, setAmount] = useState<number>(0);
  const inptAmntRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const isProd = process.env.NODE_ENV === "production";
        const bsePath = isProd ? "/fxnew" : "";
        const response = await fetch(`${bsePath}/api/getCurrencyRates`);
        const data = await response.json();
        await setCurrencyList(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  function clearFrm() {
    reset();
    setAmount(0);
    setCurrency(undefined);
  }
  // Function to close the modal and reset the form
  const closeModal = () => {
    clearFrm();
    onClose();
  };

  // Attach a click event listener to the overlay element
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal(); // Close the modal when clicking outside
    }
  };
  const options = ["Buy", "Sell"];
  const { register, handleSubmit, reset, setValue } = useForm<IQFormInput>({
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      side: "Buy", // Initialize the side with Buy or Sell based on your requirement
      currency: "", // Initialize with an empty string or a default currency
      amnt: 0, // Initialize with 0 or the default amount
    },
  });
  const onQSubmit: SubmitHandler<IQFormInput> = (data) => {
    try {
      sendNotifications(data);
      reset();
      setAmount(0);
      setCurrency(undefined);
      Swal.fire({
        title: "Success!",
        text: "Your Query is Successfully Submitted!",
        icon: "success",
      }).then(() => {
        onClose(); // Close the modal
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error,
        icon: "error", // 'success', 'error', 'warning', 'info', or 'question'
      });
    }
  };
  const isProd = process.env.NODE_ENV === "production";
  const bsePath = isProd ? "/fxnew" : "";
  function sendNotifications(data: IQFormInput) {
    const admnMsg = `
    <html>
      <body>
        <p>Dear Sir/Madam,</p>
        <p>${selectedOption.toUpperCase()} Query of ${
          Currency.CurrencyCode
        } ${Number(inptAmntRef.current?.value).toLocaleString("en-in")}@ Tk 
          ${
            selectedOption == "Buy"
              ? Currency.Selling_Rate
              : Currency.Buying_Rate
          } sent by Mr. ${data.name} on ${format(
            new Date(),
            "d MMM yyyy hh:mm:ss a"
          )}.</p>
        <p>Please see Visitor Details below-</p>
        <p>Name: ${data.name}</p>
        <p>Mobile: ${formatPhoneNumber(data.mobile)}</p>
        <p>Email: ${data.email}</p>
        <p>Thank You for Choosing BefreshFX.</p>
        <p>This is an Auto-Generated E-mail, Please Do not reply to this Email.</p>
      </body>
    </html>
    `;

    const clntMsg = `
    <html>
      <body>
        <p>Dear Sir/Madam,</p>
        <p>Your ${selectedOption.toUpperCase()} Query of ${
          Currency.CurrencyCode
        } ${Number(inptAmntRef.current?.value).toLocaleString("en-in")}@ Tk ${
          selectedOption == "Buy" ? Currency.Selling_Rate : Currency.Buying_Rate
        } is submitted successfully.</p>
        <p>Thank You for Choosing BeFreshFx.</p>
        <p>This is an Auto-Generated E-mail, Please Do not reply to this Email.</p>
      </body>
    </html>
    `;
    const sms =
      `${selectedOption.toUpperCase()} Query of ${
        Currency.CurrencyCode
      } ${Number(inptAmntRef.current?.value).toLocaleString("en-in")}@Tk ` +
      `${
        selectedOption == "Buy" ? Currency.Selling_Rate : Currency.Buying_Rate
      } sent by Mr. ${data.name}(${formatPhoneNumber(data.mobile)}) on ${format(
        new Date(),
        "d MMM yyyy"
      )}.`;
    // fetch(
    //   "http://119.18.148.10/Emarketing/Handler.ashx?cid=" +
    //     "Be Fresh" +
    //     "&phn=01730042500&msg=" +
    //     sms +
    //     "&pwd=" +
    //     "spss2016"
    // );
    // fetch(
    //   "http://119.18.148.10/Emarketing/Handler.ashx?cid=" +
    //     "Be Fresh" +
    //     "&phn=01730444519&msg=" +
    //     sms +
    //     "&pwd=" +
    //     "spss2016"
    // );
    fetch(
      `https://01.limited/TelegramApi/sendTelegram?cid=01%20Limited&country=BANGLADESH&to=&body=${sms}&token=aLuVorta&groupmsg=y&groupname=BeFreshFX`
    );
    const mailData3: emailReq = new emailReqB(data.email, "Query", clntMsg);
    const mailData4: emailReq = new emailReqB(
      "info@befreshfx.com",
      "Query",
      admnMsg
    );
    const response1 = fetch(`${bsePath}/api/sendEmail`, {
      method: "POST",
      body: JSON.stringify(mailData3),
    });
    // const response2 = fetch(`${bsePath}/api/sendEmail`, {
    //   method: "POST",
    //   body: JSON.stringify(mailData4),
    // });
  }
  const handleCurrencyChange = (selectedCurrency: Currency_rate) => {
    setCurrency(selectedCurrency);
  };
  function handleCChange(opt = "") {
    console.log(opt);
    const sOpt = opt ? opt : selectedOption;
    if (sOpt == "Buy" && Currency) {
      const tempV =
        Number(Currency?.Selling_Rate) * Number(inptAmntRef.current?.value);
      setAmount(tempV);
    } else if (sOpt == "Sell" && Currency) {
      const tempV =
        Number(Currency?.Buying_Rate) * Number(inptAmntRef.current?.value);
      setAmount(tempV);
    }
  }
  return (
    <Transition show={isOpen} as={React.Fragment}>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen ">
          <Transition.Child
            as={React.Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black opacity-30"
              onClick={onClose}
            ></div>
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter="transition-transform duration-300"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transition-transform duration-300"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
          >
            <div className="z-10 w-full max-w-xl mx-auto bg-white rounded-md shadow-xl">
              <div className="flex justify-between bg-teal-600  pl-6 ">
                <h3 className="text-lg text-white font-semibold mt-1">
                  Send Us Query
                </h3>
                <button
                  className="text-white bg-red-600 px-4 py-2 hover:text-red-700"
                  onClick={() => {
                    clearFrm(); // Reset the form when the modal is closed
                    onClose(); // Close the modal
                  }}
                >
                  x
                </button>
              </div>
              <div className="p-2 md:p-6">
                <form onSubmit={handleSubmit(onQSubmit)}>
                  <div className="border border-slate-600 p-2 mt-2 rounded">
                    <div className="mt-4 flex flex-row">
                      <label className="block mb-2 font-bold text-2xl">
                        I want to
                      </label>
                      <span className="space-x-4 ml-4">
                        {options.map((option, index) => (
                          <button
                            // {...register("side")}
                            type="button"
                            key={index}
                            className={`py-1 px-3 border ${
                              selectedOption === option
                                ? "bg-blue-500 text-white"
                                : "border-gray-300"
                            } rounded-md`}
                            onClick={() => {
                              setSelectedOption(option);
                              handleCChange(option);
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </span>
                    </div>

                    <div className="mt-4 flex flex-col md:flex-row md:justify-between">
                      <CmbBox
                        currencyList={currencyList}
                        onChange={handleCurrencyChange}
                      />
                      <input
                        {...register("amnt")}
                        ref={inptAmntRef}
                        type="text"
                        placeholder="Amount"
                        className="border border-gray-300 rounded-md px-3 py-2 mt-2 md:mt-0 text-right"
                        onChange={() => handleCChange("")}
                      />
                    </div>
                    <div className="text-xs text-right mb-0 mt-1 mr-3">
                      {Currency
                        ? `@BDT ${
                            selectedOption == "Buy"
                              ? Currency.Selling_Rate
                              : Currency.Buying_Rate
                          }`
                        : ``}
                    </div>
                    <div className="mt-0 mr-3 text-right font-bold text-lg text-black">
                      BDT {amount.toLocaleString("en-in")}
                    </div>
                  </div>
                  <div className="border border-slate-600 p-2 mt-2 rounded">
                    <div className="mt-4">
                      <input
                        {...register("name")}
                        type="text"
                        placeholder="Name"
                        className="w-full border border-gray-300 rounded-md px-3 py-2"
                      />
                    </div>

                    <div className="mt-4">
                      <div className="flex flex-col md:flex-row md:space-x-4">
                        <input
                          {...register("mobile")}
                          type="text"
                          placeholder="Mobile"
                          className="md:w-1/2 border border-gray-300 rounded-md mb-2 md:mb-0 md:px-3 py-2"
                        />
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="Email"
                          className="md:w-1/2 border border-gray-300 rounded-md md:px-3 py-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-right">
                    <button
                      type="submit"
                      className="btn-green text-white px-4 py-2 rounded-sm"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <label className="text-sm">
                  Soon, a representative from BeFreshFX will contact you.
                </label>
              </div>
            </div>
          </Transition.Child>
        </div>
      </div>
    </Transition>
  );
}
