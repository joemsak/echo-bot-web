import React, { Component } from 'react';
import { Link } from 'react-router';

import get from '../utils/api';
import Headers from '../utils/headers';

class TableView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      headers: Headers(this.resource()),
      pathname: (props.location || {}).pathname || "/posts",
    }
  }

  resource(props = this.props) {
    return (props.params || {}).resource || "posts"; 
  }

  componentDidMount() {
    get(this.state.pathname, (json) => {
      return this.setState({ items: [].concat(json.data) })
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      pathname: nextProps.location.pathname,
      headers: Headers(this.resource(nextProps)),
    });

    get(nextProps.location.pathname, (json) => {
      return this.setState({ items: [].concat(json.data) })
    });
  }

  tableCell(item, header) {
    let content;

    if(header.match(/\w+_id$/)) {
      const linkRoot = header.replace('_id', 's'),
            linkName = linkRoot.replace(/^[a-z]/, (x) => { return x.toUpperCase() })
                               .replace(/s$/, '');

      content = <Link to={`/${linkRoot}/${item[header]}`}>
                  {`${linkName} #${item[header]}`}
                </Link>;
    } else {
      content = item[header];
    };

    return <td key={`item-${item['id']}-${header}`}>{content}</td>;
  }

  tableRows() {
    if(this.state.items.length > 0) {
      return this.state.items.map((item) => {
        return (
          <tr key={`item-${item['id']}`}>
            {this.state.headers.map((header) => { return this.tableCell(item, header) })}
          </tr>
        );
      });
    } else {
      return <tr><td colSpan={this.state.headers.length}>Loading...</td></tr>;
    }
  }

  render() {
    return (
      <table className="table table-striped table-hover">
        <caption>{this.resource().replace(/^[a-z]/, (x) => { return x.toUpperCase() })}</caption>

        <thead>
          <tr>
            {this.state.headers.map((header) => {
              return <th key={`table-header-${header}`}>{header}</th>;
            })}
          </tr>
        </thead>

        <tbody>
          {this.tableRows()}
        </tbody>
      </table>
    );
  }
};

export default TableView;
