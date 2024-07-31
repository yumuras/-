// 本日の日付を取得
export const getToday = (format = null) => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
  
    if (format === 'yyyy/mm/dd') {
      return `${year}/${month}/${day}`
    } else if (format === 'yyyy年mm月dd日') {
      return `${year}年${month}月${day}日`
    } else {
      return `${year}-${month}-${day}`
    }
  }
  
  // 本日の日を取得
  export const getTodayDay = () => {
    const today = new Date()
    return today.getDate()
  }