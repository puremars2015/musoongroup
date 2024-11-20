export function GroupBy(array: any, ...keys: any[]) {
    return array.reduce((result: any, currentItem: any) => {
        // 根據key1和key2創建一個唯一的分組標識

        if (!currentItem[keys[0]]) {
            return result;
        }

        let groupValue = `${currentItem[keys[0]]}`;

        for(let i = 1; i < keys.length; i++){
            groupValue = groupValue + '-' + currentItem[keys[i]];
        }

        // 如果result中還沒有這個分組，則創建一個空陣列
        if (!result[groupValue]) {
            result[groupValue] = [];
        }

        // 將當前元素添加到對應分組的陣列中
        result[groupValue].push(currentItem);

        // 返回累積結果
        return result;
    }, {}); // 初始化一個空對象作為累積結果
}
