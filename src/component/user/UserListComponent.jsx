import React, { Component } from 'react';
import ApiService from "../../ApiService";

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'

class UserListComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
      users: [],
      message: null
    }
  }

  componentDidMount(){
    this.reloadUserList();
  }

  reloadUserList = () => {
    ApiService.fetchUsers()
      .then( res => {
        this.setState({
          users: res.data
        })
      })
      .catch(err => {
        console.log('reloadUserList() Error!', err);
      })
  }

  deleteUser = (userID) => {
    ApiService.deleteUser(userID)
      .then( res => {
        this.setState({
          message: 'User Deleted Successfully.'
        });
        this.setState({
          users: this.state.users.filter( user =>
            user.id !== userID)
          });
        })
      .catch(err => {
        console.log('deleteUser() Error!', err);
      })
  }
  
  editUser = (ID) => {
    window.localStorage.setItem("userID", ID);
    this.props.history.push('/edit-user');
  }

  addUser = () => {
    window.localStorage.removeItem("userID");
    this.props.history.push('/add-user');
  }

  addLogin = () => {
    window.localStorage.removeItem("userID");
    this.props.history.push('/add-Login');
  }

  render(){

    return(
      <div>
        <Typography variant="h4" style={style}>User List</Typography>
        <Button variant="contained" color="primary" onClick={this.addUser}> Add User </Button>
        <Button variant="contained" color="primary" onClick={this.addLogin}> 로그인하기 </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>username</TableCell>
              <TableCell align="right">password</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">gender</TableCell>
              <TableCell align="right">address</TableCell>
              <TableCell align="right">detail_address</TableCell>
              <TableCell align="right">birthday</TableCell>
              <TableCell align="right">total_amount</TableCell>
              <TableCell align="right">role</TableCell>
              <TableCell align="right">cancel</TableCell>
              <TableCell align="right">profile</TableCell>
           
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.users.map( user => 
              <TableRow key={user.id}>
                <TableCell component="th" scope="user">{user.id}</TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">{user.password}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.gender}</TableCell>
                <TableCell align="right">{user.address}</TableCell>
                <TableCell align="right">{user.detail_address}</TableCell>
                <TableCell align="right">{user.birthday}</TableCell>
                <TableCell align="right">{user.total_amount}</TableCell>
                <TableCell align="right">{user.role}</TableCell>
                <TableCell align="right">{user.cancel}</TableCell>
                <TableCell align="right">{user.profile}</TableCell>
                <TableCell align="right" onClick={()=> this.editUser(user.id)}>
                  <CreateIcon />
                </TableCell>
                <TableCell align="right" onClick={()=> this.deleteUser(user.id)}>
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
    
  }

}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default UserListComponent;