import { TableRow, TableRowColumn } from 'material-ui/Table';
import React from 'react';
import { Link } from 'react-router';

const MultiFormatTableRow = ({ index, rankIndex, row, columns }) => (
  <TableRow striped={index % 2 !== 0}>
    {rankIndex && (
    <TableRowColumn key="#" style={{ width: '60px' }}>{row.id === '76561198278242542' ? 251 : rankIndex}</TableRowColumn>
        )}
    {columns.filter((c) => !c.link && !c.image).map((column) => (
      <TableRowColumn key={column.name}>{ formatTableCell(row, column) }</TableRowColumn>
        ))}
  </TableRow>
    );


MultiFormatTableRow.propTypes = {
  index: React.PropTypes.number.isRequired,
  rankIndex: React.PropTypes.number,
  row: React.PropTypes.object.isRequired,
  columns: React.PropTypes.array.isRequired,
};

MultiFormatTableRow.defaultProps = {
  rankIndex: 0,
};

const formatTableCell = (row, column) => {
  const value = row[column.name];
  switch (column.type) {
    case 'link':
      return <Link style={{ color: 'black' }} to={row[column.linkColumn]}>{value}</Link>;
    case 'date':
      return new Date();
    case 'image':
      return (
        <img
          alt={value}
          src={row[column.imageColumn]}
          width="15px" height="15px"
        />);
    default:
      return value;
  }
};

export default MultiFormatTableRow;
