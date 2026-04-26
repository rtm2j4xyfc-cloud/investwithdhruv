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
      'guide': {
        tag: '🇨🇦 Canada · Featured',
        title: 'The Complete Canadian Student\'s Guide to Investing in 2025',
        meta: '18 min read · By Dhruv Sharma · Alberta, Canada',
        emoji: '🇨🇦',
        heroImg: 'canadian-flag.jpg',
        content: `
      <img src="canadian-flag.jpg" alt="Canadian flag flying over the mountains" style="width:100%;border-radius:12px;margin-bottom:28px;max-height:400px;object-fit:cover;object-position:center;">
      <div class="article-callout gold-callout"><strong>📝 A Note from Dhruv</strong><p>This is the guide I wish existed when I started. Most investing content online is written for Americans. Everything here is written specifically for Canadians. Start here and you'll have a stronger foundation than most adults.</p></div>
      <h2>Why Start Investing Now?</h2>
      <p>The single most powerful force in investing is <strong>time</strong>. A 20-year-old investing $200/month at 7% ends up with <strong>$525,000 by age 65</strong>. A 30-year-old doing the same has $243,000 — less than half, starting just 10 years later.</p>
      <div class="article-callout gold-callout"><strong>💡 Key Takeaway</strong><p>Time is your biggest advantage. You have more of it right now than you ever will again.</p></div>
      <h2>Canada's Registered Accounts</h2>
      <h3>1. TFSA — Tax-Free Savings Account</h3>
      <ul>
        <li><strong>All growth is 100% tax-free</strong> — dividends, capital gains, interest.</li>
        <li><strong>Withdraw anytime</strong> for any reason, no penalties.</li>
        <li><strong>Withdrawn room is restored</strong> the following January 1st.</li>
        <li><strong>2025 annual limit: $7,000.</strong> Lifetime room: $95,000.</li>
      </ul>
      <div class="article-callout"><strong>🇨🇦 Alberta Advantage</strong><p>No provincial sales tax and a flat provincial income tax rate means more of your money compounds tax-free.</p></div>
      <h3>2. RRSP — Registered Retirement Savings Plan</h3>
      <ul>
        <li><strong>Contributions are tax-deductible</strong> — $5,000 in the 30% bracket = ~$1,500 back at tax time.</li>
        <li><strong>Growth is tax-deferred</strong> — taxed on withdrawal in retirement.</li>
        <li><strong>Limit:</strong> 18% of prior year income, max $31,560 for 2024.</li>
      </ul>
      <h3>3. FHSA — First Home Savings Account</h3>
      <ul>
        <li><strong>Tax-deductible contributions</strong> like RRSP.</li>
        <li><strong>Tax-free withdrawals</strong> for a first home like TFSA.</li>
        <li><strong>$8,000/year · $40,000 lifetime limit.</strong></li>
      </ul>
      <div class="article-callout maple-callout"><strong>🏠 Open an FHSA Now</strong><p>Even if unsure about buying a home, open one today. Room accumulates from the date you open it — waiting costs you room you can never get back.</p></div>
      <h2>What to Invest In</h2>
      <p>For most beginners: <strong>low-cost index ETFs.</strong></p>
      <ul>
        <li><strong>XEQT</strong> (iShares) — 100% global equities, 9,000+ stocks, MER 0.20%</li>
        <li><strong>VEQT</strong> (Vanguard) — 100% global equities, 13,000+ stocks, MER 0.24%</li>
      </ul>
      <div class="article-callout"><strong>💡 Dhruv's Pick</strong><p>XEQT inside a TFSA on Wealthsimple Trade. Zero commissions, automatic diversification, all growth tax-free. Set up automatic monthly contributions and don't touch it.</p></div>
      <h2>How to Start — Step by Step</h2>
      <ol>
        <li>Open a <strong>Wealthsimple</strong> account at wealthsimple.com</li>
        <li>Open a <strong>TFSA</strong> inside the app</li>
        <li>Link your bank and <strong>transfer your first contribution</strong></li>
        <li>Search for <strong>XEQT</strong> and buy as many shares as you can afford</li>
        <li>Set up <strong>automatic monthly contributions</strong> — even $50/month</li>
        <li><strong>Leave it alone</strong> and let compounding do the work</li>
      </ol>
      <div class="article-divider"></div>
      <div class="article-callout maple-callout"><strong>⚠️ Educational Purposes Only</strong><p>This article is for educational purposes only and does not constitute financial advice. Always consult a licensed financial advisor before making investment decisions.</p></div>
    `
      },
      'tfsa-rrsp': {
        tag: '🇨🇦 Canada · Accounts',
        title: 'TFSA vs RRSP vs FHSA: Which Account First?',
        meta: '9 min read · By Dhruv Sharma · Alberta, Canada',
        emoji: '💳',
        content: `
      <div class="article-callout gold-callout"><strong>📝 A Note from Dhruv</strong><p>This is one of the most common questions I get. The answer depends on your situation — but there's a clear framework that works for most Canadians. Understanding this before you open any account will save you from costly mistakes.</p></div>
      <h2>The Three Accounts</h2>
      <h3>TFSA</h3>
      <ul>
        <li>Contributions: <strong>Not tax-deductible</strong></li>
        <li>Growth: <strong>100% tax-free</strong></li>
        <li>Withdrawals: <strong>Anytime, tax-free, any reason</strong></li>
        <li>2025 Limit: <strong>$7,000/year</strong></li>
      </ul>
      <h3>RRSP</h3>
      <ul>
        <li>Contributions: <strong>Tax-deductible</strong></li>
        <li>Growth: <strong>Tax-deferred</strong></li>
        <li>Withdrawals: <strong>Taxed as income</strong></li>
        <li>2024 Limit: <strong>18% of income, max $31,560</strong></li>
      </ul>
      <h3>FHSA</h3>
      <ul>
        <li>Contributions: <strong>Tax-deductible</strong> like RRSP</li>
        <li>Growth: <strong>Tax-free</strong> like TFSA</li>
        <li>Withdrawals: <strong>Tax-free for first home</strong></li>
        <li>Limit: <strong>$8,000/year · $40,000 lifetime</strong></li>
      </ul>
      <div class="article-callout gold-callout"><strong>🏆 FHSA = Best of Both Worlds</strong><p>RRSP-style deduction plus TFSA-style tax-free withdrawal. If there's any chance you'll buy a home, open one immediately.</p></div>
      <h2>Which Account First?</h2>
      <h3>Saving for a home?</h3><p><strong>FHSA → TFSA → RRSP</strong></p>
      <h3>Student or under $50K?</h3><p><strong>TFSA → FHSA → RRSP later.</strong> The RRSP deduction isn't valuable at low income — save that room for higher earning years.</p>
      <h3>Over $80K income?</h3><p><strong>FHSA → RRSP → TFSA.</strong> The RRSP deduction is very powerful at higher brackets.</p>
      <div class="article-callout"><strong>💡 Flexibility Wins</strong><p>The TFSA lets you withdraw anytime without consequences. For most students and young Canadians this makes the TFSA the clear first choice.</p></div>
      <h2>Quick Reference</h2>
      <ul>
        <li>🏠 <strong>Buying a home someday?</strong> → FHSA first, always.</li>
        <li>💳 <strong>Under $60K income?</strong> → TFSA first.</li>
        <li>📈 <strong>Over $80K income?</strong> → RRSP first.</li>
        <li>🎓 <strong>Student?</strong> → TFSA. Build the habit.</li>
        <li>🤷 <strong>Not sure?</strong> → TFSA. Most flexible account Canada offers.</li>
      </ul>
      <div class="article-divider"></div>
      <div class="article-callout maple-callout"><strong>⚠️ Educational Purposes Only</strong><p>This article is for educational purposes only. Tax rules can change. Always consult a licensed financial advisor for advice specific to your situation.</p></div>
    `
      },
      'brokers': {
        tag: '🇨🇦 Canada · Platforms',
        title: 'Canadian Brokers Explained: Questrade, Wealthsimple & Beyond',
        meta: '10 min read · By Dhruv Sharma · Alberta, Canada',
        emoji: '🏦',
        content: `
      <div class="article-callout gold-callout"><strong>📝 A Note from Dhruv</strong><p>I started on Wealthsimple and still use it today. Pick one platform and start — don't let research become a reason to delay.</p></div>
      <h2>Wealthsimple Trade</h2>
      <ul>
        <li><strong>Commissions:</strong> $0 for Canadian and US stocks and ETFs</li>
        <li><strong>Accounts:</strong> TFSA, RRSP, FHSA, Personal</li>
        <li><strong>Currency conversion:</strong> 1.5% fee for US-listed securities</li>
        <li><strong>Minimum:</strong> None</li>
        <li><strong>Best for:</strong> Beginners, students, ETF investors</li>
      </ul>
      <div class="article-callout"><strong>💡 Dhruv's Take</strong><p>For most Canadians buying CAD-listed ETFs like XEQT or VEQT, Wealthsimple is the clear choice. Zero commissions, clean app, registered accounts built in.</p></div>
      <h2>Questrade</h2>
      <ul>
        <li><strong>ETF purchases:</strong> Free</li>
        <li><strong>ETF/stock sales:</strong> $4.95–$9.95 per trade</li>
        <li><strong>Accounts:</strong> TFSA, RRSP, FHSA, RESP, Personal, Corporate</li>
        <li><strong>Minimum:</strong> $1,000 to open</li>
        <li><strong>Best for:</strong> Intermediate investors, larger portfolios, RESP accounts</li>
      </ul>
      <div class="article-callout gold-callout"><strong>💡 When Questrade Makes Sense</strong><p>If you're regularly buying ETFs and rarely sell, free purchases are excellent. Also supports RESPs — great for parents investing for children's education.</p></div>
      <h2>Other Options</h2>
      <h3>National Bank Direct Brokerage</h3>
      <p>Completely commission-free for all stocks and ETFs including US-listed. Less polished but the zero-fee structure is hard to beat.</p>
      <h3>Big Bank Brokerages (TD, RBC, BMO)</h3>
      <p>Reliable but $9.95/trade. Hard to justify when free options exist.</p>
      <h3>Interactive Brokers</h3>
      <p>Very low fees, global access, advanced tools. Complex — best for experienced investors with larger portfolios.</p>
      <h2>Head to Head</h2>
      <ul>
        <li>🏆 <strong>Easiest to use:</strong> Wealthsimple</li>
        <li>🏆 <strong>Best for beginners:</strong> Wealthsimple</li>
        <li>🏆 <strong>Most account types:</strong> Questrade</li>
        <li>🏆 <strong>Best overall for most Canadians:</strong> Wealthsimple</li>
      </ul>
      <div class="article-callout"><strong>🎯 Bottom Line</strong><p>Start with Wealthsimple. Open a TFSA. Buy XEQT. Set automatic contributions. Move to Questrade when your portfolio grows. Don't let platform research delay you from starting.</p></div>
      <div class="article-divider"></div>
      <div class="article-callout maple-callout"><strong>⚠️ Educational Purposes Only</strong><p>Platform features and fees change — always verify with the provider directly. This is not financial advice.</p></div>
    `
      },
      'fifty': {
        tag: 'Basics',
        title: 'How to Start Investing With Just $50',
        meta: '5 min read · By Dhruv Sharma · Alberta, Canada',
        emoji: '💵',
        content: `
      <div class="article-callout gold-callout"><strong>📝 A Note from Dhruv</strong><p>When I first looked into investing, I assumed you needed thousands of dollars to get started. That assumption kept me on the sidelines longer than it should have. The truth is, the amount doesn't matter nearly as much as the habit. This article is for anyone who thinks they don't have "enough" to start — you do.</p></div>

      <h2>The Myth of the Minimum</h2>
      <p>The most common reason Canadians delay investing is believing they don't have enough money to begin. This is one of the most expensive myths in personal finance.</p>
      <p>With today's commission-free platforms like Wealthsimple Trade, you can open a TFSA and buy your first ETF with as little as the cost of one share — sometimes under $30. There is no meaningful financial barrier to starting anymore.</p>

      <h2>Why $50 Right Now Beats $500 Later</h2>
      <p>Consider two people. The first invests $50/month starting at age 20. The second waits until they have "enough" and starts at 25 with $200/month. At age 60, assuming 7% annual returns, the person who started at 20 with $50/month ends up with <strong>more money</strong> — despite contributing far less in total.</p>
      <p>That's compound growth. The earlier you start, the more time your money has to multiply — and time cannot be bought back.</p>
      <div class="article-callout"><strong>💡 The Real Goal of Starting Small</strong><p>Starting with $50 isn't really about $50. It's about building the habit, understanding the platform, experiencing your first market fluctuation without panic, and proving to yourself that you are an investor. That identity shift is worth more than any single dollar amount.</p></div>

      <h2>Step-by-Step: Your First $50 Investment</h2>
      <h3>Step 1 — Open Wealthsimple Trade (Free)</h3>
      <p>Go to wealthsimple.com and sign up. The whole process takes about 10 minutes. You'll need your SIN number and a photo ID.</p>

      <h3>Step 2 — Open a TFSA Inside the App</h3>
      <p>Once your account is verified, open a Tax-Free Savings Account. All growth inside a TFSA is 100% tax-free — dividends, capital gains, everything. It's the ideal account for a first investment.</p>

      <h3>Step 3 — Link Your Bank and Transfer $50</h3>
      <p>Connect your chequing account and initiate a transfer. It typically takes 1–3 business days to arrive.</p>

      <h3>Step 4 — Buy XEQT or VEQT</h3>
      <p>Search for <strong>XEQT</strong> (iShares) or <strong>VEQT</strong> (Vanguard) in the search bar. Both are all-in-one global equity ETFs that hold thousands of stocks in a single purchase. Buy as many shares as your $50 allows — typically 1–2 shares. That's it. You're invested.</p>

      <h3>Step 5 — Set Up Automatic Monthly Contributions</h3>
      <p>The most powerful thing you can do after your first purchase is automate it. Set a recurring transfer of even $25–$50/month. Remove the decision entirely. Let it run in the background while you live your life.</p>

      <h2>What Happens to Your $50?</h2>
      <p>Your $50 buys fractional ownership of thousands of companies around the world — Apple, Royal Bank, Toyota, Samsung, Nestlé, and thousands more. When those companies grow and earn profits, your investment grows too. You don't need to monitor it daily. You just need to leave it alone.</p>

      <div class="article-callout maple-callout"><strong>🇨🇦 Canadian Advantage</strong><p>Because your investment is inside a TFSA, every dollar of growth — whether it's $5 or $50,000 — is completely tax-free when you withdraw it. No capital gains tax. No income tax. The government gets nothing. That's a genuinely powerful advantage that most Canadians underuse.</p></div>

      <h2>Common Questions</h2>
      <h3>What if the market drops right after I invest?</h3>
      <p>It might. Markets fluctuate — that's normal. A drop is only a loss if you sell. If you stay invested and keep contributing, a dip actually means you're buying more shares at a lower price. Long-term investors welcome downturns as buying opportunities.</p>

      <h3>Should I wait until I have more money?</h3>
      <p>No. Start now with whatever you have. Increase contributions as your income grows. The habit and the time in the market matter far more than the starting amount.</p>

      <div class="article-divider"></div>
      <div class="article-callout maple-callout"><strong>⚠️ Educational Purposes Only</strong><p>This article is for educational purposes only and does not constitute financial advice. Investing involves risk, including the possible loss of principal. Always do your own research or consult a licensed financial advisor before making investment decisions.</p></div>
    `
      },

      'etf-basics': {
        tag: 'Stocks & ETFs',
        title: 'What Is an ETF and Why Do Canadian Investors Love Them?',
        meta: '7 min read · By Dhruv Sharma · Alberta, Canada',
        emoji: '📈',
        content: `
      <div class="article-callout gold-callout"><strong>📝 A Note from Dhruv</strong><p>ETFs were the concept that changed how I thought about investing entirely. Before I understood them, I thought investing meant picking individual stocks and hoping they went up. ETFs showed me there was a simpler, more reliable, lower-cost path — one backed by decades of evidence. I wish someone had explained this to me at 18.</p></div>

      <h2>What Exactly Is an ETF?</h2>
      <p>An ETF — Exchange-Traded Fund — is a basket of investments that you can buy and sell on a stock exchange like a single stock. Instead of buying shares in one company, you're buying a tiny piece of hundreds or thousands of companies at once.</p>
      <p>Think of it like this: instead of betting on one horse, you're betting on the entire race. Some horses will fall. Some will surge ahead. But over time, the race — the broad market — has always moved upward.</p>

      <h2>How Does an ETF Work?</h2>
      <p>An ETF provider like iShares (BlackRock), Vanguard, or BMO creates a fund that tracks an index — like the S&P/TSX Composite (Canada's stock market) or the S&P 500 (US's top 500 companies). They buy all the stocks in that index and divide the fund into shares that anyone can purchase.</p>
      <p>When you buy one share of <strong>XEQT</strong>, for example, you immediately own a proportional slice of over 9,000 companies across Canada, the US, Europe, Asia, and emerging markets — all for a single purchase price of roughly $30–35.</p>

      <div class="article-callout"><strong>💡 Index vs Active</strong><p>Most ETFs are "passive" — they simply track an index without a manager trying to pick winners. Research consistently shows that over 10+ year periods, passive index funds outperform the majority of actively managed funds after fees. This is why ETFs have become the cornerstone of modern investing.</p></div>

      <h2>Why Do Canadian Investors Love ETFs?</h2>

      <h3>1. Instant Diversification</h3>
      <p>Buying one share of XEQT or VEQT gives you exposure to thousands of companies worldwide. Diversification is the closest thing to a free lunch in investing — it reduces risk without necessarily reducing returns.</p>

      <h3>2. Ultra-Low Costs</h3>
      <p>ETFs charge a Management Expense Ratio (MER) — the annual fee for running the fund. The best Canadian ETFs charge as little as <strong>0.06% per year</strong>. A $10,000 investment costs you $6 per year. Compare that to traditional mutual funds sold at Canadian banks, which often charge 1.5–2.5% — that's $150–$250 per year on the same $10,000, compounding against you every single year.</p>

      <h3>3. Tax Efficiency Inside Registered Accounts</h3>
      <p>Hold ETFs inside a TFSA and all growth — dividends and capital gains — is completely tax-free. Hold them in an RRSP and all growth is tax-deferred. ETFs are designed to be tax-efficient even in non-registered accounts due to low turnover.</p>

      <h3>4. Simplicity</h3>
      <p>You don't need to research individual companies, read quarterly earnings reports, or follow financial news. You just buy the market and hold it. One-fund ETFs like XEQT or VEQT mean you don't even need to rebalance — the fund does it automatically.</p>

      <h2>The Most Popular Canadian ETFs</h2>
      <ul>
        <li><strong>XEQT</strong> — iShares All-Equity ETF. Global stocks, 9,000+ holdings, MER 0.20%. Best one-fund solution for growth investors.</li>
        <li><strong>VEQT</strong> — Vanguard All-Equity ETF. Similar to XEQT, slightly higher Canadian allocation, MER 0.24%.</li>
        <li><strong>ZCN / XIC</strong> — Canadian market only. Tracks the TSX. Ultra-low MER of 0.06%. Best for pure Canadian exposure.</li>
        <li><strong>VFV / ZSP</strong> — S&P 500 ETFs in CAD. US market exposure without currency conversion fees.</li>
        <li><strong>XBAL / VBAL</strong> — Balanced 60/40 ETFs. 60% stocks, 40% bonds. Good for moderate risk tolerance.</li>
      </ul>

      <h2>ETF vs Mutual Fund vs Stock — Which Is Right for You?</h2>
      <ul>
        <li><strong>ETF</strong> — Low cost, diversified, passive, great for most investors. Start here.</li>
        <li><strong>Mutual Fund</strong> — Higher cost, often actively managed, sold through banks. Generally not recommended when low-cost ETFs exist.</li>
        <li><strong>Individual Stock</strong> — Higher risk, requires research, can outperform or underperform significantly. For investors with more knowledge and time.</li>
      </ul>

      <div class="article-callout maple-callout"><strong>🇨🇦 Dhruv's Recommendation for Canadians</strong><p>For most Canadians — especially beginners — a single all-equity ETF like XEQT or VEQT inside a TFSA is all you need to start. It's not exciting. It's not glamorous. But it is evidence-based, low-cost, and genuinely effective over the long term. Start simple, stay consistent, and let compounding do the work.</p></div>

      <div class="article-divider"></div>
      <div class="article-callout maple-callout"><strong>⚠️ Educational Purposes Only</strong><p>This article is for educational purposes only and does not constitute financial advice. ETF prices fluctuate and past performance does not guarantee future results. Always consult a licensed financial advisor before making investment decisions.</p></div>
    `
      },

      'dca': {
        tag: 'Strategy',
        title: 'Dollar-Cost Averaging: A Strategy That Works With Your Emotions',
        meta: '6 min read · By Dhruv Sharma · Alberta, Canada',
        emoji: '🔁',
        content: `
      <div class="article-callout gold-callout"><strong>📝 A Note from Dhruv</strong><p>Dollar-cost averaging is the strategy that kept me investing through every market dip, every scary headline, and every moment of doubt. It removes the most dangerous variable in investing: your emotions. This is the strategy I personally use and recommend to every beginner.</p></div>

      <h2>What Is Dollar-Cost Averaging?</h2>
      <p>Dollar-cost averaging (DCA) is the practice of investing a <strong>fixed amount of money at regular intervals</strong> — regardless of what the market is doing. Instead of trying to time the perfect moment to invest, you invest the same amount every week, every two weeks, or every month, no matter what.</p>
      <p>For example: you invest $200 on the 1st of every month into XEQT inside your TFSA. Some months, the price is high and you buy fewer shares. Some months, the price is low and you buy more shares. Over time, your average cost per share smooths out — and you never have to guess when the "right" time is.</p>

      <div class="article-callout"><strong>💡 Why It Works</strong><p>DCA works because it removes the emotional decision-making from investing. You don't need to watch the market. You don't need to predict crashes. You just contribute consistently and let time do the heavy lifting.</p></div>

      <h2>The Problem With Timing the Market</h2>
      <p>Every investor is tempted to wait for the "perfect" moment. The market drops 5% and you think: "It'll drop more — I'll wait." Then it rebounds, and you missed the bottom. Or the market hits all-time highs and you think: "It's too expensive — I'll wait for a dip." Then it keeps climbing.</p>
      <p>Study after study shows that <strong>even professional fund managers can't consistently time the market</strong>. If the best in the world can't do it, we certainly shouldn't try. DCA sidesteps this problem entirely.</p>

      <h2>A Real-World Example</h2>
      <p>Let's say you have $6,000 to invest this year. You have two options:</p>
      <h3>Option A — Lump Sum</h3>
      <p>Invest all $6,000 at once in January. If the market drops 20% in February, your portfolio is immediately worth $4,800. Psychologically, this is devastating — and many people sell at that point, locking in real losses.</p>
      <h3>Option B — Dollar-Cost Averaging</h3>
      <p>Invest $500/month for 12 months. When the market drops in February, your $500 buys more shares at a lower price. When the market recovers, those cheaper shares are now worth more. Your average cost ends up lower, and you never experienced the panic of watching $6,000 drop by $1,200 overnight.</p>

      <div class="article-callout gold-callout"><strong>📊 The Data</strong><p>Historically, lump-sum investing outperforms DCA about two-thirds of the time because markets tend to go up. But DCA outperforms in the metric that matters most for beginners: <strong>it keeps you in the game</strong>. The best strategy is the one you can actually stick with.</p></div>

      <h2>How to Set Up DCA in Canada</h2>
      <ol>
        <li>Open a <strong>TFSA</strong> on Wealthsimple Trade (or your preferred broker)</li>
        <li>Set up <strong>automatic deposits</strong> — choose a fixed amount and frequency (e.g., $100 biweekly on payday)</li>
        <li>Enable <strong>auto-buy</strong> if your platform supports it, or manually purchase XEQT/VEQT each time your deposit arrives</li>
        <li><strong>Don't check your portfolio daily</strong> — set it and forget it</li>
      </ol>

      <div class="article-callout maple-callout"><strong>🇨🇦 Canadian Tip</strong><p>Wealthsimple Trade supports automatic deposits and even automatic recurring buys for certain ETFs. Align your investment contributions with your payday so you invest before you have a chance to spend it.</p></div>

      <h2>When DCA Feels Hard</h2>
      <p>There will be months where the market is crashing and every instinct tells you to stop contributing. <strong>Those are the most important months to keep going.</strong> When the market drops, your fixed contribution is buying more shares at lower prices. That's DCA working exactly as designed.</p>
      <p>There will also be months where the market is soaring and you'll wonder if you should invest more. Resist the urge. Consistency beats impulse every time.</p>

      <h2>DCA vs Lump Sum — When to Use Each</h2>
      <ul>
        <li>💰 <strong>Received a windfall (inheritance, bonus)?</strong> — Research suggests lump-sum investing is statistically optimal, but if the amount is large enough to cause anxiety, DCA over 3–6 months is perfectly reasonable.</li>
        <li>💵 <strong>Investing from regular income?</strong> — DCA is natural and automatic. You're already doing it.</li>
        <li>😰 <strong>Nervous about investing?</strong> — DCA is the best way to start. It removes the pressure of making one big decision.</li>
      </ul>

      <div class="article-callout"><strong>🎯 Bottom Line</strong><p>Dollar-cost averaging isn't about maximizing every single dollar. It's about building a system that works even when you're scared, busy, or distracted. Automate your contributions, invest consistently, and let compounding handle the rest. That's the strategy — simple, boring, and incredibly effective.</p></div>

      <div class="article-divider"></div>
      <div class="article-callout maple-callout"><strong>⚠️ Educational Purposes Only</strong><p>This article is for educational purposes only and does not constitute financial advice. Investing involves risk, including the possible loss of principal. Past performance does not guarantee future results. Always consult a licensed financial advisor before making investment decisions.</p></div>
    `
      },

      'student-budget': {
        tag: 'Budgeting',
        title: 'A Student Budget That Actually Leaves Room to Invest',
        meta: '8 min read · By Dhruv Sharma · Alberta, Canada',
        emoji: '🧮',
        content: `
      <div class="article-callout gold-callout"><strong>📝 A Note from Dhruv</strong><p>When I was in university, I assumed investing was something I'd start "after I graduated and had a real salary." That was a mistake. The truth is, learning to budget as a student — even imperfectly — and putting even $25/month into a TFSA builds a foundation that pays off for decades. This article is the system I wish I had from day one.</p></div>

      <h2>Why Budget as a Student?</h2>
      <p>Most students don't think about budgeting. Money comes in from part-time jobs, student loans, or parents — and it leaves just as quickly. But here's the truth: <strong>the habits you build now will follow you for the rest of your life.</strong></p>
      <p>A budget isn't about restriction. It's about <strong>awareness</strong>. When you know where your money goes, you can make intentional decisions — including the decision to invest, even in small amounts.</p>

      <h2>The 50/30/20 Rule (Modified for Students)</h2>
      <p>The classic 50/30/20 rule says to allocate your after-tax income as:</p>
      <ul>
        <li><strong>50% — Needs:</strong> Rent, groceries, utilities, transportation, phone, insurance</li>
        <li><strong>30% — Wants:</strong> Eating out, entertainment, subscriptions, clothing</li>
        <li><strong>20% — Savings & Investing:</strong> TFSA contributions, emergency fund, debt repayment</li>
      </ul>
      <p>For students, these percentages often need adjusting. Rent alone can eat 40–60% of income. That's okay — <strong>the exact numbers matter less than the framework</strong>. Even a 60/30/10 split still leaves room to invest.</p>

      <div class="article-callout"><strong>💡 The Power of 10%</strong><p>If your monthly income is $1,500 (from a part-time job or combination of sources), 10% is $150/month. Invested in XEQT inside a TFSA at 7% average return, that $150/month becomes <strong>over $44,000 in 15 years</strong> — and it's all tax-free. Small numbers become big numbers with time.</p></div>

      <h2>Step 1: Know Your Income</h2>
      <p>Add up everything that comes in each month:</p>
      <ul>
        <li>Part-time or freelance work</li>
        <li>Scholarships and bursaries (if regularly received)</li>
        <li>Student loan disbursements</li>
        <li>Family support</li>
        <li>Side income (tutoring, reselling, gig work)</li>
      </ul>
      <p>Be honest. Use actual numbers, not hopeful ones.</p>

      <h2>Step 2: Track Your Spending for One Month</h2>
      <p>Before creating a budget, track where your money actually goes for 30 days. Use a simple notes app, a spreadsheet, or a free app like Mint or YNAB. Most people are surprised by how much they spend on small, recurring purchases.</p>

      <div class="article-callout gold-callout"><strong>☕ The Latte Factor Is Real</strong><p>A $5 coffee every weekday = $100/month = $1,200/year. I'm not saying never buy coffee. I'm saying know the cost and make it a choice, not a habit you're unaware of.</p></div>

      <h2>Step 3: Build Your Budget</h2>
      <h3>Fixed Costs (these rarely change)</h3>
      <ul>
        <li>Rent</li>
        <li>Phone bill</li>
        <li>Insurance</li>
        <li>Subscriptions (Spotify, Netflix, gym)</li>
        <li>Transportation pass</li>
      </ul>
      <h3>Variable Costs (these you can control)</h3>
      <ul>
        <li>Groceries</li>
        <li>Eating out</li>
        <li>Entertainment</li>
        <li>Clothing</li>
        <li>Personal care</li>
      </ul>
      <h3>Savings & Investing</h3>
      <ul>
        <li>Emergency fund (aim for $1,000 to start)</li>
        <li>TFSA contributions (even $25–$50/month)</li>
        <li>Debt repayment (if applicable)</li>
      </ul>

      <h2>Step 4: Automate Your Investing First</h2>
      <p>This is the most important step. <strong>Pay yourself first.</strong> On the day you receive income, have an automatic transfer set up to move money into your TFSA before you can spend it. If you wait until the end of the month to invest "whatever's left," there will never be anything left.</p>

      <div class="article-callout maple-callout"><strong>🇨🇦 Canadian Student Hack</strong><p>Many Canadian universities have co-op or internship programs that pay well. If you land a co-op term earning $3,000–$5,000/month, use that higher income to max out TFSA contributions. The room doesn't expire — you can carry it forward and use the tax-free growth for decades.</p></div>

      <h2>Step 5: Cut Smart, Not Painful</h2>
      <p>You don't need to live like a monk. Focus on the big wins:</p>
      <ul>
        <li>🏠 <strong>Housing:</strong> Get a roommate. The difference between a $1,200 solo apartment and a $700 shared one is $6,000/year — that's nearly a full year of TFSA contributions.</li>
        <li>🍽️ <strong>Food:</strong> Cook more, meal prep on Sundays. A grocery bill of $250/month is very doable as a student. Eating out daily can easily cost $500+.</li>
        <li>📱 <strong>Subscriptions:</strong> Audit your recurring charges. Cancel anything you haven't used in the last 30 days.</li>
        <li>📚 <strong>Textbooks:</strong> Buy used, rent, or use the library. Never pay full price for a textbook.</li>
      </ul>

      <h2>A Sample Student Budget</h2>
      <p>Here's what a realistic monthly budget might look like for a Canadian student earning $1,800/month from part-time work:</p>
      <ul>
        <li><strong>Rent:</strong> $700 (shared accommodation)</li>
        <li><strong>Groceries:</strong> $250</li>
        <li><strong>Phone:</strong> $45</li>
        <li><strong>Transportation:</strong> $100 (transit pass)</li>
        <li><strong>Subscriptions:</strong> $30</li>
        <li><strong>Eating out / entertainment:</strong> $200</li>
        <li><strong>Personal / misc:</strong> $75</li>
        <li><strong>Emergency fund:</strong> $100</li>
        <li><strong>TFSA (investing):</strong> $200</li>
        <li><strong>Buffer:</strong> $100</li>
      </ul>
      <p>Total: $1,800. Every dollar has a job. And $200/month is going directly into your future.</p>

      <div class="article-callout"><strong>🎯 Bottom Line</strong><p>You don't need to be perfect. You need a system. Track your money, automate your investing, and be intentional with the rest. A student who invests $150/month consistently will retire richer than an adult who earns three times more but never develops the habit. Start now — even imperfectly.</p></div>

      <div class="article-divider"></div>
      <div class="article-callout maple-callout"><strong>⚠️ Educational Purposes Only</strong><p>This article is for educational purposes only and does not constitute financial advice. Individual financial situations vary. Always consult a licensed financial advisor for advice specific to your circumstances.</p></div>
    `
      },

      'market-downturns': {
        tag: 'Basics',
        title: 'Market Downturns: What They Mean and How to Stay Calm',
        meta: '6 min read · By Dhruv Sharma · Alberta, Canada',
        emoji: '📉',
        content: `
      <div class="article-callout gold-callout"><strong>📝 A Note from Dhruv</strong><p>The first time I saw my portfolio drop by $500 in a single day, I panicked. My instinct was to sell everything and "wait until things calmed down." If I had, I would have locked in a loss and missed the recovery. Market downturns are the true test of an investor — not because they're dangerous, but because our emotions make them feel dangerous. This article is about understanding what's really happening when markets drop.</p></div>

      <h2>What Is a Market Downturn?</h2>
      <p>A market downturn is any significant decline in stock prices over a period of time. There are a few types:</p>
      <ul>
        <li><strong>Pullback (5–10% decline):</strong> Extremely common. Happens roughly 3 times per year on average. Usually lasts weeks.</li>
        <li><strong>Correction (10–20% decline):</strong> Happens roughly once every 1–2 years. Can last a few months.</li>
        <li><strong>Bear Market (20%+ decline):</strong> Less frequent but inevitable. Major ones have occurred in 2000, 2008, 2020, and 2022.</li>
      </ul>
      <p>Every single one of these in history — every single one — was eventually followed by a recovery to new highs. The market has <strong>always</strong> recovered. The question is never "will it recover?" but "how long will it take?"</p>

      <div class="article-callout"><strong>💡 Historical Perspective</strong><p>The S&P 500 has returned an average of roughly 10% per year over the last 100 years. That average includes two World Wars, the Great Depression, the dot-com crash, the 2008 financial crisis, and a global pandemic. Downturns are part of the journey, not a deviation from it.</p></div>

      <h2>Why Do Markets Drop?</h2>
      <p>Markets decline for many reasons — economic slowdowns, rising interest rates, geopolitical events, pandemics, or simply because prices got ahead of fundamentals. Sometimes the reason is clear. Sometimes it's not.</p>
      <p>What matters is understanding that <strong>volatility is the price of admission</strong> for long-term returns. You cannot earn 7–10% annually without accepting that some years will be negative. The premium you earn as a stock investor exists precisely because not everyone can tolerate the ride.</p>

      <h2>The Biggest Mistake: Selling During a Downturn</h2>
      <p>When the market drops, your instinct screams: <strong>"Sell now before it gets worse!"</strong> This is the worst thing you can do. Here's why:</p>
      <ul>
        <li>A <strong>unrealized loss</strong> is a number on a screen. It only becomes a real loss when you sell.</li>
        <li>If you sell at the bottom, you <strong>lock in the loss permanently</strong>.</li>
        <li>Missing just the <strong>10 best trading days</strong> over a 20-year period can cut your total returns in half. Most of those best days occur during or immediately after the worst days.</li>
      </ul>

      <div class="article-callout gold-callout"><strong>📊 The Cost of Panic</strong><p>An investor who put $10,000 into the S&P 500 in 2003 and stayed invested through 2023 would have roughly $64,000. The same investor who missed just the 10 best days (by panic-selling and re-entering late) would have only $29,000. Staying invested isn't just preferable — it's critical.</p></div>

      <h2>What to Do During a Downturn</h2>
      <h3>1. Do Nothing</h3>
      <p>Seriously. The most powerful thing you can do during a market decline is absolutely nothing. Keep your automatic contributions running. Don't check your portfolio obsessively. The market doesn't need your intervention.</p>

      <h3>2. Keep Investing (Dollar-Cost Averaging)</h3>
      <p>If you're contributing regularly through dollar-cost averaging, a downturn is actually <strong>beneficial</strong>. Your fixed contribution buys more shares at lower prices. When the market recovers, those shares are worth more than what you paid. You're buying stocks on sale.</p>

      <h3>3. Turn Off the Noise</h3>
      <p>Financial news is designed to generate clicks and views. Scary headlines sell. "Markets crash!" gets more engagement than "Markets do exactly what they've always done." Limit your consumption of financial news during volatile periods.</p>

      <h3>4. Remember Your Time Horizon</h3>
      <p>If you're investing in your 20s for retirement decades away, a market decline today is completely irrelevant to your outcome. You won't need this money for 30+ years. Daily and monthly fluctuations are noise.</p>

      <div class="article-callout maple-callout"><strong>🇨🇦 Canadian Advantage</strong><p>If your investments are inside a TFSA, you're even more protected during downturns. Why? Because when the market recovers and your investments grow beyond their previous highs, all of that recovery growth is tax-free. A downturn inside a TFSA is a tax-free buying opportunity.</p></div>

      <h2>How Long Do Downturns Last?</h2>
      <ul>
        <li>📉 <strong>2020 COVID crash:</strong> Market fell ~34% in 23 trading days. Fully recovered in about 5 months.</li>
        <li>📉 <strong>2008 Financial Crisis:</strong> Market fell ~57% over 17 months. Fully recovered in about 4 years.</li>
        <li>📉 <strong>2000 Dot-Com Crash:</strong> Market fell ~49% over 2.5 years. Fully recovered in about 7 years.</li>
      </ul>
      <p>Even the worst crash in modern history — 2008 — fully recovered. Investors who stayed the course and kept contributing came out ahead.</p>

      <h2>Building Your Emotional Resilience</h2>
      <ul>
        <li>✅ <strong>Automate everything.</strong> If your contributions are automatic, you don't have to make a decision during a downturn.</li>
        <li>✅ <strong>Only invest money you won't need for 5+ years.</strong> Short-term money belongs in a HISA, not the stock market.</li>
        <li>✅ <strong>Have an emergency fund.</strong> Knowing you have 3–6 months of expenses in cash prevents panic-selling investments to cover bills.</li>
        <li>✅ <strong>Write down your investment plan.</strong> "I invest $200/month into XEQT inside my TFSA regardless of market conditions." Read it when you feel scared.</li>
      </ul>

      <div class="article-callout"><strong>🎯 Bottom Line</strong><p>Market downturns are not emergencies. They are normal, expected, and temporary. The investors who build real wealth are not the ones who avoid downturns — nobody can. They are the ones who stay invested through them. Be boring. Be consistent. Be patient. Time and compounding will do the rest.</p></div>

      <div class="article-divider"></div>
      <div class="article-callout maple-callout"><strong>⚠️ Educational Purposes Only</strong><p>This article is for educational purposes only and does not constitute financial advice. Markets involve risk, including the possible loss of principal. Past performance does not guarantee future results. Always consult a licensed financial advisor before making investment decisions.</p></div>
    `
      },

      'etf-portfolio': {
        tag: '🇨🇦 Canada · Strategy',
        title: 'How to Build a Simple Canadian ETF Portfolio From Scratch',
        meta: '12 min read · By Dhruv Sharma · Alberta, Canada',
        emoji: '🌿',
        content: `
      <div class="article-callout gold-callout"><strong>📝 A Note from Dhruv</strong><p>This is the exact process I followed to build my own portfolio — and it's what I recommend to anyone who wants a simple, low-cost, evidence-based approach to investing in Canada. No stock-picking. No market timing. Just a straightforward three-fund portfolio inside a TFSA that grows quietly in the background. If you follow this guide, you'll have a better portfolio than most Canadians — including many who pay financial advisors thousands of dollars a year.</p></div>

      <h2>The Philosophy: Keep It Simple</h2>
      <p>The best portfolio isn't the most complex one — it's the one you understand and can stick with. A simple three-fund portfolio gives you:</p>
      <ul>
        <li><strong>Global diversification</strong> across thousands of companies</li>
        <li><strong>Ultra-low fees</strong> (MERs under 0.25%)</li>
        <li><strong>Automatic rebalancing</strong> (if using all-in-one ETFs)</li>
        <li><strong>Tax-free growth</strong> inside a TFSA</li>
      </ul>
      <p>You do not need 15 different funds. You do not need to watch CNBC. You need a clear plan and the discipline to follow it.</p>

      <h2>Option 1: The One-Fund Portfolio (Easiest)</h2>
      <p>If you want the absolute simplest approach, buy a <strong>single all-in-one ETF</strong> and never think about rebalancing again.</p>
      <h3>For 100% Equity (Aggressive Growth)</h3>
      <ul>
        <li><strong>XEQT</strong> (iShares) — 9,000+ stocks globally, MER 0.20%</li>
        <li><strong>VEQT</strong> (Vanguard) — 13,000+ stocks globally, MER 0.24%</li>
      </ul>
      <h3>For 80/20 (Growth with Some Stability)</h3>
      <ul>
        <li><strong>XGRO</strong> (iShares) — 80% stocks, 20% bonds, MER 0.20%</li>
        <li><strong>VGRO</strong> (Vanguard) — 80% stocks, 20% bonds, MER 0.24%</li>
      </ul>
      <h3>For 60/40 (Balanced)</h3>
      <ul>
        <li><strong>XBAL</strong> (iShares) — 60% stocks, 40% bonds, MER 0.20%</li>
        <li><strong>VBAL</strong> (Vanguard) — 60% stocks, 40% bonds, MER 0.24%</li>
      </ul>

      <div class="article-callout"><strong>💡 Which Risk Level?</strong><p>If you're in your 20s and won't need the money for 20+ years, XEQT or VEQT is the clear choice. You have decades to ride out volatility. Bonds reduce short-term risk but also reduce long-term returns. Choose based on your time horizon, not your feelings today.</p></div>

      <h2>Option 2: The Three-Fund Portfolio (More Control)</h2>
      <p>If you want slightly more control over your allocation, you can build a portfolio with three separate ETFs:</p>
      <ul>
        <li><strong>Canadian Stocks (25%):</strong> XIC or ZCN — tracks the S&P/TSX Composite. MER ~0.06%.</li>
        <li><strong>US Stocks (45%):</strong> VFV or ZSP — tracks the S&P 500 in CAD. MER ~0.09%.</li>
        <li><strong>International Stocks (30%):</strong> XEF or VIU — tracks developed international markets. MER ~0.22%.</li>
      </ul>
      <p>This gives you full global coverage with slightly lower overall fees than an all-in-one fund, but you'll need to <strong>rebalance periodically</strong> (every 6–12 months) to maintain your target allocation.</p>

      <div class="article-callout gold-callout"><strong>🎯 Dhruv's Preference</strong><p>I personally use the one-fund approach (XEQT) for my TFSA. The convenience of zero rebalancing and automatic diversification is worth the marginally higher MER. For portfolios under $100,000, simplicity wins.</p></div>

      <h2>Step-by-Step: Building Your Portfolio</h2>
      <h3>Step 1 — Choose Your Platform</h3>
      <p>For most Canadians, <strong>Wealthsimple Trade</strong> is the best starting point. Zero commissions on all Canadian and US stocks and ETFs. Clean interface. TFSA, RRSP, and FHSA accounts built in.</p>

      <h3>Step 2 — Open a TFSA</h3>
      <p>Inside your Wealthsimple account, open a Tax-Free Savings Account. If you've never contributed to a TFSA before and you were 18 or older in 2009, your total room in 2025 is <strong>$95,000</strong>. Even if you can only use a small fraction of that now, every dollar inside grows completely tax-free.</p>

      <h3>Step 3 — Decide Your Monthly Contribution</h3>
      <p>Choose an amount you can commit to consistently. $50/month, $200/month, $500/month — the amount matters less than the consistency. Set up automatic deposits from your chequing account, ideally aligned with your payday.</p>

      <h3>Step 4 — Buy Your ETF(s)</h3>
      <p>If using the one-fund approach: search for XEQT, buy as many shares as your contribution allows. Done.</p>
      <p>If using the three-fund approach: divide your contribution according to your target allocation (e.g., 25/45/30) and purchase each ETF accordingly.</p>

      <h3>Step 5 — Automate and Forget</h3>
      <p>Set and forget. Don't check your portfolio daily. Don't react to news. Let your automatic contributions run month after month. <strong>The entire strategy works because you don't interfere with it.</strong></p>

      <h2>How to Rebalance (Three-Fund Only)</h2>
      <p>If you're using three separate ETFs, your allocation will drift over time as different regions perform differently. Every 6–12 months:</p>
      <ol>
        <li>Check your current allocation</li>
        <li>Compare it to your target (e.g., 25/45/30)</li>
        <li>Direct your next few contributions toward the underweight fund(s)</li>
      </ol>
      <p>You don't need to sell anything — just adjust where your new money goes. This avoids triggering unnecessary trades.</p>

      <div class="article-callout maple-callout"><strong>🇨🇦 TFSA Rebalancing Advantage</strong><p>If you do need to sell and rebuy to rebalance inside a TFSA, there are zero tax consequences. No capital gains tax. No reporting. This is one of the huge advantages of building your portfolio inside a registered account.</p></div>

      <h2>Common Mistakes to Avoid</h2>
      <ul>
        <li>❌ <strong>Overcomplicating it.</strong> You don't need 10 ETFs. One or three is enough.</li>
        <li>❌ <strong>Chasing performance.</strong> Don't sell your ETFs to buy whatever stock went up last week.</li>
        <li>❌ <strong>Checking too often.</strong> Daily portfolio checks lead to emotional decisions.</li>
        <li>❌ <strong>Waiting for the "right time."</strong> Time in the market beats timing the market.</li>
        <li>❌ <strong>Ignoring fees.</strong> A 2% MER mutual fund costs you tens of thousands over a lifetime compared to a 0.20% ETF.</li>
      </ul>

      <h2>What Your Portfolio Could Look Like</h2>
      <p>Assuming $300/month contributed to XEQT inside a TFSA at 7% average annual return:</p>
      <ul>
        <li><strong>After 5 years:</strong> ~$21,000</li>
        <li><strong>After 10 years:</strong> ~$52,000</li>
        <li><strong>After 20 years:</strong> ~$157,000</li>
        <li><strong>After 30 years:</strong> ~$367,000</li>
      </ul>
      <p>All of this would be <strong>100% tax-free</strong> inside a TFSA. That's the power of consistency, compounding, and a simple portfolio.</p>

      <div class="article-callout"><strong>🎯 Bottom Line</strong><p>Building an investment portfolio doesn't require specialized knowledge, expensive advisors, or complex strategies. Open a TFSA. Buy XEQT (or build a simple three-fund portfolio). Contribute automatically every month. Leave it alone. In 20–30 years, you'll have built more wealth than most Canadians ever accumulate — and you'll have done it with a strategy you set up in one afternoon.</p></div>

      <div class="article-divider"></div>
      <div class="article-callout maple-callout"><strong>⚠️ Educational Purposes Only</strong><p>This article is for educational purposes only and does not constitute financial advice. ETF prices fluctuate and past performance does not guarantee future results. The specific ETFs mentioned are examples, not recommendations. Always consult a licensed financial advisor before making investment decisions.</p></div>
    `
      }
    };
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
      document.getElementById('articleContent').innerHTML = '<p>Dhruv is writing this one right now. Subscribe to the free newsletter and you\'ll be the first to read it the day it drops.</p>';
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
    if(budgetCards.length > 0) budgetCards[0].closest('.acard').setAttribute('onclick', "openArticle('student-budget')");
    if(downturnsCards.length > 0) downturnsCards[0].closest('.acard').setAttribute('onclick', "openArticle('market-downturns')");
    if(portfolioCards.length > 0) portfolioCards[0].closest('.acard').setAttribute('onclick', "openArticle('etf-portfolio')");
});

