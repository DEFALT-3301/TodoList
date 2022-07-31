import React from 'react';
import { connect } from 'react-redux';
import { creatTodo } from '../redux/actions';

class TodoForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      title: ''
    }
  }

  submitHandler = event => {
    event.preventDefault()

    const {title} = this.state

    if (!title.trim()) {
      return
    }

    const newTodo = {
      title, id: Date.now().toString()
    } 
    this.props.creatTodo(newTodo)

    this.setState({title: ''})
  }

  inputChangeHandler = event => {
    event.persist()
    this.setState(prev => ({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }

  render(){
    return (
      <form className="input-group mb-3" onSubmit={this.submitHandler}>
          <input 
            type="text" 
            className="form-control" 
            id='title'
            name='title'
            value={this.state.title}
            onChange={this.inputChangeHandler}
          />
            <button 
              className="btn btn-outline-primary" 
              type="submit"
              
            >Button</button>
      </form>
    );
  }
}

export default connect(null, {creatTodo})(TodoForm);
