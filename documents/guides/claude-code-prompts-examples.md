# Claude Code 開發流程 Prompt 範例集

基於六大開發階段的實戰 prompt 範例，幫助團隊快速上手 Claude Code 並提升開發效率。

---

## 🎯 高度匹配階段 (85-90%)

### 4. 切板與靜態頁面製作階段

#### 設計稿轉換
```bash
# 上傳設計稿並轉換為代碼
claude "@ design.png 分析這個設計稿，生成對應的 React 元件和 CSS 樣式"

# 從 Figma 截圖生成代碼
claude "這是一個電商網站的商品卡片設計，請幫我生成響應式的 React 元件，包含圖片、標題、價格和按鈕"

# 設計系統元件生成
claude "根據這個 UI 設計圖，建立一個可重用的 Button 元件，支援 primary、secondary、danger 三種樣式"
```

#### 響應式布局
```bash
# 建立響應式網格系統
claude "建立一個響應式的產品展示網格，手機顯示1欄，平板2欄，桌面3欄，使用 CSS Grid"

# RWD 導航選單
claude "設計一個響應式導航選單，桌面版橫向顯示，手機版收合成漢堡選單"

# 彈性容器布局
claude "建立一個卡片容器，支援自動換行，卡片間距統一，最小寬度320px"
```

#### HTML/CSS 優化
```bash
# 語義化標籤優化
claude "@ index.html 檢查並優化這個頁面的語義化標籤，提升 SEO 和無障礙性"

# CSS 效能優化
claude "@ styles.css 分析這個 CSS 檔案，移除未使用的樣式並優化選擇器效能"

# 跨瀏覽器兼容
claude "檢查這個 CSS 動畫在 Safari 和 IE11 的兼容性，並提供兼容方案"
```

#### 互動元件實作
```bash
# 圖片輪播元件
claude "建立一個圖片輪播元件，支援觸控滑動、自動播放、指示器，使用原生 JavaScript"

# 模態視窗
claude "設計一個模態視窗元件，支援鍵盤 ESC 關閉、背景點擊關閉、內容滾動"

# 表單驗證
claude "建立一個聯絡表單，包含即時驗證、錯誤訊息顯示、送出前最終檢查"
```

---

### 5. 系統程式開發階段

#### 程式碼生成與重構
```bash
# API 整合
claude "建立一個 RESTful API 客戶端類別，支援 GET、POST、PUT、DELETE，包含錯誤處理和重試機制"

# 狀態管理
claude "使用 Redux Toolkit 建立用戶狀態管理，包含登入、登出、更新個人資料的 actions 和 reducers"

# 資料庫操作
claude "建立一個 MongoDB 的用戶模型，包含註冊、登入、密碼重設功能，使用 Mongoose"
```

#### 智能除錯
```bash
# 錯誤分析
claude "@ error.log 分析這個錯誤日誌，找出根本原因並提供修復建議"

# 程式碼檢查
claude "@ components/UserProfile.js 檢查這個元件是否有記憶體洩漏、無限重渲染等問題"

# 效能診斷
claude "@ performance.json 分析這個效能報告，識別瓶頸並提供優化方案"
```

#### 程式碼品質提升
```bash
# 重構建議
claude "@ legacy-code.js 重構這個舊程式碼，提升可讀性和維護性，遵循 SOLID 原則"

# TypeScript 轉換
claude "@ utils.js 將這個 JavaScript 檔案轉換為 TypeScript，加入適當的型別定義"

# 安全性檢查
claude "檢查這個登入 API 是否有 SQL 注入、XSS 等安全漏洞，並提供修復方案"
```

#### 架構設計
```bash
# 微服務架構
claude "設計一個電商系統的微服務架構，包含用戶服務、產品服務、訂單服務、付款服務"

# 資料庫設計
claude "設計一個社群平台的資料庫架構，包含用戶、貼文、留言、按讚功能的 ERD"

# API 設計
claude "設計一個部落格系統的 RESTful API，包含 CRUD 操作、權限控制、分頁查詢"
```

---

## 🚀 中度提升階段 (60-70%)

### 1. 需求溝通階段

#### 需求分析與規劃
```bash
# 計劃模式啟動
# 按 Shift + Tab 進入計劃模式
claude "分析電商網站專案需求，建立完整的功能規格書和技術架構規劃"

# 用戶故事生成
claude "根據以下需求：'用戶可以瀏覽商品、加入購物車、結帳付款'，生成詳細的用戶故事和驗收條件"

# 技術選型建議
claude "分析這個專案需求，推薦最適合的前端框架、後端技術、資料庫選擇，並說明理由"
```

#### 需求文件處理
```bash
# 會議記錄整理
claude "@ meeting-notes.txt 整理這份會議記錄，提取關鍵需求、決議事項和後續行動"

# 需求變更分析
claude "@ requirements-v1.md @ requirements-v2.md 比較這兩版需求文件的差異，分析變更影響"

# 功能清單生成
claude "根據這份產品規格書，生成詳細的功能清單和開發優先順序建議"
```

#### 溝通協作
```bash
# 技術文件撰寫
claude "為這個 API 撰寫技術文件，包含端點說明、參數定義、回應格式、錯誤代碼"

# 專案時程規劃
claude "根據功能清單和團隊規模，規劃 6 週的開發時程，包含里程碑和風險評估"

# 跨部門溝通
claude "將這份技術架構圖轉換為非技術人員容易理解的說明文件"
```

