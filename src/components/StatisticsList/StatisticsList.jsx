import PropTypes from 'prop-types';
import css from "./StatisticsList.module.css";

export const StatisticsList = ({label, percentage}) =>  ( (<li className={css.item}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
  </li>));

StatisticsList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,

}
