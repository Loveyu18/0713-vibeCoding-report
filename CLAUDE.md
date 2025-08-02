# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 專案概述

這是一個專注於「Vibe Coding」和 AI 驅動前端開發工具的文檔與研究專案，特別針對 IDE 進行深度分析。專案主要使用繁體中文，包含互動式 HTML 簡報、Markdown 文檔和研究資料。

## 專案架構

### 核心結構

-   **presentations/**: 響應式互動 HTML 簡報
    -   `amazon-kiro-ide-presentation.html` - Kiro IDE 的 13 頁技術分析簡報
    -   `frontend-research-architecture.html` - 互動式架構圖
    -   `vibe-coding-presentation-simple.html` - Vibe Coding 概念簡報
-   **documents/**: 結構化 Markdown 文檔
    -   `guides/` - 使用手冊和實施指南
    -   `weekly-reports/` - 專案進度報告
    -   `outlines/` - 簡報腳本和大綱
    -   `research/` - 研究計劃和發現
-   **projects/amazon-kiro-ide/**: Amazon Kiro IDE 詳細分析
    -   `amazon-kiro-ide-requirements.md` - 需求分析（40+ 個關鍵問題）
    -   `amazon-kiro-ide-design.md` - 簡報結構設計文件
    -   `amazon-kiro-ide-tasks.md` - 6 天工作計劃分解
-   **tools/**: 實用工具應用
    -   `ai-prompt-generator.html` - 互動式 AI 提示詞產生器
-   **assets/**: 靜態資源和圖片

### 關鍵技術

-   前端：HTML5, CSS3, JavaScript (ES6+)
-   樣式：響應式設計搭配 Flexbox/Grid，使用 AWS 官方色系 (#FF9900)
-   文檔：Markdown 搭配 EARS 格式需求規範
-   版本控制：Git

## 設計規範

- 遵循 apple 公司發布的設計語言 liauid glass 
- 以淺色設計為主
- 符合 RWD 彈性瀏覽
- 符合 臺灣網站無障礙 AA 級別規範

### 查看內容

```bash
# 開啟主要簡報（使用瀏覽器）
open presentations/frontend-research-architecture.html    # 主入口點
open presentations/amazon-kiro-ide-presentation.html     # Kiro IDE 分析
open presentations/vibe-coding-presentation-simple.html  # Vibe Coding 指南
open tools/ai-prompt-generator.html                      # AI 工具

# 查看文檔
open documents/guides/Vibe-Coding-實踐指南.md           # 實施指南
open documents/guides/claude-code-user-manual.md        # Claude Code 手冊
```

### 開發工作流程

由於這是一個沒有建置工具的文檔專案：

1. **編輯 HTML 簡報**：直接編輯互動式簡報檔案
2. **更新文檔**：修改 `documents/` 目錄中的 Markdown 檔案
3. **新增資源**：將圖片放置在 `assets/images/` 中
4. **版本控制**：標準 Git 工作流程

### 檔案組織原則

-   所有簡報都是包含內嵌 CSS/JS 的獨立 HTML 檔案
-   文檔按內容類型遵循階層結構
-   中文語言檔案使用 UTF-8 編碼
-   響應式設計支援手機和桌面瀏覽

## 專案背景

本專案記錄了一週的研究計劃（2025 年 7 月第三週），研究主題包括：

1. **Vibe Coding**：強調直覺式編程的 AI 輔助開發方法論
2. **Amazon Kiro IDE**：採用三檔案架構的規格驅動開發方式
3. **AI 開發工具**：現代 AI IDE 的比較分析
4. **前端效率**：AI 驅動開發工作流程改進的研究
5. **Claude Code**：工具與應用介紹

這項工作展示了 AI 工具在文檔創建、簡報設計和技術分析中的實際應用 - 既作為研究成果，也是 AI 輔助內容創作的範例。

## 特殊考量

-   內容主要使用繁體中文
-   互動式簡報支援手機觸控/滑動導航
-   所有簡報遵循 Apple 公司 2025 年發布 液態玻璃 liquid glass 設計語言
-   文檔包含適合系統架構師的詳細技術分析
-   專案代表規格驅動開發方法論的完整案例研究
