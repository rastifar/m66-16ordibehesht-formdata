import React, { Component } from 'react';
import { connect } from 'react-redux';
import {logout} from '../store/userSlice'

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.satet= {
            welcome: "hi"
        }
    }


    render() {
        return (
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{marginRight: "16px"}}>{this.satet.welcome+' '+this.props.name}</div>
                <div onClick={()=>this.props.dispatch(logout())}>logout</div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
      logout: () => dispatch(logout())
    }
  }
const mapStateToProps = (state, ownProps) => {
    console.log({ownProps})
    return { name: ownProps.sex+ ' '+state.user.username };
};

export default connect(mapStateToProps)(Profile);