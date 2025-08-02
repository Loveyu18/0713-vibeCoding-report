
# Claude Code 實戰操作簡報大綱

**簡報主題：** Claude Code - 淨灘資訊網站完整開發流程

**目標聽眾：** 開發者、技術團隊、專案經理

**簡報時長：** 10 分鐘

---

## 第一部分：快速上手 (2 分鐘)

### 1. 標題頁
- **主題：** Claude Code - AI 驅動的淨灘網站開發
- **副標題：** 從需求分析到上線部署的完整流程

### 2. 一分鐘安裝
```bash
# 快速安裝
npm install -g @anthropic-ai/claude-code

# 立即開始
claude "規劃一個淨灘資訊網站專案"
```

---

## 第二部分：魔法符號系統 (2 分鐘)

### 特殊符號含義
```bash
!     # Bash 模式 - 執行系統指令
/     # 指令模式 - Claude 內建指令
@     # 檔案路徑 - 快速引用檔案
\     # 換行符號 - 多行輸入
```

### 實戰範例
```bash
claude "! ls -la"                    # 執行系統指令
claude "@ README.md 分析這個檔案"     # 分析指定檔案
claude "/export"                     # 匯出對話記錄
claude "/resume"                     # 恢復上次對話
```

---

## 第三部分：核心功能實戰 (4 分鐘)

### 1. 計劃模式 (Plan Mode) (1 分鐘)
- **啟動方式：** `Shift + Tab` 進入計劃模式
- **使用場景：** 複雜任務規劃、架構設計
- **即時演示：** "規劃一個淨灘資訊網站的完整架構"

### 2. 檔案操作實戰 (1.5 分鐘)
```bash
# 淨灘網站功能開發
claude "建立淨灘活動列表頁面的 React 元件"

# 地圖整合功能
claude "實作互動式地圖顯示淨灘地點"

# 志工報名系統
claude "設計志工報名表單與驗證"
```

### 3. 影像與文檔處理 (1.5 分鐘)
- **設計稿解析：** 上傳環保主題設計圖
- **OCR 功能：** 識別海廬資料表格
- **即時演示：** 生成淨灘網站 UI 設計規範

---

## 第四部分：進階技巧 (1.5 分鐘)

### 1. VSCode 整合
- 安裝 Claude Code 擴充功能
- 直接在編輯器中使用 Claude
- 無縫工作流程整合

### 2. 實用工具推薦
- **ccusage：** 追蹤 Token 使用量
- **awesome-claude-code：** 進階技巧資源庫

---

## 第五部分：實戰小技巧 (30 秒)

### 淨灘網站開發流程
```bash
claude "# 記住我的專案使用 React + TypeScript + Leaflet.js"
claude "@ package.json 分析地圖 API 相關依賴"
claude "! npm test"                  # 執行淨灘功能測試
claude "/export 淨灘網站開發記錄"    # 匯出專案文件
```

### 技術棧說明
- **前端：** React + TypeScript + Tailwind CSS + Leaflet.js
- **後端：** Node.js + Express + MongoDB
- **部署：** Docker + Vercel/Netlify
- **API：** Google Maps API、郵件通知服務

---

**演示重點：**
- 完整的環保公益專案開發流程
- SA 到前後端交付的完整示範
- 地圖整合與資料視覺化
- AI 輔助開發解決環保議題的價值