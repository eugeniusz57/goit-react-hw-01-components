import css from "./TransactionHistory.module.css";
import { TransactionHistoryRow} from "components/TransactionHistoryRow/TransactionHistoryRow";
import PropTypes from 'prop-types';

export const TransactionHistory = ({items }) =>(
       <table className={css.transactionHistory}>
   <thead>
     <tr>
       <th>Type</th>
       <th>Amount</th>
       <th>Currency</th>
     </tr>
   </thead>
   
   <tbody>
   {items.map(({id, type, amount, currency}) => (
    <TransactionHistoryRow
    key={id}
    type={type}
    amount={amount}
    currency={currency}
    />
   ))

   }
   </tbody>
   </table>
   )

   TransactionHistory.prototype = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            
                type: PropTypes.string.isRequired,
                amount: PropTypes.string.isRequired,
                currency: PropTypes.string.isRequired,
                id: PropTypes.string.isRequired,
              
        }),
    ),
};
   