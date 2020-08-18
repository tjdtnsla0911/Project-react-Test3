import React, { Component } from 'react';
import ApiService from "../../ApiService";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class AddUserComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      name: '',
      gender: '',
      address: '',
      detail_address :'',
      birthday :'',
      total_amount :'',
      role :'',
      cancel :'',
      profile:'',
      message: null
    }

  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  saveUser = (e) => {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      name: this.state.name,
      gender: this.state.gender,
      address: this.state.address,
      detail_address: this.state.detail_address,
      birthday: this.state.birthday,
      total_amount: this.state.total_amount,
      role: this.state.role,
      cancel: this.state.cancel,
      profile: this.state.profile,
    }

    ApiService.addUser(user)
    .then( res => {
        this.setState({
          message: user.username + '님이 성공적으로 등록되었습니다.'
        })
        console.log(this.state.message);
        this.props.history.push('/users');
    })
    .catch( err => {
      console.log('saveUser() 에러', err);
    });

    
  }

  render(){
    return(
      <div>
        <Typography variant="h4" style={style}>Add User</Typography>
        <form style={formContainer}>
         
            <TextField type="text" placeholder="please input your username" name="username" 
fullWidth margin="normal" value={this.state.username} onChange={this.onChange} />

            <TextField type="password" placeholder="please input your password" name="password" 
fullWidth margin="normal" value={this.state.password} onChange={this.onChange} />

            <TextField placeholder="please input your first name" name="email" 
fullWidth margin="normal" value={this.state.email} onChange={this.onChange} />

            <TextField placeholder="please input your last name" name="name" 
fullWidth margin="normal" value={this.state.name} onChange={this.onChange} />

            <TextField type="number" placeholder="please input your age" name="gender" 
fullWidth margin="normal" value={this.state.gender} onChange={this.onChange} />

            <TextField type="number" placeholder="please input your salary" name="address" 
fullWidth margin="normal" value={this.state.address} onChange={this.onChange} />


<TextField type="number" placeholder="please input your salary" name="detail_address" 
fullWidth margin="normal" value={this.state.detail_address} onChange={this.onChange} />

<TextField type="number" placeholder="please input your salary" name="birthday" 
fullWidth margin="normal" value={this.state.birthday} onChange={this.onChange} />

<TextField type="number" placeholder="please input your salary" name="total_amount" 
fullWidth margin="normal" value={this.state.total_amount} onChange={this.onChange} />

<TextField type="number" placeholder="please input your salary" name="role" 
fullWidth margin="normal" value={this.state.role} onChange={this.onChange} />

<TextField type="number" placeholder="please input your salary" name="cancel" 
fullWidth margin="normal" value={this.state.cancel} onChange={this.onChange} />

<TextField type="number" placeholder="please input your salary" name="profile" 
fullWidth margin="normal" value={this.state.profile} onChange={this.onChange} />
          <Button variant="contained" color="primary" onClick={this.saveUser}>Save</Button>

        </form>
      </div>
    );
  }
}

const formContainer = {
  display: 'flex',
  flexFlow: 'row wrap'
}

const style = {
  display: 'flex',
  justifyContent: 'center'
}

export default AddUserComponent;
