import React, { Component } from 'react';
import './../App.css';

class Products extends Component {
    constructor(props){
        super(props)
        this.state = {items : []}
    }

    componentDidMount() {
        fetch("http://localhost:1337/product")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {
        var listItems = this.state.items.map(function (item) {
            return (
                <div className="card-body">
                    <h1 className="card-name">{item.name}</h1>
                    <div className="card-contents">
                        <p className="card-left-content">{item.price} /-</p>
                        <p className="body-content">{item.description}</p>
                    </div>
                </div>
            );
        });
        return (
            <div className="mainproduct">
                {listItems}
            </div>
        );
    }
}

export default Products;