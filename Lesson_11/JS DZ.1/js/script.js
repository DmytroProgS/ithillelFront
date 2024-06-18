

const generateTable = document.querySelector('#table');

        function pifagor(n) {
            const result = [];
            for (let i = 1; i <= n; i++) {
                result.push(i);
            }
            return result;
        }
        function generateArray(x, n) {
            const arr = [];
            for (let i = 1; i <= x; i++) {
                arr.push(pifagor(n).map((num) => num * i));
            }
            return arr;
        }
        const arrays = generateArray(10, 10);

        const table = document.createElement('table');

            arrays.forEach((rowArray) => {
                const row = table.insertRow();
                rowArray.forEach((value) => {
                    const cell = row.insertCell();
                    cell.textContent = value;
                });
            });

        generateTable.appendChild(table);
        
       