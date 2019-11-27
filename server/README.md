# API

* ## `/create` _(response json)_
    * >dev
    >
        * /data-on-deputies   
        * /data-on-radiation  
    * >prod
    >
        * none
    
   #### req.body 
        * resources    ---> *массив обьектов с информаией про полученый файл от API*
        * folderPath   ---> *путь папки с сохранёными файлами*
        * files        ---> *массив имён сохранёных файлов*
        * linksToParse ---> *массив ссылок, из которых нужно распарсить страницу и получить данные*
        * DBData
            * tableHeaders  ---> *заголовки прочитаной таблицы*
            * toDBInsert    ---> *массив обьектов для сохранения в БД*
        
        
* ## `/info` 
    * >prod
        * `/stan-of-deputies`
            >
            ```javascript
               type: Array
              {
                 id: Number,
                 fio: String,
                 description: String,
                 faction: String,
                 constituency: Number,
                 publicationTime: Date,
                 link: String,
              }
            ```
        * `/radiation`   
            >
            ```javascript
              date: Array
              comments: Object
             {
               data: [
                   id: Number,
                   indicator: Number,
                   date: Date
               ],
               comments: {
                   indicator: String,
                   dateFormat: String
               }   
             }
            ```
        * `/grivna-rates`
            >
            ```javascript
               type: Array
              {
                  id: Number,
                  date: Date,
                  EUR: Number,
                  USD: Number
              }   
            ```
        * `deputies`
        
            * `/all-deputies`
                >
                ```javascript
                   type: Array
                  {
                     id: Number,
                     fio: String,
                     photo: String 
                  }
                ```
            * `/deputy-by-name?fio=`
                >
                ```javascript
                  type: Array
                 {
                    id: Number,
                    fio: String,
                    info: String,
                    citizenship: String,
                    maritalStatus: String,
                    link: String,  
                    photo: String 
                 }   
                ```
            * `/deputy/:id`
                >
                ```javascript
                  type: Object
                 {
                    id: Number,
                    fio: String,
                    info: String,
                    citizenship: String,
                    maritalStatus: String,
                    link: String,  
                    photo: String 
                 }   
                ```              
            * `/deputy-photo/:id`
                >
                ```javascript
                  type: Object
                 {
                    photo: String 
                 }
                ```