import React, { Component } from 'react';
import { Link } from 'react-router';

class TableView extends Component {
  loadingRow() {
    return(
      <tr>
        <td colSpan={this.props.headers.length}>Loading...</td>
      </tr>
    );
  }

  tableCellContent(item, header) {
    if(header.match(/\w+_id$/)) {
      return (
        <Link to={`${this.props.link_root}/${item[header]}`}>
          {`${this.props.link_name} #${item[header]}`}
        </Link>
      );
    } else {
      return item[header];
    }
  }

  tableRow(item) {
    return(
      <tr key={`item-${item['id']}`}>
        {this.props.headers.map((header) => {
          return (
            <td key={`item-${item['id']}-${header}`}>
              {this.tableCellContent(item, header)}
            </td>
          );
        })}
      </tr>
    );
  }

  tableRows() {
    if(this.props.items.length > 0) {
      return this.props.items.map((item) => {
        if(item !== undefined) {
          return this.tableRow(item);
        } else {
          return this.loadingRow();
        }
      });
    } else {
      return this.loadingRow();
    }
  }

  render() {
    return (
      <table className="table channel-table">
        <caption>{this.props.caption}</caption>

        <thead>
          <tr>
            {this.props.headers.map((header) => {
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
