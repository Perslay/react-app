import PropTypes from "prop-types";
import css from "../css/Profile.module.css";

export const Profile = ({ user }) => {
  const { username, stats } = user;

  // add commas for big numbers
  const formatNumber = (number) => {
    return number.toLocaleString("en-US");
  };

  return (
    <div className={css.profile}>
      <p className={css.name}>{username}</p>

      <ul className={css.stats}>
        <li className={css.stat}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{formatNumber(stats.followers)}</span>
        </li>
        <li className={css.stat}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{formatNumber(stats.likes)}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
  }).isRequired,
};
