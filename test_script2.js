// Dynamic year
document.getElementById('year').textContent=new Date().getFullYear();

function goTo(id){var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'});}
function fmt(n){return Math.round(n).toLocaleString('en-CA');}
function pct(v,m){return Math.min(v/m*100,100);}

var sIds=['home','articles','tools','about','newsletter'];
var nMap={home:'nh',articles:'na',tools:'nt',about:'nab'};
window.addEventListener('scroll',function(){
  document.getElementById('nav').classList.toggle('scrolled',window.scrollY>60);
  var cur='home';
  sIds.forEach(function(id){var el=document.getElementById(id);if(el&&window.scrollY>=el.offsetTop-140)cur=id;});
  Object.keys(nMap).forEach(function(k){var el=document.getElementById(nMap[k]);if(el)el.classList.toggle('active',k===cur);});
});
function openM(){document.getElementById('mm').classList.add('open');document.body.style.overflow='hidden';}
function closeM(){document.getElementById('mm').classList.remove('open');document.body.style.overflow='';}

const ARTICLES = {
  'dca': {
    title: 'Dollar-Cost Averaging',
    icon: '📈',
    content: `
      <p style="text-align: left; font-size: 1rem; line-height: 1.6;"><strong>Timing the market is nearly impossible.</strong> Even professionals get it wrong consistently.</p>
      <p style="text-align: left; font-size: 1rem; line-height: 1.6;"><strong>Dollar-Cost Averaging (DCA)</strong> means investing a fixed amount of money at regular intervals (like $100 every two weeks), regardless of what the stock market is doing.</p>
      <ul style="text-align: left; font-size: 1rem; line-height: 1.6; margin-left: 20px; margin-bottom: 20px;">
        <li><strong>When prices are high:</strong> Your $100 buys fewer shares.</li>
        <li><strong>When prices are low:</strong> Your $100 buys more shares automatically.</li>
      </ul>
      <p style="text-align: left; font-size: 1rem; line-height: 1.6;">This removes emotions from investing. You don't panic when the market drops, because you know you are buying shares on "sale."</p>`
  },
  'budget': {
    title: 'A Student Budget That Works',
    icon: '🍕',
    content: `
      <p style="text-align: left; font-size: 1rem; line-height: 1.6;">Most budgets fail because they are too restrictive. A good budget still lets you buy the coffee.</p>
      <p style="text-align: left; font-size: 1rem; line-height: 1.6;">Try the <strong>50/30/20 Rule</strong> adjusted for student life:</p>
      <ul style="text-align: left; font-size: 1rem; line-height: 1.6; margin-left: 20px; margin-bottom: 20px;">
        <li><strong>50% Needs:</strong> Rent, groceries, phone bill, transportation.</li>
        <li><strong>30% Wants:</strong> Eating out, entertainment, subscriptions.</li>
        <li><strong>20% Future:</strong> Savings and investments (start with your TFSA!).</li>
      </ul>
      <p style="text-align: left; font-size: 1rem; line-height: 1.6;">If your rent takes up too much, adjust the ratios. The goal isn't perfection, it's <strong>consistency</strong>. Track your spending for one month just to see where it goes—you will be surprised.</p>`
  },
  'downturns': {
    title: 'Surviving Market Downturns',
    icon: '🌧️',
    content: `
      <p style="text-align: left; font-size: 1rem; line-height: 1.6;">Seeing your portfolio turn red is scary. But history has a clear lesson: <strong>the market always recovers.</strong></p>
      <p style="text-align: left; font-size: 1rem; line-height: 1.6;">Since 1928, there have been numerous bear markets (drops of 20% or more). Every single one was followed by a recovery to all-time highs.</p>
      <p style="text-align: left; font-size: 1rem; line-height: 1.6;"><strong>The biggest mistake:</strong> Selling when you are down. That locks in your losses permanently.</p>
      <p style="text-align: left; font-size: 1rem; line-height: 1.6;">If you are investing for decades, a market drop in your 20s is actually a good thing—it means you can buy shares cheaper while you are heavily contributing.</p>`
  },
  'portfolio': {
    title: 'The Canadian ETF Portfolio',
    icon: '🍁',
    content: `
      <p style="text-align: left; font-size: 1rem; line-height: 1.6;">You only need one or two ETFs to own the entire world. Here is a classic Canadian setup:</p>
      <ul style="text-align: left; font-size: 1rem; line-height: 1.6; margin-left: 20px; margin-bottom: 20px;">
        <li><strong>XEQT or VEQT:</strong> These are "All-in-one" ETFs. By buying one ticker, you own thousands of companies across the US, Canada, and Internationally. Perfect for long-term growth.</li>
        <li><strong>XBAL or VBAL:</strong> Similar to above, but includes bonds (fixed income) to make the ride smoother and less volatile.</li>
      </ul>
      <p style="text-align: left; font-size: 1rem; line-height: 1.6;"><strong>How to do it:</strong> Open a TFSA at Wealthsimple or Questrade, deposit money regularly, and buy units of your chosen ETF. Keep it simple.</p>`
  }
};

function openArticle(key){
  if(key && ARTICLES[key]) {
      document.getElementById('articleTitle').innerHTML = ARTICLES[key].title;
      document.getElementById('articleIcon').innerHTML = ARTICLES[key].icon;
      document.getElementById('articleContent').innerHTML = ARTICLES[key].content;
      document.querySelector('.modal .m-actions').style.display = 'none'; // Hide newsletter button for actual articles
  } else {
      document.getElementById('articleTitle').innerHTML = 'This article is coming soon';
      document.getElementById('articleIcon').innerHTML = '📝';
      document.getElementById('articleContent').innerHTML = '<p>Dhruv is writing this one right now. Subscribe to the free newsletter and you\\'ll be the first to read it the day it drops.</p>';
      document.querySelector('.modal .m-actions').style.display = 'flex';
  }
  document.getElementById('articleModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeArticle(){document.getElementById('articleModal').classList.remove('open');document.body.style.overflow='';}

function fArt(cat,btn){
  document.querySelectorAll('.fbtn').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');
  document.querySelectorAll('.acard').forEach(function(c){
    c.style.display=(cat==='all'||c.dataset.cat.indexOf(cat)>-1)?'block':'none';
  });
}

var panels=['budget','compound','tfsa','journal','glossary','etfs','cards'];
function switchTool(id){
  panels.forEach(function(p,i){
    var tab=document.querySelectorAll('.ttab')[i];
    var panel=document.getElementById('panel-'+p);
    if(tab)tab.classList.toggle('active',p===id);
    if(panel){
      panel.classList.toggle('active',p===id);
      if(p===id){
        panel.querySelectorAll('.reveal').forEach(function(el){el.classList.add('visible');});
      }
    }
  });
  if(id==='glossary')renderGlossary();
  if(id==='etfs')renderETFs();
  if(id==='cards')renderCards();
}

function calcBudget(){
  var income=parseFloat(document.getElementById('inc').value)||0;
  if(!income){alert('Please enter your monthly income.');return;}
  var exp=(parseFloat(document.getElementById('rent').value)||0)+(parseFloat(document.getElementById('food').value)||0)+(parseFloat(document.getElementById('trans').value)||0)+(parseFloat(document.getElementById('subs').value)||0)+(parseFloat(document.getElementById('oth').value)||0);
  var sav=income*0.10;var inv=Math.max(income-exp-sav,0);var tfsa=Math.round(inv*0.70);
  var note=income-exp<0?'Your expenses exceed your income. Look for areas to reduce before investing.':inv<50?'Even $25/month inside a TFSA compounds meaningfully over time.':inv>=500?'Strong position! Max your TFSA first, then explore RRSP or FHSA.':'Solid start! Directing your investable amount into a TFSA is the most flexible first step.';
  document.getElementById('budgetOut').innerHTML='<div class="rlbl">Total Expenses</div><div class="rval mp">$'+fmt(exp)+'</div><div class="btrack"><div class="bfill bn" id="be"></div></div><div class="rlbl">Emergency Savings (10%)</div><div class="rval gd">$'+fmt(sav)+'</div><div class="btrack"><div class="bfill bs" id="bs2"></div></div><div class="rlbl">Available to Invest</div><div class="rval ol">$'+fmt(inv)+'</div><div class="btrack"><div class="bfill bi" id="bi"></div></div><div class="rlbl">Suggested TFSA Contribution</div><div class="rval bl">$'+fmt(tfsa)+'</div><div class="btrack"><div class="bfill bt" id="bt"></div></div><p class="rnote">'+note+'</p>';
  setTimeout(function(){
    var be=document.getElementById('be');var bs2=document.getElementById('bs2');var bi=document.getElementById('bi');var bt=document.getElementById('bt');
    if(be)be.style.width=pct(exp,income)+'%';
    if(bs2)bs2.style.width=pct(sav,income)+'%';
    if(bi)bi.style.width=pct(inv,income)+'%';
    if(bt)bt.style.width=pct(tfsa,income)+'%';
  },80);
}

function calcCompound(){
  var monthly=parseFloat(document.getElementById('cim').value)||0;
  var start=parseFloat(document.getElementById('cis').value)||0;
  var rate=parseFloat(document.getElementById('cir').value)||0;
  var years=parseInt(document.getElementById('ciy').value)||0;
  var freq=parseInt(document.getElementById('cif').value)||12;
  if(!monthly&&!start){alert('Enter a monthly contribution or starting amount.');return;}
  if(!years||!rate){alert('Enter years and return rate.');return;}
  var r=rate/100/freq;var n=years*freq;var mpp=monthly*(12/freq);
  var fvL=start*Math.pow(1+r,n);var fvA=mpp*(Math.pow(1+r,n)-1)/r;
  var total=fvL+fvA;var contrib=start+(monthly*12*years);var interest=total-contrib;
  var mult=(total/Math.max(contrib,1)).toFixed(1);
  var barCount=Math.min(years,10);var step=Math.ceil(years/barCount);
  var bars=[];var labels=[];var maxV=0;
  for(var y=step;y<=years;y+=step){
    var ni=y*freq;var v=(start*Math.pow(1+r,ni))+(mpp*(Math.pow(1+r,ni)-1)/r);
    bars.push({y:y,v:v});if(v>maxV)maxV=v;labels.push('Yr '+y);
  }
  if(bars.length===0||bars[bars.length-1].y!==years){bars.push({y:years,v:total});labels.push('Yr '+years);if(total>maxV)maxV=total;}
  var barsHtml='';
  bars.forEach(function(b){barsHtml+='<div class="cbar" style="height:'+Math.round(b.v/maxV*100)+'%;background:linear-gradient(to top,var(--om),var(--ol))" data-tip="Yr '+b.y+': $'+fmt(b.v)+'"></div>';});
  var lblHtml='';labels.forEach(function(l){lblHtml+='<span>'+l+'</span>';});
  document.getElementById('compoundOut').innerHTML='<div class="bigr"><div class="rlbl">Total Portfolio Value</div><div class="rval ol" style="font-size:3rem">$'+fmt(total)+'</div><div style="font-size:.75rem;color:rgba(237,228,204,.3)">Over '+years+' years at '+rate+'% annual return</div></div><div class="cpbd"><div class="cpi"><div class="rlbl">Total Contributed</div><div class="rval gd">$'+fmt(contrib)+'</div></div><div class="cpi"><div class="rlbl">Interest Earned</div><div class="rval mp">$'+fmt(interest)+'</div></div></div><div class="rlbl" style="margin-bottom:10px">Growth Over Time</div><div class="cbars">'+barsHtml+'</div><div class="clbls">'+lblHtml+'</div><p class="rnote">Your money grows to '+mult+'x your total contributions. The longer you stay invested, the more interest earns interest.</p>';
}

var TLIMS={2009:5000,2010:5000,2011:5000,2012:5000,2013:5500,2014:5500,2015:10000,2016:5500,2017:5500,2018:5500,2019:6000,2020:6000,2021:6000,2022:6000,2023:6500,2024:7000,2025:7000};
(function(){var sel=document.getElementById('tsy');for(var y=2009;y<=2025;y++){var o=document.createElement('option');o.value=y;o.textContent=y;sel.appendChild(o);}})();
function calcTFSA(){
  var sy=parseInt(document.getElementById('tsy').value)||0;
  var co=parseFloat(document.getElementById('tco').value)||0;
  var wi=parseFloat(document.getElementById('twi').value)||0;
  if(!sy){alert('Please select your eligible year.');return;}
  var lifetime=0;var yd=[];
  for(var y=sy;y<=2025;y++){var lim=TLIMS[y]||0;lifetime+=lim;yd.push({year:y,limit:lim});}
  var net=co-wi;var avail=lifetime-net;var over=net>lifetime;
  var ygHtml='';yd.forEach(function(d){ygHtml+='<div class="tyear"><div class="yr">'+d.year+'</div><div class="rm">$'+(d.limit/1000).toFixed(0)+'K</div></div>';});
  var warnHtml=over?'<div class="twarn"><strong>Potential Over-Contribution:</strong> Based on the numbers entered, you may have over-contributed by <strong>$'+fmt(Math.abs(avail))+'</strong>. Over-contributions are taxed at 1%/month by the CRA. Verify your exact room through the <strong>CRA My Account portal</strong> before making further contributions.</div>':'';
  var aColor=avail>=0?'var(--ol)':'var(--ms)';
  document.getElementById('tfsaOut').innerHTML='<div class="tsum"><div class="tsg"><div><div class="rlbl">Lifetime Room</div><div class="rval bl" style="font-size:1.8rem">$'+fmt(lifetime)+'</div></div><div><div class="rlbl">Net Contributions</div><div class="rval gd" style="font-size:1.8rem">$'+fmt(net)+'</div></div><div><div class="rlbl">Available Room</div><div class="rval ol" style="font-size:1.8rem;color:'+aColor+'">'+(over?'-':'')+'$'+fmt(Math.abs(avail))+'</div></div></div></div>'+warnHtml+'<div class="rlbl" style="margin-bottom:12px">Annual Limits by Year</div><div class="tygrid">'+ygHtml+'</div><p class="rnote">Withdrawals restore contribution room the following calendar year. Always confirm your exact room with the CRA My Account portal.</p>';
}

function genJournal(){
  var amt=parseFloat(document.getElementById('ja').value)||0;
  var goal=document.getElementById('jg').value;var risk=document.getElementById('jr').value;
  var exp=document.getElementById('je').value;var age=parseInt(document.getElementById('jage').value)||0;
  var prov=document.getElementById('jp').value;
  if(!amt||!goal||!risk||!exp||!age||!prov){alert('Please fill in all fields.');return;}
  var allocs;
  if(goal==='emergency') allocs=[{p:60,i:'🏦',l:'Emergency Fund',c:'#d4a843'},{p:25,i:'💳',l:'TFSA ETF',c:'#7ab8d4'},{p:10,i:'📈',l:'Stocks',c:'#8fa870'},{p:5,i:'🔒',l:'Bonds',c:'#c0392b'}];
  else if(goal==='home') allocs=[{p:50,i:'🏠',l:'FHSA',c:'#c0392b'},{p:30,i:'💳',l:'TFSA',c:'#7ab8d4'},{p:15,i:'🏦',l:'HISA',c:'#d4a843'},{p:5,i:'📈',l:'Stocks',c:'#8fa870'}];
  else if(goal==='retirement') allocs=[{p:45,i:'🌅',l:'RRSP',c:'#d4a843'},{p:35,i:'💳',l:'TFSA',c:'#7ab8d4'},{p:15,i:'📈',l:'Stocks',c:'#8fa870'},{p:5,i:'🏦',l:'Savings',c:'#c0392b'}];
  else if(goal==='growth'&&risk==='high') allocs=[{p:40,i:'💳',l:'TFSA ETFs',c:'#7ab8d4'},{p:35,i:'📈',l:'Stocks',c:'#8fa870'},{p:15,i:'🌅',l:'RRSP',c:'#d4a843'},{p:10,i:'🏦',l:'Emergency',c:'#c0392b'}];
  else allocs=[{p:40,i:'💳',l:'TFSA ETFs',c:'#7ab8d4'},{p:25,i:'🏦',l:'Emergency',c:'#d4a843'},{p:20,i:'📈',l:'Stocks/ETFs',c:'#8fa870'},{p:15,i:'🌅',l:'RRSP',c:'#c0392b'}];
  if(risk==='low'&&allocs[2]){allocs[2].p=Math.max(allocs[2].p-15,5);allocs[1].p+=15;}
  var greet={emergency:'A solid emergency fund is the foundation everything else gets built on.',home:'Owning a home in Canada is a meaningful goal — and Canada now has an account built specifically for it.',retirement:'The earlier you begin, the less you need to contribute each month.',growth:'Long-term thinking is the single biggest edge any investor can have.',balanced:'A balanced approach, consistently applied, is one of the most sustainable strategies.'};
  document.getElementById('jgreet').textContent=greet[goal]||'Here is your personalized plan.';
  document.getElementById('jsub').textContent='Based on $'+amt+'/month · '+risk+' risk · '+prov+' · Age '+age+' — by Dhruv Sharma';
  var ah='';allocs.forEach(function(v){ah+='<div class="jacard"><div class="jaicon">'+v.i+'</div><div class="japct" style="color:'+v.c+'">'+v.p+'%</div><div class="jalbl">'+v.l+'</div><div class="jaamt">$'+Math.round(amt*v.p/100)+'/mo</div></div>';});
  document.getElementById('jallocs').innerHTML=ah;
  var advice=[];
  if(goal==='home') advice.push({i:'🏠',c:'mp',t:'<strong>The FHSA is one of the most powerful Canadian accounts in years.</strong> Up to $8,000/year (lifetime $40,000), tax-deductible like an RRSP, and tax-free on withdrawal for a first home purchase.'});
  if(goal==='retirement') advice.push({i:'🌅',c:'gd',t:'<strong>RRSP contributions reduce your taxable income dollar-for-dollar.</strong> In Alberta, understanding when to weight RRSP vs TFSA based on your income bracket is worth mapping out with a tax professional.'});
  advice.push({i:'💳',c:'',t:'<strong>The TFSA is Canada\'s most flexible registered account.</strong> All growth is 100% tax-free, you can withdraw any time without penalty.'});
  if(risk==='low') advice.push({i:'🛡️',c:'',t:'<strong>For low risk, balanced ETFs like VBAL or XBAL</strong> provide a diversified mix of bonds and equities in a single fund — automatically rebalanced, low cost.'});
  if(risk==='high') advice.push({i:'📈',c:'mp',t:'<strong>With a long time horizon, all-equity ETFs like XEQT or VEQT</strong> hold thousands of global stocks at very low cost.'});
  if(prov==='AB') advice.push({i:'🌄',c:'gd',t:'<strong>Alberta\'s tax structure is genuinely advantageous.</strong> No provincial sales tax means your after-tax dollars go further. Consistent TFSA and RRSP contributions are especially impactful here.'});
  if(exp==='beginner') advice.push({i:'🎓',c:'',t:'<strong>As a beginner, simplicity is a real advantage.</strong> A single all-in-one ETF — XEQT, VEQT, VBAL, or XBAL — gives you instant diversification. Set up automatic contributions and let time do the work.'});
  var advHtml='';advice.forEach(function(a){advHtml+='<div class="ai '+a.c+'"><div class="aii">'+a.i+'</div><div class="ait">'+a.t+'</div></div>';});
  document.getElementById('jadv').innerHTML=advHtml;
  var out=document.getElementById('journalOut');out.classList.add('vis');
  setTimeout(function(){out.scrollIntoView({behavior:'smooth',block:'nearest'});},100);
}

var TERMS=[
  {t:'Asset Allocation',l:'Strategy',d:'Dividing investments among stocks, bonds, and cash based on goals and risk tolerance.'},
  {t:'Bear Market',l:'Markets',d:'A 20%+ drop from recent highs. Bear markets are normal and have historically always been followed by recoveries.'},
  {t:'Bond',l:'Fixed Income',d:'A loan to a government or company in exchange for regular interest and return of principal at a set date.'},
  {t:'Bull Market',l:'Markets',d:'A period of rising stock prices — typically 20%+ from recent lows.'},
  {t:'Capital Gain',l:'Tax',d:'Profit from selling an investment above your cost. Inside a TFSA, capital gains are completely tax-free.'},
  {t:'Compound Interest',l:'Basics',d:'Interest earned on both your original investment and already-accumulated interest. A $200/month investment at 7% grows to over $500,000 in 40 years.'},
  {t:'CRA',l:'Canada',d:'Canada Revenue Agency — the federal tax body. Manages contribution room for TFSAs, RRSPs, and FHSAs.'},
  {t:'Diversification',l:'Strategy',d:'Spreading investments across companies, sectors, and countries to reduce the impact of any single loss.'},
  {t:'Dividend',l:'Stocks',d:'A portion of company earnings paid regularly to shareholders. Can be reinvested automatically through a DRIP.'},
  {t:'Dollar-Cost Averaging',l:'Strategy',d:'Investing a fixed amount at regular intervals regardless of market price. Removes pressure of timing the market.'},
  {t:'ETF',l:'Canada',d:'Exchange-Traded Fund — a basket of securities trading like a single stock. Canadian favorites: XEQT, VEQT, VBAL, XBAL.'},
  {t:'Expense Ratio (MER)',l:'Costs',d:'Annual fund fee as a percentage of assets. Low-cost ETFs charge 0.10-0.25% vs 1.5-2.5% for actively managed mutual funds.'},
  {t:'FHSA',l:'Canada',d:'First Home Savings Account — for first-time home buyers. Up to $8,000/year ($40,000 lifetime) tax-deductible. Tax-free on withdrawal for a first home.'},
  {t:'Index Fund',l:'Basics',d:'A fund designed to match a market index like the S&P/TSX Composite. Passively managed, low cost.'},
  {t:'Inflation',l:'Economics',d:'The rate at which prices rise over time. Canada targets 2% annually.'},
  {t:'Liquidity',l:'Basics',d:'How quickly an investment can be converted to cash. Stocks and ETFs are highly liquid. Real estate is illiquid.'},
  {t:'Mutual Fund',l:'Funds',d:'A pooled fund managed by a professional. In Canada, most carry high MERs (1.5-2.5%).'},
  {t:'Questrade',l:'Canada',d:'A popular Canadian online brokerage. Commission-free ETF purchases. Offers TFSAs, RRSPs, FHSAs.'},
  {t:'RRSP',l:'Canada',d:'Registered Retirement Savings Plan. Contributions are tax-deductible, investments grow tax-sheltered.'},
  {t:'Risk Tolerance',l:'Strategy',d:'Your ability and willingness to endure investment losses. Being honest about risk tolerance leads to a portfolio you will actually stick with.'},
  {t:'S&P 500',l:'Markets',d:'An index tracking 500 large US companies. Accessible via Canadian ETFs like ZSP or XUS.'},
  {t:'TFSA',l:'Canada',d:'Tax-Free Savings Account. All investment growth is completely tax-free. 2025 limit: $7,000.'},
  {t:'TSX',l:'Canada',d:'Toronto Stock Exchange — Canada\'s primary stock exchange with 1,500+ listed companies.'},
  {t:'Volatility',l:'Markets',d:'Degree of price fluctuation over time. Stocks are more volatile than bonds.'},
  {t:'Wealthsimple',l:'Canada',d:'Canadian fintech offering commission-free stock and ETF trading plus managed investing.'},
  {t:'XEQT / VEQT',l:'Canada',d:'All-equity one-fund ETFs. Each holds thousands of global stocks in a single ticker. MER around 0.20%.'},
  {t:'Yield',l:'Income',d:'Income return on an investment as a percentage of price. Focus on total return rather than yield alone.'},
];
var gAlpha='all';
function renderGlossary(){
  var q=(document.getElementById('gsrch').value||'').toLowerCase();
  var filtered=TERMS.filter(function(t){
    var ms=!q||(t.t.toLowerCase().indexOf(q)>-1||t.d.toLowerCase().indexOf(q)>-1||t.l.toLowerCase().indexOf(q)>-1);
    var ma=gAlpha==='all'||t.t[0].toUpperCase()===gAlpha;
    return ms&&ma;
  });
  var letters=[];TERMS.forEach(function(t){var l=t.t[0].toUpperCase();if(letters.indexOf(l)===-1)letters.push(l);});
  letters.sort();
  var alphaEl=document.getElementById('galpha');
  if(!alphaEl.children.length){
    var all2=document.createElement('button');all2.className='abtn active';all2.textContent='All';
    all2.onclick=function(){gAlpha='all';document.querySelectorAll('.abtn').forEach(function(b){b.classList.remove('active');});all2.classList.add('active');renderGlossary();};
    alphaEl.appendChild(all2);
    letters.forEach(function(l){
      var b=document.createElement('button');b.className='abtn';b.textContent=l;
      b.onclick=function(){gAlpha=l;document.querySelectorAll('.abtn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');renderGlossary();};
      alphaEl.appendChild(b);
    });
  }
  document.getElementById('gcnt').textContent=filtered.length+' term'+(filtered.length!==1?'s':'')+' found';
  if(!filtered.length){document.getElementById('glist').innerHTML='<div class="gnone">No terms match your search.</div>';return;}
  var groups={};filtered.forEach(function(t){var l=t.t[0].toUpperCase();if(!groups[l])groups[l]=[];groups[l].push(t);});
  var gkeys=Object.keys(groups).sort();var html='';
  gkeys.forEach(function(l){
    html+='<div class="ggroup"><div class="gletter">'+l+'</div>';
    groups[l].forEach(function(t){
      var isCA=t.l==='Canada';
      html+='<div class="gterm" onclick="this.classList.toggle(\'open\')"><div class="gth"><h4>'+t.t+'</h4><div style="display:flex;align-items:center;gap:8px"><span class="gtag2'+(isCA?' mp':'')+'">'+t.l+'</span><span class="gchev">&#9662;</span></div></div><div class="gtb">'+t.d+'</div></div>';
    });
    html+='</div>';
  });
  document.getElementById('glist').innerHTML=html;
}

var ETFS=[
  {rank:1,ticker:'XEQT',name:'iShares Core Equity ETF Portfolio',provider:'iShares (BlackRock)',exchange:'TSX',currency:'CAD',cat:'equity',mer:0.20,aum:'~$5.5B',ytd:'+8.2%',up1:true,oneyr:'+18.4%',up2:true,dist:'None',freq:'—',alloc:'45% US · 25% Canada · 20% Intl · 10% EM',risk:'High',best:'Long-term growth investors, beginners wanting simplicity',icon:'🌍',col:'#8fa870'},
  {rank:2,ticker:'VEQT',name:'Vanguard All-Equity ETF Portfolio',provider:'Vanguard Canada',exchange:'TSX',currency:'CAD',cat:'equity',mer:0.22,aum:'~$4.2B',ytd:'+7.9%',up1:true,oneyr:'+17.8%',up2:true,dist:'None',freq:'—',alloc:'42% US · 30% Canada · 18% Intl · 10% EM',risk:'High',best:'Long-term investors who prefer Vanguard structure',icon:'🌐',col:'#8fa870'},
  {rank:3,ticker:'XBAL',name:'iShares Core Balanced ETF Portfolio',provider:'iShares (BlackRock)',exchange:'TSX',currency:'CAD',cat:'balanced',mer:0.20,aum:'~$1.8B',ytd:'+5.1%',up1:true,oneyr:'+11.3%',up2:true,dist:'Quarterly',freq:'4x/yr',alloc:'60% Global Equities · 40% Bonds',risk:'Medium',best:'Moderate risk investors, 5-10 years from retirement',icon:'⚖️',col:'#7ab8d4'},
  {rank:4,ticker:'VBAL',name:'Vanguard Balanced ETF Portfolio',provider:'Vanguard Canada',exchange:'TSX',currency:'CAD',cat:'balanced',mer:0.24,aum:'~$1.4B',ytd:'+4.9%',up1:true,oneyr:'+10.8%',up2:true,dist:'Quarterly',freq:'4x/yr',alloc:'60% Global Equities · 40% Bonds',risk:'Medium',best:'Hands-off investors wanting a complete portfolio',icon:'🧩',col:'#7ab8d4'},
  {rank:5,ticker:'ZSP',name:'BMO S&P 500 Index ETF',provider:'BMO Asset Management',exchange:'TSX',currency:'CAD',cat:'equity',mer:0.09,aum:'~$10B',ytd:'+9.1%',up1:true,oneyr:'+21.5%',up2:true,dist:'Quarterly',freq:'4x/yr',alloc:'100% US Large Cap Equities',risk:'High',best:'US market exposure; best inside RRSP for tax efficiency',icon:'🇺🇸',col:'#d4a843'},
  {rank:6,ticker:'XIC',name:'iShares S&P/TSX Capped Composite ETF',provider:'iShares (BlackRock)',exchange:'TSX',currency:'CAD',cat:'equity',mer:0.06,aum:'~$12B',ytd:'+3.8%',up1:true,oneyr:'+12.1%',up2:true,dist:'Quarterly',freq:'4x/yr',alloc:'100% Canadian Equities (TSX)',risk:'High',best:'Canadian equity exposure at minimal cost',icon:'🇨🇦',col:'#c0392b'},
  {rank:7,ticker:'VDY',name:'Vanguard FTSE Canadian High Dividend Yield ETF',provider:'Vanguard Canada',exchange:'TSX',currency:'CAD',cat:'dividend',mer:0.22,aum:'~$2.1B',ytd:'+4.2%',up1:true,oneyr:'+13.7%',up2:true,dist:'Monthly',freq:'12x/yr',alloc:'~60% Financials · ~25% Energy · ~10% Telecoms',risk:'Medium-High',best:'Income-focused investors, dividend reinvestment strategies',icon:'💰',col:'#d4a843'},
  {rank:8,ticker:'ZAG',name:'BMO Aggregate Bond Index ETF',provider:'BMO Asset Management',exchange:'TSX',currency:'CAD',cat:'bond',mer:0.09,aum:'~$7.5B',ytd:'+1.4%',up1:true,oneyr:'+3.9%',up2:true,dist:'Monthly',freq:'12x/yr',alloc:'~70% Government · ~30% Corporate Bonds',risk:'Low-Medium',best:'Conservative investors, portfolio stabilizer',icon:'🛡️',col:'#7ab8d4'},
  {rank:9,ticker:'XGRO',name:'iShares Core Growth ETF Portfolio',provider:'iShares (BlackRock)',exchange:'TSX',currency:'CAD',cat:'balanced',mer:0.20,aum:'~$2.3B',ytd:'+6.8%',up1:true,oneyr:'+15.2%',up2:true,dist:'Semi-Annual',freq:'2x/yr',alloc:'80% Global Equities · 20% Bonds',risk:'Medium-High',best:'Growth investors who want a small bond buffer',icon:'📊',col:'#8fa870'},
  {rank:10,ticker:'HXCN',name:'Horizons S&P/TSX 60 Index ETF',provider:'Horizons ETFs',exchange:'TSX',currency:'CAD',cat:'equity',mer:0.07,aum:'~$2.8B',ytd:'+3.5%',up1:true,oneyr:'+11.8%',up2:true,dist:'None',freq:'—',alloc:'100% Canadian Large Cap (TSX 60)',risk:'High',best:'Tax-efficient Canadian equity in non-registered accounts',icon:'⚡',col:'#c0392b'},
];
var etfCat='all';
function renderETFs(){
  var fEl=document.getElementById('etfFilters');
  if(!fEl.children.length){
    var cats=[['all','All'],['equity','Equity'],['balanced','Balanced'],['bond','Bonds'],['dividend','Dividend']];
    cats.forEach(function(c){
      var b=document.createElement('button');b.className='abtn'+(c[0]==='all'?' active':'');b.textContent=c[1];
      b.onclick=function(){etfCat=c[0];document.querySelectorAll('#etfFilters .abtn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');renderETFs();};
      fEl.appendChild(b);
    });
  }
  var filtered=ETFS.filter(function(e){return etfCat==='all'||e.cat===etfCat;});
  var html='';
  filtered.forEach(function(e){
    var distColor=e.dist==='None'?'color:rgba(237,228,204,.3);background:rgba(237,228,204,.05)':e.dist==='Monthly'?'color:#8fa870;background:rgba(143,168,112,.12)':'color:#d4a843;background:rgba(212,168,67,.1)';
    html+='<div style="background:rgba(237,228,204,.04);border:1px solid rgba(237,228,204,.09);border-radius:12px;overflow:hidden;margin-bottom:14px">';
    html+='<div style="padding:20px 24px 0;display:grid;grid-template-columns:auto 1fr auto;gap:16px;align-items:start">';
    html+='<div style="text-align:center;min-width:48px"><div style="font-size:1.4rem;margin-bottom:4px">'+e.icon+'</div><div style="font-size:.7rem;color:rgba(237,228,204,.25)">#'+e.rank+'</div></div>';
    html+='<div><div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:5px"><span style="font-family:\'Cormorant Garamond\',serif;font-size:1.5rem;font-weight:700;color:'+e.col+'">'+e.ticker+'</span><span style="font-size:.65rem;background:rgba(237,228,204,.06);color:rgba(237,228,204,.35);padding:3px 8px;border-radius:3px">'+e.exchange+' &middot; '+e.currency+'</span><span style="font-size:.65rem;background:rgba(237,228,204,.07);color:rgba(237,228,204,.4);padding:3px 8px;border-radius:3px;text-transform:capitalize">'+e.cat+'</span></div>';
    html+='<div style="font-size:.88rem;color:rgba(237,228,204,.6);margin-bottom:3px">'+e.name+'</div>';
    html+='<div style="font-size:.72rem;color:rgba(237,228,204,.25);margin-bottom:10px">'+e.provider+'</div>';
    html+='<div style="font-size:.75rem;color:rgba(237,228,204,.35);font-style:italic">Best for: '+e.best+'</div></div>';
    html+='<div style="display:flex;flex-direction:column;gap:10px;min-width:110px;text-align:right">';
    html+='<div><div style="font-size:.6rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(237,228,204,.25)">MER</div><div style="font-family:\'Cormorant Garamond\',serif;font-size:1.4rem;font-weight:700;color:var(--ol)">'+e.mer+'%</div></div>';
    html+='<div><div style="font-size:.6rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(237,228,204,.25)">AUM</div><div style="font-size:.82rem;color:rgba(237,228,204,.5)">'+e.aum+'</div></div>';
    html+='<div><div style="font-size:.6rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(237,228,204,.25)">YTD</div><div style="font-size:.92rem;font-weight:700;color:'+(e.up1?'#8fa870':'#e05c4b')+'">'+(e.up1?'&#9650;':'&#9660;')+' '+e.ytd+'</div></div>';
    html+='<div><div style="font-size:.6rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(237,228,204,.25)">1-Year</div><div style="font-size:.92rem;font-weight:700;color:'+(e.up2?'#8fa870':'#e05c4b')+'">'+(e.up2?'&#9650;':'&#9660;')+' '+e.oneyr+'</div></div>';
    html+='<div><div style="font-size:.6rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(237,228,204,.25)">Risk</div><div style="font-size:.78rem;color:rgba(237,228,204,.45)">'+e.risk+'</div></div></div></div>';
    html+='<div style="padding:12px 24px 16px;margin-top:14px;border-top:1px solid rgba(237,228,204,.06);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px">';
    html+='<div style="display:flex;align-items:center;gap:10px"><span style="font-size:.63rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(237,228,204,.25)">Allocation</span><span style="font-size:.78rem;color:rgba(237,228,204,.4)">'+e.alloc+'</span></div>';
    html+='<span style="font-size:.76rem;font-weight:600;padding:3px 10px;border-radius:3px;'+distColor+'">'+e.dist+(e.freq!=='—'?' &middot; '+e.freq:'')+'</span></div></div>';
  });
  document.getElementById('etfGrid').innerHTML=html;
}

var CARDS=[
  {rank:1,name:'Neo Secured Mastercard',issuer:'Neo Financial',type:'secured',tags:['secured','nofee'],fee:0,dep:'$50 min',apr:'~19.99%',check:'Soft check only',newcomer:false,badge:'Most Accessible',bc:'rgba(143,168,112,.2)',bt:'var(--ol)',icon:'⚡',col:'#8fa870',verdict:'The most accessible secured card in Canada. Minimum deposit as low as $50, soft-check-only approval, and earns cashback rewards. Reports to both major credit bureaus monthly.',perks:['No hard credit check','$50 minimum deposit','Earns cashback at Neo partners','Reports to Equifax and TransUnion'],watch:'Highest cashback rates only at Neo partner stores.'},
  {rank:2,name:'Home Trust Secured Visa',issuer:'Home Trust',type:'secured',tags:['secured'],fee:0,dep:'$500 min',apr:'~19.99%',check:'No credit check — guaranteed',newcomer:false,badge:'Guaranteed Approval',bc:'rgba(119,184,212,.15)',bt:'#7ab8d4',icon:'🏠',col:'#7ab8d4',verdict:'The gold standard for guaranteed approval in Canada. Absolutely no credit check. Two options: no annual fee at 19.99% APR, or $59/yr at 14.9%.',perks:['No credit check at all','$0 annual fee option available','Deposit becomes your limit','Reports to both major bureaus'],watch:'Requires a $500 minimum deposit — higher barrier than Neo.'},
  {rank:3,name:'CIBC Newcomer Visa',issuer:'CIBC',type:'unsecured',tags:['unsecured','newcomer','nofee'],fee:0,dep:'N/A',apr:'~20.99%',check:'Canadian history waived',newcomer:true,badge:'Newcomer Program',bc:'rgba(192,57,43,.15)',bt:'var(--ms)',icon:'🇨🇦',col:'#c0392b',verdict:'One of the few truly unsecured cards (no deposit) that waives the Canadian credit history requirement. Part of CIBC\'s newcomer banking suite.',perks:['No Canadian credit history required','No annual fee','Part of CIBC newcomer package','Accepted worldwide on Visa'],watch:'APR is standard at ~20.99% — always pay the full balance.'},
  {rank:4,name:'Scotiabank StartRight Visa',issuer:'Scotiabank',type:'unsecured',tags:['unsecured','newcomer','nofee'],fee:0,dep:'N/A',apr:'~20.99%',check:'Canadian history waived',newcomer:true,badge:'Newcomer Program',bc:'rgba(192,57,43,.15)',bt:'var(--ms)',icon:'🍁',col:'#c0392b',verdict:'Scotia\'s StartRight program is one of the most polished newcomer offerings in Canada. Earn Scene+ points from day one.',perks:['No Canadian credit history required','No annual fee (first year)','Scene+ rewards points','Upgrade path after 12 months'],watch:'Annual fee may apply after year one — confirm current terms.'},
  {rank:5,name:'RBC Card for New Canadians',issuer:'RBC',type:'unsecured',tags:['unsecured','newcomer'],fee:0,dep:'N/A',apr:'~20.99%',check:'Newcomer program — waived',newcomer:true,badge:'Newcomer Program',bc:'rgba(192,57,43,.15)',bt:'var(--ms)',icon:'🏦',col:'#d4a843',verdict:'RBC\'s newcomer card is straightforward. The draw is the full ecosystem — if you plan to bank with RBC, keeping everything under one roof simplifies your financial life.',perks:['No Canadian credit history required','Part of RBC Newcomer Advantage','RBC Rewards points','No annual fee on entry card'],watch:'Points value is modest — don\'t choose this purely for rewards.'},
  {rank:6,name:'Capital One Guaranteed Mastercard',issuer:'Capital One',type:'secured',tags:['secured'],fee:59,dep:'$75 min',apr:'~19.99%',check:'Guaranteed — no credit check',newcomer:false,badge:'Guaranteed Approval',bc:'rgba(212,168,67,.12)',bt:'#d4a843',icon:'🔐',col:'#d4a843',verdict:'The $59 annual fee is the trade-off for guaranteed approval with just a $75 deposit. For people who truly cannot get approved anywhere else.',perks:['Guaranteed approval — no exceptions','$75 minimum deposit only','Reports to major bureaus','Capital One fraud protection'],watch:'$59 annual fee — try Home Trust first as it has a $0 fee option.'},
  {rank:7,name:'BMO Preferred Rate Mastercard',issuer:'BMO',type:'unsecured',tags:['unsecured','nofee'],fee:0,dep:'N/A',apr:'~12.99%',check:'Standard — some history helps',newcomer:false,badge:'Lowest APR',bc:'rgba(119,184,212,.15)',bt:'#7ab8d4',icon:'💙',col:'#7ab8d4',verdict:'One of the lowest APR rates available in Canada. Best for people who may occasionally carry a balance and want the lowest possible interest rate.',perks:['One of the lowest APRs in Canada','No annual fee','Accepted on Mastercard network','Simple, practical no-frills card'],watch:'Approval may need some credit history — better after 6-12 months.'},
  {rank:8,name:'Koho Prepaid + Credit Building',issuer:'Koho Financial',type:'secured',tags:['secured','nofee'],fee:0,dep:'$0 prepaid; ~$7/mo add-on',apr:'N/A (prepaid)',check:'None whatsoever',newcomer:false,badge:'Fintech Option',bc:'rgba(143,168,112,.2)',bt:'var(--ol)',icon:'💚',col:'#8fa870',verdict:'Technically a prepaid card, but Koho\'s credit-building add-on reports to Equifax monthly — giving you a credit file without the risk of overspending.',perks:['No credit check ever','Prepaid with instant cashback','Credit-building reports to Equifax','Real-time budgeting tools'],watch:'You need ~$7/mo for the credit-building feature.'},
  {rank:9,name:'TD Secured Visa',issuer:'TD Bank',type:'secured',tags:['secured'],fee:29,dep:'$500 min',apr:'~19.99%',check:'Minimal — deposit-backed',newcomer:false,badge:'Big Bank Option',bc:'rgba(143,168,112,.15)',bt:'var(--ol)',icon:'🟢',col:'#8fa870',verdict:'A reliable big-bank secured option. The $29 annual fee is the downside vs. no-fee alternatives, but the TD brand is solid.',perks:['Backed by one of Canada\'s largest banks','Reports to Equifax and TransUnion','Recognized and trusted','Clear upgrade path to unsecured TD card'],watch:'$29 annual fee — Neo and Home Trust offer $0 fee alternatives.'},
  {rank:10,name:'PC Financial Mastercard',issuer:'President\'s Choice Financial',type:'unsecured',tags:['unsecured','nofee'],fee:0,dep:'N/A',apr:'~21.99%',check:'Accessible for limited history',newcomer:false,badge:'Best for Groceries',bc:'rgba(212,168,67,.12)',bt:'#d4a843',icon:'🛒',col:'#d4a843',verdict:'PC Financial is known for approving applicants that traditional banks won\'t. PC Optimum points redeemable at Loblaws, No Frills, Shoppers.',perks:['No annual fee','Earns PC Optimum points','Accessible for limited credit history','Points redeemable at Loblaws, Shoppers'],watch:'APR of ~21.99% is on the higher end — never carry a balance.'},
];
var cardCat='all';
function renderCards(){
  var fEl=document.getElementById('cardFilters');
  if(!fEl.children.length){
    var cats=[['all','All'],['secured','Secured'],['unsecured','Unsecured'],['nofee','No Annual Fee'],['newcomer','Newcomer']];
    cats.forEach(function(c){
      var b=document.createElement('button');b.className='abtn'+(c[0]==='all'?' active':'');b.textContent=c[1];
      b.onclick=function(){cardCat=c[0];document.querySelectorAll('#cardFilters .abtn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');renderCards();};
      fEl.appendChild(b);
    });
  }
  var filtered=CARDS.filter(function(c){if(cardCat==='all')return true;if(cardCat==='newcomer')return c.newcomer;return c.tags.indexOf(cardCat)>-1;});
  var html='';
  filtered.forEach(function(c){
    html+='<div style="background:rgba(237,228,204,.04);border:1px solid rgba(237,228,204,.09);border-radius:12px;overflow:hidden;margin-bottom:16px">';
    html+='<div style="padding:20px 24px 0;display:grid;grid-template-columns:auto 1fr auto;gap:16px;align-items:start">';
    html+='<div style="text-align:center;min-width:44px"><div style="font-size:1.4rem;margin-bottom:4px">'+c.icon+'</div><div style="font-size:.7rem;color:rgba(237,228,204,.25)">#'+c.rank+'</div></div>';
    html+='<div><div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:5px"><span style="font-family:\'Cormorant Garamond\',serif;font-size:1.35rem;font-weight:700;color:'+c.col+'">'+c.name+'</span><span style="font-size:.65rem;font-weight:600;padding:3px 9px;border-radius:3px;background:'+c.bc+';color:'+c.bt+'">'+c.badge+'</span>';
    if(c.newcomer) html+='<span style="font-size:.65rem;font-weight:600;padding:3px 9px;border-radius:3px;background:rgba(192,57,43,.15);color:var(--ms)">Newcomer Program</span>';
    html+='</div><div style="font-size:.78rem;color:rgba(237,228,204,.35);margin-bottom:10px">'+c.issuer+' &middot; '+c.type.charAt(0).toUpperCase()+c.type.slice(1)+' Card</div>';
    html+='<p style="font-size:.83rem;color:rgba(237,228,204,.5);line-height:1.72;font-weight:300;margin-bottom:10px">'+c.verdict+'</p>';
    c.perks.forEach(function(p){html+='<div style="display:flex;align-items:flex-start;gap:8px;font-size:.79rem;color:rgba(237,228,204,.4);margin-bottom:4px"><span style="color:var(--ol);flex-shrink:0">&#10003;</span>'+p+'</div>';});
    html+='<div style="font-size:.74rem;color:rgba(237,228,204,.3);font-style:italic;padding:9px 13px;background:rgba(192,57,43,.05);border-left:2px solid rgba(192,57,43,.3);border-radius:0 5px 5px 0;margin-top:10px">Watch out: '+c.watch+'</div></div>';
    html+='<div style="display:flex;flex-direction:column;gap:10px;min-width:110px;text-align:right">';
    html+='<div><div style="font-size:.6rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(237,228,204,.25)">Annual Fee</div><div style="font-family:\'Cormorant Garamond\',serif;font-size:1.4rem;font-weight:700;color:'+(c.fee===0?'var(--ol)':'#d4a843')+'">'+(c.fee===0?'$0':'$'+c.fee)+'</div></div>';
    html+='<div><div style="font-size:.6rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(237,228,204,.25)">Interest Rate</div><div style="font-size:.82rem;color:rgba(237,228,204,.5)">'+c.apr+'</div></div>';
    html+='<div><div style="font-size:.6rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(237,228,204,.25)">Min. Deposit</div><div style="font-size:.82rem;color:rgba(237,228,204,.5)">'+c.dep+'</div></div>';
    html+='<div><div style="font-size:.6rem;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:rgba(237,228,204,.25)">Credit Check</div><div style="font-size:.74rem;color:rgba(237,228,204,.4);line-height:1.4">'+c.check+'</div></div></div></div></div>';
  });
  document.getElementById('cardGrid').innerHTML=html;

  var tEl=document.getElementById('creditTips');
  if(tEl&&!tEl.children.length){
    var tips=[
      ['💯','Always pay in full','Never carry a balance. Interest rates (19-22%+) will erase any benefit. Pay the full statement balance every month.'],
      ['📅','Pay on time, every time','Payment history is the biggest factor (~35%). Set up autopay for the minimum as a safety net.'],
      ['📊','Keep utilization under 30%','If your limit is $1,000 keep your balance under $300. High utilization hurts your score.'],
      ['🔍','Check your score for free','Borrowell and Credit Karma offer free weekly checks in Canada with no hard inquiry.'],
      ['⏳','Be patient','Building credit takes 6-12 months to show meaningful movement. Stay consistent.'],
      ['🚫','Avoid cash advances','Cash advances have no grace period and charge fees immediately.'],
    ];
    var th='';tips.forEach(function(t){th+='<div style="background:rgba(237,228,204,.04);border:1px solid rgba(237,228,204,.08);border-radius:10px;padding:18px"><div style="font-size:1.3rem;margin-bottom:8px">'+t[0]+'</div><div style="font-family:\'Cormorant Garamond\',serif;font-size:1rem;font-weight:600;color:var(--beige);margin-bottom:6px">'+t[1]+'</div><p style="font-size:.79rem;color:rgba(237,228,204,.38);line-height:1.65;font-weight:300">'+t[2]+'</p></div>';});
    tEl.innerHTML=th;
  }
}

function handleNL(e){e.preventDefault();var b=e.target.querySelector('button');b.textContent='Welcome to the family!';e.target.querySelector('input').value='';setTimeout(function(){b.textContent='Subscribe Free 🍁';},3500);}

var obs=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:.07});
document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el);});

