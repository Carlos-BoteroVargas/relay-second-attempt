import React, { Component } from 'react';
import FriendsList from './FriendsList';
import { createFragmentContainer, graphql } from 'react-relay';

class Friends extends Component {
    render() {
        return(
            <div>
            <div className="navbar-fixed">
                <nav className="grey darken-4">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo center">Friends</a>
                    </div>
                </nav>
            </div>
                <div>
                    <FriendsList viewer={this.props.viewer} />
                </div>
            </div>
        )
    }
}

export default createFragmentContainer(Friends, {
    viewer: graphql`
        fragment Friends_viewer on User {
            id,
            ...FriendsList_viewer,
        }
    `,
});