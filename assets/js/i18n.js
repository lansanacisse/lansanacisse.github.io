// Centralized i18n script reused across all pages
(function(){
  const SUPPORTED_LANGS=['fr','en'];
  const DEFAULT_LANG='fr';
  const LANG_STORAGE_KEY='site-lang';
  let I18N_DICT={};
  async function loadLang(lang){
    if(!SUPPORTED_LANGS.includes(lang)) lang=DEFAULT_LANG;
    try {
      const res = await fetch(`./assets/i18n/${lang}.json`);
      const dict = await res.json();
      I18N_DICT = dict;
      window.I18N_DICT = I18N_DICT; // expose global
      applyTranslations(dict, lang);
    } catch(e){ console.error('i18n load error', e); }
  }
  function applyTranslations(dict, lang){
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(dict[key]) {
        if(el.tagName==='INPUT' || el.tagName==='TEXTAREA'){
          el.placeholder = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      }
    });
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    updateLangButtons(lang);
  }
  function updateLangButtons(active){
    document.querySelectorAll('.lang-switch button').forEach(btn=>{
      btn.setAttribute('aria-pressed', btn.dataset.lang===active);
    });
  }
  function initLang(){
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    const browser = navigator.language?.substring(0,2).toLowerCase();
    const init = stored || (SUPPORTED_LANGS.includes(browser)?browser:DEFAULT_LANG);
    loadLang(init);
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    initLang();
    const switcher = document.getElementById('lang-switch');
    if(switcher){
      switcher.addEventListener('click', e=>{
        if(e.target.matches('button[data-lang]')){
          loadLang(e.target.dataset.lang);
        }
      });
    }
  });
})();
