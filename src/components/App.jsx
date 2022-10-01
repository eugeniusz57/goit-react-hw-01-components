import { user } from "components/user.json";
import { Profile } from "Profile/Profile";

export const App = () => {
  return (
    <div>
      <Profile user = {username, tag, location, avatar, stats}/>
    </div>
  );
};
