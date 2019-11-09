const path = require("path");

const Excel = require('exceljs');
const wb = new Excel.Workbook();

module.exports = async (req, res, next) => {

    const {
        fsData: {
            folderPath,
            files
        }
    } = req.body;


    try{

        const filePath = path.join(folderPath, files[0]).replace(".xlsx", "");


        const wb = await wb.xlsx.readFile(filePath);

        //const sh = wb.getWorksheet("Sheet1");

        res.send(wb)


    }catch (e) {
        next(e)
    }

};