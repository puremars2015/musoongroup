
export function DeepCopy(obj:any):any {
    return JSON.parse(JSON.stringify(obj));
}