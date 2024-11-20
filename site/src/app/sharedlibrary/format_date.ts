export function FormatDate(date: Date) {
    const year = date.getFullYear();
    // 月份加 1 並確保格式為兩位數
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    // 日期確保格式為兩位數
    const day = date.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export function FormatDateTime(date: Date) {
    debugger;
    const pad = (num:number) => (num < 10 ? `0${num}` : num);

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // 月份是從0開始的
    const day = pad(date.getDate());
    const hour = pad(date.getHours());
    const minute = pad(date.getMinutes());
    const second = pad(date.getSeconds());
  
    let r = `${year}-${month}-${day} ${hour}:${minute}`;

    return r;
}