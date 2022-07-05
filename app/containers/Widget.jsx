import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Widget extends React.Component {
    constructor(props) {
        super(props);
        // declare stat variable as empty before it is used to establish that it is a state
        this.state = {
            posts: []
        };
    }


    componentDidMount() {
      // Fetch the data from the URL
      const theUrl = vars.siteurl + "/wp-json/wp/v2/portfolio_item?filter[orderby]=date&order=desc&per_page=5&post_status=published";
      fetch(theUrl)
      .then(response => response.json())
      .then(response => // set the posts to the state variable 'posts' in the second then()
        this.setState({
          posts: response,
        })
      )
    }


    createList = () => {

      // declare the list to return as an empty array
      let theList = []

      // declare the state variable as a constant
      const { posts } = this.state;

      // check if posts exists and has a non-zero length
      if (posts && posts.length) {

        // declare k for the key outside of the loop
        let k = 1

        const listItems = posts.map( ( post, index ) =>
          <li key={index}>
            <a href={post["link"]}>{post['title'].rendered}</a>
            <hr />
          </li>
        );

        return listItems;

    }

    return true;
  }

    render() {
        return (
          <div>
            <h3 className="title ">What's New</h3>
            <ul>
            {this.createList()}
            </ul>
          </div>
        );
      }

}

Widget.propTypes = {
  wpObject: PropTypes.object
};
