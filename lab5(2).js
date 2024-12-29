(() => {
    const tableElement = document.querySelector("#auto-table");
    const colorPicker = document.querySelector("#color-chooser");

    const generateRandomColor = () => 
        `#${Array.from({ length: 6 }, () => '0123456789ABCDEF'[Math.floor(Math.random() * 16)]).join('')}`;

    let number = 0;
    const diagonalCells = [];

    const createCell = (rowIdx, colIdx) => {
        const cell = document.createElement("td");
        number++;

        if (rowIdx === colIdx) diagonalCells.push(cell);

        cell.textContent = number;
        
        if (number === 3) {
            cell.addEventListener("mouseenter", () => {
                cell.style.backgroundColor = generateRandomColor();
            });

            cell.addEventListener("click", () => {
                cell.style.backgroundColor = colorPicker.value;
            });

            cell.addEventListener("dblclick", () => {
                diagonalCells.forEach(diagonalCell => {
                    diagonalCell.style.backgroundColor = colorPicker.value;
                });
            });
        }

        return cell;
    };

    const createTableRow = rowIdx => {
        const row = document.createElement("tr");
        for (let colIdx = 0; colIdx < 6; colIdx++) {
            row.appendChild(createCell(rowIdx, colIdx));
        }
        return row;
    };

    const renderTable = () => {
        Array.from({ length: 6 }, (_, rowIdx) => tableElement.appendChild(createTableRow(rowIdx)));
    };

    renderTable();
})();
