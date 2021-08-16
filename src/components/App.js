import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

    constructor(){
        super();
        this.state ={
            curTime  :new Date().toLocaleDateString()
        }
    }
            componentDidMount() {
                this.timer = setInterval ( ()=>{
                    this.setState({
                        curTime : new Date().toLocaleTimeString()
                    })
                },1000)
            }

                componentWillUnmount(){
                    clearInterval(this.timer)
                }
                  render() {

                return(
                    <>
                    <div className="Clock">
                        <h3 id="time">{this.state.curTime}</h3>
                        </div>  
                    </>
                )
        }
    }


export default App;
