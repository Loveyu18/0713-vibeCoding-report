# Claude Code 使用手冊

> **完整指南**: 從入門到精通 Claude Code 的 Vibe Coding 體驗  
> **適用對象**: 開發者、設計師、任何想提升 AI 協作效率的人  
> **最後更新**: 2025-07-14

---

## 📋 目錄

1. [什麼是 Claude Code？](#什麼是-claude-code)
2. [安裝與設定](#安裝與設定)
3. [基本使用方法](#基本使用方法)
4. [進階功能](#進階功能)
5. [最佳實踐](#最佳實踐)
6. [實用範例](#實用範例)
7. [故障排除](#故障排除)
8. [進階技巧](#進階技巧)

---

## 🎯 什麼是 Claude Code？

Claude Code 是 Anthropic 開發的 **AI 驅動命令列工具**，它不只是一個聊天機器人，而是一個真正的 **AI 開發夥伴**。

### 核心特色

- 🤖 **Agent 模式**：會主動執行任務，不只是回答問題
- 📁 **檔案操作**：可以讀取、編輯、創建檔案
- ⚡ **指令執行**：能夠運行 bash 指令、git 操作
- 🧠 **上下文記憶**：記住整個對話歷程和專案狀態
- 🔍 **智能搜尋**：可以搜尋程式碼、網路資源
- 💻 **多語言支援**：支援各種程式語言和框架

### 與傳統 AI 工具的差異

| 傳統 AI 工具 | Claude Code |
|------------|-------------|
| 只能對話 | 可以執行動作 |
| 需要手動複製貼上 | 直接操作檔案 |
| 無法記住上下文 | 完整專案記憶 |
| 單次問答 | 持續協作 |

---

## 🚀 安裝與設定

### 系統需求

- **作業系統**: Windows 10+, macOS 10.15+, Linux
- **Node.js**: 16.0 或更高版本
- **網路連線**: 穩定的網際網路連線
- **終端機**: 支援 UTF-8 的現代終端

### 安裝步驟

#### 方法 1: npm 安裝（推薦）

```bash
# 全域安裝
npm install -g @anthropic/claude-code

# 或使用 yarn
yarn global add @anthropic/claude-code
```

#### 方法 2: 直接下載

```bash
# 下載最新版本
curl -fsSL https://claude.ai/install.sh | sh

# 或使用 wget
wget -qO- https://claude.ai/install.sh | sh
```

#### 方法 3: 從原始碼編譯

```bash
git clone https://github.com/anthropics/claude-code.git
cd claude-code
npm install
npm run build
npm link
```

### 初始設定

#### 1. 取得 API 金鑰

1. 前往 [Claude API Console](https://console.anthropic.com/)
2. 創建帳號或登入
3. 前往 API Keys 頁面
4. 點選「Create Key」
5. 複製生成的 API 金鑰

#### 2. 設定環境變數

**Linux/macOS:**
```bash
export ANTHROPIC_API_KEY="your-api-key-here"

# 永久設定（加入 ~/.bashrc 或 ~/.zshrc）
echo 'export ANTHROPIC_API_KEY="your-api-key-here"' >> ~/.bashrc
source ~/.bashrc
```

**Windows (PowerShell):**
```powershell
$env:ANTHROPIC_API_KEY="your-api-key-here"

# 永久設定
[Environment]::SetEnvironmentVariable("ANTHROPIC_API_KEY", "your-api-key-here", "User")
```

#### 3. 驗證安裝

```bash
claude-code --version
claude-code auth status
```

---

## 🎮 基本使用方法

### 啟動 Claude Code

```bash
# 基本啟動
claude-code

# 在特定專案目錄啟動
cd /path/to/your/project
claude-code

# 指定工作目錄
claude-code --directory /path/to/project
```

### 基本對話

```
你: Hello Claude, 我想開始一個新的 React 專案
Claude: 我可以幫你建立一個新的 React 專案！讓我先檢查你的環境...

🔍 檢查 Node.js 版本...
✅ Node.js v18.16.0 已安裝

要我幫你用 create-react-app 建立專案嗎？請告訴我：
1. 專案名稱
2. 是否要使用 TypeScript
3. 是否需要額外的套件（如 Tailwind CSS, React Router 等）
```

### 檔案操作指令

#### 讀取檔案
```
你: 請幫我讀取 package.json 檔案
Claude: 我來讀取 package.json 檔案的內容...

📄 package.json:
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  ...
}

我看到這是一個標準的 React 專案。需要我幫你添加什麼套件嗎？
```

#### 編輯檔案
```
你: 幫我在 App.js 中加入一個新的組件
Claude: 我來幫你編輯 App.js 檔案...

✏️ 正在編輯 App.js...
✅ 已成功添加新組件

我已經在 App.js 中加入了一個新的 Header 組件。是否需要我也建立對應的 Header.js 檔案？
```

#### 創建檔案
```
你: 建立一個新的 utils 資料夾，裡面放一個 helpers.js 檔案
Claude: 我來建立新的檔案結構...

📁 mkdir utils/
📄 建立 utils/helpers.js

✅ 檔案結構建立完成！我也在 helpers.js 中加入了一些常用的工具函數。
```

### 執行指令

```
你: 執行 npm test
Claude: 我來執行測試指令...

🚀 執行: npm test

> my-app@0.1.0 test
> react-scripts test

PASS src/App.test.js
✓ renders learn react link (23ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total

✅ 所有測試都通過了！
```

---

## 🔥 進階功能

### 1. 專案分析與建議

```
你: 分析我的專案結構，給我一些改進建議
Claude: 我來分析你的專案結構...

🔍 掃描專案檔案...
📊 分析結果：

**專案結構 (7/10)**
✅ 有良好的資料夾分層
✅ 組件檔案命名一致
⚠️  缺少 tests 資料夾
⚠️  CSS 檔案散落各處

**代碼品質 (8/10)**
✅ 使用 ES6+ 語法
✅ 有適當的註解
⚠️  部分函數過長
❌ 缺少 TypeScript

**建議改進:**
1. 建立統一的 styles 資料夾
2. 考慮導入 TypeScript
3. 增加單元測試覆蓋率
4. 使用 ESLint 和 Prettier

要我幫你實作這些改進嗎？
```

### 2. Git 整合

```
你: 幫我提交這次的更改
Claude: 我來幫你處理 Git 操作...

🔍 檢查 Git 狀態...
📋 變更檔案:
  - src/App.js (修改)
  - src/components/Header.js (新增)
  - package.json (修改)

📝 建議 commit 訊息: "Add Header component and update dependencies"

要我執行提交嗎？還是你想修改 commit 訊息？

你: 請執行提交
Claude: 
🚀 git add .
🚀 git commit -m "Add Header component and update dependencies"

✅ 提交成功！SHA: abc123f
```

### 3. 自動化部署

```
你: 幫我設定 GitHub Actions 進行自動部署
Claude: 我來幫你設定 CI/CD 流程...

📁 建立 .github/workflows/
📄 建立 deploy.yml

我已經設定了自動部署流程：
- ✅ 在 push 到 main 分支時觸發
- ✅ 執行測試
- ✅ 建置專案
- ✅ 部署到 GitHub Pages

需要我幫你設定環境變數嗎？
```

### 4. 依賴套件管理

```
你: 幫我檢查是否有過時的套件，並更新它們
Claude: 我來檢查套件狀態...

🔍 npm outdated

📦 發現過時套件:
  - react: 17.0.2 → 18.2.0 (major)
  - react-dom: 17.0.2 → 18.2.0 (major)  
  - @testing-library/react: 11.2.7 → 13.4.0 (major)

⚠️ 注意：有 major 版本更新，可能包含破壞性變更。

要我：
1. 只更新 minor 和 patch 版本？
2. 全部更新（風險較高）？
3. 逐一檢查每個套件？

你: 逐一檢查
Claude: 好的，我們一個一個來檢查...
```

---

## 💡 最佳實踐

### 1. 專案初始化建議

```bash
# 建立新專案時的完整工作流程
claude-code

你: 幫我建立一個現代化的 React 專案，包含所有最佳實踐
Claude: 我來建立一個完整的現代化 React 專案...

🚀 建立專案結構...
📦 安裝必要套件...
⚙️ 設定開發工具...
🔧 設定 CI/CD...

✅ 專案建立完成！包含：
- React 18 + TypeScript
- Tailwind CSS
- ESLint + Prettier
- Husky + lint-staged
- GitHub Actions
- 測試設定

專案已準備好進行開發！
```

### 2. 有效的提問技巧

#### ✅ 好的提問方式：
```
"幫我建立一個購物車組件，需要包含增加、刪除商品的功能，使用 TypeScript 和 Tailwind CSS"

"分析我的 API 回應時間，找出效能瓶頸並提供優化建議"

"重構這個函數，讓它更易讀且遵循 SOLID 原則"
```

#### ❌ 不好的提問方式：
```
"寫程式碼"  // 太模糊
"修改這個"  // 沒有指明要修改什麼
"幫忙"     // 沒有具體目標
```

### 3. 善用 Claude Code 的記憶功能

```
# 第一次對話
你: 我正在開發一個電商網站，使用 React + Node.js + PostgreSQL

# 之後的對話 Claude 會記住這個背景
你: 幫我優化資料庫查詢
Claude: 針對你的 PostgreSQL 電商資料庫，我建議...

你: 加個新的商品篩選功能
Claude: 我了解，這是為你的 React 電商前端添加篩選功能...
```

### 4. 工作流程範例

```
# 完整的功能開發流程
1. 需求分析
你: 我需要一個用戶認證系統

2. 技術規劃  
Claude: 我建議使用 JWT + bcrypt，需要這些 API 端點...

3. 實作開發
你: 開始實作
Claude: 我來建立檔案結構和基本代碼...

4. 測試驗證
你: 寫測試
Claude: 我來建立對應的測試檔案...

5. 部署準備
你: 準備部署
Claude: 我來設定環境變數和部署腳本...
```

---

## 📚 實用範例

### 範例 1: 建立 REST API

```
你: 幫我建立一個簡單的 Node.js REST API，包含用戶的 CRUD 操作

Claude: 我來幫你建立完整的 REST API...

🔨 建立專案結構:
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── User.js  
│   ├── routes/
│   │   └── userRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   └── app.js
├── package.json
└── .env.example

📦 安裝套件: express, mongoose, bcryptjs, jsonwebtoken

✅ API 端點已建立:
- GET /api/users - 取得所有用戶
- GET /api/users/:id - 取得特定用戶  
- POST /api/users - 建立新用戶
- PUT /api/users/:id - 更新用戶
- DELETE /api/users/:id - 刪除用戶

要我幫你測試這些 API 嗎？
```

### 範例 2: React 組件開發

```
你: 建立一個可重複使用的 Modal 組件，支援不同大小和動畫

Claude: 我來建立一個靈活的 Modal 組件...

📄 建立 src/components/Modal/index.js:
```jsx
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  size = 'medium',
  animation = 'fade'
}) => {
  // 組件實作...
};

export default Modal;
```

📄 建立 Modal.css with 動畫效果
📄 建立 Modal.stories.js for Storybook
📄 建立 Modal.test.js for 測試

✅ Modal 組件已完成！支援：
- 3 種大小：small, medium, large
- 4 種動畫：fade, slide, scale, bounce
- 鍵盤 ESC 關閉
- 點擊外部關閉
- 無障礙功能

要我展示使用範例嗎？
```

### 範例 3: 資料庫遷移

```
你: 幫我設計一個部落格的資料庫結構，並建立遷移腳本

Claude: 我來設計部落格資料庫結構...

📋 資料庫設計:
```sql
-- users 表
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- posts 表  
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content TEXT NOT NULL,
  author_id INTEGER REFERENCES users(id),
  status VARCHAR(20) DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- comments 表
CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  author_id INTEGER REFERENCES users(id),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

📁 建立 migrations/ 資料夾
📄 建立遷移腳本和回滾腳本
📄 建立種子資料

✅ 資料庫結構完成！已包含：
- 外鍵約束
- 索引優化
- 觸發器（自動更新時間）
- 示例資料

要我執行遷移嗎？
```

### 範例 4: 效能優化

```
你: 我的網站載入很慢，幫我分析和優化

Claude: 我來分析網站效能問題...

🔍 分析網站效能...
📊 發現問題:

**JavaScript 包大小**: 2.3MB (過大)
- React: 45KB
- Lodash: 287KB (可優化)
- 未使用的套件: 156KB

**圖片優化**: 需改進
- 12 張未壓縮的 PNG
- 缺少 WebP 格式
- 沒有 lazy loading

**CSS**: 需整理
- 38KB 的未使用 CSS
- 缺少 CSS 壓縮

🔧 執行優化:
1. ✅ 移除未使用的套件
2. ✅ 使用 tree shaking
3. ✅ 壓縮圖片並轉換為 WebP
4. ✅ 實作 lazy loading
5. ✅ 清理未使用的 CSS

📈 優化結果:
- 包大小: 2.3MB → 789KB (-66%)
- 首次載入時間: 4.2s → 1.8s (-57%)
- 效能評分: 52 → 89 (+71%)

優化完成！網站速度大幅提升。
```

---

## 🔧 故障排除

### 常見問題解決

#### 問題 1: API 金鑰無效
```bash
Error: Invalid API key

解決方案:
1. 檢查 API 金鑰是否正確設定
   echo $ANTHROPIC_API_KEY
   
2. 重新設定環境變數
   export ANTHROPIC_API_KEY="your-new-key"
   
3. 重新啟動終端機
```

#### 問題 2: 網路連線問題
```bash
Error: Network timeout

解決方案:
1. 檢查網路連線
   ping claude.ai
   
2. 設定代理伺服器（如需要）
   export HTTPS_PROXY=http://proxy.company.com:8080
   
3. 增加超時時間
   claude-code --timeout 60000
```

#### 問題 3: 記憶體不足
```bash
Error: JavaScript heap out of memory

解決方案:
1. 增加 Node.js 記憶體限制
   export NODE_OPTIONS="--max-old-space-size=4096"
   
2. 清理大型檔案快取
   claude-code --clear-cache
   
3. 重新啟動 Claude Code
```

#### 問題 4: 檔案權限問題
```bash
Error: Permission denied

解決方案:
1. 檢查檔案權限
   ls -la
   
2. 修改權限
   chmod 755 your-file
   
3. 使用 sudo（謹慎使用）
   sudo claude-code
```

### 效能調整

#### 最佳化設定
```bash
# ~/.claude-config.json
{
  "maxTokens": 4096,
  "temperature": 0.7,
  "cacheSize": "1GB",
  "timeout": 30000,
  "concurrent": 3,
  "features": {
    "fileWatch": true,
    "autoSave": true,
    "syntax highlighting": true
  }
}
```

---

## 🚀 進階技巧

### 1. 客製化提示詞

建立 `.claude-prompts/` 資料夾存放常用提示：

```
.claude-prompts/
├── react-component.md
├── api-endpoint.md
├── database-query.md
└── code-review.md
```

**react-component.md:**
```markdown
請幫我建立一個 React 組件，需要包含：

1. TypeScript 支援
2. Props 驗證
3. 使用 hooks
4. 支援響應式設計
5. 包含測試檔案
6. 符合 accessibility 標準

組件需求：{component_description}
```

使用方式：
```
你: @react-component 建立一個輪播圖組件
Claude: 我來使用 React 組件模板建立輪播圖...
```

### 2. 工作流程自動化

建立 `.claude-workflows/` 資料夾：

```yaml
# .claude-workflows/deploy.yml
name: 部署流程
steps:
  - name: 執行測試
    run: npm test
  - name: 建置專案  
    run: npm run build
  - name: 檢查建置檔案
    run: ls -la dist/
  - name: 部署到伺服器
    run: rsync -avz dist/ user@server:/var/www/
```

### 3. 程式碼風格設定

```json
// .claude-style.json
{
  "language": "javascript",
  "framework": "react",
  "style": {
    "quotes": "single",
    "semicolons": true,
    "indentation": 2,
    "trailingComma": "es5"
  },
  "conventions": {
    "componentNaming": "PascalCase",
    "fileNaming": "camelCase",
    "folderStructure": "feature-based"
  },
  "preferences": {
    "hooks": "preferred",
    "stateManagement": "context",
    "testing": "jest",
    "styling": "tailwind"
  }
}
```

### 4. 團隊協作設定

```json
// .claude-team.json  
{
  "team": "Frontend Team",
  "conventions": {
    "commitMessage": "conventional",
    "branchNaming": "feature/task-description",
    "codeReview": "required"
  },
  "sharedPrompts": [
    "code-review",
    "bug-fix",
    "feature-development"
  ],
  "integrations": {
    "jira": "https://company.atlassian.net",
    "slack": "#frontend-team",
    "github": "company/frontend-repo"
  }
}
```

---

## 📱 整合其他工具

### VS Code 整合

安裝 Claude Code VS Code 擴充套件：

```json
// settings.json
{
  "claude-code.enabled": true,
  "claude-code.autoSuggest": true,
  "claude-code.shortcut": "Ctrl+Shift+C"
}
```

### Git Hooks 整合

```bash
# .git/hooks/pre-commit
#!/bin/sh
claude-code review --staged --format=summary
```

### CI/CD 整合

```yaml
# .github/workflows/claude-review.yml
name: Claude Code Review
on: [pull_request]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Claude Code Review
        run: |
          claude-code review --diff=origin/main
```

---

## 🎯 效率提升技巧

### 1. 鍵盤快捷鍵

```bash
# 常用快捷鍵設定
alias cc="claude-code"
alias ccr="claude-code review"
alias ccd="claude-code deploy"
alias ccb="claude-code build"
```

### 2. 批次處理

```bash
# 批次檔案處理
claude-code process --batch --pattern="src/**/*.js" --task="add-comments"

# 批次測試
claude-code test --parallel --coverage
```

### 3. 專案模板

建立常用專案模板：

```bash
# 建立模板
claude-code template create react-ts-app

# 使用模板
claude-code new --template react-ts-app my-new-project
```

---

## 📊 監控與分析

### 使用統計

```bash
# 查看使用統計
claude-code stats

輸出:
📊 Claude Code 使用統計 (本月)
- 總對話: 156 次
- 檔案操作: 89 次  
- 指令執行: 234 次
- 時間節省: ~23.5 小時
- 效率提升: 312%
```

### 效能監控

```bash
# 啟用效能監控
claude-code monitor --enable

# 查看效能報告
claude-code monitor --report
```

---

## 🌟 社群與資源

### 官方資源
- 📖 [官方文件](https://docs.anthropic.com/claude-code)
- 🎥 [教學影片](https://youtube.com/claude-code)
- 💬 [Discord 社群](https://discord.gg/claude-code)

### 社群資源  
- 🌐 [GitHub Discussions](https://github.com/anthropics/claude-code/discussions)
- 📱 [Reddit r/ClaudeCode](https://reddit.com/r/claudecode)
- 🐦 [Twitter @ClaudeCode](https://twitter.com/claudecode)

### 學習資源
- 📚 [最佳實踐集合](https://github.com/claude-code/best-practices)
- 🎯 [實用範例庫](https://github.com/claude-code/examples)
- 🔧 [插件市場](https://marketplace.claude-code.com)

---

## 🔄 更新日誌

| 日期 | 版本 | 更新內容 |
|------|------|----------|
| 2025-07-14 | v1.0 | 初始手冊建立，包含完整使用指南 |

---

## 📞 技術支援

### 回報問題
```bash
# 收集診斷資訊
claude-code diagnostic

# 提交問題報告
claude-code report --issue="描述問題" --logs
```

### 取得幫助
```bash
# 查看幫助
claude-code --help

# 查看特定指令幫助
claude-code deploy --help

# 互動式幫助
claude-code interactive-help
```

**需要協助？**
- 📧 Email: support@anthropic.com
- 💬 線上客服: [chat.anthropic.com](https://chat.anthropic.com)  
- 📞 電話: +1-800-CLAUDE

---

**🎉 開始你的 Claude Code 之旅！**

這份手冊涵蓋了從基礎到進階的所有使用方法。記住，Claude Code 的核心精神就是 **Vibe Coding** - 跟隨你的直覺，讓 AI 成為你最佳的開發夥伴！