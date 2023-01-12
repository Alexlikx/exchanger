import { useState } from "react";
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

function App() {
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

  const findPrice = (e) => {
    return options.filter((i) => i.fullName === e.target.innerText);
  };

  const [value, setValue] = useState("Bitcoin");
  const [firstIcon, setFirstIcon] = useState(options[0].icon);
  const [isActiveFirst, setIsActiveFirst] = useState(false);
  const [secondValue, setSecondValue] = useState("Ethereum");
  const [price, setPrice] = useState(18349.21133);
  const [secondPrice, setSecondPrice] = useState(1405.43482);
  const [errors, setErrors] = useState(0);
  const [promo, setPromo] = useState("");
  const [secondIcon, setSecondIcon] = useState(options[1].icon);
  const [isActiveSecond, setIsActiveSecond] = useState(false);
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");

  const validateInput = () => {
    if (
      value &&
      secondValue &&
      price &&
      secondPrice &&
      exchangeAmount &&
      adress &&
      email
    ) {
      console.log({
        value,
        secondValue,
        price,
        secondPrice,
        exchangeAmount,
        adress,
        email,
      });
    }
  };

  return (
    <div className="container font-poppins pt-[50px] mb-[100px]" id="exchange">
      <div className="exchange-panel">
        <h1 className="sell__title text-white text-[30px]">
          Sell {value} for {secondValue}
        </h1>
        <div className="flex__box">
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
          <div className="first__exchange">
            <label
              htmlFor="input__exchange1"
              className="label__input text-white"
            >
              You Send
            </label>
            <input
              type="text"
              onChange={(e) => {
                setExchangeAmount(e.target.value);
                validateInput(e.target.value);
              }}
              className="exchange__input"
              id="input__exchange1"
              placeholder="12.213"
            />
          </div>
          <div className="first__exchange">
            <label
              htmlFor="input__exchange2"
              className="label__input text-white"
            >
              You Get
            </label>
            <input
              value={
                Math.ceil(
                  ((exchangeAmount * price * 1.08) / secondPrice) * 1000000
                ) / 1000000
              }
              id="input__exchange2"
              type="text"
              className="exchange__input"
              placeholder="12.213"
            />
          </div>
          <div className="first__exchange">
            <label
              htmlFor="input__exchange3"
              className="label__input text-white"
            >
              Your Email
            </label>
            <input
              placeholder="exchange@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="exchange__input"
              id="input__exchange3"
            />
          </div>
          <div className="first__exchange">
            <label
              htmlFor="input__exchange4"
              className="label__input text-white"
            >
              Enter {secondValue} Adress
            </label>
            <input
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
              className="exchange__input"
              id="input__exchange4"
            />
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
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
              className="exchange__input"
              id="input__exchange5"
            />
          </div>
          <div className="submit__shelf">
            <button
              className="submit__btn pointer"
              onClick={() => validateInput()}
            >
              Proceed to payment
            </button>
            <span className="span__rules">
              By clicking the button, you agree to the{" "}
              <a href="/rules" className="rules__link">
                Rules
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
