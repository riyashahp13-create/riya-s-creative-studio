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

const lens = {
  transparent:
    'No verified performance metrics were supplied for this added project, so the case study keeps outcomes intentionally conservative instead of inventing numbers.',
};

export const caseStudies: Record<string, CaseStudy> = {
  'asli-world': {
    slug: 'asli-world',
    title: 'Asli World',
    preview: 'Built and scaled a live D2C brand across product, growth, vendors, checkout and unit economics.',
    role: 'Product Lead / end-to-end ownership',
    tags: ['0→1 D2C', 'Product · Growth · Ops', 'Funnel Strategy'],
    thesis:
      'A live D2C brand where Riya owned the full operating loop: Shopify funnel, Meta Ads, product pages, pricing, vendor sourcing, checkout optimization and revenue experiments.',
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
          'Asli World is a live D2C brand built around affordable, high-quality home gadgets. Riya treated it like a product system, not just a store.',
        ],
      },
      {
        heading: 'Problem',
        body: [
          'The challenge was to create trust, demand and conversion for a new brand while keeping vendor quality, pricing and fulfillment in sync with growth.',
        ],
      },
      {
        heading: 'Riya’s Role',
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
          'It proves operating range. Riya moved across vendors, creatives, ads, pricing, checkout and fulfillment without hiding behind a narrow job description.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'Riya can own an ambiguous commercial goal and turn it into a measurable product, growth and operations system.',
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
      'Riya owned the analytical system that helped Tata Power move from manual, experience-led coal decisions to data-backed blending choices across plant divisions.',
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
        heading: 'Riya’s Role',
        body: [
          'Riya acted as the data-driven product and decision-systems owner, translating a business cost problem into dashboards, comparisons and blending logic that operations teams could actually use.',
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
          'This shows Riya can turn a broad business pain into a specific decision product with users, workflows, metrics and adoption constraints.',
        ],
      },
      {
        heading: 'Founder’s Office Lens',
        body: [
          'The work required influence across plant, fuel and strategy teams without relying on formal authority, which maps directly to special-projects and founder’s office execution.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'Riya can build systems that make complex operating decisions clearer, faster and financially meaningful.',
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
      'Riya built monitoring and prediction logic for Auxiliary Power Consumption, helping teams move from after-the-fact tracking to proactive reduction.',
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
        heading: 'Riya’s Role',
        body: [
          'Riya owned the decision-system layer, shaping APC from a technical engineering metric into an actionable operations and business lever.',
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
          'This proves Riya can find quiet operational leverage, align technical and business teams, and make a small percentage matter at scale.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'Riya can build decision systems that connect plant-level action to financial and capacity outcomes.',
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
      'Riya designed decision support for commercial and trading teams, improving how bidding decisions were made across Day-Ahead and Real-Time Markets.',
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
        heading: 'Riya’s Role',
        body: [
          'Riya owned the decision-systems/product-thinking layer, translating market data into views that supported trader judgment instead of replacing it.',
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
          'It shows Riya can take a fuzzy commercial mandate and turn it into a working system that business teams can trust.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'Riya can build product-like decision systems that influence revenue without needing direct revenue ownership.',
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
      'Riya worked on the core team of an early pilot, helping turn a food idea into a working subscription-first tiffin marketplace with users, kitchens and riders.',
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
      note: 'Riya was part of the core team; this is positioned as operating and PM-thinking work, not founder ownership.',
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
        heading: 'Riya’s Role',
        body: [
          'Riya worked with the core team across vendor operations, customer discovery, pricing model thinking and delivery coordination.',
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
          'It proves Riya can operate inside ambiguity where the answer is not a deck but a live supply-demand loop.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'Riya understands that product-market learning comes from users, vendors and operations moving together.',
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
      'At MiniOrange, Riya worked where product understanding, growth discovery and client-facing execution met.',
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
        heading: 'Riya’s Role',
        body: [
          'Riya worked as a Business Analyst Intern, balancing research, growth execution and coordination across Sales, Billing and Support.',
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
          'It shows Riya can sit across functions and keep execution moving when client outcomes depend on multiple teams.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'Riya can connect research, growth and client execution into practical business outcomes.',
        ],
      },
    ],
  },

  'zuban-ai': {
    slug: 'zuban-ai',
    title: 'Zuban AI',
    preview: 'Additional AI project added from the brief; detailed metrics and stack are intentionally not claimed yet.',
    role: 'AI product project / details to verify',
    tags: ['AI Product', 'Case Detail Pending', 'No Public Metrics Yet'],
    thesis:
      'Zuban AI has been added as an AI project from the supplied brief. The source codebase and prompt did not include verified stack, launch or outcome details, so the case study stays conservative.',
    image: startup,
    heroBg: 'bg-blush-soft',
    cardBg: 'bg-blush-soft',
    facts: [
      { label: 'Role', value: 'AI product project · details to verify' },
      { label: 'Stage', value: 'Added from brief; metrics not supplied' },
      { label: 'Constraint', value: 'No fake tools, usage numbers or outcomes claimed' },
    ],
    cardMetrics: ['AI project', 'Metrics not supplied', 'Details to verify'],
    outcome: {
      headline: 'Outcome details are not published yet.',
      metrics: [
        { value: 'Not claimed', label: 'Verified usage metrics' },
        { value: 'Not supplied', label: 'Revenue or adoption outcome' },
        { value: 'To verify', label: 'Stack and launch details' },
      ],
      note: lens.transparent,
    },
    sections: [
      {
        heading: 'Overview',
        body: [
          'Zuban AI is included as an additional AI project from the brief. This page is structured for a full case study once the user, stack and outcome details are confirmed.',
        ],
      },
      {
        heading: 'Problem',
        body: [
          'The prompt did not include a verified problem statement. This section should be updated with the exact user pain Zuban AI solves.',
        ],
      },
      {
        heading: 'Riya’s Role',
        body: [
          'The role was not specified in the supplied source material, so it is not overstated here.',
        ],
      },
      {
        heading: 'What I Built / Drove',
        body: [
          'Build, workflow and stack details should be added once confirmed. No specific tools are claimed without source detail.',
        ],
      },
      {
        heading: 'Key Product Decisions',
        body: [
          'The key product decision for the portfolio is to keep this project visible but clearly label unverified details instead of inventing proof.',
        ],
      },
      {
        heading: 'Stakeholders / Users',
        body: [
          'Target users were not specified in the source material.',
        ],
      },
      {
        heading: 'Outcome Metrics',
        body: [
          lens.transparent,
        ],
      },
      {
        heading: 'PM Lens',
        body: [
          'Once detailed, this should show Riya’s ability to define an AI user problem, scope an MVP and evaluate whether the AI layer creates real utility.',
        ],
      },
      {
        heading: 'Founder’s Office Lens',
        body: [
          'The current value is directional: it signals AI-product interest, but needs confirmed execution detail before it becomes a proof point.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'It proves the portfolio is honest about evidence: visible enough to discuss, but not inflated beyond verified facts.',
        ],
      },
    ],
  },

  'campus-lost-found': {
    slug: 'campus-lost-found',
    title: 'Campus Lost & Found Portal',
    preview: 'Instagram-style campus utility concept for posting, discovering and resolving lost-and-found items.',
    role: 'Product/build project / campus utility',
    tags: ['Campus Utility', 'Instagram-style UX', 'No Public Metrics Yet'],
    thesis:
      'A campus lost-and-found portal concept shaped like a familiar social feed, designed to make item discovery and handoff simpler for students.',
    image: campus,
    heroBg: 'bg-pale-blue',
    cardBg: 'bg-pale-blue',
    facts: [
      { label: 'Role', value: 'Product/build project · details to verify' },
      { label: 'Users', value: 'Campus students and item owners/finders' },
      { label: 'Stage', value: 'Project details added; metrics not supplied' },
    ],
    cardMetrics: ['Campus utility', 'Feed-style UX', 'Metrics not supplied'],
    outcome: {
      headline: 'Usage outcomes are not published yet.',
      metrics: [
        { value: 'Not claimed', label: 'Verified active users' },
        { value: 'Not supplied', label: 'Recovered items metric' },
        { value: 'To verify', label: 'Launch/adoption status' },
      ],
      note: lens.transparent,
    },
    sections: [
      {
        heading: 'Overview',
        body: [
          'Campus Lost & Found Portal is an Instagram-style campus utility for posting lost/found items, browsing updates and moving toward item recovery.',
        ],
      },
      {
        heading: 'Problem',
        body: [
          'Lost-and-found coordination on campus can get scattered across chats, word of mouth and informal notices. A feed-led portal gives the behavior one visible home.',
        ],
      },
      {
        heading: 'Riya’s Role',
        body: [
          'The brief identifies this as a project to add; exact ownership and technical details should be confirmed before stronger claims are made.',
        ],
      },
      {
        heading: 'What I Built / Drove',
        body: [
          [
            'Instagram-style feed concept for lost/found posts',
            'Item discovery and visibility flow',
            'Handoff-oriented product thinking for item owners and finders',
          ],
        ],
      },
      {
        heading: 'Key Product Decisions',
        body: [
          [
            'Used a familiar feed pattern to reduce learning friction',
            'Centered the experience on quick recognition of item, place and status',
            'Kept outcome claims separate until launch/adoption metrics are verified',
          ],
        ],
      },
      {
        heading: 'Stakeholders / Users',
        body: [
          'Primary users are campus students who lose or find items. Potential stakeholders include student bodies, campus admins or community moderators.',
        ],
      },
      {
        heading: 'Outcome Metrics',
        body: [
          lens.transparent,
        ],
      },
      {
        heading: 'PM Lens',
        body: [
          'This is relevant for PM roles because it turns a common offline pain into a simple workflow with clear user states: lost, found, claimed and resolved.',
        ],
      },
      {
        heading: 'Founder’s Office Lens',
        body: [
          'It shows the instinct to identify small operational frictions in a community and design lightweight systems around them.',
        ],
      },
      {
        heading: 'What this proves',
        body: [
          'With verified adoption details added, this can become a concise utility-product case study. For now, it is intentionally framed as a project with unverified outcomes.',
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
