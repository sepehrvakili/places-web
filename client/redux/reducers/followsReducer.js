import initialState from './initialState';

export default function followsReducer(state = initialState.follows, action) {
  switch (action.type) {
    case 'FOLLOW_USER':
      return [...state, action.user];

    case 'UNFOLLOW_USER':
      return state.filter(unfollow =>
        unfollow.id !== action.followedId
      );

    case 'GET_FOLLOWS':
      return action.follows;

    case 'UPDATE_FOLLOWS_LOCATION': {
      return state.map(follow => (
        Object.assign({}, follow, action.data[follow.id])
      ));
    }

    default:
      return state;
  }
}
