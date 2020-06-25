module.exports = function parseEncodedData(key = 'encdata') {

    const value = parseUrl(key)

    if (!value || !isBase64(value)) {
        return null
    }
    let userDataString = atob(value)

    if (!validateStringData(userDataString) || !IsJsonString(userDataString)) {
        return null
    }

    return JSON.parse(userDataString);
}

function parseUrl(key) {
    let value = null;
    if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        value = urlParams.get(key);
    }
    return value;
}

function validateStringData(value) {

    //TODO needs improvement
    const regex = /^\[\[([+-]?\d,?){3}],\[(\[([+-]?\d,?){5}],?){5}\]\]$/

    return value.search(regex) === 0
}

function isBase64(str) {
    try {
        return btoa(atob(str)) == str;
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
