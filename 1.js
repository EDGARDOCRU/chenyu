//***实现搜索引擎切换***
// 当搜索引擎选项变化时，动态更新表单的 action 和查询参数
window.onload = function () {
  var baiduOption = document.getElementById("baidu");
  baiduOption.checked = true;
  changeAction();
};
function changeAction() {
  var radios = document.getElementsByName("search-engine");
  var form = document.getElementById("search-form");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      form.action = radios[i].value;
      // 当选择百度搜索时，更改查询参数名和编码方式
      if (radios[i].value === "https://www.baidu.com/s") {
        form.querySelector('input[name="q"]').name = "wd";
        form.querySelector('input[name="ie"]').value = "utf-8";
      } else {
        form.querySelector('input[name="wd"]').name = "q";
        form.querySelector('input[name="ie"]').value = "";
      }
      break;
    }
  }
}
// 获取表单元素
var form = document.getElementById("search-form");
var searchInput = form.querySelector('input[name="q"]');
var searchRadios = form.querySelectorAll('input[name="search-engine"]');

// 监听表单提交事件
form.addEventListener("submit", function (event) {
  // 如果搜索内容为空或搜索引擎选项未选中，则阻止表单提交
  if (!searchInput.value || !checkRadioSelected(searchRadios)) {
    event.preventDefault();
  }
});

// 辅助函数：检查单选框是否有选中项
function checkRadioSelected(radios) {
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return true;
    }
  }
  return false;
}
// ***链接列表样式***
document.querySelectorAll(".button").forEach((button) => (button.innerHTML = "<div><span>" + button.textContent.trim().split("").join("</span><span>") + "</span></div>"));
