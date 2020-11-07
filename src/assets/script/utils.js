export default {
  formatTime(date, format) {
    if (typeof date == "number") {
      date = new Date(date);
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
      };
      var fmt = format || "yyyy-MM-dd hh:mm:ss";
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
    } else {
      return date;
    }
  },
}

export const GetQueryValue = (name, url) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r
  if (url) {
    r = url.split('?')[2] && url.split('?')[2].match(reg)
  } else {
    r = window.location.hash.split('?')[1] && window.location.hash.split('?')[1].match(reg)
  }
  var context = ''
  if (r != null) {
    context = r[2]
  }
  reg = null
  r = null
  return context == null || context === '' || context === 'undefined' ? '' : context
}

// 获取address省略号格式
export const GetValue = (url) => {
  url = url + ''
  if (url.length > 8) {
    let value = url.substring(0, 4) + '****' + url.substring(url.length - 4, url.length)
    return value
  } else {
    return url
  }
}
