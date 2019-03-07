import React from 'react'; 
import { Checkbox } from 'semantic-ui-react'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            term: "",
            isVideoSearch: false
        }

    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state.term, this.state.isVideoSearch)
    }

   
    render() {
        return( <div className="ui segment">
                    <form className="ui form" onSubmit = {this.handleSubmit}>
                        <div className="field">
                            <label>Search</label>
                            <input type="text" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})}
                            />
                        </div>
                        <Checkbox toggle label={<label>Video</label>} onChange={(e, data)=>this.setState({isVideoSearch: !this.state.isVideoSearch})}/> 
                    </form>
            </div>
            )
    }
}

export default SearchBar