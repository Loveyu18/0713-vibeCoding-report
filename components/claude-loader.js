/**
 * Claude Code 載入動畫元件 - JavaScript 控制器
 * 版本: 1.0.0
 * 作者: Claude Code Team
 * 描述: 可重用的 Claude 載入動畫元件，支援多種主題和自定義配置
 */

class ClaudeLoader {
    constructor(options = {}) {
        // 預設配置
        this.config = {
            theme: 'default', // 'default', 'dark', 'matrix'
            duration: 3000, // 載入動畫持續時間 (毫秒)
            messages: [
                "正在啟動 Claude Code...",
                "正在載入 AI 模型...",
                "正在檢查程式碼結構...",
                "正在準備開發環境...",
                "正在連接 SubAgents...",
                "正在優化使用者體驗...",
                "幾乎完成了...",
                "準備就緒！"
            ],
            codeSnippets: [
                "claude 'Hello World!'",
                "Task: frontend-developer",
                "@ src/components/",
                "! npm install",
                "claude '建立 React 元件'",
                "/export 專案記錄",
                "Task: ui-designer",
                "claude '優化效能'"
            ],
            autoHide: true,
            onComplete: null,
            showPercentage: true,
            particleCount: 20
        };

        // 合併用戶配置
        Object.assign(this.config, options);

        // 內部狀態
        this.container = null;
        this.progressBar = null;
        this.messageElement = null;
        this.percentageElement = null;
        this.isVisible = false;
        this.progress = 0;
        this.messageIndex = 0;
        this.intervals = [];
    }

    /**
     * 創建載入動畫的 HTML 結構
     */
    createHTML() {
        return `
            <div class="claude-loader-container theme-${this.config.theme}" id="claudeLoader">
                <div class="claude-code-particles" id="claudeCodeParticles"></div>
                
                <div class="claude-loader-content">
                    <div class="claude-robot">
                        <div class="claude-robot-eyes">
                            <div class="claude-robot-eye"></div>
                            <div class="claude-robot-eye"></div>
                        </div>
                    </div>
                    
                    <div class="claude-thinking-bubble">
                        <div class="claude-thinking-dot"></div>
                        <div class="claude-thinking-dot"></div>
                        <div class="claude-thinking-dot"></div>
                    </div>
                    
                    <div class="claude-loading-message" id="claudeLoadingMessage">
                        ${this.config.messages[0]}
                    </div>
                    
                    <div class="claude-progress-container">
                        <div class="claude-progress-bar" id="claudeProgressBar"></div>
                    </div>
                    
                    ${this.config.showPercentage ? 
                        '<div class="claude-loading-percentage" id="claudeLoadingPercentage">0%</div>' : 
                        ''
                    }
                </div>
            </div>
        `;
    }

    /**
     * 初始化載入動畫
     */
    init() {
        // 創建容器
        this.container = document.createElement('div');
        this.container.innerHTML = this.createHTML();
        document.body.appendChild(this.container.firstElementChild);

        // 獲取 DOM 元素引用
        this.container = document.getElementById('claudeLoader');
        this.progressBar = document.getElementById('claudeProgressBar');
        this.messageElement = document.getElementById('claudeLoadingMessage');
        this.percentageElement = document.getElementById('claudeLoadingPercentage');

        // 開始動畫
        this.startAnimation();
    }

    /**
     * 開始載入動畫
     */
    startAnimation() {
        this.isVisible = true;
        this.progress = 0;
        this.messageIndex = 0;

        // 開始粒子動畫
        this.startParticles();

        // 開始進度更新
        this.startProgress();

        // 開始訊息輪換
        this.startMessageRotation();
    }

    /**
     * 開始粒子動畫
     */
    startParticles() {
        const particleContainer = document.getElementById('claudeCodeParticles');
        if (!particleContainer) return;
        
        // 檢查是否支援動畫
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            return; // 如果用戶偏好減少動畫，則跳過粒子效果
        }
        
        let particleCount = 0;
        const maxParticles = 15; // 限制最大粒子數量以提升效能
        
