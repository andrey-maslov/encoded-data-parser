export function parseEncodedData(key: string = 'encdata'): string | null {

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

export function parseUrl(key: string): string | null {
    let value: string | null = null;
    if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        value = urlParams.get(key);
    }
    return value;
}

export function validateStringData(value: string): boolean {

    //TODO needs improvement
    const regex = /^\[\[([+-]?\d,?){3}],\[(\[([+-]?\d,?){5}],?){5}\]\]$/

    return value.search(regex) === 0
}

export function isBase64(str: string) {
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
}

export function IsJsonString(str: string): boolean {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
