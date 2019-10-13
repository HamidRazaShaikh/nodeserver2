import React from 'react';

import TextField from '@material-ui/core/TextField';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const style = {

  input : {
    marginTop : 50,
    marginLeft : 50,
    width : 800
  },

  buttons : {
    marginTop : 50,
    marginLeft : 30
  },

    button1 : {
        marginTop : 20,
        marginLeft : 20

    }
}


class App extends React.Component {

  state = {

    todos : [],
    text : '',
      action : false



  }

handleChangeText = (e)=> {
  this.setState({[e.target.name]: e.target.value})

};

handleAddTodo = ()=> {
    if( this.state.text ===''){
        return (
            this.setState({action : true})
        )

    }

    else {
        this.setState({action : false})
        var todo = this.state.todos;
        todo.push (this.state.text)
        this.setState({todos:todo , text : ''})
    }


}

handleDelete = (i)=> {
var todo = this.state.todos;
todo.splice(i,1)
    this.setState({todos : todo})

}

handleEdit (i) {
    var todo = this.state.todos;
    var edit = todo.slice(i, i+1);
    this.setState({text : edit})


}


  render(){
    return(

        <div>

          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">

              </IconButton>
              <Typography variant="h6" >
                My Todo App
              </Typography>

            </Toolbar>
          </AppBar>




          <TextField

              id="standard-required"
              label="Add a todo"
              margin="normal"
              name="text"
              value = {this.state.text}
              onChange = {this.handleChangeText}
              style = {style.input}
          />

          <Fab color="primary" aria-label="add" style={style.buttons} onClick={this.handleAddTodo} ><AddIcon /></Fab>



          <Table>
            <TableBody>
              {this.state.todos.map((v,i) => {
                return(


                  <TableRow key={i}>
                    <TableCell >
                      {i+1}
                    </TableCell>
                    <TableCell align="left" >{v}</TableCell>
                    <TableCell align="right"><Fab color="secondary" aria-label="edit" style={style.button1} onClick={this.handleEdit.bind (this,i,v)}><EditIcon /></Fab></TableCell>
                    <TableCell align="right"><Fab style={style.button1} onClick={this.handleDelete}><DeleteIcon /></Fab></TableCell>
                  </TableRow>
              )
              }
              )
              }
            </TableBody>




          </Table>



        </div>


    )
  }



};

export default App;
