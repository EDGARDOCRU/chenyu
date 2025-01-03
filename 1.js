//*** 实现搜索引擎切换 ***
// 当页面加载时，默认选择百度搜索，并动态更新表单的 action 和查询参数
window.onload = function () {
  var baiduOption = document.getElementById("baidu");
  if (baiduOption) {
    baiduOption.checked = true; // 默认选中百度
    changeAction();
  }
};

// 动态更新表单的 action 和查询参数
function changeAction() {
  var radios = document.getElementsByName("search-engine");
  var form = document.getElementById("search-form");
  if (!form) {
    console.error("表单元素不存在，请检查 HTML 结构！");
    return;
  }

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      form.action = radios[i].value; // 设置表单的 action

      // 获取搜索输入框
      var queryInput = form.querySelector('input[type="text"]');
      if (!queryInput) {
        console.error("搜索输入框未找到，请检查 HTML 结构！");
        return;
      }

      // 根据搜索引擎调整查询参数名
      if (radios[i].value === "https://www.baidu.com/s") {
        queryInput.name = "wd"; // 百度的查询参数名
      } else {
        queryInput.name = "q"; // Google 和 Bing 的查询参数名
      }
      break;
    }
  }
}

// 获取表单和相关元素
var form = document.getElementById("search-form");
if (form) {
  var searchInput = form.querySelector('input[type="text"]');
  var searchRadios = form.querySelectorAll('input[name="search-engine"]');

  // 监听表单提交事件
  form.addEventListener("submit", function (event) {
    // 如果搜索框为空，阻止表单提交，但不提示
    if (!searchInput || !searchInput.value.trim()) {
      event.preventDefault(); // 阻止提交
    }
  });
}

// 辅助函数：检查是否有选中的搜索引擎（备用，可扩展）
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
  { name: "chenyu", path: "icon/chenyu.png" },
  { name: "Namesilo", path: "icon/Namesilo.ico" },
  { name: "Cloudflare", path: "icon/Cloudflare.ico" },
  { name: "Serv00", path: "icon/Serv00.ico" },
  { name: "MyLead", path: "icon/MyLead.jpeg" },
  { name: "ZeroSSL", path: "icon/ZeroSSL.ico" },
  { name: "Google", path: "icon/Google.svg" },
  { name: "Baidu", path: "icon/Baidu.svg" },
  { name: "Bing", path: "icon/Bing.svg" },
  { name: "search", path: "icon/search.svg" },
  { name: "Google AI Studio", path: "icon/Google AI Studio.svg" },
  { name: "922 S5 Proxy", path: "icon/922 S5 Proxy.ico" },
  { name: "Outlook", path: "icon/Outlook.ico" },
];
// 遍历图标占位符并加载对应图标
icons.forEach((icon) => {
  const element = document.querySelector(`[data-icon="${icon.name}"]`);
  if (!element) return; // 如果找不到对应占位符，跳过

  const ext = icon.path.split(".").pop(); // 获取文件扩展名
  if (ext === "svg") {
    // 动态加载 SVG 图标
    fetch(icon.path)
      .then((response) => response.text())
      .then((svgContent) => {
        element.innerHTML = svgContent; // 将 SVG 插入到占位符中
      });
  } else {
    // 动态加载 PNG  JPG  ICO JPEG 图标
    const img = document.createElement("img");
    img.src = icon.path;
    img.alt = icon.name;
    img.width = 40;
    img.height = 40;
    element.appendChild(img); // 将图片插入到占位符中
  }
});
