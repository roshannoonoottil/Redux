import React from "react";
import { connect } from "react-redux";

class CounterClass extends React.Component{


    render(){
        const {
            value,
            myIncrement,
            myDecrement
        } = this.props;
        return(
            <div>
            <button onClick={()=>{

                myIncrement()

            }}>Increment</button>
            <label>{value}</label>
            <button onClick={()=>{

                myDecrement()
               
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

const mapDispatchToProps = (dispatch) =>{

    return{
        
        myIncrement:()=>{

            dispatch({
                type:'INCREMENT'
            });

        },
        myDecrement:()=>{

            dispatch({
                type:'DECREMENT'
            });

        }

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);