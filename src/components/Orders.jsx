import React, { useEffect, useState } from "react";
import loading from "./assets/loading.svg";
import exchange from "./assets/exchange.svg";
import copy from "./assets/copy.svg";
import loadingTimer from "./assets/loading-timer.png";
import {
  bch,
  bnb,
  btc,
  eth,
  etc,
  ftm,
  ltc,
  sol,
  trx,
  usdt,
  xrp,
  zec,
} from "./assets";
import QRCode from "react-qr-code";

const Orders = () => {
  const options = [
    {
      price: 18349.21133,
      fullName: "Bitcoin",
      indexName: "BTC",
      icon: btc,
    },
    {
      price: 1405.43482,
      fullName: "Ethereum",
      indexName: "ETH",
      icon: eth,
    },
    {
      price: 278.16,
      fullName: "Binance Smart Chain",
      indexName: "BNB",
      icon: bnb,
    },
    {
      price: 107.21,
      fullName: "Bitcoin Cash",
      indexName: "BCH",
      icon: bch,
    },
    {
      price: 19.86,
      fullName: "Ethereum Classic",
      indexName: "ETC",
      icon: etc,
    },
    {
      price: 0.237085,
      fullName: "Fantom",
      indexName: "FTM",
      icon: ftm,
    },
    {
      price: 15.68,
      fullName: "Solana",
      indexName: "SOL",
      icon: sol,
    },
    {
      price: 81.76,
      fullName: "Litecoin",
      indexName: "LTC",
      icon: ltc,
    },
    {
      price: 0.055,
      fullName: "Tron",
      indexName: "TRX",
      icon: trx,
    },
    {
      price: 1,
      fullName: "Tether (ERC20)",
      indexName: "USDT",
      icon: usdt,
    },
    {
      price: 0.37,
      fullName: "Ripple",
      indexName: "XRP",
      icon: xrp,
    },
    {
      price: 43.737454,
      fullName: "Zcash",
      indexName: "ZEC",
      icon: zec,
    },
  ];

  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(30);

  const [Loading, setLoading] = useState(true);
  const Orders = JSON.parse(localStorage.getItem("Order"));

  if (Orders) {
    setInterval(() => {
      setMinutes(
        29 -
          Math.floor(Math.abs((Orders.date - new Date().getTime()) / 1000 / 60))
      );
      setSeconds(
        59 -
          Math.floor(
            Number(
              "0." +
                String(
                  Math.abs((Orders.date - new Date().getTime()) / 1000 / 60)
                ).split(".")[1]
            ) * 60
          )
      );
    }, 1000);
  }

  const [isPaid, setIsPaid] = useState(false);

  const findPrice = (e) => {
    return options.filter((i) => i.fullName === e);
  };

  let icon1;
  let icon2;
  let adress;
  let adressTo;

  if (Orders) {
    icon1 = findPrice(Orders.value)[0].icon;
    icon2 = findPrice(Orders.secondValue)[0].icon;
    adress = Orders.Adress.slice(Orders.Adress.length / 2, -1)
      .split("")
      .map((i, idx) => (idx < 3 ? "." : i))
      .join("");
    adressTo = Orders.adressTo
      .slice(0, Orders.adressTo.length / 2)
      .split("")
      .map((i, idx) => (idx > Orders.adressTo.length / 2 - 3 ? "." : i))
      .join("");
  }

  const [isCopied, setCopied] = useState(false);

  function CopyMe(TextToCopy) {
    var TempText = document.createElement("input");
    TempText.value = TextToCopy;
    document.body.appendChild(TempText);
    TempText.select();
    setCopied(true);

    document.execCommand("copy");
    document.body.removeChild(TempText);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 700);
  }, []);

  return (
    <div className="text-white mt-[70px]">
      <div className="full-w justify-center flex min-h-[50vh]">
        {Loading ? (
          <img src={loading} alt="" width={100} height={100} className="icon" />
        ) : Orders && minutes >= 0 ? (
          <div className="w-full background-white relative">
            <div className="absolute top-[40%] left-[50%] translate-x-[-50%] l:top-[30%] ssss">
              <div className="w-[100px] h-[100px] rounded-full relative flex justify-center items-center">
                <img
                  src={loadingTimer}
                  alt=""
                  className="absolute z-1 w-[100%] h-[100%] loading"
                />
                <div className="flex flex-col justify-center">
                  <h5 className="font-semibold text-[16px]">Time</h5>
                  <p className="font-semibold opacity-90">
                    {minutes > 9 ? minutes : "0" + minutes}:
                    {seconds > 9 ? seconds : "0" + seconds}
                  </p>
                </div>
              </div>
            </div>
            <div className="container order-panel mx-auto max-w-6xl px-[15px]">
              <div className="order__left w-full">
                <div className="flex items-center title_block">
                  <p className="text-[36px] gradient font-bold opacity-100 inline">
                    Request
                  </p>
                  <p className="text-[48px] text-white font-bold inline ml-[20px]">
                    {Orders.p.toUpperCase()}
                  </p>
                </div>
                <h3 className="mt-[40px] mb-[10px] text-[24px] text-white font-bold">
                  Pair to exchange
                </h3>

                <div className="exchange__pairs w-full relative">
                  <label
                    htmlFor="input__exchange2"
                    className="label__input text-white text-[18px] font-semibold ml-[25px]"
                  >
                    {Orders.value}
                  </label>

                  <h4
                    id="input__exchange2"
                    type="text"
                    className="exchange__input read-only flex items-center gap-2 sm:w-[80%] w-[100%] pt-[32px] font-semibold text-[20px] pl-[10px]"
                    placeholder="12.213"
                  >
                    <img src={icon1} alt="" />
                    {Orders.Amount}
                  </h4>
                </div>
                <div className="exchange__pairs w-full relative">
                  <label
                    htmlFor="input__exchange2"
                    className="label__input text-white text-[18px] font-semibold ml-[25px]"
                  >
                    {Orders.secondValue}
                  </label>

                  <h4
                    id="input__exchange2"
                    type="text"
                    className="exchange__input read-only flex items-center gap-2 sm:w-[80%] w-[100%] pt-[32px] font-semibold text-[20px] mt-[20px] pl-[10px]"
                    placeholder="12.213"
                  >
                    <img src={icon2} alt="" />
                    {Math.ceil(
                      ((Orders.Amount * Orders.price) / Orders.secondPrice) *
                        1000000
                    ) / 1000000}
                  </h4>
                </div>
                <div className="exchange__pairs w-full relative">
                  <label
                    htmlFor="input__exchange2"
                    className="label__input text-white text-[18px] font-semibold ml-[25px]"
                  >
                    End details
                  </label>

                  <h4
                    id="input__exchange2"
                    type="text"
                    className="exchange__input read-only flex items-center gap-2 sm:w-[80%] w-[100%] pt-[32px] font-semibold text-[20px] mt-[20px] pl-[10px]"
                    placeholder="12.213"
                  >
                    <img src={exchange} alt="" />
                    {adress}
                  </h4>
                </div>
                <div className="labels mt-[20px] flex gap-[20px]">
                  <h6 className="rounded-full bg-blue-gradient px-[12px] py-[8px] inline font-semibold bg-blue-shadow">
                    Fixed
                  </h6>
                  <h6 className="rounded-full bg-black-gradient px-[12px] py-[8px] inline font-semibold bg-blue-shadow">
                    {minutes > 9 ? minutes : "0" + minutes}:
                    {seconds > 9 ? seconds : "0" + seconds}
                  </h6>
                </div>
                <div className="course-block mt-[60px] mb-[40px]">
                  <h5 className="font-poppins text-[26px] font-semibold">
                    The course is fixed for 30 minutes
                  </h5>
                  <p className="mt-[10px] max-w-m text-[18px] opacity-70">
                    If the 1st network confirmation is not received within this
                    time, the rate will be fixed at the time of receiving the
                    1st confirmation. The exchange will be done automatically,
                    after the 1st confirmation of your transaction on the
                    network
                  </p>
                </div>
                <div className="payments mt-[20px] font-poppins">
                  <div
                    className={` ${
                      isPaid ? "opacity-60" : "active"
                    } first-step flex gap-[20px]`}
                  >
                    <p
                      className={` p-[15px] bg-black-gradient inline-block text-[20px] rounded-md font-semibold `}
                    >
                      1
                    </p>
                    <div>
                      <h5 className="font-semibold text-[28px]">
                        Payment processing
                      </h5>
                      <p>
                        After you send your payment, our robot will
                        automatically see your transaction. You do not need to
                        click anywhere or write to support
                      </p>
                    </div>
                  </div>
                  <div
                    className={`second-step flex mt-[20px] gap-[20px] ${
                      isPaid ? "active" : "not__active"
                    }`}
                    id="part2"
                  >
                    <p
                      className={` p-[15px] bg-black-gradient inline-block text-[20px] rounded-md font-semibold `}
                    >
                      2
                    </p>
                    <div>
                      <h5 className="font-semibold text-[28px]">Translation</h5>
                      <p>
                        After we receive your payment, our system will
                        immediately transfer your funds
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order__right font-poppins">
                <div className="order-top rounded-xl">
                  <h3 className="order__title px-[20px] py-[25px] font-poppins text-[28px] relative">
                    Submit here{" "}
                  </h3>
                  <div className="p-[20px] relative">
                    <div className="btc-block items-center w-full flex">
                      <div className="pt-[40px] pb-[60px] px-[20px] flex gap-[20px] gray w-full rounded-lg">
                        <img src={icon1} alt="" className="w-[70px] h-[70px]" />
                        <div className="btc-content">
                          <p className="opacity-80">You're sending</p>
                          <p className="mt-[10px] text-[18px] font-medium">
                            1 BTC
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-0 w-[70%] box-border left-[15%] rounded-lg">
                        <div className="exchange__pairs w-full relative border-input">
                          <label
                            htmlFor="input__exchange2"
                            className="label__input  text-white text-[16px] ml-[0px] font-think"
                          >
                            To our details
                          </label>

                          <h4
                            id="input__exchange2"
                            type="text"
                            className="exchange__input read-only flex items-center gap-2 w-[100%] pt-[32px] font-semibold sm:text-[20px] text-[14px] pl-[20px]"
                          >
                            {adressTo}
                          </h4>
                          <p
                            className={`absolute right-3 top-[12%] pointer transition duration-150 p-[10px] rounded-lg ${
                              isCopied ? "bg-green-500" : "bg-black/50"
                            }`}
                            onClick={() => CopyMe(Orders.adressTo)}
                          >
                            <img
                              src={copy}
                              alt=""
                              className="w-[35px] h-[35px]"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="qr-code my-[36px] mx-[18px] gray py-[24px] rounded-lg sm:flex flex-column sm:justify-between justify-center items-center">
                    <div
                      style={{
                        height: "auto",
                        maxWidth: 128,
                        width: "100%",
                      }}
                      className="sm:ml-[24px] mx-auto"
                    >
                      <QRCode
                        size={256}
                        style={{
                          height: "auto",
                          maxWidth: "100%",
                          width: "100%",
                          padding: "16px",
                          backgroundColor: "#fff",
                        }}
                        value={Orders.adressTo}
                        viewBox={`0 0 256 256`}
                      />
                    </div>
                    <div className="px-[20px] sm:text-left text-center sm:mt-0 mt-[20px]">
                      <p className="text-[18px] font-semibold">
                        QR code for in-
                        <br />
                        app payment
                      </p>
                      <p className="text-[14px] mt-[10px]">
                        Point the camera while translating from the app
                      </p>
                    </div>
                  </div>
                  <div className="arleady__paid px-[18px] pb-[42px]">
                    <h5 className="text-[22px]">Already paid?</h5>
                    <p className="mt-[8px] opacity-70">
                      After completing the transaction using our details, click
                      on the “I paid” button below. After that the process of
                      fulfilling your application will begin{" "}
                    </p>
                    <button
                      className="text-black border-spacing-0 px-[18px] py-[8px] bg-blue-gradient rounded-full mt-[30px]"
                      onClick={() => {
                        setIsPaid(true);
                        const elem = document.querySelector("#part2");
                        elem.scrollIntoView({
                          behavior: "auto",
                          block: "center",
                          inline: "center",
                        });
                      }}
                    >
                      I paid
                    </button>
                  </div>
                </div>
                <div className="order-bottom"></div>
              </div>
            </div>
            <div className="w-full bg-black-gradient mt-[80px]">
              <div className="container mx-auto py-[40px] max-w-6xl px-[20px]">
                <h4 className="text-[48px] font-semibold">Attention!</h4>
                <h5 className="text-[20px] mt-[20px] mb-[20px]">
                  Please note that the service does not accept funds from
                  high-risk sources. Each incoming transaction is verified
                  through an independent AML service. If the transaction has
                  more than 70% risk, such payments will be suspended. And after
                  passing identity verification, they will be returned to you
                  minus the network commission! The exchange of such funds
                  impossible! We recommend to increase the commission in the
                  system in order to speed up the transaction Bitcoin.{" "}
                </h5>
              </div>
            </div>
          </div>
        ) : (
          <div className="orders-yet">
            <h1 className="font-poppins text-[40px] gradient">Your orders</h1>
            <p className="text-center font-poppins text-[28px]">
              No orders yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
