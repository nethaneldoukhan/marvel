import React, { Component, createRef } from 'react'
import axios from 'axios'
import { Button, Form, FormControl } from 'react-bootstrap'
import { Spinner } from 'react-spinners-css'
import configGet from '../../../../src/config_api/config'

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
            console.log(response);
            this.props.updateList(response.data.data.results)
        } catch (err) {
            console.log(`Marvel request failed: ${err}`);
        }
        this.setState({isLoader: false})
    }

    onChange = (e) => {
        this.setState({inputSearch: e.target.value})
    }


    render() {
        const {isLoader} = this.state

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
                    <Button type="submit" variant="light">Search</Button>
                </Form>

                {isLoader &&
                <div className="text-center">
                    <Spinner color="#26235f" />
                    <span className="sr-only">Loading...</span>
                </div>}
            </>
        )
    }
}

export default Search