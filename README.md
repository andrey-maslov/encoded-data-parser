# encoded-data-parser

Parses URL parameters, find parameter with encoded in base64 value, validate it and returns null or js array with user data.
Default parameter key 'encdata', but you can pass another.

View of URL parameter

`encdata=W1sxLDQsMV0sW1stMiwwLDEsLTIsMl0sWy0xLDEsMSwyLC01XSxbMiwzLDAsMywwXSxbMSw0LDAsLTIsMV0sWzIsLTMsLTIsLTMsMV1dXQ==`

Type of returned decoded data is array like: 

#### Javascript
```javascript
[
    [1,4,1],
    [
        [-2,0,1,-2,2],
        [-1,1,1,2,-5],
        [2,3,0,3,0],
        [1,4,0,-2,1],
        [2,-3,-2,-3,1]
    ]
]
```

#### Expample of use

##### Put as dependency to file package.json
```javascript
"dependencies": {
    "encoded-data-parser": "git+https://github.com/andrey-maslov/encoded-data-parser.git"
}
```
`
npm install
`

##### In component
```javascript
import parseEncodedData from 'encoded-data-parser';

//some code

const dataFromUrl = parseEncodedData('encdata');
```