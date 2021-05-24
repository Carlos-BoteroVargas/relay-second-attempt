import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class Friend extends Component {
    render() {
        return(
            <li className="col l6 s12">
                <div className="card">
                    <div className="card-image">
                        <img src={this.props.friend.image} alt={this.props.friend.firstName}/>
                        <span className="card-title">{this.props.friend.firstName} {this.props.friend.lastName}</span>
                    </div>
                    <div className="card-content">
                        <div className="row">
                            <div className="col l6 center">
                                <blockquote>Is a {this.props.friend.gender}</blockquote>
                            </div>
                            <div className="col l6 center">
                                <blockquote>Speaks {this.props.friend.language}</blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <a href={"mailto:" + this.props.friend.email} target="_blank">Email: {this.props.friend.email}</a>
                    </div>
                </div>
            </li>
        )
    }
}

export default createFragmentContainer(Friend, {
    friend: graphql`
        fragment Friend_friend on Friend {
            id,
            firstName,
            lastName,
            gender,
            language,
            email,
            image,
        }
    `,
    viewer: graphql`
        fragment Friend_viewer on User {
            id,
        }
    `,
});