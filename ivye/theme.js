/* iYVE · 宋·国色换肤系统  theme.js
   右下角换肤控件；localStorage 跨页记忆；与 head 内早加载脚本共用 KEY。 */
(function(){
  var KEY = 'iyve-theme';
  var THEMES = [
    { id:'danya',   nm:'淡雅 · 天青', md:'清雅 · 留白', paper:'#F3EDDF', accent:'#7E9B8E' },
    { id:'relie',   nm:'热烈 · 朱炎', md:'炽烈 · 喜庆', paper:'#F7ECDA', accent:'#C8362B' },
    { id:'jiluo',   nm:'寂落 · 寒山', md:'寂寥 · 萧索', paper:'#E8E9E4', accent:'#8FA0A2' },
    { id:'qingrun', nm:'清润 · 春山', md:'清新 · 安然', paper:'#F0EFE1', accent:'#8FA47E' },
    { id:'muse',    nm:'暮色 · 琉金', md:'温暖 · 怀旧', paper:'#F3E8D4', accent:'#C2954A' },
    { id:'xuansu',  nm:'玄素 · 墨韵', md:'素净 · 禅寂', paper:'#EFEDE6', accent:'#1A1A18' }
  ];

  function get(){ try { return localStorage.getItem(KEY) || 'danya'; } catch(e){ return 'danya'; } }
  function set(id){
    document.documentElement.setAttribute('data-theme', id);
    try { localStorage.setItem(KEY, id); } catch(e){}
    paint();
  }

  var root, panel;
  function build(){
    root = document.createElement('div');
    root.id = 'iyve-switch';

    var tg = document.createElement('div');
    tg.className = 'tg';
    tg.title = '切换色调 · 宋·国色';
    tg.innerHTML = '<span class="ring"></span><span class="dot"></span>';
    tg.addEventListener('click', function(e){ e.stopPropagation(); root.classList.toggle('open'); });

    panel = document.createElement('div');
    panel.className = 'panel';
    var head = document.createElement('div');
    head.className = 'ph';
    head.textContent = '色调 · 不同颜色，不同情感';
    panel.appendChild(head);

    THEMES.forEach(function(t){
      var o = document.createElement('div');
      o.className = 'opt';
      o.setAttribute('data-id', t.id);
      o.innerHTML =
        '<span class="sw" style="background:'+t.paper+'"><i style="background:'+t.accent+'"></i></span>' +
        '<span class="meta"><span class="nm">'+t.nm+'</span><span class="md">'+t.md+'</span></span>';
      o.addEventListener('click', function(){ set(t.id); root.classList.remove('open'); });
      panel.appendChild(o);
    });

    root.appendChild(panel);
    root.appendChild(tg);
    document.body.appendChild(root);

    document.addEventListener('click', function(){ root.classList.remove('open'); });
  }

  function paint(){
    if(!panel) return;
    var cur = get();
    var opts = panel.querySelectorAll('.opt');
    for(var i=0;i<opts.length;i++){
      opts[i].classList.toggle('active', opts[i].getAttribute('data-id') === cur);
    }
  }

  function init(){
    document.documentElement.setAttribute('data-theme', get());
    build();
    paint();
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
