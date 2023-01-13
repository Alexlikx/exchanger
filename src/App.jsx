import styles from "./style";
import loading from "./components/assets/loading.svg";
import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Stats,
  Testimonials,
  Hero,
  Exchange,
} from "./components";
import "./index.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const App = () => {
  const [Loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 700);

  return (
    <>
      {Loading ? (
        <div className="full-w justify-center flex min-h-[80vh]">
          <img src={loading} alt="" width={100} height={100} className="icon" />
        </div>
      ) : (
        <>
          <div className={`bg-primary ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div>

          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`} style={{ margin: "0 auto" }}>
              <Exchange />
              <Stats />
              <Business />
              <Billing />
              <CardDeal />
              <Testimonials />
              <Clients />
              <CTA />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;
