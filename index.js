function getAndDecodeData(key = 'encdata', encodedValue = null) {

    let value = !encodedValue ? parseUrl(key) : encodedValue.trim();

    if (!value || !isBase64(value)) {
        return {
            encoded: null,
            decoded: null,
            data: null,
        }
    }
    const userDataString = atob(value)

    if (!validateDecodedData(userDataString) || !IsJsonString(userDataString)) {
        return {
            encoded: null,
            decoded: null,
            data: null,
        }
    }

    // return JSON.parse(userDataString);

    return {
        encoded: value,
        decoded: userDataString,
        data: JSON.parse(userDataString),
    }
}

function parseUrl(key  = 'encdata') {
    let value = null;
    if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        value = urlParams.get(key);
    }
    return value;
}

function validateDecodedData(value) {

    //TODO needs improvement
    const regex = /^\[\[([+-]?\d,?){3}],\[(\[([+-]?\d,?){5}],?){5}\]\]$/

    return value.search(regex) === 0
}

function isBase64(str) {
    try {
        return btoa(atob(str)) === str;
    } catch (err) {
        return false;
    }
}

function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

module.exports = {
    getAndDecodeData,
    parseUrl,
    validateDecodedData,
    isBase64,
    IsJsonString
}