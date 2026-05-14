import { languages } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const languagesGrid = document.getElementById('languages-grid');
    const categoriesSection = document.getElementById('categories');
    const syntaxDetailSection = document.getElementById('syntax-detail');
    const heroSection = document.getElementById('hero');
    const backBtn = document.getElementById('back-btn');
    const homeBtn = document.getElementById('home-btn');
    const searchInput = document.getElementById('search-input');

    // Initial render
    renderLanguages(languages);

    // Event Listeners
    backBtn.addEventListener('click', showCategories);
    homeBtn.addEventListener('click', showCategories);
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = languages.filter(lang => 
            lang.name.toLowerCase().includes(query) || 
            lang.description.toLowerCase().includes(query)
        );
        renderLanguages(filtered);
    });

    function renderLanguages(data) {
        languagesGrid.innerHTML = '';
        data.forEach(lang => {
            const card = document.createElement('div');
            card.className = 'lang-card';
            card.innerHTML = `
                <div class="icon-box" style="background: ${lang.color}">${lang.icon}</div>
                <h4>${lang.name}</h4>
                <p>${lang.description}</p>
            `;
            card.addEventListener('click', () => showDetail(lang));
            languagesGrid.appendChild(card);
        });
    }

    function showDetail(lang) {
        // Update detail content
        document.getElementById('lang-name').textContent = lang.name;
        document.getElementById('lang-desc').textContent = lang.description;
        const iconLarge = document.getElementById('lang-icon');
        iconLarge.textContent = lang.icon;
        iconLarge.style.background = lang.color;

        const syntaxList = document.getElementById('syntax-list');
        syntaxList.innerHTML = '';

        lang.syntax.forEach((item, index) => {
            const syntaxItem = document.createElement('div');
            syntaxItem.className = 'syntax-item';
            syntaxItem.style.animationDelay = `${index * 0.1}s`;
            
            // Map our data id to Prism language classes
            const prismLang = getPrismLang(lang.id);
            
            syntaxItem.innerHTML = `
                <h4>${item.title}</h4>
                <div class="code-container">
                    <pre><code class="language-${prismLang}">${escapeHtml(item.code)}</code></pre>
                </div>
                <div class="explanation">
                    ${item.explanation}
                </div>
            `;
            syntaxList.appendChild(syntaxItem);
        });

        // Toggle sections
        categoriesSection.classList.add('hidden');
        heroSection.classList.add('hidden');
        syntaxDetailSection.classList.remove('hidden');
        
        // Trigger Prism highlighting
        Prism.highlightAll();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showCategories() {
        categoriesSection.classList.remove('hidden');
        heroSection.classList.remove('hidden');
        syntaxDetailSection.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function getPrismLang(id) {
        const mapping = {
            'javascript': 'javascript',
            'python': 'python',
            'rust': 'rust',
            'go': 'go',
            'cpp': 'cpp'
        };
        return mapping[id] || 'clike';
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});
