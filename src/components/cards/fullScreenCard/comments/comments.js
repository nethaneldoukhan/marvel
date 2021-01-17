import React, { Component, createRef } from "react"
import { Modal, Button, Form, FormControl } from "react-bootstrap"


class Comments extends Component {

    state = {
        comment: {id: this.props.id, comment: ''},
        isCommentText: false,
        commentInput: createRef(),
    }

    static getDerivedStateFromProps(props, state) {
        // On stocke `prevId` dans l’état pour pouvoir la comparer quand les props changent.
        // On efface aussi les données chargées précédemment (pour ne pas afficher des vieux trucs).
        console.log(props)
        if(state.comment.comment === '') {
            if(props.marvelStorage.comments) {
                const inComments = props.marvelStorage.comments.filter((item) => {
                    return item.id === props.id
                })
                console.log(inComments)
                if (inComments[0]) {
                    return {
                        comment: inComments[0],
                        isCommentText: true,
                    }
                }
            }
        }
        // if (props.id !== state.prevId) {
        //   return {
        //     externalData: null,
        //     prevId: props.id,
        //   };
        // }
        // Pas de mise à jour d’état nécessaire.
        return null;
    }

    onChange = (e) => {
        console.log(e.target.value.length)
        this.setState({commentInput: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault()
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
            this.setState({isCommentText: true})
            this.setState({comment: commentObj})
        }
        let marvel = this.props.marvelStorage
        marvel.comments = getComments
        console.log(marvel)
        localStorage.setItem('marvel', JSON.stringify(marvel))
    }

    onclick = () => {
        console.log(this.state.comment.comment)
        this.setState({isCommentText: false, commentInput: this.state.comment.comment})
    }


    render(){
        console.log(this.state.commentInput)
        console.log(this.props.marvelStorage.comments)
        const {comment, isCommentText} = this.state
        console.log(comment)
        return (
            <Modal.Footer>
                {/* {comment === null || comment.comment === '' ? */}
                {!isCommentText ?
                    <Form inline onSubmit={this.onSubmit}>
                        <FormControl
                            ref={this.commentInput}
                            defaultValue={comment.comment}
                            onChange={this.onChange}
                            placeholder="Add comment"
                            className="mr-sm-2"
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