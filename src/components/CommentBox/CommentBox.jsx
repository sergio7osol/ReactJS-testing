import React, { Component } from 'react';

class CommentBox extends Component {
    state = {
        comment: ""
    }

    handleTextareaChange = event => {
        this.setState({ comment: event.target.value });
    }

    render() {
        return (
            <form action="#">
                <h4>Add a comment</h4>
                <textarea onChange={ this.handleTextareaChange } className="form-control" name="" id="" rows="10" value={ this.state.comment } />
                <div>
                    <button className="form-control btn btn-success">Submit</button>
                </div>
            </form>

        );
    }
}
    
export default CommentBox;