import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
    renderComments() {
        return this.props.comments.map(comment => {
            return <li className="flex-sm-fill nav-link" key={comment}>{ comment }</li>
        });    
    }

    render() {
        return (
            <div>
                <ul className="nav nav-pills flex-column flex-sm-column">
                    { this.renderComments() }
                </ul>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        comments: state.comments 
    }
}

export default connect(mapStateToProps)(CommentList);