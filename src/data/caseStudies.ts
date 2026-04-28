import tataFuel from '@/assets/proj-tata-fuel.jpg';
import tataApc from '@/assets/proj-tata-apc.jpg';
import tataTrade from '@/assets/proj-tata-trading.jpg';
import asli from '@/assets/proj-asli.jpg';
import bellybox from '@/assets/proj-bellybox.jpg';
import miniorange from '@/assets/proj-miniorange.jpg';

export type Section = {
  kicker?: string;
  heading: string;
  body: (string | string[])[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  tags: string[];
  thesis: string;
  image: string;
  heroBg: string;
  facts: { label: string; value: string }[];
  sections: Section[];
  outcome?: { headline: string; metrics: { value: string; label: string }[]; note?: string };
  lenses: { pm: string; fo: string };
};

export const caseStudies: Record<string, CaseStudy> = {
  'tata-fuel-cost': {
    slug: 'tata-fuel-cost',
    title: 'Optimizing fuel cost through coal analytics.',
    tags: ['Tata Power', 'Decision Systems', 'Business Impact'],
    thesis:
      'Owned the analytical system that helped Tata Power move from manual, experience-led coal decisions to data-backed blending choices — enabling ~₹10–12 Cr in annual fuel-cost optimization.',
    image: tataFuel,
    heroBg: 'bg-beige',
    facts: [
      { label: 'Role', value: 'Data-driven product & decision-systems owner' },
      { label: 'Stakeholders', value: 'Plant ops, fuel mgmt, business strategy, multi-plant divisions' },
      { label: 'Duration', value: '2022 — 2024 · Tata Power, Mumbai' },
    ],
    sections: [
      {
        kicker: 'Problem',
        heading: 'Coal decisions ran on intuition, not insight.',
        body: [
          'Coal quality directly drives generation efficiency, fuel cost and profitability across plants. But there was no centralized analytical view of the coal supply chain — and no systematic way to optimize blending decisions.',
          'Across Mundra, Maithon, Jojobera and Haldia, choices on which coal to use, when, and in what mix were largely manual and experience-based. Small inefficiencies compounded into crores of leakage.',
        ],
      },
      {
        kicker: 'What I built',
        heading: 'A centralized analytical system for the coal value chain.',
        body: [
          'I designed and drove a centralized dashboard and analytical layer that tracked the end-to-end coal supply chain — quality, calorific value, consumption patterns, generation output, cost data — across plants.',
          [
            'Comparative views across plants and units',
            'Blending optimization logic: “if we use this coal mix → expected cost vs output”',
            'Continuous feedback loops with plant + business teams to refine the model',
            'Sanitized reporting layer for cross-functional stakeholders',
          ],
        ],
      },
      {
        kicker: 'Decision changed',
        heading: 'From experience-led to evidence-led blending.',
        body: [
          'Plant teams started selecting and blending coal using data-backed comparisons rather than gut. Business teams could trace the cost impact of each blending choice. Decisions sped up, and accountability tightened.',
        ],
      },
    ],
    outcome: {
      headline: 'A measurable shift in how coal cost was managed.',
      metrics: [
        { value: '₹10–12 Cr', label: 'Annual fuel-cost optimization enabled' },
        { value: '~5%', label: 'Coal consumption optimization' },
        { value: '₹2 Cr', label: 'Annual loss reduction' },
      ],
      note: 'Outcomes reflect business impact unlocked by the system, achieved with cross-functional plant and business teams.',
    },
    lenses: {
      pm: 'Translated a vague business pain (“fuel cost is too high”) into a concrete user problem, built the right analytical surface for plant + business users, and iterated through real adoption — not theoretical models.',
      fo: 'Operated across multiple plants and stakeholder layers without formal authority. Drove adoption by aligning ops, fuel and business teams around a shared system of truth.',
    },
  },

  'tata-apc': {
    slug: 'tata-apc',
    title: 'Reducing APC, unlocking sellable capacity.',
    tags: ['Tata Power', 'Operations Intelligence'],
    thesis:
      'Built monitoring and prediction logic for Auxiliary Power Consumption — moving plants from after-the-fact tracking to proactive reduction of self-consumed power.',
    image: tataApc,
    heroBg: 'bg-blush-soft',
    facts: [
      { label: 'Role', value: 'Decision-systems owner · operations intelligence' },
      { label: 'Stakeholders', value: 'Plant engineers, performance teams, ops heads' },
      { label: 'Duration', value: '2022 — 2024 · Tata Power' },
    ],
    sections: [
      {
        kicker: 'Problem',
        heading: 'Power plants spend power to make power.',
        body: [
          'Auxiliary Power Consumption (APC) is the electricity a plant uses to run itself. Higher APC means less sellable electricity — and less revenue. There was no predictive system to flag when APC was drifting high or what to do about it.',
        ],
      },
      {
        kicker: 'What I built',
        heading: 'Prediction + monitoring + improvement loops.',
        body: [
          [
            'Unit-wise APC views across plants',
            'Prediction logic for ideal APC bands using historical patterns',
            'Feedback-driven loops so engineers could close the gap between actual and ideal',
            'Surfacing anomalies before they became costly',
          ],
        ],
      },
      {
        kicker: 'Decision changed',
        heading: 'From tracking APC to actively reducing it.',
        body: [
          'Engineering teams could now see where APC should ideally be, identify the biggest contributors to excess consumption, and take corrective action faster.',
        ],
      },
    ],
    outcome: {
      headline: 'A small percentage that unlocked real money.',
      metrics: [
        { value: '0.05%', label: 'APC reduction' },
        { value: '~1 MW', label: 'Additional sellable capacity unlocked' },
        { value: '+2–3%', label: 'Availability improvement (system-enabled)' },
      ],
      note: 'A “silent money generator” — small efficiency gains compound into real revenue at utility scale.',
    },
    lenses: {
      pm: 'Reframed APC from an engineering metric into a business lever. Built the right alerts and views for the people who had to act on it.',
      fo: 'Quietly aligned operations, performance and engineering teams around the same APC narrative — making the metric a shared decision input, not a finger-pointing tool.',
    },
  },

  'tata-trading': {
    slug: 'tata-trading',
    title: 'Smarter power-selling through price prediction.',
    tags: ['Tata Power', 'Product Thinking', 'Revenue Strategy'],
    thesis:
      'Designed decision support for commercial and trading teams — shifting power-selling from reactive bids to a more strategic, price-predicted approach across the Day-Ahead and Real-Time Markets.',
    image: tataTrade,
    heroBg: 'bg-sage',
    facts: [
      { label: 'Role', value: 'Decision-systems owner · product thinking' },
      { label: 'Stakeholders', value: 'Commercial teams, trading desk, business strategy' },
      { label: 'Duration', value: '2022 — 2024 · Tata Power' },
    ],
    sections: [
      {
        kicker: 'Problem',
        heading: 'Trading without a forward view.',
        body: [
          'Power is sold across contracts, auctions and exchanges (DAM, RTM). Without strong price prediction, bidding stayed reactive — leaving realization on the table during favorable market windows.',
        ],
      },
      {
        kicker: 'What I built',
        heading: 'Price-prediction models + a decision layer for traders.',
        body: [
          [
            'Used generation, market and historical price data',
            'Built predictive views for DAM/RTM windows',
            'A decision-support layer that informed bidding strategy, not replaced it',
            'Continuous calibration against actual market movement',
          ],
        ],
      },
      {
        kicker: 'Decision changed',
        heading: 'From reactive bidding to strategic selling.',
        body: [
          'Trading teams could anchor decisions in a forward view of price, not just current spot signals — improving the quality of bidding and realizing more value from each MW sold.',
        ],
      },
    ],
    outcome: {
      headline: 'A small lift on every unit, at utility scale.',
      metrics: [
        { value: '+1.5–2%', label: 'Realization improvement' },
        { value: '+2.5M', label: 'Output units / year (system-enabled)' },
        { value: '₹7–8 Cr', label: 'Output impact enabled' },
      ],
    },
    lenses: {
      pm: 'This is the cleanest PM story: identified the actual user (traders), understood their decision moment, built a tool around it, and influenced revenue without owning revenue.',
      fo: 'Turned a fuzzy “we should sell smarter” mandate into a working system that earned trust at the trading desk and adoption from business strategy.',
    },
  },

  'asli-world': {
    slug: 'asli-world',
    title: 'Scaling Asli World, end-to-end.',
    tags: ['0→1 D2C', 'Product · Growth · Ops'],
    thesis:
      'Built and scaled a 0→1 D2C brand through continuous experimentation across product, growth and operations — owning Shopify funnels, Meta Ads, vendor sourcing and unit economics.',
    image: asli,
    heroBg: 'bg-lavender',
    facts: [
      { label: 'Role', value: 'Product Lead · end-to-end ownership' },
      { label: 'Stage', value: 'Live D2C · Rank 8/120 teams' },
      { label: 'Duration', value: 'Jun ’25 — Present' },
    ],
    sections: [
      {
        kicker: 'Context',
        heading: 'A live experiment in building a D2C brand from zero.',
        body: [
          'Asli World is a D2C hub for affordable, high-quality home gadgets. As Product Lead, I owned the full stack — product pages, funnel, ads, vendor relationships, pricing, fulfillment — and ran the brand as a continuous experiment.',
        ],
      },
      {
        kicker: 'What I built',
        heading: 'Product, funnel and growth — all in motion.',
        body: [
          [
            'Website: Shopify build, UX flows, product pages',
            'Funnel: Landing → product → checkout optimization (+18% checkout, −22% cart drop)',
            'Meta Ads: campaign setup, creative & pricing A/B tests, scaling',
            'Vendor sourcing: 40+ evaluated, 6 onboarded',
            'Pricing & offer design framed as value-unlock, not discounts',
            'Iterative experimentation: kill losers fast, scale winners',
          ],
        ],
      },
      {
        kicker: 'How it grew',
        heading: 'Tight loops between ads, funnel and ops.',
        body: [
          'Used social proof, “trusted vendor” positioning, COD availability and cleaner checkout to lift conversion. On the growth side, multiple ad sets ran in parallel — winners were scaled, losers killed within days.',
          'On the back end, vendor and fulfillment coordination ran in lockstep with growth — so wins on the front didn’t become breakages on the back.',
        ],
      },
    ],
    outcome: {
      headline: 'Real revenue from a real, end-to-end build.',
      metrics: [
        { value: '7×', label: 'ROAS' },
        { value: '670K+', label: 'Reach' },
        { value: '2.6%', label: 'CTR' },
        { value: '+18%', label: 'Checkout conversion' },
        { value: '−22%', label: 'Cart drop-offs' },
        { value: '₹12L + ₹1.3L', label: 'Online + offline revenue' },
      ],
    },
    lenses: {
      pm: 'A live PM playground: real users, real money, real funnels. Hypothesis → experiment → measure → ship — at the speed only a 0→1 venture allows.',
      fo: 'The clearest founder-energy story. Owned everything from vendors to creatives to checkout — the operating range a Founder’s Office role demands.',
    },
  },

  'bellybox': {
    slug: 'bellybox',
    title: 'BellyBox: a tiffin pilot, validated on the ground.',
    tags: ['Early-stage Marketplace', 'Ops + PM'],
    thesis:
      'Joined the core team of an early-stage subscription-first tiffin marketplace and helped move it from idea to a live pilot with paying users, working vendors and reliable delivery.',
    image: bellybox,
    heroBg: 'bg-blush-soft',
    facts: [
      { label: 'Role', value: 'Core team · vendor ops · PM thinking' },
      { label: 'Stage', value: 'Early pilot · ~30+ daily meals' },
      { label: 'Users', value: 'Hostel students, PG residents, early professionals' },
    ],
    sections: [
      {
        kicker: 'Context',
        heading: 'Reliable home food, on a subscription.',
        body: [
          'BellyBox is a subscription-first tiffin marketplace delivering fresh home-cooked meals from trusted local kitchens. I joined to learn how a business actually runs on the ground — not just theoretically — and stayed because there was a real problem worth solving.',
        ],
      },
      {
        kicker: 'What we learned',
        heading: '30+ user interviews. One sharp insight.',
        body: [
          'Through 30+ customer interviews and surveys with hostel students, PG residents and early working professionals, the core insight came through clearly:',
          '“Users wanted daily reliability — not one-time food delivery.” That single insight reshaped the pricing model, the subscription tiers and how we onboarded vendors.',
        ],
      },
      {
        kicker: 'What I drove',
        heading: 'Vendor onboarding, pricing, ops.',
        body: [
          [
            'Vendor onboarding: 3 kitchens onboarded, sequenced by reliability',
            'Pricing & subscription model design (vendors valued predictability over one-time orders)',
            'Last-mile coordination with riders and partners (Porter / Shadowfax)',
            'Customer acquisition focused on a single hostel cluster first',
            'Retention focused on consistency, not discounts',
          ],
        ],
      },
    ],
    outcome: {
      headline: 'A live pilot, learning loop running.',
      metrics: [
        { value: '~30+', label: 'Daily home-cooked meals' },
        { value: '3', label: 'Kitchens onboarded' },
        { value: '8+', label: 'Riders / partners' },
        { value: '30+', label: 'User interviews & surveys' },
      ],
      note: 'I was part of the core team, not the founder — the work here was operating, not owning the company.',
    },
    lenses: {
      pm: 'A textbook early-stage PM moment: real users, hard interviews, narrow focus, and a model that changed because users told us what reliability actually meant.',
      fo: 'Operated in true ambiguity — no predefined system, vendors weren’t structured businesses, ops had to be built from scratch. Founder’s Office energy on a small-but-real surface.',
    },
  },

  'miniorange': {
    slug: 'miniorange',
    title: 'MiniOrange: where product, growth & clients met.',
    tags: ['Product · Growth · Clients'],
    thesis:
      'Early product + growth + client exposure — moved security products toward better discoverability and tightened client-facing execution across sales, billing and support.',
    image: miniorange,
    heroBg: 'bg-pale-blue',
    facts: [
      { label: 'Role', value: 'Business Analyst Intern' },
      { label: 'Company', value: 'MiniOrange · IAM (SSO + MFA)' },
      { label: 'Duration', value: 'Apr ’22 — Jun ’22 · Pune' },
    ],
    sections: [
      {
        kicker: 'Problem',
        heading: 'Strong product, soft discoverability.',
        body: [
          'MiniOrange had powerful security products but discoverability and client-facing execution were uneven. The work split cleanly into analytical (positioning, content) and executional (campaigns, client coordination).',
        ],
      },
      {
        kicker: 'What I did',
        heading: 'Analytical + executional, in parallel.',
        body: [
          [
            'Keyword research and competitor benchmarking',
            'Identified content gaps; designed a Joomla content strategy',
            'Tracked SEO performance: rankings, impressions',
            'Ran WhatsApp + Email campaigns end-to-end',
            'Coordinated 3+ clients across Sales, Billing and Support',
          ],
        ],
      },
    ],
    outcome: {
      headline: 'Discoverability up. Execution tighter.',
      metrics: [
        { value: '+10%', label: 'SEO rankings' },
        { value: '+5%', label: 'Impressions' },
        { value: '3+', label: 'Clients coordinated end-to-end' },
      ],
    },
    lenses: {
      pm: 'Early but real exposure to product positioning, content strategy and how growth signals turn into product decisions.',
      fo: 'Cross-functional from day one — sat between Sales, Billing and Support to make client outcomes happen, not just tickets get closed.',
    },
  },
};
