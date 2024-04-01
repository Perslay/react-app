import clsx from "clsx";
import css from "../css/Log.module.css";

export const Log = ({ variant, important, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        [css.isImportant]: important,
      })}
    >
      {children}
    </p>
  );
};
