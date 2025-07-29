class NavigationComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        
        this.pages = [
            {
                title: '前端研究架構',
                url: 'presentations/frontend-research-architecture.html',
                description: '互動式架構圖與研究概覽',
                icon: '🏗️'
            },
            {
                title: 'Amazon Kiro IDE',
                url: 'presentations/amazon-kiro-ide-presentation.html',
                description: 'Kiro IDE 深度技術分析',
                icon: '🚀'
            },
            {
                title: 'Vibe Coding',
                url: 'presentations/vibe-coding-presentation-simple.html',
                description: '直覺驅動的 AI 協作開發',
                icon: '✨'
            },
            {
                title: 'Web Components',
                url: 'presentations/web-components-presentation.html',
                description: '現代化前端元件標準',
                icon: '🧩'
            },
            {
                title: 'Claude Code',
                url: 'presentations/claude-code-presentation.html',
                description: 'AI 驅動的命令列開發工具',
                icon: '🤖'
            },
            {
                title: 'AI 工具產生器',
                url: 'tools/ai-prompt-generator.html',
                description: '互動式 AI 提示詞產生器',
                icon: '⚙️'
            }
        ];
    }

    getCorrectPath(url) {
        const currentPath = window.location.pathname;
        
        // 如果在 presentations/ 目錄下
        if (currentPath.includes('/presentations/')) {
            if (url.startsWith('presentations/')) {
                return url.replace('presentations/', '');
            }
            if (url.startsWith('tools/')) {
                return '../' + url;
            }
        }
        
        // 如果在 tools/ 目錄下
        if (currentPath.includes('/tools/')) {
            if (url.startsWith('presentations/')) {
                return '../' + url;
            }
            if (url.startsWith('tools/')) {
                return url.replace('tools/', '');
            }
        }
        
        // 如果在根目錄
        return url;
    }

    connectedCallback() {
        this.render();
        this.setupEventListeners();
        this.updateCurrentPage();
    }

    generateCSS() {
        return `
        .nav-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .nav-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .nav-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
            border: 2px solid rgba(255, 153, 0, 0.3);
            border-radius: 20px;
            padding: 40px;
            min-width: 600px;
            max-width: 90vw;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        .nav-header {
            text-align: center;
            margin-bottom: 30px;
            color: white;
        }

        .nav-header h2 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 10px;
            background: linear-gradient(45deg, #FF9900, #FFB84D);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .nav-close {
            position: absolute;
            top: 15px;
            right: 20px;
            background: none;
            border: none;
            font-size: 2rem;
            color: #9ca3af;
            cursor: pointer;
            transition: color 0.2s ease;
        }

        .nav-close:hover {
            color: #FF9900;
        }

        .nav-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .nav-item {
            background: rgba(30, 41, 59, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 25px;
            text-decoration: none;
            color: white;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .nav-item:hover {
            background: rgba(30, 41, 59, 0.9);
            border-color: rgba(255, 153, 0, 0.5);
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(255, 153, 0, 0.2);
        }

        .nav-item-icon {
            font-size: 2rem;
            margin-bottom: 15px;
            display: block;
        }

        .nav-item-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 8px;
            color: #FF9900;
        }

        .nav-item-desc {
            font-size: 0.9rem;
            color: #9ca3af;
            line-height: 1.4;
        }

        .nav-toggle {
            position: fixed;
            top: 20px;
            left: 20px;
            background: linear-gradient(45deg, #FF9900, #FFB84D);
            border: none;
            border-radius: 50px;
            color: white;
            font-size: 1rem;
            font-weight: 600;
            padding: 12px 24px;
            cursor: pointer;
            z-index: 1001;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(255, 153, 0, 0.3);
        }

        .nav-toggle:hover {
            background: linear-gradient(45deg, #e6890e, #e6a442);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 153, 0, 0.4);
        }

        .current-page {
            text-align: center;
            margin-top: 20px;
            padding: 15px;
            background: rgba(255, 153, 0, 0.1);
            border: 1px solid rgba(255, 153, 0, 0.3);
            border-radius: 10px;
            color: #FF9900;
            font-size: 0.95rem;
        }

        @media (max-width: 768px) {
            .nav-container {
                min-width: auto;
                width: 95vw;
                padding: 30px 20px;
            }

            .nav-grid {
                grid-template-columns: 1fr;
            }

            .nav-toggle {
                top: 15px;
                left: 15px;
                padding: 10px 20px;
                font-size: 0.9rem;
            }
        }
        `;
    }

    render() {
        const navItems = this.pages.map(page => `
            <a href="${this.getCorrectPath(page.url)}" class="nav-item">
                <span class="nav-item-icon">${page.icon}</span>
                <div class="nav-item-title">${page.title}</div>
                <div class="nav-item-desc">${page.description}</div>
            </a>
        `).join('');

        this.shadowRoot.innerHTML = `
            <style>${this.generateCSS()}</style>
            
            <button class="nav-toggle" id="navToggle">
                📋 頁面導覽
            </button>
            
            <div class="nav-overlay" id="navOverlay">
                <div class="nav-container">
                    <button class="nav-close" id="navClose">&times;</button>
                    <div class="nav-header">
                        <h2>Vibe Coding 專案導覽</h2>
                        <p>選擇要前往的頁面</p>
                    </div>
                    <div class="nav-grid">
                        ${navItems}
                    </div>
                    <div class="current-page">
                        📍 目前頁面：<span id="currentPageTitle"></span>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        const navToggle = this.shadowRoot.getElementById('navToggle');
        const navClose = this.shadowRoot.getElementById('navClose');
        const navOverlay = this.shadowRoot.getElementById('navOverlay');

        navToggle.addEventListener('click', () => this.toggle());
        navClose.addEventListener('click', () => this.close());
        navOverlay.addEventListener('click', (e) => this.close(e));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.close();
            }
            if (e.key === 'n' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                this.toggle();
            }
        });
    }

    toggle() {
        const overlay = this.shadowRoot.getElementById('navOverlay');
        overlay.classList.toggle('active');
    }

    close(event) {
        if (event && event.target !== event.currentTarget) return;
        const overlay = this.shadowRoot.getElementById('navOverlay');
        overlay.classList.remove('active');
    }

    updateCurrentPage() {
        const currentPath = window.location.pathname;
        const currentPageSpan = this.shadowRoot.getElementById('currentPageTitle');
        
        if (currentPageSpan) {
            const currentPage = this.pages.find(page => 
                currentPath.includes(page.url.split('/').pop())
            );
            
            if (currentPage) {
                currentPageSpan.textContent = currentPage.title;
            } else {
                currentPageSpan.textContent = '未知頁面';
            }
        }
    }
}

// 註冊 Web Component
customElements.define('navigation-component', NavigationComponent);