
const allSettled = require('promise.allsettled');

const cheerio = require("cheerio");
const axios = require("axios");

const { OK } = require('http-status-codes');

const {
    DESIRED_FIELDS: {
        parseDataOfDeputies
    }
} = require('../../../constants');

module.exports = async (arrayLinks, fieldsInDB) => {


    const clearValue = (value) => value.replace(":", "").trim().toLowerCase(); // удаляет лищние пробелы -> удаляет символ ":" -> приводит в нижний регистр


    const parser = async (link) => {

        const deputy = {};
        const { data: html, status, statusText } = await axios.get(link);

        if(status === OK){

            const $ = cheerio.load(html); // загружаем страницу в cheerio
            const text = $('#divAbout div.content-text > p').has('strong'); // получаем все <p> внутри <div>-a с данными

            deputy[fieldsInDB["img"]] = $('#divPrint .cms-person-img').attr('src'); // получаем ссылку на фотографию
            deputy[fieldsInDB["link"]] = link;

            text.each((i, elem) => {

                const children = $(elem).children("strong"); // проверяем колличесвто <strong> внутри <p>


                if(children.length > 1){ // в некоторых случаях основные данные храняться в теге <p> а не <div>

                    const allText = $(elem).text().replace(/\s+/g, " "); // удаляем лишние пробелы
                    const indexOfTheData = [];
                    // массив обьектов с "заголовком" и индексом начала другого "заголовка"

                    $(elem).children().not("br").each((i, elem) => {

                        const index = allText.indexOf($(elem).text()); // находим индекс "заголовка в тексте "
                        indexOfTheData.push({
                            index: index,
                            text: $(elem).text()
                        });
                    });

                    // if(indexOfTheData.length < 4){  // добавляем в массив недостающий обьект
                    //
                    //     indexOfTheData.push({
                    //         text: "",
                    //         index: allText.length
                    //     });
                    //     // обьект указует на индекс конца строки
                    //     // нужно для правильного парсинга исключительных страниц
                    // }

                    indexOfTheData.forEach( (data, index) => {

                        let nextValue = indexOfTheData[index + 1]; // получаем обьект с индексом следующего "заголовка"

                        if(index === 0){ // с первого елемента сохраняем и текст и "заголовок"

                            deputy[fieldsInDB[i]] = data.text; // "заголовок"
                            deputy[fieldsInDB["info"]] = allText.slice(data.text.length, nextValue.index).trim();
                            // data.text.length --> индекс где заканчиваеться "заголовок"
                            // достаём текст из общей строки

                        }else if(index !== indexOfTheData.length - 1){ // проверяем что бы индекс не был больше индекса последнего елемента

                            const value = clearValue(data.text);

                            if(parseDataOfDeputies.includes(value)){ // проверяем соотвествует ли "заголовок" массиву нужных полей

                                const field = fieldsInDB[value]; // получаем название поля в БД

                                const text = allText.slice(data.index + value.length, nextValue.index);
                                // data.index + value.length --> индекс где заканчиваеться заголовок

                                let dataFromText;

                                if(value === 'освіта'){

                                    const dotIndex = text.indexOf('.');
                                    dataFromText = text.slice(0, dotIndex);
                                    // ищим первую точку и обрезаем по неё текст

                                }else{

                                    dataFromText = text;
                                }

                                deputy[field] = dataFromText
                                    .replace(/\./g, "")
                                    .replace(":", "")
                                    .trim();
                                // удаляем символ "." и ":" и пробелы
                            }
                        }

                    })

                } else {

                    const header = clearValue($(elem)
                        .children("strong")
                        .remove()
                        .text()
                    );
                    // получаем текст елемента <strong> и удаляем его

                    const text = $(elem)
                        .text()
                        .replace(/\s+/g, " ")
                        .trim();
                    // получаем остальной текст тега <p>

                    if(i === 0){ // у первого тега <p> мы берём текст из <strong> и <p>

                        deputy[fieldsInDB[i]] = header;
                        deputy[fieldsInDB["info"]] = text;

                    }else if(parseDataOfDeputies.includes(header)){ // проверяем соотвествует ли "заголовок" массиву нужных полей

                        let dataFromText;
                        const field = fieldsInDB[header]; // получаем название поля в БД

                        if(header === 'освіта'){

                            const dotIndex = text.indexOf('.');
                            dataFromText = text.slice(0, dotIndex);
                            // ищим первую точку и обрезаем по неё текст

                        }else{

                            dataFromText = text;
                        }

                        deputy[field] = dataFromText.replace(/\./g, "");
                        // удаляем все точки из текста и сохраняем его в обьект

                    }
                }
            });

            return deputy

        }else{

            return Promise.reject({
                status,
                statusText
            })

        }

    };

    return await allSettled(arrayLinks.map( link => parser(link) )) // Promise.allSettled TODO

};