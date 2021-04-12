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
        const reader = new FileReader()

        reader.readAsArrayBuffer(file)
        reader.onload = () => {
            const buffer = reader.result;
            wb.xlsx.load(buffer).then(workbook => {
                console.log(workbook, 'workbook instance')
                workbook.eachSheet((sheet, id) => {
                    sheet.eachRow((row, rowIndex) => {
                        console.log(row.values, rowIndex)
                    })
                })
            })
        }
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
