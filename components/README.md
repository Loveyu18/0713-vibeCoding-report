# Claude Code 載入動畫元件

一個美觀且功能豐富的 Claude Code 載入動畫元件，提供多種主題和自定義配置選項。

## ✨ 特色功能

- 🎨 **多種主題** - 預設、深色、矩陣三種視覺風格
- 🤖 **Claude 機器人動畫** - 可愛的彈跳和眨眼效果
- 💻 **程式碼粒子雨** - 動態的代碼片段飛舞效果
- 📊 **液態玻璃進度條** - 現代化的進度顯示
- 💭 **AI 思考泡泡** - 三點脈衝動畫
- 📱 **響應式設計** - 完美適配各種螢幕尺寸
- ♿ **無障礙支援** - 尊重用戶的動畫偏好設定
- ⚡ **效能優化** - CSS 動畫為主，JavaScript 輔助

## 🚀 快速開始

### 1. 引入檔案

```html
<!-- 引入 CSS 樣式 -->
<link rel="stylesheet" href="components/claude-loader.css">

<!-- 引入 JavaScript 控制器 -->
<script src="components/claude-loader.js"></script>
```

### 2. 基本使用

```javascript
// 最簡單的使用方式
const loader = showClaudeLoader();

// 3 秒後自動完成
setTimeout(() => {
    loader.finish();
}, 3000);
```

### 3. 自定義配置

```javascript
const loader = createClaudeLoader({
    theme: 'dark',           // 使用深色主題
    duration: 5000,          // 5 秒載入時間
    messages: [              // 自定義載入訊息
        "正在初始化系統...",
        "正在載入資料...",
        "即將完成..."
    ],
    onComplete: () => {       // 完成回調
        console.log('載入完成！');
    }
});
```

## 🎨 主題選擇

### 預設主題 (theme: 'default')
- 橙色系配色 (#ff9900)
- 液態玻璃效果
- 適合一般商業應用

### 深色主題 (theme: 'dark')
- 藍紫色配色 (#3b82f6 → #8b5cf6)
- 現代科技感
- 適合專業開發工具

### 矩陣主題 (theme: 'matrix')
- 綠色螢光配色 (#10b981)
- 駭客風格
- 適合技術展示

## ⚙️ 配置選項

| 選項 | 類型 | 預設值 | 描述 |
|------|------|--------|------|
| `theme` | string | 'default' | 主題風格：'default', 'dark', 'matrix' |
| `duration` | number | 3000 | 載入動畫持續時間（毫秒） |
| `messages` | array | [...] | 載入過程顯示的訊息陣列 |
| `codeSnippets` | array | [...] | 粒子動畫顯示的程式碼片段 |
| `autoHide` | boolean | true | 完成後是否自動隱藏 |
| `onComplete` | function | null | 載入完成的回調函數 |
| `showPercentage` | boolean | true | 是否顯示百分比 |
| `particleCount` | number | 20 | 初始粒子數量 |

## 📝 使用範例

### 範例 1：基本載入畫面

```javascript
// 頁面載入時顯示
window.addEventListener('load', () => {
    const loader = showClaudeLoader({
        messages: [
            "正在載入頁面內容...",
            "正在準備使用者介面...",
            "載入完成！"
        ]
    });
});
```

### 範例 2：API 請求載入

```javascript
async function fetchData() {
    const loader = createClaudeLoader({
        theme: 'dark',
        messages: [
            "正在連接伺服器...",
            "正在獲取資料...",
            "正在處理回應..."
        ]
    });
    
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        loader.finish();
        return data;
    } catch (error) {
        loader.hide();
        throw error;
    }
}
```

### 範例 3：檔案上傳進度

```javascript
function uploadFile(file) {
    const loader = createClaudeLoader({
        theme: 'matrix',
        autoHide: false,
        messages: [
            "正在準備上傳...",
            "正在上傳檔案...",
            "正在處理檔案...",
            "上傳完成！"
        ]
    });
    
    // 模擬上傳進度
    const formData = new FormData();
    formData.append('file', file);
    
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
            const progress = (e.loaded / e.total) * 100;
            loader.progressBar.style.width = progress + '%';
        }
    });
    
    xhr.addEventListener('load', () => {
        loader.finish();
    });
    
    xhr.open('POST', '/upload');
    xhr.send(formData);
}
```

### 範例 4：手動控制

```javascript
const loader = createClaudeLoader({
    autoHide: false,
    showPercentage: true
});

// 手動更新進度
let progress = 0;
const interval = setInterval(() => {
    progress += 10;
    loader.progressBar.style.width = progress + '%';
    loader.percentageElement.textContent = progress + '%';
    
    if (progress >= 100) {
        clearInterval(interval);
        loader.complete();
    }
}, 200);
```

## 🎯 方法說明

### ClaudeLoader 類方法

| 方法 | 描述 |
|------|------|
| `init()` | 初始化並顯示載入動畫 |
| `hide()` | 隱藏載入動畫 |
| `finish()` | 立即完成載入 |
| `complete()` | 執行完成流程 |
| `updateConfig(config)` | 更新配置 |
| `destroy()` | 銷毀載入器 |

### 全域便利方法

| 方法 | 描述 |
|------|------|
| `showClaudeLoader(options)` | 快速顯示載入動畫 |
| `createClaudeLoader(options)` | 創建載入器實例 |

## 📱 響應式設計

元件會自動適應不同螢幕尺寸：

- **桌面** (>768px): 完整尺寸顯示
- **平板** (768px): 中等尺寸適配
- **手機** (<480px): 緊湊佈局

## ♿ 無障礙支援

- 支援 `prefers-reduced-motion` 媒體查詢
- 當用戶偏好減少動畫時，會停用或簡化動畫效果
- 保持功能性的同時照顧動畫敏感用戶

## 🎨 自定義樣式

如需自定義外觀，可以覆寫 CSS 變數或類別：

```css
/* 自定義主色調 */
.claude-loader-container.my-theme .claude-robot {
    background: linear-gradient(135deg, #your-color 0%, #your-color-2 100%);
}

/* 自定義動畫速度 */
.claude-robot {
    animation-duration: 1s; /* 預設 2s */
}
```

## 🔧 進階配置

### 自定義程式碼片段

```javascript
const loader = createClaudeLoader({
    codeSnippets: [
        "import React from 'react'",
        "const App = () => {}",
        "export default App",
        "npm install claude-code",
        "git commit -m 'feat: add loader'"
    ]
});
```

### 自定義完成回調

```javascript
const loader = createClaudeLoader({
    onComplete: () => {
        // 播放完成音效
        const audio = new Audio('/sounds/complete.mp3');
        audio.play();
        
        // 顯示成功訊息
        showNotification('載入完成！');
        
        // 執行其他邏輯
        initializeApp();
    }
});
```

## 📦 檔案結構

```
components/
├── claude-loader.css    # 樣式檔案
├── claude-loader.js     # JavaScript 控制器
└── README.md           # 說明文件
```

## 🌟 最佳實踐

1. **效能考量**: 避免同時顯示多個載入器
2. **使用者體驗**: 提供有意義的載入訊息
3. **錯誤處理**: 在請求失敗時適當隱藏載入器
4. **主題一致性**: 選擇與應用程式風格一致的主題
5. **載入時間**: 合理設定 duration，避免過長或過短

## 📄 授權

MIT License - 歡迎自由使用和修改

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request 來改善這個元件！

---

**更新日期**: 2025-08-03  
**版本**: 1.0.0  
**維護者**: Claude Code Team