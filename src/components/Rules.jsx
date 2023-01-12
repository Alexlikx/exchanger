import React from "react";
import styles from "../style";

const Rules = () => {
  return (
    <div
      className={`bg-primary ${styles.paddingX} ${styles.flexCenter} mt-[70px] font-poppins`}
    >
      <div className={`${styles.boxWidth}`}>
        <h1 className="text-white text-[64px] font-medium font-poppins gradient">
          Service rules
        </h1>
        <h2 className="text-white text-[40px] font-medium font-poppins mt-[40px] gradient">
          Purpose and scope
          <br /> Rules of Service
        </h2>
        <div className="text-white opacity-80">
          <p className=" mt-[30px]">
            1.1. These Rules for the provision of services by the service
            hoobank.com (hereinafter - Rules) establish requirements and contain
            a description of:
          </p>
          <p className=" mt-[30px]">
            1.1.1. Procedure for providing the multicurrency exchange service
            hoobank.com
          </p>
          <p className=" mt-[30px]">
            1.1.2. Public offer To users of the services of the service
            hoobank.com
          </p>
          <p className=" mt-[30px]">
            1.1.3. Separation of responsibility for the use and provision of
            services by the service hoobank.com
          </p>
          <p className=" mt-[30px]">
            1.1.4. Measures to minimize the risk of money laundering and
            terrorist financing.
          </p>
          <p className=" mt-[30px]">
            1.2. hoobank.com or Service - a system that provides Users with the
            opportunity to exchange crypto-currencies for electronic money and
            (or) national currency, as well as the exchange of electronic of
            money and (or) national currency for a cryptocurrency located and
            functioning on a website in the network Internet at hoobank.com
          </p>
          <p className=" mt-[30px]">
            1.3. The service is located in the territory of the state of
            Belgium. According to the current legislative regulation, in Belgium
            the activity on the civil circulation of cryptocurrency normatively
            not regulated
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
