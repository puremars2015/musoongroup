export function YearToLetter(year: number) {
    const baseYear = 2020; // 基準年份
    let difference = year - baseYear; // 計算與基準年份的差異
    
    // 確保差異值在0到25之間（對應於A到Z）
    difference %= 26; 
    
    // 將差異值轉換為對應的ASCII碼（A的ASCII碼為65）
    const letterCode = 65 + difference; 
    
    // 將ASCII碼轉換為字母
    const letter = String.fromCharCode(letterCode);
    
    return letter;
  }