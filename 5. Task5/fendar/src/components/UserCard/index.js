import React from 'react';
import {getInitials} from "../../helpers";
import "./UserCard.sass";
import {Link} from "react-router-dom";

const UserCard = props => {
    const [h, s, l] = [props.user.color.h, props.user.color.s, props.user.color.l];
    // const [h, s, l] = ["120", "50%", "50%"];
    return (
      <article className="user">
          <Link to={"/people/" + props.user.id} className="user__link">
              <div className="user__content">
                  <span className="user__avatar" style={{backgroundColor: "hsl(" + h + ", " + s + ", " + l + ")"}}>
                    {getInitials(props.user.name)}
                  </span>
                  <h3 className="user__name">{props.user.name}</h3>
                  <a href="#" className="user__site">{"https://" + props.user.website + "/"}</a>
              </div>
          </Link>
      </article>
    );
}

export default UserCard;