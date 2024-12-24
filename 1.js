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
//***为元素提供附加的文本信息。当用户将鼠标悬停在链接列表的元素上时，浏览器将显示该属性的i值作为提示。***
// 获取所有链接元素
var links = document.querySelectorAll(".links-box");

// 为每个链接元素添加提示框
links.forEach(function (link) {
  var tooltipContent = link.querySelector("i").getAttribute("content");
  tippy(link, {
    content: tooltipContent,
    placement: "bottom",
    animation: "scale",
  });
});
// ***动态加载多种格式的图标***
// 图标路径映射表
const icons = [
  { name: "AList", path: "icon/AList.svg" },
  { name: "Apple", path: "icon/Apple.svg" },
  { name: "Google 翻译", path: "icon/Google 翻译.ico" },
  { name: "Apple2", path: "icon/Apple2.svg" },
  { name: "Aria2", path: "icon/Aria2.svg" },
  { name: "百度识图", path: "icon/百度识图.svg" },
  { name: "GitHub", path: "icon/GitHub.svg" },
  { name: "bilibili", path: "icon/bilibili.ico" },
  { name: "ChatGPT", path: "icon/ChatGPT.svg" },
  { name: "YouTube", path: "icon/YouTube.png" },
  { name: "豆瓣电影", path: "icon/豆瓣电影.ico" },
  { name: "iconfont", path: "icon/iconfont.png" },
  { name: "头条号", path: "icon/头条号.png" },
  { name: "TikTok", path: "icon/TikTok.ico" },
  { name: "西瓜创作平台", path: "icon/西瓜创作平台.ico" },
  { name: "网易云音乐", path: "icon/网易云音乐.svg" },
  { name: "PikPak", path: "icon/PikPak.svg" },
  { name: "微信公众平台", path: "icon/微信公众平台.ico" },
  { name: "Topbook", path: "icon/Topbook.png" },
  { name: "Qwerty Learner", path: "icon/Qwerty Learner.svg" },
  { name: "SMS-Activate", path: "icon/SMS-Activate.png" },
  { name: "IconScout", path: "icon/IconScout.png" },
  { name: "吾爱破解", path: "icon/吾爱破解.ico" },
  { name: "网易BUFF", path: "icon/网易BUFF.png" },
  { name: "iMyShare", path: "icon/iMyShare.ico" },
  { name: "TikTok2", path: "icon/TikTok2.ico" },
  { name: "Facebook", path: "icon/Facebook.png" },
  { name: "Twitter", path: "icon/Twitter.svg" },
  { name: "taobao", path: "icon/taobao.ico" },
  { name: "jd", path: "icon/jd.svg" },
  { name: "Futurepedia", path: "icon/Futurepedia.svg" },
  { name: "BYRUTOR", path: "icon/BYRUTOR.png" },
  { name: "thepiratebay", path: "icon/thepiratebay.jpg" },
  { name: "千牛", path: "icon/千牛.png" },
  { name: "阿里1688", path: "icon/阿里1688.png" },
];
// 遍历图标占位符并加载对应图标
icons.forEach(icon => {
  const element = document.querySelector(`[data-icon="${icon.name}"]`);
  if (!element) return; // 如果找不到对应占位符，跳过

  const ext = icon.path.split('.').pop(); // 获取文件扩展名
  if (ext === "svg") {
      // 动态加载 SVG 图标
      fetch(icon.path)
          .then(response => response.text())
          .then(svgContent => {
              element.innerHTML = svgContent; // 将 SVG 插入到占位符中
          });
  } else {
      // 动态加载 PNG  JPG  ICO 图标
      const img = document.createElement("img");
      img.src = icon.path;
      img.alt = icon.name;
      img.width = 40;
      img.height = 40;
      element.appendChild(img); // 将图片插入到占位符中
  }
});
