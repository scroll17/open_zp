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
        * resources    ---> * массив обьектов с информаией про полученый файл от API *
        * folderPath   ---> *путь папки с сохранёными файлами*
        * files        ---> *массив имён сохранёных файлов*
        * linksToParse ---> *массив ссылок, из которых нужно распарсить страницу и получить данные*
        * DBData
            * tableHeaders  ---> *заголовки прочитаной таблицы*
            * toDBInsert    ---> *массив обьектов для сохранения в БД*
        
        
* ## `/info` 
    * >prod
    >
        * none
        
