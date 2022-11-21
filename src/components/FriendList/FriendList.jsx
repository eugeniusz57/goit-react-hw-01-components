import { FriendListItem } from "components/FriendListItem/FriendListItem";
import PropTypes from 'prop-types';
import { List } from "./FriendList.styled";

export const FriendList = ({friends}) => (
    <List>
    {friends.map(({avatar, name, isOnline, id}) => (
        <FriendListItem 
        avatar = {avatar} 
        name = {name}
        isOnline = {isOnline} 
        key = {id}
        />
    ))}
  </List>);



FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            
                avatar: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                isOnline: PropTypes.bool.isRequired,
                id: PropTypes.number.isRequired,
              
        }),
    ),
};
