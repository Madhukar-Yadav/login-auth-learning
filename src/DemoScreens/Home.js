import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Layer from 'grommet/components/Layer';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Trash from 'grommet/components/icons/base/Trash';

import Solution from '../Datafiles/SolutionTreeView.json';

var RoleObj = Solution.Solution.Roles.Role;

class Home extends Component {

    constructor(){
        super();
        this.state = {
            showDelPopup: false,
            delItemno: null
        }
        this.DeleteItem = this.DeleteItem.bind(this);
        this.showDelPopup = this.showDelPopup.bind(this);
    }

    DeleteItem(){
        this.setState({ showDelPopup: false })
    }

    showDelPopup(delid){
        this.setState({ showDelPopup: true, delItemno: delid })
    }

  render() {

    console.log(RoleObj);
    var listItems = RoleObj.map( (role, index) => {
            return (
                <Box key={index} direction='row' pad={{ between: 'small' }} margin="small">
                    <span> {role.SiteName} -> {role.Processor} -> {role.Memory} -> {role.Storage} </span>
                    <Box onClick={this.showDelPopup.bind(this, index)} >
                        <Trash size='small' />
                    </Box>
                </Box>
            )
    });

    return (
      <Box pad="small" margin="none" style={{width:'100%'}} align='center' >
            <Heading tag='h3' strong={true} > Hi, Welcome to the Home Screen </Heading>
            {listItems}
            { this.state.showDelPopup ?
                <Layer closer={true} onClose={ () => this.setState({ showDelPopup: false }) } >
                    <Box margin='none' pad='small' size='medium' justify='between' >
                        <Heading tag='h4' strong={true} margin='none'>Confirmation </Heading>
                        <Heading tag='h6' strong={false} margin='small'>
                            Are you sure you want to delete {this.state.delItemno}th item ?
                        </Heading>
                        <Box direction='row' justify='end' margin='none' pad={{ between: 'small' }} >
                            <Button label='Yes' onClick={ this.DeleteItem } />
                            <Button label='No' critical={true} onClick={ () => this.setState({ showDelPopup: false }) } />
                        </Box>
                    </Box>
                </Layer> : null }
      </Box>
    );

  }
}

export default Home;
   