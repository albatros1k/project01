const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        "https://banner2.cleanpng.com/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg",
      followed: true,
      fullName: "Albert",
      status: "Boss",
      location: { city: "Simferopol", country: "Ukraine" },
    },
    {
      id: 2,
      photoUrl:
        "https://img2.freepng.ru/20180630/ltq/kisspng-computer-icons-user-avatar-clip-art-skincare-cartoon-5b371025a6d8a7.5354815915303352696834.jpg",
      followed: false,
      fullName: "Alex",
      status: "Manager",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 3,
      photoUrl:
        "https://img2.freepng.ru/20180402/bje/kisspng-computer-icons-avatar-login-user-avatar-5ac207e69ecd41.2588125315226654466505.jpg",
      followed: false,
      fullName: "Evgeniy",
      status: "User",
      location: { city: "Kiev", country: "Ukraine" },
    },
    {
      id: 4,
      photoUrl:
        "https://img2.freepng.ru/20180612/hv/kisspng-computer-icons-designer-avatar-5b207ebb279901.8233901115288562511622.jpg",
      followed: true,
      fullName: "Viktoria",
      status: "Principal",
      location: { city: "Zaporizhya", country: "Ukraine" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, action.users],
      };
    }

    default:
      return state;
  }
};
export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
