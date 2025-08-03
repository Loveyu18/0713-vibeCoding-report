# Claude Code SubAgents 各階段推薦指南

基於六大開發流程，推薦最適合的 SubAgents 來提升各階段工作效率。

---

## 🎯 高度匹配階段 (85-90%)

### 4. 切板與靜態頁面製作階段

#### 🎨 **核心推薦 SubAgents**

**`frontend-developer`** (⭐⭐⭐⭐⭐)
- **適用場景**：React/Vue/Angular 元件開發、響應式設計、狀態管理
- **使用時機**：
  - 從設計稿轉換為代碼
  - 建立可重用元件庫
  - 實作互動功能和動畫效果
- **範例指令**：
```bash
Task: frontend-developer "根據設計稿建立響應式商品卡片元件，支援懸停效果和購買按鈕"
Task: frontend-developer "優化現有元件庫，提升載入效能和可存取性"
```

**`ui-designer`** (⭐⭐⭐⭐⭐)
- **適用場景**：視覺設計優化、設計系統建立、使用者介面規範
- **使用時機**：
  - 設計稿解析和優化建議
  - 建立設計指南和元件規範
  - 色彩搭配和字型選擇
- **範例指令**：
```bash
Task: ui-designer "分析這個電商網站設計，建立完整的設計系統和色彩規範"
Task: ui-designer "優化購物車頁面的使用者體驗，提升轉換率"
```

**`whimsy-injector`** (⭐⭐⭐⭐)
- **適用場景**：為介面添加趣味元素、提升使用者體驗的驚喜感
- **使用時機**：
  - 載入狀態的創意動畫
  - 錯誤頁面的幽默設計
  - 互動回饋的微動畫
- **範例指令**：
```bash
Task: whimsy-injector "為這個待辦清單應用加入完成任務時的慶祝動畫"
Task: whimsy-injector "設計 404 頁面的創意內容，讓用戶感到驚喜而非挫折"
```

#### 🔧 **輔助推薦 SubAgents**

**`visual-storyteller`** (⭐⭐⭐)
- **適用場景**：品牌故事呈現、內容視覺化、圖表設計
- **使用時機**：數據視覺化、品牌形象設計、內容排版

**`brand-guardian`** (⭐⭐⭐)
- **適用場景**：品牌一致性檢查、視覺風格統一
- **使用時機**：確保設計符合品牌規範、多頁面風格統一

---

### 5. 系統程式開發階段

#### 💻 **核心推薦 SubAgents**

**`backend-architect`** (⭐⭐⭐⭐⭐)
- **適用場景**：API 設計、資料庫架構、伺服器端邏輯、系統整合
- **使用時機**：
  - RESTful API 設計和實作
  - 資料庫模型設計
  - 微服務架構規劃
  - 安全性和效能優化
- **範例指令**：
```bash
Task: backend-architect "設計電商系統的用戶認證 API，包含 JWT、密碼加密、權限控制"
Task: backend-architect "規劃訂單管理系統的資料庫架構，支援複雜的商業邏輯"
```

**`ai-engineer`** (⭐⭐⭐⭐⭐)
- **適用場景**：AI 功能整合、機器學習模型、智能推薦系統
- **使用時機**：
  - 整合 ChatGPT 等 LLM 服務
  - 實作智能搜尋功能
  - 個人化推薦演算法
  - 圖像/語音處理功能
- **範例指令**：
```bash
Task: ai-engineer "整合 OpenAI API，建立客戶服務聊天機器人"
Task: ai-engineer "實作商品推薦系統，基於用戶瀏覽歷史和偏好"
```

**`test-writer-fixer`** (⭐⭐⭐⭐⭐)
- **適用場景**：測試代碼撰寫、測試案例設計、程式碼品質檢查
- **使用時機**：
  - 單元測試和整合測試
  - 測試覆蓋率提升
  - 程式碼錯誤修復
  - 測試自動化設置
- **範例指令**：
```bash
Task: test-writer-fixer "為用戶認證模組撰寫完整的測試套件，包含邊界條件"
Task: test-writer-fixer "分析測試失敗原因並提供修復方案"
```

#### 🔧 **輔助推薦 SubAgents**

**`devops-automator`** (⭐⭐⭐⭐)
- **適用場景**：CI/CD 設置、容器化部署、基礎設施管理
- **使用時機**：自動化部署流程、監控系統設置

**`mobile-app-builder`** (⭐⭐⭐)
- **適用場景**：行動應用開發、React Native、跨平台解決方案
- **使用時機**：手機 App 開發、推播通知、原生功能整合

---

## 🚀 中度提升階段 (60-70%)

### 1. 需求溝通階段

#### 📋 **核心推薦 SubAgents**

**`sprint-prioritizer`** (⭐⭐⭐⭐⭐)
- **適用場景**：需求優先順序排定、Sprint 規劃、功能取捨決策
- **使用時機**：
  - 產品 Roadmap 規劃
  - 功能優先順序評估
  - 開發資源分配
  - 技術債務管理
- **範例指令**：
```bash
Task: sprint-prioritizer "分析 50 個功能需求，制定 6 週開發計畫的優先順序"
Task: sprint-prioritizer "評估新功能 vs 技術債務的開發比重，提供建議"
```

