import tataFuel from '@/assets/proj-tata-fuel.jpg';
import tataApc from '@/assets/proj-tata-apc.jpg';
import tataTrade from '@/assets/proj-tata-trading.jpg';
import asli from '@/assets/proj-asli.jpg';
import bellybox from '@/assets/proj-bellybox.jpg';
import miniorange from '@/assets/proj-miniorange.jpg';
import startup from '@/assets/play-startup.jpg';
import campus from '@/assets/play-sports.jpg';

export type Section = {
  heading: string;
  body: (string | string[])[];
};

export type OutcomeMetric = {
  value: string;
  label: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  preview: string;
  role: string;
  tags: string[];
  thesis: string;
  image: string;
  heroBg: string;
  cardBg: string;
  featured?: boolean;
  facts: { label: string; value: string }[];
  cardMetrics: string[];
  outcome: {
    headline: string;
    metrics: OutcomeMetric[];
    note?: string;
  };
  sections: Section[];
};

export const caseStudies: Record<string, CaseStudy> = {
  'asli-world': {
    slug: 'asli-world',
    title: 'Asli World',
    preview: 'Built and scaled a live D2C brand across product, growth, vendors, checkout and unit economics.',
    role: 'Product Lead / end-to-end ownership',
    tags: ['0→1 D2C', 'Product · Growth · Ops', 'Funnel Strategy'],
    thesis:
      'A live D2C brand where I owned the full operating loop: Shopify funnel, Meta Ads, product pages, pricing, vendor sourcing, checkout optimization and revenue experiments.',
    image: asli,
    heroBg: 'bg-lavender',
    cardBg: 'bg-lavender',
    featured: true,
    facts: [
      { label: 'Role', value: 'Product Lead · end-to-end ownership' },
      { label: 'Stage', value: 'Live D2C brand · Rank 8/120 teams' },
      { label: 'Core surface', value: 'Shopify funnel, ads, vendors, checkout and pricing' },
    ],
    cardMetrics: ['7× ROAS', '670K+ reach', '+18% checkout conversion'],
    outcome: {
      headline: 'A live brand with real revenue, paid acquisition signal and conversion lift.',
      metrics: [
        { value: '7×', label: 'ROAS' },
        { value: '670K+', label: 'Reach' },
        { value: '2.6%', label: 'CTR' },
        { value: '+18%', label: 'Checkout conversion' },
        { value: '−22%', label: 'Cart drop-offs' },
        { value: '₹12L + ₹1.3L', label: 'Online + offline revenue' },
      ],
    },
    sections: [
      {
        heading: 'Overview',
        body: [
          'Asli World is a live D2C brand built around affordable, high-quality home gadgets. I treated it like a product system, not just a store.',
        ],
      },
      {
        heading: 'Problem',
        body: [
          'The challenge was to create trust, demand and conversion for a new brand while keeping vendor quality, pricing and fulfillment in sync with growth.',
        ],
      },
      {
        heading: 'My Role',
        body: [
          'Product Lead with end-to-end ownership across product pages, funnel, ads, vendor sourcing, checkout and pricing experiments.',
        ],
      },
      {
        heading: 'What I Built / Drove',
        body: [
          [
            'Shopify storefront, product pages and customer journey',
            'Meta Ads campaigns, creative tests and pricing experiments',
            'Vendor sourcing funnel with 40+ vendors evaluated and 6 onboarded',
            'Checkout optimization that improved conversion and reduced drop-offs',
          ],
        ],
      },
      {
        heading: 'Key Product Decisions',
        body: [
          [
            'Used social proof and trusted-vendor positioning to reduce new-brand hesitation',
            'Optimized the funnel around checkout completion, not only traffic',
            'Framed offers around value clarity instead of blanket discounting',
            'Killed low-performing ad/product tests quickly and scaled signals that worked',
          ],
        ],
      },
      {
        heading: 'Stakeholders / Users',
        body: [
          'Users were D2C shoppers evaluating unfamiliar home gadgets. Stakeholders included vendors, fulfillment partners, ad/channel owners and the internal team operating the brand.',
        ],
      },
      {
        heading: 'Outcome Metrics',
        body: [
          'The project produced acquisition, conversion and revenue signals across online and offline channels.',
        ],
      },
      {
        heading: 'PM Lens',
        body: [
          'This is a strong PM story because it shows the full loop: user trust problem, funnel hypothesis, experiment, metric, iteration and shipping under real revenue pressure.',
        ],
      },
      {
        heading: 'Founder’s Office Lens',
        body: [
          'It proves my operating range. I moved across vendors, creatives, ads, pricing, checkout and fulfillment without hiding behind a narrow job description.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'I can own an ambiguous commercial goal and turn it into a measurable product, growth and operations system.',
        ],
      },
    ],
  },

  'tata-fuel-cost': {
    slug: 'tata-fuel-cost',
    title: 'Tata Power — Fuel Cost Optimization',
    preview: 'Centralized coal analytics and blending logic to support evidence-led fuel decisions across plants.',
    role: 'Data-driven product and decision-systems owner',
    tags: ['Decision Systems', 'Business Impact', 'Coal Analytics'],
    thesis:
      'I owned the analytical system that helped Tata Power move from manual, experience-led coal decisions to data-backed blending choices across plant divisions.',
    image: tataFuel,
    heroBg: 'bg-beige',
    cardBg: 'bg-beige',
    facts: [
      { label: 'Role', value: 'Data-driven product and decision-systems owner' },
      { label: 'Stakeholders', value: 'Plant ops, fuel management, business strategy, multi-plant divisions' },
      { label: 'System', value: 'Coal analytics, blending logic and cross-plant comparison views' },
    ],
    cardMetrics: ['₹10–12 Cr optimization', '~5% coal optimization', '₹2 Cr loss reduction'],
    outcome: {
      headline: 'A measurable shift in how coal cost was understood and managed.',
      metrics: [
        { value: '₹10–12 Cr', label: 'Annual fuel-cost optimization enabled' },
        { value: '~5%', label: 'Coal consumption optimization' },
        { value: '₹2 Cr', label: 'Annual loss reduction' },
      ],
      note: 'Outcomes reflect system-enabled business impact achieved with cross-functional plant and business teams.',
    },
    sections: [
      {
        heading: 'Overview',
        body: [
          'A centralized coal analytics and decision-support system for fuel-cost optimization across Tata Power plant divisions.',
        ],
      },
      {
        heading: 'Problem',
        body: [
          'Coal decisions affected generation efficiency, fuel cost and profitability, but many blending choices were manual and experience-led. Teams lacked one shared analytical view across quality, cost, consumption and output.',
        ],
      },
      {
        heading: 'My Role',
        body: [
          'I acted as the data-driven product and decision-systems owner, translating a business cost problem into dashboards, comparisons and blending logic that operations teams could actually use.',
        ],
      },
      {
        heading: 'What I Built / Drove',
        body: [
          [
            'Centralized coal analytics system across plants',
            'Blending optimization logic for cost versus output tradeoffs',
            'Cross-plant comparative views for plant and business teams',
            'Feedback loops with fuel, operations and strategy stakeholders',
          ],
        ],
      },
      {
        heading: 'Key Product Decisions',
        body: [
          [
            'Made comparisons plant-ready instead of model-heavy',
            'Focused the system on the decision moment: which coal mix to use and why',
            'Created shared evidence for teams that previously worked from separate views',
          ],
        ],
      },
      {
        heading: 'Stakeholders / Users',
        body: [
          'Plant operations, fuel management, business strategy and multi-plant divisions used the system to align around evidence-led fuel choices.',
        ],
      },
      {
        heading: 'Outcome Metrics',
        body: [
          'The system enabled fuel-cost optimization, coal consumption improvement and annual loss reduction at utility scale.',
        ],
      },
      {
        heading: 'PM Lens',
        body: [
          'This shows I can turn a broad business pain into a specific decision product with users, workflows, metrics and adoption constraints.',
        ],
      },
      {
        heading: 'Founder’s Office Lens',
        body: [
          'The work required me to influence across plant, fuel and strategy teams without relying on formal authority, which maps directly to special-projects and founder’s office execution.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'I can build systems that make complex operating decisions clearer, faster and financially meaningful.',
        ],
      },
    ],
  },

  'tata-apc': {
    slug: 'tata-apc',
    title: 'Tata Power — APC Reduction',
    preview: 'Monitoring and prediction logic that helped reduce auxiliary power consumption and unlock sellable capacity.',
    role: 'Decision-systems owner / operations intelligence',
    tags: ['Operations Intelligence', 'Plant Efficiency', 'Decision Support'],
    thesis:
      'I built monitoring and prediction logic for Auxiliary Power Consumption, helping teams move from after-the-fact tracking to proactive reduction.',
    image: tataApc,
    heroBg: 'bg-blush-soft',
    cardBg: 'bg-blush-soft',
    facts: [
      { label: 'Role', value: 'Decision-systems owner · operations intelligence' },
      { label: 'Stakeholders', value: 'Plant engineers, performance teams, ops heads' },
      { label: 'System', value: 'Unit-wise APC views, prediction logic and anomaly surfacing' },
    ],
    cardMetrics: ['0.05% APC reduction', '~1 MW capacity', '+2–3% availability'],
    outcome: {
      headline: 'A small efficiency improvement with meaningful capacity impact.',
      metrics: [
        { value: '0.05%', label: 'APC reduction' },
        { value: '~1 MW', label: 'Additional sellable capacity' },
        { value: '+2–3%', label: 'Availability improvement' },
      ],
    },
    sections: [
      {
        heading: 'Overview',
        body: [
          'An operations-intelligence system for monitoring, predicting and reducing Auxiliary Power Consumption across plant units.',
        ],
      },
      {
        heading: 'Problem',
        body: [
          'Power plants consume power to run themselves. Higher APC means less sellable electricity. Teams needed earlier visibility into APC drift and clearer unit-wise comparisons.',
        ],
      },
      {
        heading: 'My Role',
        body: [
          'I owned the decision-system layer, shaping APC from a technical engineering metric into an actionable operations and business lever.',
        ],
      },
      {
        heading: 'What I Built / Drove',
        body: [
          [
            'Unit-wise APC monitoring views',
            'Prediction logic for ideal APC bands',
            'Anomaly surfacing for faster corrective action',
            'Feedback loops with plant engineers and performance teams',
          ],
        ],
      },
      {
        heading: 'Key Product Decisions',
        body: [
          [
            'Focused on actual versus ideal APC so teams knew where to act',
            'Designed the system for plant engineers, not only leadership reporting',
            'Used anomaly surfacing to reduce lag between detection and action',
          ],
        ],
      },
      {
        heading: 'Stakeholders / Users',
        body: [
          'Plant engineers, performance teams and operations heads used the views to understand drift, prioritize action and align around APC improvement.',
        ],
      },
      {
        heading: 'Outcome Metrics',
        body: [
          'The system enabled APC reduction, additional sellable capacity and improved availability.',
        ],
      },
      {
        heading: 'PM Lens',
        body: [
          'The PM strength is reframing a technical metric into a user workflow: detect, compare, diagnose and act.',
        ],
      },
      {
        heading: 'Founder’s Office Lens',
        body: [
          'This proves I can find quiet operational leverage, align technical and business teams, and make a small percentage matter at scale.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'I can build decision systems that connect plant-level action to financial and capacity outcomes.',
        ],
      },
    ],
  },

  'tata-trading': {
    slug: 'tata-trading',
    title: 'Tata Power — Power Trading & Price Prediction',
    preview: 'Price prediction views for DAM/RTM that supported smarter bidding and market response.',
    role: 'Decision-systems owner / product thinking',
    tags: ['Price Prediction', 'Trading Strategy', 'Revenue Systems'],
    thesis:
      'I designed decision support for commercial and trading teams, improving how bidding decisions were made across Day-Ahead and Real-Time Markets.',
    image: tataTrade,
    heroBg: 'bg-sage',
    cardBg: 'bg-sage',
    facts: [
      { label: 'Role', value: 'Decision-systems owner · product thinking' },
      { label: 'Stakeholders', value: 'Commercial teams, trading desk, business strategy' },
      { label: 'System', value: 'DAM/RTM prediction views and bidding decision support' },
    ],
    cardMetrics: ['+1.5–2% realization', '+2.5M units/year', '₹7–8 Cr impact'],
    outcome: {
      headline: 'A decision layer that improved realization at utility scale.',
      metrics: [
        { value: '+1.5–2%', label: 'Realization improvement' },
        { value: '+2.5M', label: 'Output units / year' },
        { value: '₹7–8 Cr', label: 'Output impact enabled' },
      ],
    },
    sections: [
      {
        heading: 'Overview',
        body: [
          'A price-prediction and decision-support layer for smarter power selling across DAM and RTM market windows.',
        ],
      },
      {
        heading: 'Problem',
        body: [
          'Without a forward-looking price view, bidding stayed reactive. Commercial and trading teams needed a clearer way to respond to market movement and improve realization.',
        ],
      },
      {
        heading: 'My Role',
        body: [
          'I owned the decision-systems/product-thinking layer, translating market data into views that supported trader judgment instead of replacing it.',
        ],
      },
      {
        heading: 'What I Built / Drove',
        body: [
          [
            'Price-prediction views for DAM and RTM',
            'Decision-support layer for bidding and market response',
            'Calibration against market movement',
            'Stakeholder alignment with commercial and strategy teams',
          ],
        ],
      },
      {
        heading: 'Key Product Decisions',
        body: [
          [
            'Designed for the trader’s decision moment, not a generic analytics dashboard',
            'Kept prediction as guidance so human commercial context stayed in the loop',
            'Made revenue impact visible enough for business strategy stakeholders',
          ],
        ],
      },
      {
        heading: 'Stakeholders / Users',
        body: [
          'Commercial teams, trading desk users and business strategy stakeholders used the system as a decision input for smarter selling.',
        ],
      },
      {
        heading: 'Outcome Metrics',
        body: [
          'The system enabled realization improvement, additional output units and estimated output impact.',
        ],
      },
      {
        heading: 'PM Lens',
        body: [
          'This is a strong PM example because it starts with a sharp user and decision moment: traders deciding how to bid under market uncertainty.',
        ],
      },
      {
        heading: 'Founder’s Office Lens',
        body: [
          'It shows I can take a fuzzy commercial mandate and turn it into a working system that business teams can trust.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'I can build product-like decision systems that influence revenue without needing direct revenue ownership.',
        ],
      },
    ],
  },

  bellybox: {
    slug: 'bellybox',
    title: 'BellyBox',
    preview: 'Subscription-first tiffin marketplace pilot built through user discovery, vendors and delivery coordination.',
    role: 'Core team / vendor ops / PM thinking',
    tags: ['Marketplace Pilot', 'Vendor Ops', 'User Research'],
    thesis:
      'I worked on the core team of an early pilot, helping turn a food idea into a working subscription-first tiffin marketplace with users, kitchens and riders.',
    image: bellybox,
    heroBg: 'bg-beige',
    cardBg: 'bg-beige',
    facts: [
      { label: 'Role', value: 'Core team · vendor ops · PM thinking' },
      { label: 'Stage', value: 'Early pilot · ~30+ daily meals' },
      { label: 'Users', value: 'Hostel students, PG residents, early professionals' },
    ],
    cardMetrics: ['~30+ daily meals', '3 kitchens', '30+ interviews'],
    outcome: {
      headline: 'A real pilot with supply, demand and delivery loops running.',
      metrics: [
        { value: '~30+', label: 'Daily meals' },
        { value: '3', label: 'Kitchens onboarded' },
        { value: '8+', label: 'Riders / partners' },
        { value: '30+', label: 'User interviews and surveys' },
      ],
      note: 'I was part of the core team; this is positioned as operating and PM-thinking work, not founder ownership.',
    },
    sections: [
      {
        heading: 'Overview',
        body: [
          'BellyBox is a subscription-first tiffin marketplace for reliable home-cooked meals from local kitchens.',
        ],
      },
      {
        heading: 'Problem',
        body: [
          'Users did not just want occasional delivery. Hostel students, PG residents and early professionals needed daily reliability, predictable pricing and food they could trust.',
        ],
      },
      {
        heading: 'My Role',
        body: [
          'I worked with the core team across vendor operations, customer discovery, pricing model thinking and delivery coordination.',
        ],
      },
      {
        heading: 'What I Built / Drove',
        body: [
          [
            'Customer discovery through 30+ interviews and surveys',
            'Vendor onboarding for 3 kitchens',
            'Pricing and subscription model thinking',
            'Coordination with 8+ riders / delivery partners',
          ],
        ],
      },
      {
        heading: 'Key Product Decisions',
        body: [
          [
            'Moved toward subscription-first because reliability mattered more than one-time ordering',
            'Started with a focused hostel/PG audience instead of broad food delivery',
            'Sequenced kitchens around reliability, not only menu variety',
          ],
        ],
      },
      {
        heading: 'Stakeholders / Users',
        body: [
          'Users included hostel students, PG residents and early professionals. Stakeholders included kitchens, riders, delivery partners and the core operating team.',
        ],
      },
      {
        heading: 'Outcome Metrics',
        body: [
          'The pilot reached daily meal volume, onboarded kitchens, coordinated riders and generated direct discovery inputs.',
        ],
      },
      {
        heading: 'PM Lens',
        body: [
          'The project shows early-stage PM behavior: interview users, sharpen the segment, adjust the model and build only what the pilot needs.',
        ],
      },
      {
        heading: 'Founder’s Office Lens',
        body: [
          'It proves I can operate inside ambiguity where the answer is not a deck but a live supply-demand loop.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'I understand that product-market learning comes from users, vendors and operations moving together.',
        ],
      },
    ],
  },

  miniorange: {
    slug: 'miniorange',
    title: 'MiniOrange',
    preview: 'Business analyst work across SEO, competitor research, campaigns and client coordination for IAM products.',
    role: 'Business Analyst Intern',
    tags: ['IAM · SSO · MFA', 'Growth', 'Client Execution'],
    thesis:
      'At MiniOrange, I worked where product understanding, growth discovery and client-facing execution met.',
    image: miniorange,
    heroBg: 'bg-pale-blue',
    cardBg: 'bg-pale-blue',
    facts: [
      { label: 'Role', value: 'Business Analyst Intern' },
      { label: 'Company', value: 'MiniOrange · IAM, SSO, MFA' },
      { label: 'Work', value: 'SEO, Joomla content strategy, campaigns and client coordination' },
    ],
    cardMetrics: ['+10% SEO rankings', '+5% impressions', '3+ clients'],
    outcome: {
      headline: 'Discoverability improved and client execution tightened.',
      metrics: [
        { value: '+10%', label: 'SEO rankings' },
        { value: '+5%', label: 'Impressions' },
        { value: '3+', label: 'Clients coordinated end-to-end' },
      ],
    },
    sections: [
      {
        heading: 'Overview',
        body: [
          'A Business Analyst Internship across growth, product understanding and client coordination for MiniOrange’s IAM, SSO and MFA products.',
        ],
      },
      {
        heading: 'Problem',
        body: [
          'The products were strong, but discoverability and client-facing execution needed tighter structure across content, campaigns and internal coordination.',
        ],
      },
      {
        heading: 'My Role',
        body: [
          'I worked as a Business Analyst Intern, balancing research, growth execution and coordination across Sales, Billing and Support.',
        ],
      },
      {
        heading: 'What I Built / Drove',
        body: [
          [
            'Keyword research and competitor benchmarking',
            'Joomla content strategy based on content gaps',
            'WhatsApp and email campaigns',
            'End-to-end coordination for 3+ clients',
          ],
        ],
      },
      {
        heading: 'Key Product Decisions',
        body: [
          [
            'Connected keyword and competitor research to content priorities',
            'Treated campaigns as part of the product-growth loop',
            'Kept client coordination cross-functional instead of siloed',
          ],
        ],
      },
      {
        heading: 'Stakeholders / Users',
        body: [
          'Stakeholders included Sales, Billing, Support and client teams. The end users were organizations evaluating IAM, SSO and MFA solutions.',
        ],
      },
      {
        heading: 'Outcome Metrics',
        body: [
          'The work improved search rankings, impressions and client coordination throughput.',
        ],
      },
      {
        heading: 'PM Lens',
        body: [
          'This shows early product judgment: understanding the product, market language, user intent and how discoverability influences demand.',
        ],
      },
      {
        heading: 'Founder’s Office Lens',
        body: [
          'It shows I can sit across functions and keep execution moving when client outcomes depend on multiple teams.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'I can connect research, growth and client execution into practical business outcomes.',
        ],
      },
    ],
  },

  'zuban-ai': {
    slug: 'zuban-ai',
    title: 'Zubaan AI',
    preview: 'Multilingual voice assistant prototype for English, Hindi and Spanish conversations with memory across language switches.',
    role: 'AI product builder / multilingual assistant prototype',
    tags: ['AI Voice', 'Multilingual UX', 'Memory Systems'],
    thesis:
      'I built Zubaan AI as a multilingual voice assistant prototype that detects language switches, preserves context across turns and responds in the right language without pretending it is production-ready.',
    image: startup,
    heroBg: 'bg-blush-soft',
    cardBg: 'bg-blush-soft',
    facts: [
      { label: 'Role', value: 'AI product builder · multilingual assistant prototype' },
      { label: 'Stage', value: 'Prototype with deployed browser/text fallback' },
      { label: 'System', value: 'ASR, language router, memory store, reply engine and TTS path' },
    ],
    cardMetrics: ['3 languages', 'Global memory layer', 'ASR → LLM → TTS path'],
    outcome: {
      headline: 'A reliable prototype that shows the hard product behavior: language switching with memory.',
      metrics: [
        { value: '3', label: 'Languages handled: English, Hindi and Spanish' },
        { value: 'Global', label: 'Memory persisted across language switches' },
        { value: 'Browser demo', label: 'Text fallback on Vercel; full voice suited locally' },
      ],
      note: 'I do not claim production adoption or full real-time voice performance. The text/deterministic path is reliable; full ASR, model and TTS latency depends on the local stack.',
    },
    sections: [
      {
        heading: 'Overview',
        body: [
          'Zubaan AI is a multilingual voice assistant prototype that handles English, Hindi and Spanish turns, detects code-switching, preserves memory and responds in the appropriate language.',
        ],
      },
      {
        heading: 'Problem',
        body: [
          'Multilingual users often switch languages mid-task, but assistants can lose context when the language changes. I wanted the assistant to remember details like order IDs, cities, hotel preferences or food choices even when the next turn came in Hindi, English or Spanish.',
        ],
      },
      {
        heading: 'My Role',
        body: [
          'I scoped and built the prototype pipeline, language-routing behavior, global memory layer, diagnostics and fallback logic so the demo stayed understandable and testable.',
        ],
      },
      {
        heading: 'What I Built / Drove',
        body: [
          [
            'Microphone-to-ASR path using faster-whisper for the local voice pipeline',
            'Language router combining ASR output with Hindi/Hinglish, Spanish and English rule markers',
            'Global memory store for order IDs, email, city, hotel preferences, weather cities and food preferences',
            'Reply engine with a local LLM path and deterministic fallback for reliable demos',
            'TTS path planned for Piper, with browser speech/text fallback for the deployed demo',
          ],
        ],
      },
      {
        heading: 'Key Product Decisions',
        body: [
          [
            'Used language-independent memory so context survived language switches',
            'Selected the reply language from dominant/latest user language instead of forcing one language per session',
            'Kept deterministic fallback responses so the prototype remained reliable if the local LLM was unavailable',
            'Kept the Vercel version honest as a browser/text fallback because full microphone ASR/TTS is better suited to a local app',
          ],
        ],
      },
      {
        heading: 'Stakeholders / Users',
        body: [
          'The users are multilingual customers or operators moving through tasks like order status, hotel booking, food ordering and weather queries while switching between English, Hindi and Spanish.',
        ],
      },
      {
        heading: 'Outcome Metrics',
        body: [
          'I do not claim adoption metrics. The proof is a working multilingual prototype with memory, routing, demo scenarios and visible latency/language-switch diagnostics.',
        ],
      },
      {
        heading: 'PM Lens',
        body: [
          'This shows I can define what the AI actually has to remember, where the language boundary breaks the experience and how to scope an MVP around user behavior instead of model novelty.',
        ],
      },
      {
        heading: 'Founder’s Office Lens',
        body: [
          'It shows I can sequence an ambiguous AI idea into a demoable system, make pragmatic tradeoffs and clearly separate prototype capability from production readiness.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'I can build AI product prototypes responsibly: strong enough to show user value, explicit about limits and grounded in product behavior rather than inflated claims.',
        ],
      },
    ],
  },

  'campus-lost-found': {
    slug: 'campus-lost-found',
    title: 'Campus Catch',
    preview: 'Instagram-style campus lost-and-found app for posting items, finding matches and resolving claims with clearer trust signals.',
    role: 'Product/build owner / campus utility prototype',
    tags: ['Campus Utility', 'Feed UX', 'Matching Logic'],
    thesis:
      'I built Campus Catch as a visual-first lost-and-found web app where students can post lost or found items, see likely matches and move through a claim flow instead of relying on scattered chats.',
    image: campus,
    heroBg: 'bg-pale-blue',
    cardBg: 'bg-pale-blue',
    facts: [
      { label: 'Role', value: 'Product/build owner · campus utility prototype' },
      { label: 'Users', value: 'Campus students, item owners and finders' },
      { label: 'System', value: 'Google sign-in, visual feed, matching, claims and chat flow' },
    ],
    cardMetrics: ['6-signal matching', '100-point score cap', 'Claim + chat flow'],
    outcome: {
      headline: 'A complete product flow for a campus utility, with adoption metrics intentionally not claimed.',
      metrics: [
        { value: '6', label: 'Match signals: category, color, keywords, location, date and image similarity' },
        { value: '100', label: 'Score cap with strong, possible and maybe match labels' },
        { value: 'Local demo', label: 'localStorage persistence; no fake adoption metrics' },
      ],
      note: 'The prototype uses client-side auth/profile handling, localStorage persistence and lightweight browser-side image similarity. I would move this to server-verified auth, Postgres/Supabase and proper image embeddings for production.',
    },
    sections: [
      {
        heading: 'Overview',
        body: [
          'Campus Catch is an Instagram-style campus utility for posting lost/found items, browsing a visual feed, seeing likely matches and resolving claims with more structure.',
        ],
      },
      {
        heading: 'Problem',
        body: [
          'Lost-and-found coordination on campus gets scattered across group chats, word of mouth and informal notices. Students need one place where an item can be posted with enough detail, matched against the opposite side and claimed without confusion.',
        ],
      },
      {
        heading: 'My Role',
        body: [
          'I scoped and built the product flow, feed experience, item-posting structure, matching logic, claim arbitration and production-hardening path.',
        ],
      },
      {
        heading: 'What I Built / Drove',
        body: [
          [
            'Google sign-in flow for a campus-style user identity',
            'Lost/found item posts with photos, details, location, date, category and color',
            'Instagram-like feed cards with match badges, quick actions, claim states and mobile-friendly flows',
            'Matching logic that compares only lost items with found items using structured and image signals',
            'Claim review flow with proof, chat drawer, handover preference and accept/reject states',
          ],
        ],
      },
      {
        heading: 'Key Product Decisions',
        body: [
          [
            'Made the feed visual-first because recognition matters more than a text-heavy directory',
            'Compared only opposite item types, lost versus found, to reduce noisy matches',
            'Used category, color, keyword overlap, location, date proximity and a lightweight browser pHash for scoring',
            'Added claim arbitration so the poster can review hidden proof, chat, reject or accept; accepting one claim closes the item as reunited',
            'Chose pHash for the one-day prototype, while noting that production should use CLIP-style vision embeddings and vector search',
          ],
        ],
      },
      {
        heading: 'Stakeholders / Users',
        body: [
          'Primary users are campus students who lose or find items. The workflow also supports posters, claimants and potential campus moderators who need clearer status, proof and handover states.',
        ],
      },
      {
        heading: 'Outcome Metrics',
        body: [
          'I do not claim launch or adoption metrics. The proof is workflow depth: sign-in, item posting, visual discovery, match scoring, claim arbitration, chat, simulated notifications and local persistence.',
        ],
      },
      {
        heading: 'PM Lens',
        body: [
          'This is relevant for PM roles because I turned a common offline pain into a stateful product workflow with clear user states: lost, found, matched, claimed, rejected and reunited.',
        ],
      },
      {
        heading: 'Founder’s Office Lens',
        body: [
          'It shows I can spot a small operational friction, ship a focused demo quickly, make tradeoffs clearly and define the production path for real trust and persistence.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'I can build utility products with clear states, trust mechanisms, technical tradeoffs and honest limits instead of overclaiming outcomes.',
        ],
      },
    ],
  },
};

export const caseStudyOrder = [
  'asli-world',
  'tata-fuel-cost',
  'tata-apc',
  'tata-trading',
  'bellybox',
  'miniorange',
  'zuban-ai',
  'campus-lost-found',
] as const;

export const orderedCaseStudies = caseStudyOrder.map((slug) => caseStudies[slug]);
