import React, { Component } from 'react'
const Excel = require('exceljs');
let file = undefined

class ExcelComponent extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleImport = this.handleImport.bind(this)
    }

    handleChange(e) {
        file = e.target.files[0]
        this.handleImport(file)
    }
    handleImport = (file) => {
        const wb = new Excel.Workbook();
        wb.xlsx.readFile(file).then(function () {
            var workSheet = wb.getWorksheet(1);

            workSheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {

                let currRow = workSheet.getRow(rowNumber);
                console.log("User Name :" + currRow.getCell(1).value + ", Password :" + currRow.getCell(2).value);
                console.log("User Name :" + row.values[1] + ", Password :" + row.values[2]);

                //  console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
            });
        })
    }
    render() {
        return (
            <div className="App">
                <p>excel</p>
                <input type="file" onChange={this.handleChange} />

            </div>
        );
    }

}
export default ExcelComponent;
