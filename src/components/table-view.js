import React, { Component } from 'react';
import { Link } from 'react-router';

class TableView extends Component {
  displayContent(item, header) {
    if(header.match(/\w+_id$/)) {
      return <Link to={`${this.props.link_root}/${item[header]}`}>{`${this.props.link_name} #${item[header]}`}</Link>;
    } else {
      return item[header];
    }
  }

  displayRows() {
    if(this.props.items.length > 0) {
      return this.props.items.map((item) => {
        if(item !== undefined) {
          return(
            <tr key={`item-${item['id']}`}>
              {this.props.headers.map((header) => {
                return (
                  <td key={`item-${item['id']}-${header}`}>
                    {this.displayContent(item, header)}
                  </td>
                );
              })}
            </tr>
          );
        } else {
          return(<tr><td colSpan={this.props.headers.length}>Loading...</td></tr>);
        }
      });
    } else {
      return(<tr><td colSpan={this.props.headers.length}>Loading...</td></tr>);
    }
  }

  render() {
    return (
      <table className="table channel-table">
        <caption>{this.props.caption}</caption>

        <thead>
          <tr>
            {this.props.headers.map((header) => {
              return(<th key={`table-header-${header}`}>{header}</th>);
            })}
          </tr>
        </thead>

        <tbody>
          {this.displayRows()}
        </tbody>
      </table>
    );
  }
};

export default TableView;
