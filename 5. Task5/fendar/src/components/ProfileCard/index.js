import React from "react";
import {getInitials} from "../../helpers";
import "./ProfileCard.sass";

const ProfileCard = props => {
    const [h, s, l] = [props.user.color.h, props.user.color.s, props.user.color.l];
    return (
      <article className="user-profile">
          <div className="user-profile-wrap">
              <div className="user-profile__avatar" style={{backgroundColor: "hsl(" + h + ", " + s + ", " + l + ")"}}>
                  {getInitials(props.user.name)}
              </div>
              <div className="user-profile__info">
                  <span className="user-profile__nickname">{"@" + props.user.username.toLowerCase()}</span>
                  <span className="user-profile__name">{props.user.name}</span>
                  <span className="user-profile__site">{"https://" + props.user.website + "/"}</span>
              </div>
          </div>
      </article>
    );
};

export default ProfileCard;