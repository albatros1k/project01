import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  return (
    <div className={s.users}>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img className={s.avatar} src={u.photoUrl} alt="" />
            </div>
            <div>
              {u.followed ? (
                <button
                  className={s.btn}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={s.btn}
                  onClick={() => {
                    props.follow(u.id);
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
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
              </span>
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