---

### 6. 測試與驗收階段

#### 測試案例生成
```bash
# 單元測試生成
claude "@ components/LoginForm.js 為這個登入表單元件生成完整的單元測試，使用 Jest 和 React Testing Library"

# 整合測試設計
claude "設計用戶註冊流程的整合測試，包含 API 呼叫、資料庫操作、郵件發送的測試案例"

# E2E 測試腳本
claude "使用 Cypress 撰寫電商網站的端對端測試，涵蓋瀏覽商品、加入購物車、結帳流程"
```

#### 效能與品質測試
```bash
# 效能測試分析
claude "! npm run lighthouse 執行效能測試後，分析報告並提供優化建議"

# 負載測試
claude "設計這個 API 的負載測試方案，模擬 1000 併發用戶的場景"

# 安全性測試
claude "檢查這個網站的安全性，包含 CSRF、XSS、SQL 注入的測試案例"
```

#### 視覺與用戶體驗測試
```bash
# 視覺回歸測試
claude "建立首頁的視覺回歸測試，在不同螢幕尺寸下截圖比對"

# 無障礙性測試
claude "@ index.html 檢查這個頁面的無障礙性，確保符合 WCAG 2.1 AA 標準"

# 用戶體驗測試
claude "設計用戶註冊流程的可用性測試，包含任務設計、成功指標、錯誤處理"
```

#### 測試自動化
```bash
# CI/CD 測試整合
claude "設計 GitHub Actions 工作流程，包含程式碼檢查、單元測試、整合測試、部署"

# 測試覆蓋率分析
claude "! npm run test:coverage 分析測試覆蓋率報告，識別未覆蓋的關鍵程式碼區塊"

# 測試報告生成
claude "彙整所有測試結果，生成專案品質報告，包含測試覆蓋率、效能指標、安全性檢查"
```

---

## 🔧 Claude Code 魔法符號使用

### 檔案操作符號
```bash
# @ 符號 - 檔案路徑引用
claude "@ src/components/Header.js 重構這個元件，提升效能和可讀性"
claude "@ package.json 檢查相依套件是否有安全漏洞"
claude "@ README.md 根據專案現況更新說明文件"

# 多檔案同時分析
claude "@ src/pages/Home.js @ src/components/ProductCard.js 檢查這兩個檔案的程式碼一致性"
```

### 系統指令符號
```bash
# ! 符號 - 執行系統指令
claude "! npm install axios 安裝 HTTP 客戶端套件"
claude "! git status 檢查目前的版本控制狀態"
claude "! npm run build 建置專案並分析建置結果"
claude "! npm test -- --coverage 執行測試並生成覆蓋率報告"
```

### Claude 內建指令
```bash
# / 符號 - Claude 特殊指令
claude "/help 顯示 Claude Code 功能說明"
claude "/resume 恢復上次的對話內容"
claude "/export 匯出對話記錄為專案文件"
claude "/memory 檢視專案記憶和設定"
```

### 多行輸入符號
```bash
# \ 符號 - 多行輸入
claude "建立一個電商網站首頁 \
包含導航選單、商品輪播、特色商品展示 \
使用 React + TypeScript + Tailwind CSS \
確保響應式設計和無障礙性"
```

---

## 💡 進階技巧與最佳實踐

### 專案脈絡記憶
```bash
# 設定專案脈絡
claude "# 記住我的專案使用 React + TypeScript + Next.js + Prisma + PostgreSQL"
claude "# 這是一個 B2B SaaS 平台，主要功能是客戶關係管理"
claude "# 團隊規模 5 人，採用 Agile 開發流程，Sprint 週期 2 週"
```

### 工作流程整合
```bash
# VSCode 整合工作流程
claude "在 VSCode 中開啟專案，分析檔案結構並建議程式碼組織優化"

# Git 工作流程
claude "! git log --oneline -10 檢視最近 10 次提交，分析程式碼變更模式"

# 文件管理
claude "/export 電商專案開發記錄 匯出完整的開發過程文件"
```

### 效率提升技巧
```bash
# 批次檔案處理
claude "檢查 src/components/ 目錄下所有 .tsx 檔案的程式碼品質和一致性"

# 快速原型開發
claude "30 分鐘內建立一個待辦事項應用的 MVP，包含增刪改查功能"

# 問題快速診斷
claude "專案無法啟動，! npm start 出現錯誤，請協助診斷和修復"
```

---

## 📈 成效評估指標

### 開發效率提升
- **切板製作**：從設計稿到代碼的時間縮短 60-80%
- **程式開發**：程式碼生成和除錯效率提升 50-70%
- **需求分析**：文件整理和規劃時間節省 40-60%
- **測試驗收**：測試案例生成和執行效率提升 30-50%

### 品質改善指標
- 程式碼一致性和可維護性顯著提升
- 安全漏洞和 Bug 數量減少 30-40%
- 文件完整性和更新頻率提升 50%
- 團隊協作效率和溝通品質改善

### 學習成本評估
- Claude Code 基礎操作：1-2 小時上手
- 魔法符號系統：半天熟練使用
- 進階工作流程：1-2 週完全整合
- ROI 回收期：2-4 週開始顯現效益

---

**更新日期：** 2025-08-03  
**版本：** v1.0  
**維護者：** 開發團隊