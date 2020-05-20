import React, { Component } from "react"
// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities
class Toggler extends Component {
    state = {
        on: false
    }

    toggle = () => {
        this.setState(prevState=>{
            return{
                on:!prevState.on
            }
        })
    }
    render() {
        const Component = this.props.component
        return(
            <Component on={this.state.on} toggle={this.toggle} {...this.props}/>
        )
    }
}
export function withToggler(component) {
    return function(props) {
        console.log(props)
        return (
            <div>
                <blockquote>i'm HOC, and i'm returning nothing, if you want to see something real here, return "component"
                component here is the component that is being passed to withToggler as first paramater.
                in our case we are using higher order component for our two component
                one for favourite and other for menu component.
                </blockquote>
                <ul>
                    <li>To use higher order function we create a function seperately with the functionality we want to share with other comonents</li>
                    <li>so in react we pass common component to higher order function and in return we get a new component</li>
                    <li>You will see all text and list above TWO TIMES because we are using this higher order function twice</li>
                </ul>
                <Toggler component={component} {...props}/>
            </div>
        )
    }
}

