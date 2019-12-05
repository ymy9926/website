export function saveToLocal(id, key, value) {

    let lgzy = window.localStorage.__lgzy__xjp__;
    if (!lgzy) {
        lgzy = {};
        lgzy[id] = {};
    } else {
        lgzy = JSON.parse(lgzy);
        if (!lgzy[id]) {
            lgzy[id] = {};
        }
    }

    lgzy[id][key] = value;
    console.log(lgzy);
    window.localStorage.__lgzy__xjp__ = JSON.stringify(lgzy);
}

export function loadFromLocal(id, key, def) {
    let lgzy = window.localStorage.__lgzy__xjp__;
    if (!lgzy) {
        return def;
    }
    lgzy = JSON.parse(lgzy)[id];
    if (!lgzy) {
        return def;
    }
    return lgzy[key];
}
    
export function saveCurrentChild(id) {
    window.localStorage.currentChild = id
}

export function getCurrentChild() {
    return window.localStorage.currentChild
}