import { SiteHeader } from '@/components/SiteHeader';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/Marquee';
import { WhoIsRiya } from '@/components/sections/WhoIsRiya';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { WhyRiyaFits } from '@/components/sections/WhyRiyaFits';
import { Playground } from '@/components/sections/Playground';
import { WhatILove } from '@/components/sections/WhatILove';
import { ProofStrip } from '@/components/sections/ProofStrip';
import { Timeline } from '@/components/sections/Timeline';
import { Footer } from '@/components/sections/Footer';

const skillStrip = [
  'Product Thinking', 'Systems', 'GTM', 'User Research', 'Operations',
  'Founder’s Office', 'Experimentation', 'Data + Decisions', 'Creative Execution',
];

const Index = () => {
  return (
    <main className="min-h-screen bg-cream">
      <SiteHeader />
      <Hero />
      <Marquee items={skillStrip} className="bg-sage py-5 text-foreground" />
      <WhoIsRiya />
      <SelectedWork />
      <WhyRiyaFits />
      <Marquee
        items={['Product Strategy', 'User Research', 'GTM', 'UX/UI', 'A/B Testing', 'Roadmap', 'Stakeholder Mgmt', 'Systems Thinking', 'Creative Execution']}
        className="bg-blush py-5 text-foreground"
      />
      <Playground />
      <WhatILove />
      <ProofStrip />
      <Timeline />
      <Footer />
    </main>
  );
};

export default Index;
