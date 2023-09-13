"use client";
import { render } from "@react-email/render";
import WelcomeTemplate from "@/app/email/welcomeMail";
import { sendEmail } from "@/utils/email";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Inpt from "@/components/InputFltName";

import {
  faLocationDot,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { emailReq, emailReqB } from "@/models/semex";
import { json } from "stream/consumers";

interface IFormInput {
  name: string;
  mobile: string;
  email: string;
  subject: string;
  details: string;
}

export default function Contacts() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => sendMail(data);
  const isProd = process.env.NODE_ENV === "production";
  const bsePath = isProd ? "/fxnew" : "";
  function sendMail(data: IFormInput) {
    const adminMsg =
      "Dear Sir/Madam," +
      "\r\n \r\n" +
      "One Visitor submitted a message to you." +
      "\r\n\r\n" +
      "Please see Visitor Message below-" +
      "\r\n" +
      "Name:  " +
      data.name +
      "\r\n" +
      "Mobile: " +
      data.mobile +
      "\r\n" +
      "Email:" +
      data.email +
      +"\r\n\r\n" +
      "-----" +
      "\r\n" +
      data.details +
      "\r\n" +
      "-----" +
      "\r\n" +
      "Thank You for Choosing BefreshFX." +
      "\r\n" +
      ".............................................................." +
      "\r\n" +
      "This is an Auto-Generated E-mail, Please Do not reply to this E-mail.";

    const clientMsg =
      "Dear Sir/Madam," +
      "\r\n \r\n" +
      "One Visitor submitted a message to you." +
      "\r\n\r\n" +
      "Please see your Message below-" +
      "\r\n" +
      "-----" +
      "\r\n" +
      data.details +
      "\r\n" +
      "-----" +
      "\r\n" +
      "Thank You for Choosing BefreshFX." +
      "\r\n" +
      ".............................................................." +
      "\r\n" +
      "This is an Auto-Generated E-mail, Please Do not reply to this E-mail.";

    const mailData1: emailReq = new emailReqB(
      data.email,
      data.subject,
      clientMsg
    );
    const mailData2: emailReq = new emailReqB(
      "info@befreshfx.com",
      data.subject,
      adminMsg
    );
    const response1 = fetch(`${bsePath}/api/sendEmail`, {
      method: "POST",
      body: JSON.stringify(mailData1),
    });
    const response2 = fetch(`${bsePath}/api/sendEmail`, {
      method: "POST",
      body: JSON.stringify(mailData2),
    });
  }

  return (
    <div
      className="text-center md:py-4 border bg-gray-50 m-2 rounded shadow-lg md:m-8"
      id="fxContactus"
    >
      <h2 className="text-xl lg:text-4xl underline font-bold mb-2">
        CONTACT US
      </h2>
      <div className="list-item p-1 md:flex ">
        <div className="md:w-1/3">
          <p className="flex justify-left underline px-4 md:px-16">Contact</p>
          <p className="flex justify-left px-4 md:px-16">
            <FontAwesomeIcon icon={faLocationDot} className="mr-3 mt-1" />
            South East Money Exchange Ltd.
          </p>
          <p className="flex justify-left px-10 md:px-16">
            Golden Plaza (5th Floor),
          </p>
          <p className="flex justify-left px-10 md:px-16">
            1692 CDA Avenue, GEC Moor,
          </p>
          <p className="flex justify-left px-10 md:px-16">
            Chattogram, Bangladesh.
          </p>
          <p className="flex justify-left px-4 md:px-16">
            <FontAwesomeIcon icon={faMobile} className="mr-3 mt-1" />
            +88 017 3044 4519
          </p>
          <p className="flex justify-left px-4 md:px-16">
            <FontAwesomeIcon icon={faEnvelope} className="mr-3 mt-1" />
            info@befreshfx.com
          </p>
        </div>
        <div className="md:w-1/3">
          <p className="flex justify-left underline px-4 md:px-16">
            We Are Here
          </p>
          <div className="h-48 w-full flex justify-center items-center">
            <div>
              <iframe
                title="googleMap"
                src="https://www.google.com/maps/embed/v1/place?q=South+East+Money+Exchange+Limited,+CDA+Avenue,+Chattogram,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-start px-4 md:w-1/3"
        >
          <a
            href="#"
            id="openModalButton"
            className="underline justify-start pb-2"
          >
            Tell Us More
          </a>
          <div className="mb-4">
            {/* <label className="block text-gray-600">Name</label> */}
            <Inpt {...register("name")} placeHolder={"Name"} id={"name"} />
          </div>
          {/* Mobile and Email */}
          <div className="mb-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                {/* <label className="block text-gray-600">Mobile</label> */}
                <Inpt
                  {...register("mobile")}
                  placeHolder={"Mobile"}
                  id={"mobile"}
                />
              </div>
              <div className="w-1/2">
                {/* <label className="block text-gray-600">Email</label> */}
                <Inpt
                  required
                  {...register("email")}
                  id={"email"}
                  placeHolder={"Email"}
                />
              </div>
            </div>
          </div>
          {/* Subject with dropdown */}
          <div className="mb-4">
            {/* <label className="block text-gray-600">Subject</label> */}
            <select
              required
              {...register("subject")}
              title="Subject"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="Enquiry">Enquiry</option>
              <option value="Suggestions">Suggestions</option>
              <option value="Complain">Complain</option>
              <option value="Others">Others</option>
            </select>
          </div>
          {/* Details */}
          <div className="mb-4">
            {/* <label className="block text-gray-600">Details</label> */}
            <textarea
              required
              {...register("details")}
              placeholder="Details"
              className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none"
              rows={3}
            ></textarea>
          </div>
          {/* Send Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
