import { Log } from "./Log";
import css from "../css/Console.module.css";

export const Console = () => {
  return (
    <div className={css.console}>
      <Log variant="info">
        <p>There is a discount on a game from your wish list now.</p>
      </Log>
      <Log variant="error" important>
        <p>Failed to get data from cloud.</p>
      </Log>
      <Log variant="success">
        <p>Game added to library.</p>
      </Log>
      <Log variant="warning">
        <p>Your World of Warcraft subscription expires tomorrow.</p>
      </Log>
    </div>
  );
};
