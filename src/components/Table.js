import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

const TableComponent = ({ files }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {files.map((file, fileIndex) =>
          file.lines.length > 0 ? (
            file.lines.map((line, lineIndex) => (
              <tr key={`${fileIndex}-${lineIndex}`}>
                <td>{file.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))
          ) : (
            <tr key={fileIndex}>
              <td>{file.file}</td>
              <td colSpan={3} className="text-center">
                No Lines
              </td>
            </tr>
          ),
        )}
      </tbody>
    </Table>
  );
};

TableComponent.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      file: PropTypes.string,
      lines: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          number: PropTypes.number,
          hex: PropTypes.string,
        }),
      ),
    }),
  ),
};

TableComponent.defaultProps = {
  files: [],
};

export default TableComponent;
