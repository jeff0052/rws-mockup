# RWS Mockup · 商米硬件背书的 RWA 发行平台概念演示

> **R**eal-**W**orld **S**unmi · POS 硬件签名背书 · Solana 链上发行 · 真实餐饮经营数据驱动

这是 RWS 项目第一阶段的产品概念演示(mockup),包含 5 个核心页面 + 1 个索引页。

## 在线访问

部署到 GitHub Pages 后,直接打开仓库链接即可访问。索引页 `index.html` 是入口。

## 页面清单

| 文件 | 角色 | 说明 |
|------|------|------|
| `index.html` | 索引 | 项目概览 + 4 个页面导航 |
| `asset-list.html` | 投资人 · 浏览 | 资产市场,筛选可投资项目 |
| `asset-detail.html` | 投资人 · 决策 | 单个资产详情(4 tab:概况/经营数据/链上交易/条款) |
| `investor-dashboard.html` | 投资人 · 持仓 | 持仓总值 + 实时经营数据 + 链上事件 |
| `transactions.html` | 投资人 · 二级流通 | 在交易标的 + 盘口 + 买卖表单 + 全市场成交 + 我的挂单 |
| `merchant-dashboard.html` | 商家 · 发行人 | 融资进度 + 投资人 + POS + 还款计划 |

## 设计语言

- **品牌**: 商米橙 `#FF6A13` 为主色 + 白底米色辅助 + 深灰文字
- **字体**: Manrope(西文+中文)+ JetBrains Mono(代码/数字)
- **响应式**: 桌面 1280px / 平板 1024px / 手机 768px / 小屏 380px

## 本地预览

任何静态文件服务器都可以,推荐:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve

# 或直接双击 index.html 用浏览器打开
```

## 部署到 GitHub Pages(完整流程)

### 1. 在 GitHub 创建空仓库

去 [github.com/new](https://github.com/new) 创建一个新仓库,比如名字叫 `rws-mockup`,**不要**初始化 README/license/.gitignore。

### 2. 在本地把这个文件夹推上去

打开终端,`cd` 到这个文件夹所在目录,然后:

```bash
git init
git add .
git commit -m "Initial mockup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rws-mockup.git
git push -u origin main
```

把 `YOUR_USERNAME` 换成你的 GitHub 用户名。

### 3. 开启 GitHub Pages

在 GitHub 仓库页面:

1. 点 **Settings**
2. 左边菜单点 **Pages**
3. **Source** 选 `Deploy from a branch`
4. **Branch** 选 `main` + `/ (root)`,点 **Save**
5. 等 1-2 分钟,刷新页面,顶部会出现 `Your site is live at https://YOUR_USERNAME.github.io/rws-mockup/`

打开这个链接即可在线访问,可以发给任何人。

## 自定义域名(可选)

如果你想用自己的域名(比如 `rws.yourdomain.com`):

1. 仓库根目录创建 `CNAME` 文件,内容是你的域名
2. 在 DNS 服务商加 CNAME 记录指向 `YOUR_USERNAME.github.io`

## 后续可扩展的页面

当前 5 页覆盖了"投资人侧浏览/决策/持仓/交易 + 商家侧发行"的完整闭环。后续可加:

- **认购流程页** (KYC + 协议 + 转账 + 收代币 4 步)
- **管理员后台** (RWS 平台方 · 多商户多发行总览)
- **链上数据浏览器** (类 Etherscan,展示透明度叙事)

## License

此 mockup 仅用于内部演示,不构成投资邀约。所有数据为示例。
