import react from "react";
import Menu from "./components/menu";
import "./App.css";
import styles from "./style";

const App = () => (
  <div className="bg-stone-950 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Menu />
      </div>
    </div>
  </div>
);

export default App;
