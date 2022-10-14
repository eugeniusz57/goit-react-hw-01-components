import PropTypes from 'prop-types';
import css from "./Statistics.module.css";
import { StatisticsList } from "components/StatisticsList/StatisticsList";

export const Statistics = ({title, stats})=> (<section  className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statList}>
      {stats.map(({id, label, percentage})  =>  (
         <StatisticsList  
         key = {id}
         label={label}
         percentage={percentage}
         />
      ))} 
      </ul>
    </section>);

Statistics.prototype = {
  stats: PropTypes.arrayOf(
      PropTypes.exact({ 
        percentage: PropTypes.number.isRequired,
              label: PropTypes.string.isRequired,
              id: PropTypes.string.isRequired,   
      }),
  ),
};