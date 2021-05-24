import React, { Component } from 'react';
import Friend from './Friend';
import { createFragmentContainer, graphql } from 'react-relay';

class FriendsList extends Component {
    renderFriends() {
        return this.props.viewer.friends.edges.map(edge => 
        <Friend
            key={edge.node.id}
            friend={edge.node}
            viewer={this.props.viewer}
            />
        );
    }
    render() {
        return(
            <div>
                <div className="row">
                    <ul>
                        {this.renderFriends()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default createFragmentContainer(FriendsList, {
    viewer: graphql`
        fragment FriendsList_viewer on User {
            friends {
                edges {
                    node {
                        id,
                        ...Friend_friend,
                    },
                },
            },
            id,
            ...Friend_viewer,
        }
    `,
});