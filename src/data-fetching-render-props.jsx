import React from "react";

class WithDataFetching extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      loading: true,
      error: ""
    };
  }

  async fetchData() {
    try {
      const data = await fetch(this.props.dataSource);
      const json = await data.json();

      if (json) {
        this.setState({
          results: json,
          loading: false
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message
      });
    }
  }

  async componentDidMount() {
    this.fetchData();
  }

  render() {
    console.log(this.state);
    return this.props.children(this.state);
  }
}

export default WithDataFetching;
