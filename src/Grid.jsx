import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

function Grid({ numRows, numCols }) {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const generateGrid = () => {
      const newGrid = [];
      for (let row = 0; row < numRows; row++) {
        const newRow = [];
        for (let col = 0; col < numCols; col++) {
          newRow.push(<div key={`${row}-${col}`} className="cell" />);
        }
        newGrid.push(
          <div key={`row-${row}`} className="row">
            {newRow}
          </div>
        );
      }
      setGrid(newGrid);
    };

    generateGrid();
  }, [numRows, numCols]);

  return <div className="grid">{grid}</div>;
}

// Add prop type validation
Grid.propTypes = {
  numRows: PropTypes.number.isRequired,
  numCols: PropTypes.number.isRequired,
};

export default Grid;

