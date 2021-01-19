import React, { Component, createRef } from "react"
import { Modal, Button, Form, FormControl } from "react-bootstrap"


class Comments extends Component {

    state = {
        comment: {id: this.props.id, comment: ''},
        isCommentText: false,
        commentInput: createRef(),
    }

    checkComment(props) {
        if(this.state.comment.comment === '') {
            if(props.marvelStorage.comments) {
                const inComments = props.marvelStorage.comments.filter((item) => {
                    return item.id === props.id
                })
                if (inComments[0]) {
                    this.setState({comment: inComments[0], isCommentText: true})
                }
            }
        }
        return null
    }

    onChange = (e) => {
        const value = e.target.value.replace(/[0-9]/g, '');
        this.setState({commentInput: value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.commentInput.current) {
            return
        }
        let getComments = this.props.marvelStorage.comments
        const commentObj = {id: this.props.id, comment: this.state.commentInput}
        if(getComments) {
            getComments = getComments.filter((comment) => {
                return comment.id !== commentObj.id
            })
        } else {
            getComments = []
        }
        if(commentObj.comment) {
            getComments.push(commentObj)
            this.setState({isCommentText: true, comment: commentObj})
        }
        let marvel = this.props.marvelStorage
        marvel.comments = getComments
        if (!commentObj.current) {
            localStorage.setItem('marvel', JSON.stringify(marvel))
        }
    }

    onclick = () => {
        this.setState({isCommentText: false, commentInput: this.state.comment.comment})
    }


    render(){
        this.checkComment(this.props)
        const {comment, commentInput, isCommentText} = this.state
        const commentInputValue = commentInput.current ? '' : commentInput
        return (
            <Modal.Footer>
                {!isCommentText ?
                    <Form inline onSubmit={this.onSubmit}>
                        <FormControl
                            ref={commentInput}
                            value={commentInputValue}
                            onChange={this.onChange}
                            placeholder="Add comment"
                            autoFocus
                        />
                        <Button type="submit" variant="light">Save</Button>
                    </Form>
                : <div className="form-inline">
                    <p style={{"overflowWrap": "anywhere"}}>
                        {comment.comment}
                    </p>
                    <Button variant="light" onClick={this.onclick}>Edit</Button>
                </div>}
            </Modal.Footer>
        )
    }
}

export default Comments