        const createParticle = () => {
            if (!this.isVisible || particleCount >= maxParticles) return;

            const particle = document.createElement('div');
            particle.className = 'claude-code-particle';
            particle.textContent = this.config.codeSnippets[
                Math.floor(Math.random() * this.config.codeSnippets.length)
            ];
            
            // 隨機位置
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (2 + Math.random() * 2) + 's';
            particle.style.fontSize = (12 + Math.random() * 4) + 'px';
            particle.style.opacity = 0.4 + Math.random() * 0.4;
            
            particleContainer.appendChild(particle);
            particleCount++;
            
            // 移除動畫完成的粒子
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                    particleCount--;
                }
            }, 4000);
        };

        // 定期創建粒子
        const particleInterval = setInterval(createParticle, 300); // 降低創建頻率
        this.intervals.push(particleInterval);

        // 初始粒子
        for (let i = 0; i < Math.min(this.config.particleCount, 10); i++) {
            setTimeout(createParticle, i * 150);
        }
    }

    /**
     * 開始進度更新
     */
    startProgress() {
        const startTime = Date.now();
        const duration = this.config.duration;

        const updateProgress = () => {
            if (!this.isVisible) return;

            const elapsed = Date.now() - startTime;
            const rawProgress = Math.min(elapsed / duration, 1);
            
            // 使用緩動函數讓進度更自然
            this.progress = this.easeOutCubic(rawProgress) * 100;
            
            // 更新進度條
            if (this.progressBar) {
                this.progressBar.style.width = this.progress + '%';
            }
            
            // 更新百分比
            if (this.percentageElement && this.config.showPercentage) {
                this.percentageElement.textContent = Math.floor(this.progress) + '%';
            }
            
            // 檢查是否完成
            if (this.progress >= 100) {
                this.complete();
                return;
            }
            
            requestAnimationFrame(updateProgress);
        };

        updateProgress();
    }

    /**
     * 開始訊息輪換
     */
    startMessageRotation() {
        const messageInterval = setInterval(() => {
            if (!this.isVisible || this.messageIndex >= this.config.messages.length - 1) {
                clearInterval(messageInterval);
                return;
            }

            this.messageIndex++;
            if (this.messageElement) {
                this.messageElement.style.opacity = '0';
                
                setTimeout(() => {
                    if (this.messageElement) {
                        this.messageElement.textContent = this.config.messages[this.messageIndex];
                        this.messageElement.style.opacity = '1';
                    }
                }, 250);
            }
        }, this.config.duration / this.config.messages.length);

        this.intervals.push(messageInterval);
    }

    /**
     * 緩動函數 - 三次貝茲曲線
     */
    easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    /**
     * 載入完成
     */
    complete() {
        // 清除所有定時器
        this.intervals.forEach(interval => clearInterval(interval));
        this.intervals = [];

        // 執行完成回調
        if (typeof this.config.onComplete === 'function') {
            this.config.onComplete();
        }

        // 自動隱藏
        if (this.config.autoHide) {
            setTimeout(() => {
                this.hide();
            }, 800);
        }
    }

    /**
     * 隱藏載入動畫
     */
    hide() {
        if (this.container && this.isVisible) {
            this.isVisible = false;
            
            // 清除所有定時器
            this.intervals.forEach(interval => clearInterval(interval));
            this.intervals = [];
            
            // 添加隱藏類別
            this.container.classList.add('hidden');
            
            // 延遲移除 DOM 元素
            setTimeout(() => {
                if (this.container && this.container.parentNode) {
                    this.container.parentNode.removeChild(this.container);
                }
            }, 1000);
        }
    }

    /**
     * 立即完成載入
     */
    finish() {
        this.progress = 100;
        this.complete();
    }

    /**
     * 更新配置
     */
    updateConfig(newConfig) {
        Object.assign(this.config, newConfig);
        
        // 如果有主題變更，更新 CSS 類
        if (this.container && newConfig.theme) {
            this.container.className = `claude-loader-container theme-${newConfig.theme}`;
        }
    }

    /**
     * 銷毀載入器
     */
    destroy() {
        // 清除所有定時器
        this.intervals.forEach(interval => clearInterval(interval));
        this.intervals = [];
        
        // 設定為不可見
        this.isVisible = false;
        
        // 立即移除 DOM 元素
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
        
        // 清理引用
        this.container = null;
        this.progressBar = null;
        this.messageElement = null;
        this.percentageElement = null;
    }
}

// 便利方法：快速創建和啟動載入動畫
window.ClaudeLoader = ClaudeLoader;

window.createClaudeLoader = function(options = {}) {
    const loader = new ClaudeLoader(options);
    loader.init();
    return loader;
};

// 快速啟動方法
window.showClaudeLoader = function(options = {}) {
    return window.createClaudeLoader(options);
};

// 導出模組（如果使用模組系統）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClaudeLoader;
}