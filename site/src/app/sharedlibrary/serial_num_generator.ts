export function SerialNumGenerate(list: string[], template: string):string {
    if (list.length === 0) {
        return template;    
    }

    list.sort();
    let lotno = list[list.length-1];

    // 獲取最後兩個字符
    let lastTwo = lotno.slice(-2);

    // 將這兩個字符轉換為數字並加一
    let result = parseInt(lastTwo, 10) + 1;

    lotno = lotno.slice(0, -2) + result;

    return lotno;
}