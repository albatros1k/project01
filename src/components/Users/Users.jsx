import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  };
  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    console.log(pagesCount);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={s.users}>
        <div className={s.pages}>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && s.selectedPage}
                onClick={(e) => {
                  this.onPageChanged(p);
                }}
              >
                {p}
              </span>
            );
          })}
        </div>
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
                  <div>id {u.id}</div>
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
