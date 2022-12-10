import { FunctionComponent } from "react";
import styles from "./Main.module.css";

const Main: FunctionComponent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <div className={styles.div}>
          <div className={styles.div1}>
            <div className={styles.div2}>
              <div className={styles.div3} />
              <div className={styles.div3} />
            </div>
          </div>
          <div className={styles.div5}>
            <img className={styles.imageIcon} alt="" src="../image@2x.png" />
            <img className={styles.imageIcon1} alt="" src="../image1@2x.png" />
            <img className={styles.imageIcon2} alt="" src="../image2@2x.png" />
          </div>
          <div className={styles.div6}>
            <img
              className={styles.buyAndSellpngIcon}
              alt=""
              src="../buyandsellpng@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.div7}>
        <div className={styles.div8}>
          <div className={styles.div9} />
        </div>
      </div>
      <div className={styles.div10}>
        <div className={styles.div11}>
          <div className={styles.div12} />
        </div>
      </div>
      <div className={styles.section1}>
        <div className={styles.div13}>
          <div className={styles.div14} />
          <div className={styles.div15}>
            <div className={styles.div2}>
              <div className={styles.div17} />
              <div className={styles.div17} />
              <div className={styles.div17} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div20}>
        <div className={styles.div21}>
          <div className={styles.div2}>
            <div className={styles.div23} />
            <div className={styles.div23} />
          </div>
        </div>
        <div className={styles.div25} />
        <div className={styles.div26} />
      </div>
      <div className={styles.section2}>
        <div className={styles.div27}>
          <div className={styles.div28}>
            <div className={styles.div17} />
            <div className={styles.button}>
              <div className={styles.goToCryptocomDeFi}>
                Go to Crypto.com DeFi
              </div>
              <img className={styles.svgIcon} alt="" src="../svg.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section3}>
        <div className={styles.div30}>
          <div className={styles.div31}>
            <div className={styles.div32}>
              <div className={styles.div33}>
                <div className={styles.cryptocurrencyIn}>
                  <p className={styles.cryptocurrencyIn1}>Cryptocurrency in</p>
                </div>
              </div>
              <div className={styles.div34}>
                <div className={styles.cryptocurrencyIn}>Every Wallet™</div>
              </div>
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.aboutUs}>About Us</div>
            <img className={styles.svgIcon1} alt="" src="../svg1.svg" />
          </div>
        </div>
      </div>
      <div className={styles.cryptocomByHtmltodesign} />
    </div>
  );
};

export default Main;
