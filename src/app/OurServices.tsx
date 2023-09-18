import React from "react";
import { faCog, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "@/app/components/imge";

const OurServices: React.FC = () => {
  return (
    <section className="bg-gray-100 rounded py-8 mx-2 md:mx-8" id="fxServices">
      <div className="container mx-auto text-center">
        <h2 className="text-xl lg:text-4xl underline font-bold mb-4">
          Our Services
        </h2>
        <div className=" grid grid-cols-1 m-2 md:grid-cols-2">
          <div className="flex justify-end mb-2 md:mr-2">
            <div className="card w-96 glass">
              <figure className="h-64">
                <Image
                  src="54953.jpg"
                  width={500}
                  height={450}
                  alt="car!"
                  className="h-auto"
                  unoptimized={true}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Foreign Currency Buy/Sell</h2>
                <p>Buy</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-blue">More...</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start mb-2 md:mb-0">
            <div className="card w-96 glass">
              <figure className="h-64">
                <Image
                  src="immigration_08.jpg"
                  width={500}
                  height={450}
                  alt="car!"
                  className="h-auto"
                  unoptimized={true}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Endorsement on Passport</h2>
                <p></p>
                <div className="card-actions justify-end">
                  <button className="btn btn-blue">More...</button>
                </div>
              </div>
            </div>
          </div>
          {/*
      <ServiceCard title="Endorsement on Passport"
        description="Praesent ut metus non arcu facilisis hendrerit. Vivamus tristique purus vel ligula sagittis lacinia."
        icon={<FontAwesomeIcon icon={faLightbulb} className="text-yellow-500 text-4xl" />}
      image="/image2.jpg"
      /> */}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
