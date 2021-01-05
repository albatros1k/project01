import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((res) => {
          this.props.setUsers(res.data.items);
        });
    }
  }

  render() {
    return (
      <div className={s.users}>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  className={s.avatar}
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  alt=""
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    className={s.btn}
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className={s.btn}
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <div className={s.item}>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{"u.location.city"}</div>
                  <div>{"u.location.country"}</div>
                </span>
              </div>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
