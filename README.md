# encoded-data-parser

Модуль парсит URL или принимает строку, зашифрованную в base64 в качестве параметра, валидирует ее и возвращает объект со значениями, либо null, если валидация не прошла.
Принимает 2 необязательных параметра ``key: string`` & `encodedValue: string`.
Первый параметр имеет дефолтное значение `'encdata'`.
Второй параметр по умолчанию парсится из URL. Если нужно просто провалидировать или расшифровать значение, то первым параметром передаем `null`, а вторым - нужное зашифрованное значение.

Для парсинга URL параметр должен иметь такой вид:

`encdata=W1sxLDQsMV0sW1stMiwwLDEsLTIsMl0sWy0xLDEsMSwyLC01XSxbMiwzLDAsMywwXSxbMSw0LDAsLTIsMV0sWzIsLTMsLTIsLTMsMV1dXQ==`

Вид возвращаемого значения в случае прошедшего валидацию значения: 

#### Javascript
```javascript
{
   encoded: '[[1,4,1],[[-2,0,1,-2,2],[-1,1,1,2,-5],[2,3,0,3,0],[1,4,0,-2,1],[2,-3,-2,-3,1]]]',
   decoded: 'W1sxLDQsMV0sW1stMiwwLDEsLTIsMl0sWy0xLDEsMSwyLC01XSxbMiwzLDAsMywwXSxbMSw0LDAsLTIsMV0sWzIsLTMsLTIsLTMsMV1dXQ==',
   data: [
            [1,4,1],
                 [
                     [-2,0,1,-2,2],
                     [-1,1,1,2,-5],
                     [2,3,0,3,0],
                     [1,4,0,-2,1],
                     [2,-3,-2,-3,1]
                 ]
            ],
    }
```

#### Использование

##### Вносим в package.json как зависимость
```javascript
"dependencies": {
    "encoded-data-parser": "git+https://github.com/andrey-maslov/encoded-data-parser.git"
}
```
`
npm install
`

##### В коде компонента
```javascript
import parseEncodedData from 'encoded-data-parser';

//some code

const dataFromUrl = parseEncodedData();
```