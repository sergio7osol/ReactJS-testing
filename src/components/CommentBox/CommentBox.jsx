import React, { Component } from 'react';

class CommentBox extends Component {
    state = {
        comment: ""
    }

    handleTextareaChange = event => {
        this.setState({ comment: event.target.value });
    }

    handleSubmit = event => {
        this.setState({ comment: "" });
    }

    render() {
        return (
            <form action="#" onSubmit={ this.handleSubmit }>
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