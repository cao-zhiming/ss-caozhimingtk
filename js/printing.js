  let divTyping = document.getElementById('text')
  let i = 0,
    timer = 0,
    str = user_str

  function typing () {
    if (i <= str.length) {
      divTyping.innerHTML = str.slice(0, i++) + '|'
      timer = setTimeout(typing, 130)
    }
    else {
      divTyping.innerHTML = str//结束打字,移除光标
      clearTimeout(timer)
    }
  }

  typing()
