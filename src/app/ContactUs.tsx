"use client";
import { render } from "@react-email/render";
import WelcomeTemplate from "@/app/email/welcomeMail";
import { sendEmail } from "@/app/utils/email";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm, SubmitHandler } from "react-hook-form";
import Inpt from "@/app/components/InputFltName";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import {
  faLocationDot,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { emailReq, emailReqB } from "@/app/models/semex";
import { json } from "stream/consumers";
export const revalidate = 0;
interface IFormInput {
  name: string;
  mobile: string;
  email: string;
  subject: string;
  details: string;
}

export default function Contacts() {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    try {
      sendMail(data);
      reset();
      Swal.fire({
        title: "Success!",
        text: "Your Message is Successfully Submitted!",
        icon: "success", // 'success', 'error', 'warning', 'info', or 'question'
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
  function sendMail(data: IFormInput) {
    const adminMsg = `
    <html>
      <body>
        <p>Dear Sir/Madam,</p>
        <p>One Visitor Submitted a Message to You.</p>
        <p>Please see Visitor Message below-</p>
        <p>Name: {{name}}</p>
        <p>Mobile: {{mobile}}</p>
        <p>Email: {{email}}</p>
        <p>-----</p>
        <p>{{message}}</p>
        <p>-----</p>
        <p>Thank You for Choosing BefreshFX.</p>
        <p>..............................................................</p>
        <p>This is an Auto-Generated E-mail, Please Do not reply to this E-mail.</p>
      </body>
    </html>
    `;

    const formattedAMsg = adminMsg
      .replace("{{name}}", data.name)
      .replace("{{mobile}}", data.mobile)
      .replace("{{email}}", data.email)
      .replace("{{message}}", data.details.replace(/\n/g, "<br>"));
    const clientMsg = `
    <html>
      <body>
        <p>Dear Sir/Madam,</p>
        <p>Your Message is Submitted Successfully.</p>
        <p>Please see your Message below-</p>
        <p>-----</p>
        <p>{{message}}</p>
        <p>-----</p>
        <p>Thank You for Choosing BeFreshFx.</p>
        <p>..............................................................</p>
        <p>This is an Auto-Generated E-mail, Please Do not reply to this E-mail.</p>
      </body>
    </html>
    `;
    const formattedCMsg = clientMsg.replace(
      "{{message}}",
      data.details.replace(/\n/g, "<br>")
    );
    const mailData1: emailReq = new emailReqB(
      data.email,
      data.subject,
      formattedCMsg
    );
    const mailData2: emailReq = new emailReqB(
      "info@befreshfx.com",
      data.subject,
      formattedAMsg
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
      <div className="list-item p-1 md:flex justify-center">
        <div className="space-y-1">
          <div className="card lg:card-side bg-base-100 shadow-xl gap-0 border-black  border-2">
            <div className="card-body gap-0">
              <h2 className="card-title">Business Office</h2>
              <p className="flex justify-left ">
                <FontAwesomeIcon icon={faLocationDot} className="mr-3 mt-1" />
                South East Money Exchange Limited
              </p>
              <p className="flex justify-left ">Golden Plaza (5th Floor)</p>
              <p className="flex justify-left ">1692 CDA Avenue, GEC Moor</p>
              <p className="flex justify-left ">Chattogram, Bangladesh</p>
              <p className="flex justify-left ">
                <FontAwesomeIcon icon={faMobile} className="mr-3 mt-1" />
                +88 017 3044 4519
              </p>
              <p className="flex justify-left ">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3 mt-1" />
                info@befreshfx.com
              </p>
            </div>
            <figure className="px-4 py-2">
              <iframe
                title="googleMap"
                src="https://www.google.com/maps/embed/v1/place?q=South+East+Money+Exchange+Limited,+CDA+Avenue,+Chattogram,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              ></iframe>
            </figure>
          </div>
          <div className="card lg:card-side bg-base-100 shadow-xl gap-0 border-black border-2">
            <div className="card-body gap-0">
              <h2 className="card-title">Liaison Office</h2>
              <p className="flex justify-left ">
                <FontAwesomeIcon icon={faLocationDot} className="mr-3 mt-1" />
                SmartHub (5th Floor)
              </p>
              <p className="flex justify-left ">RAHIM&apos;s plaza de CPDL</p>
              <p className="flex justify-left ">Zakir Hossain Road</p>
              <p className="flex justify-left ">Khulshi-4225</p>
              <p className="flex justify-left ">Chattogram, Bangladesh</p>
              <p className="flex justify-left ">
                <FontAwesomeIcon icon={faMobile} className="mr-3 mt-1" />
                +88 018 1003 1205
              </p>
            </div>
            <figure className="px-4 py-2">
              <iframe
                title="googleMap"
                src="https://maps.google.com/maps?q=rahims%20plaza%20de&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </figure>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-start px-4 md:w-1/3 shadow-lg border-black border-2 rounded-2xl mt-2 pb-2 md:pb-0 md:mt-0 md:ml-2"
        >
          <label id="openModalButton" className="underline justify-start mb-2">
            Tell Us More
          </label>
          <div className="mb-2 mt-2">
            {/* <label className="block text-gray-600">Name</label> */}
            <Inpt
              // {...register("name")}
              req={true}
              placeHolder={"Name"}
              id="name"
              name="name"
              register={register}
            />
          </div>
          {/* Mobile and Email */}
          <div className="mb-2 mt-2">
            {/* <label className="block text-gray-600">Mobile</label> */}
            <Inpt
              // {...register("mobile")}
              req={true}
              placeHolder="Mobile"
              id="mobile"
              name="mobile"
              register={register}
            />
          </div>
          <div className="mb-2 mt-2">
            {/* <label className="block text-gray-600">Email</label> */}
            <Inpt
              // {...register("email")}
              req={true}
              id="email"
              register={register}
              name="email"
              placeHolder="Email"
            />
          </div>

          {/* Subject with dropdown */}
          <div className="mb-2">
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
          <div className="mb-2">
            {/* <label className="block text-gray-600">Details</label> */}
            <textarea
              required
              {...register("details")}
              placeholder="Details"
              className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none"
              rows={5}
            ></textarea>
          </div>
          {/* Send Button */}
          <div className="flex justify-end ">
            <button type="submit" className="btn-blue px-4 py-2">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
