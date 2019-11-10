const fs = require("fs");

const axios = require('axios');

module.exports = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest, { flags: "wx" });

        axios.get(url, { responseType: 'stream' })
            .then(response => {
                if (response.status === 200) {
                    response.data.pipe(file);
                } else {
                    file.close();
                    fs.unlink(dest, () => {}); // Delete temp file
                    reject(`Server responded with ${response.status}: ${response.statusText}`);
                }
            });


        file.on("finish", () => {
            resolve();
        });

        file.on("error", err => {
            file.close();

            if (err.code === "EEXIST") {
                reject("File already exists");
            } else {
                fs.unlink(dest, () => {}); // Delete temp file
                reject(err.message);
            }
        });
    });

};