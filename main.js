import { languages } from './data.js';
import { translations } from './translations.js';

document.addEventListener('DOMContentLoaded', () => {
    const languagesGrid = document.getElementById('languages-grid');
    const categoriesSection = document.getElementById('categories');
    const syntaxDetailSection = document.getElementById('syntax-detail');
    const heroSection = document.getElementById('hero');
    const backBtn = document.getElementById('back-btn');
    const homeBtn = document.getElementById('home-btn');
    const searchInput = document.getElementById('search-input');
    
    // Language Switcher Elements
    const langEnBtn = document.getElementById('lang-en');
    const langIdBtn = document.getElementById('lang-id');
    
    let currentLang = localStorage.getItem('selectedLang') || 'id';

    // Initial render
    updateUI();
    renderLanguages(languages);

    // Event Listeners
    backBtn.addEventListener('click', showCategories);
    homeBtn.addEventListener('click', showCategories);
    
    langEnBtn.addEventListener('click', () => setLanguage('en'));
    langIdBtn.addEventListener('click', () => setLanguage('id'));

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('selectedLang', lang);
        updateUI();
        // Re-render components that depend on language
        const query = searchInput.value.toLowerCase();
        const filtered = languages.filter(langObj => 
            langObj.name.toLowerCase().includes(query) || 
            langObj.description.toLowerCase().includes(query)
        );
        renderLanguages(filtered);
    }

    function updateUI() {
        const t = translations[currentLang];
        
        // Update Static Text
        document.querySelector('header h1').textContent = t.title;
        document.querySelector('#hero h2').textContent = t.heroTitle;
        document.querySelector('#hero p').textContent = t.heroSubtitle;
        document.querySelector('#categories h3').textContent = t.categoriesTitle;
        searchInput.placeholder = t.searchPlaceholder;
        document.querySelector('footer p').innerHTML = t.footer;
        
        // Update Back Button
        backBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            ${t.backBtn}
        `;

        // Update Switcher Active State
        langEnBtn.classList.toggle('active', currentLang === 'en');
        langIdBtn.classList.toggle('active', currentLang === 'id');
    }
    
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
                <p>${lang.description[currentLang]}</p>
            `;
            card.addEventListener('click', () => showDetail(lang));
            languagesGrid.appendChild(card);
        });
    }

    function showDetail(lang) {
        // Update detail content
        document.getElementById('lang-name').textContent = lang.name;
        document.getElementById('lang-desc').textContent = lang.description[currentLang];
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
            const t = translations[currentLang];
            
            syntaxItem.innerHTML = `
                <h4>${item.title}</h4>
                <div class="code-container">
                    <pre><code class="language-${prismLang}">${escapeHtml(item.code)}</code></pre>
                </div>
                <div class="explanation">
                    <strong>${t.explanationLabel}:</strong> ${item.explanation[currentLang]}
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