**`feedback-synthesizer`** (⭐⭐⭐⭐)
- **適用場景**：用戶回饋分析、需求收集整理、意見統整
- **使用時機**：
  - 客戶訪談記錄分析
  - 用戶回饋模式識別
  - 功能需求優先順序
  - 產品改進建議
- **範例指令**：
```bash
Task: feedback-synthesizer "分析 100 份用戶回饋，找出最需要改進的功能點"
Task: feedback-synthesizer "整理 stakeholder 會議記錄，提取關鍵決策和行動項目"
```

**`ux-researcher`** (⭐⭐⭐⭐)
- **適用場景**：用戶研究、使用者體驗分析、用戶需求探索
- **使用時機**：
  - 用戶旅程地圖設計
  - 使用者行為分析
  - 競品分析研究
  - 使用者測試規劃
- **範例指令**：
```bash
Task: ux-researcher "分析電商用戶的購買旅程，識別痛點和優化機會"
Task: ux-researcher "設計用戶研究計畫，驗證新功能的市場需求"
```

#### 🔧 **輔助推薦 SubAgents**

**`trend-researcher`** (⭐⭐⭐)
- **適用場景**：市場趨勢分析、競品研究、技術趨勢追蹤
- **使用時機**：產品策略規劃、技術選型決策

**`studio-coach`** (⭐⭐⭐)
- **適用場景**：團隊協作優化、會議引導、決策輔助
- **使用時機**：跨部門溝通、專案啟動、團隊衝突解決

---

### 6. 測試與驗收階段

#### 🧪 **核心推薦 SubAgents**

**`test-results-analyzer`** (⭐⭐⭐⭐⭐)
- **適用場景**：測試結果分析、品質報告生成、測試數據解讀
- **使用時機**：
  - 測試覆蓋率分析
  - 缺陷模式識別
  - 品質趨勢追蹤
  - 測試效率評估
- **範例指令**：
```bash
Task: test-results-analyzer "分析上週的測試執行報告，識別反覆失敗的測試案例"
Task: test-results-analyzer "生成月度品質報告，包含缺陷趨勢和改進建議"
```

**`performance-benchmarker`** (⭐⭐⭐⭐⭐)
- **適用場景**：效能測試、基準測試、效能瓶頸分析
- **使用時機**：
  - 網站載入速度優化
  - API 回應時間分析
  - 資料庫查詢效能
  - 使用者體驗指標測量
- **範例指令**：
```bash
Task: performance-benchmarker "測試電商網站在高流量下的效能表現，識別瓶頸"
Task: performance-benchmarker "比較不同優化方案的效能差異，提供建議"
```

**`api-tester`** (⭐⭐⭐⭐⭐)
- **適用場景**：API 測試、介面測試、整合測試
- **使用時機**：
  - RESTful API 功能測試
  - API 效能和負載測試
  - 第三方服務整合測試
  - API 安全性測試
- **範例指令**：
```bash
Task: api-tester "測試用戶認證 API 的各種情境，包含錯誤處理和邊界條件"
Task: api-tester "進行付款 API 的負載測試，確保高併發下的穩定性"
```

#### 🔧 **輔助推薦 SubAgents**

**`experiment-tracker`** (⭐⭐⭐)
- **適用場景**：A/B 測試追蹤、功能實驗管理
- **使用時機**：新功能驗證、用戶體驗實驗

**`workflow-optimizer`** (⭐⭐⭐)
- **適用場景**：測試流程優化、自動化改進
- **使用時機**：CI/CD 流程改進、測試效率提升

---

## 🎯 各階段 SubAgents 使用策略

### 高度匹配階段策略
1. **優先使用核心 SubAgents**：frontend-developer、backend-architect、ai-engineer
2. **搭配設計類 SubAgents**：ui-designer、whimsy-injector 提升用戶體驗
3. **確保品質控制**：test-writer-fixer 貫穿整個開發過程

### 中度提升階段策略
1. **需求階段**：sprint-prioritizer 主導，feedback-synthesizer 輔助
2. **測試階段**：三大測試 SubAgents 並行使用
3. **持續改進**：workflow-optimizer 和 experiment-tracker 長期追蹤

### 跨階段通用策略
1. **專案管理**：studio-producer 協調各階段
2. **品質把關**：legal-compliance-checker 確保合規
3. **團隊指導**：studio-coach 提升協作效率

---

## 📊 效益預期

### 切板與靜態頁面製作
- **frontend-developer**: 開發效率提升 70%
- **ui-designer**: 設計品質提升 60%
- **whimsy-injector**: 用戶滿意度提升 40%

### 系統程式開發
- **backend-architect**: 架構設計效率提升 65%
- **ai-engineer**: AI 功能整合速度提升 80%
- **test-writer-fixer**: 程式碼品質提升 50%

### 需求溝通
- **sprint-prioritizer**: 需求規劃效率提升 55%
- **feedback-synthesizer**: 需求理解準確度提升 45%

### 測試與驗收
- **test-results-analyzer**: 測試效率提升 60%
- **performance-benchmarker**: 效能問題識別率提升 70%
- **api-tester**: 測試覆蓋率提升 50%

---

**更新日期：** 2025-08-03  
**版本：** v1.0  
**維護者：** 開發團隊