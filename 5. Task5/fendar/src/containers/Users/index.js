import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {fetchAllUsers} from "../../actions";
import UserCard from "../../components/UserCard";
import "./Users.sass";

const Users = props => {

    useEffect( () => {
        props.fetchAllUsers();
    }, [] );

    return (
        <div className="users">
            {props.users.map( (user, index) => (<UserCard key={index} user={user}/>) )}
        </div>
    );
}

const mapDispatchToProps = {
    fetchAllUsers: fetchAllUsers
}

const mapStateToProps = state => {
    return {
        users: state.users.userList
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);