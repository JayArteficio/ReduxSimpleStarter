// class based compnenet with sugar syntax
import React, { Component } from 'react';

// same as vv
// const Component = React.Component;

class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange} />;

    // create a new input element and pass it a prop 'onChange'
    // with a value of the onInputChange
  }

  onInputChange (event) {
    console.log(event.target.value);
  }
  //this is the event handler

}

export default SearchBar;

// class based component
// import React from 'react';
//
// class SearchBar extends React.component {
//   render() {
//     return <input />;
//   }
// };
//
// export default SearchBar;

// plain functional component
// import React from 'react';
//
// const SearchBar = () => {
//   return <input />;
// };
//
// export default SearchBar;
