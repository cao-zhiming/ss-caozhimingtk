import sweetalert.js
import sweetalert

swal({
  text: '输入搜索内容……',
  content: "input",
  button: {
    text: "输入……",
    closeModal: false,
  },
})
.then(name => {
  if (!name) throw null;
 
  window.location.href='https://czhiming.cn/?s=${name}';
})

.catch(err => {
  if (err) {
    swal("哦不", "请求错误", "error");
  } else {
    swal.stopLoading();
    swal.close();
  }
});
