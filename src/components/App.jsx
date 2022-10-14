import user  from "./user.json";
import { Profile } from "./Profile/Profile";

import data from "./data.json"
import { Statistics } from "./Statistics/Statistics";

import friends from "./friends.json";
import { FriendList } from "./FriendList/FriendList";

import transactions from "./transactions.json";
import {  TransactionHistory} from "components/TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
        <Statistics title ="Upload stats"
        stats={data}
        />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions}/>

    </div>
  );
};