// Setup click handlers for the 4 specific articles
document.addEventListener('DOMContentLoaded', () => {
    const dcaCards = Array.from(document.querySelectorAll('.acard h3')).filter(h => h.textContent.includes('Dollar-Cost Averaging: A Strategy That Works With Your Emotions'));
    const budgetCards = Array.from(document.querySelectorAll('.acard h3')).filter(h => h.textContent.includes('A Student Budget That Actually Leaves Room to Invest'));
    const downturnsCards = Array.from(document.querySelectorAll('.acard h3')).filter(h => h.textContent.includes('Market Downturns: What They Mean and How to Stay Calm'));
    const portfolioCards = Array.from(document.querySelectorAll('.acard h3')).filter(h => h.textContent.includes('How to Build a Simple Canadian ETF Portfolio From Scratch'));
    
    if(dcaCards.length > 0) dcaCards[0].closest('.acard').setAttribute('onclick', "openArticle('dca')");
    if(budgetCards.length > 0) budgetCards[0].closest('.acard').setAttribute('onclick', "openArticle('budget')");
    if(downturnsCards.length > 0) downturnsCards[0].closest('.acard').setAttribute('onclick', "openArticle('downturns')");
    if(portfolioCards.length > 0) portfolioCards[0].closest('.acard').setAttribute('onclick', "openArticle('portfolio')");
});

