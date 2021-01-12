import React, { Component, createRef } from 'react'
import axios from 'axios'
import { Button, Form, FormControl, Spinner } from 'react-bootstrap'
import configGet from '../../../../src/config_api/config'
// import { characterList } from '../../character'
// import Cards from '../cards/cards'
import './search.css'


class Search extends Component {


    constructor(props) {
        super(props)
        this.state = {
            inputSearch: createRef(),
            isLoader: false
        }
    }

    onSubmit = async (e) => {
        e.preventDefault()
        this.setState({isLoader: true})
        console.log(configGet(this.state.inputSearch))
        try {
            const response = await axios.get(configGet(this.state.inputSearch));
            console.log('👉 Returned data:', response);
        } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }
    }

    onChange = (e) => {
        console.log(this.state.inputSearch)
        console.log(configGet(e.target.value))
        this.setState({inputSearch: e.target.value})
    }


    render() {
        // const {list} = this.state

        return (
            <>
                <Form inline className="form-search" onSubmit={this.onSubmit}>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        ref={this.inputSearch}
                        onChange={this.onChange}
                    />
                    <Button variant="light">Search</Button>
                </Form>

                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </>
        )
    }
}

export default Search