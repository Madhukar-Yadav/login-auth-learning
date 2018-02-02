import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
// import Header from 'grommet/components/Header';
// import Heading from 'grommet/components/Heading';

// import Form from 'grommet/components/Form';
// import FormField from 'grommet/components/FormField';
// import PasswordInput from 'grommet/components/PasswordInput';

// var username = '';
// var password = '';
var userinfo = {};

class Login extends Component {

    constructor(){
        super();
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

    onLoginSubmit(){
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=50a34e070dd5c09a99554b57ab7ea7e2';      
        fetch(url)
          .then( res => res.json())
          .then( function(res){
            userinfo = res;
            if(res.base === 'stations' && res.name === 'Bangalore'){ 
            console.log(this.props);
             this.props.history.push('/Home');
              console.log(userinfo);
          }else{
              console.log('Obj value dint match');
          }
        }.bind(this) )
    }

  render() {

    return (
      <Box pad="none" margin="medium" >
                   <Button primary={true} label=' Get Data' onClick={this.onLoginSubmit} />
      </Box>
    );
  }
}

export default Login;
   