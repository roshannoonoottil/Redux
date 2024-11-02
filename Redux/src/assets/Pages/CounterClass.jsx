import React from "react";
import { connect } from "react-redux";

class CounterClass extends React.Component{


    render(){
        const {
            value,
            dispatch
        } = this.props;
        return(
            <div>
            <button onClick={()=>{
                dispatch({
                    type:'INCREMENT'
                })
            }}>Increment</button>
            <label>{value}</label>
            <button onClick={()=>{
                dispatch({
                    type:'DECREMENT'
                })
            }}>Decrement</button>
        
        </div>
        )
    }

}

const mapStateToProps = (state) =>{

    return{
        value: state.value,
    };
}

export default connect(mapStateToProps)(CounterClass);