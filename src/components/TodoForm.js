import React, {Component} from 'react'

class TodoForm extends Component{
    constructor(){
        super();
        this.state={
            title: '',
            responsible: '',
            description: '',
            priority: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const {value, name} = e.target;
        this.setState({
            [name]: value
        })
        
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state)
        console.log('sending the data.....');
    }

    render(){
        return(
            <div className ="card">
                <form className = "card-body" onSubmit = {this.handleSubmit}>
                    <div className = "form-group" >
                        <input
                            type = "text"
                            name = "title"
                            onChange = {this.handleInput} 
                            className = "form-control"
                            placeholder = "TITULO"
                        />
                    </div>
                    <div className = "form-group">
                        <input
                            type = "text"
                            name = "responsible"
                            onChange = {this.handleInput} 
                            className = "form-control"
                            placeholder = "RESPONSABLE"
                        />
                    </div>
                    <div className = "form-group">
                        <input
                            type = "text"
                            name = "description"
                            onChange = {this.handleInput} 
                            className = "form-control"
                            placeholder = "DESCRIPCION"
                        />
                    </div>
                    <div className = "form-group">
                        <select
                            
                            name = "priority"
                            className = "form-control"
                            onChange = {this.handleInput} 
                            >
                            <option>BAJA</option>
                            <option>MEDIA</option>
                            <option>ALTA</option>
                            </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

    export default TodoForm;