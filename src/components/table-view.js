import React, { Component } from 'react';
import { Link } from 'react-router';

import get from '../utils/api';

class TableView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      name: "",
      pathname: (props.location || {}).pathname || "/posts",
    }
  }

  componentDidMount() {
    return this.resetState();
  }

  resetState(pathname = this.state.pathname) {
    get(pathname, (json) => {
      return this.setState({
        items: [].concat(json.data),
        name: json.name,
      })
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      pathname: nextProps.location.pathname,
    });

    return this.resetState(nextProps.location.pathname);
  }

  tableHeaders() {
    return Object.keys(this.state.items[0]).map((k) => {
      return (
        <th key={`header-${k}`}>
          {this.state.items[0][k].display_name}
        </th>
      );
    });
  }

  tableRows() {
    return this.state.items.map((item) => {
      return (
        <tr key={`item-${item.id.value}`}>
          {Object.keys(item).map((k) => {
            return (
              <td key={`item-col-${item.id.value}-${k}`}>
                {this.tableCell(item[k])}
              </td>
            );
          })}
        </tr>
      );
    });
  }

  tableCell(attribute) {
    if (attribute.value) {
      return attribute.value;
    } else {
      return <Link to={attribute.link.href}>{attribute.link.text}</Link>;
    }
  }

  render() {
    if(this.state.items.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <table className="table table-striped table-hover">
          <caption>{this.state.name}</caption>

          <thead>
            <tr>
              {this.tableHeaders()}
            </tr>
          </thead>

          <tbody>
              {this.tableRows()}
          </tbody>
        </table>
      );
    }
  }
};

export default TableView;
