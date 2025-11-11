import Hero from './components/Hero';
import Section from './components/Section';
import ProcessSteps from './components/ProcessSteps';
import Tabs from './components/Tabs';
import Accordion from './components/Accordion';
import {
  heroContent,
  processIntro,
  processSteps,
  tabsData,
  tabsDescription,
  faqItems,
} from './data/content';

const App = () => {
  return (
    <div className="min-h-screen bg-bg-subtle text-text-primary">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-12 px-4 pb-16 pt-12 sm:px-8 md:px-12 lg:gap-16">
        <Hero {...heroContent} />

        <Section
          title="Das Antragsverfahren im Überblick"
          intro={processIntro}
          className="rounded-2xl bg-card p-6 shadow-panel md:p-10 lg:p-12"
        >
          <ProcessSteps steps={processSteps} />
        </Section>

        <Section
          title="Informationsmaterial"
          intro={tabsDescription}
          className="rounded-2xl bg-card p-6 shadow-panel md:p-10 lg:p-12"
        >
          <Tabs tabs={tabsData} />
        </Section>

        <Section
          title="Häufig gestellte Fragen"
          className="rounded-2xl bg-card p-6 shadow-panel md:p-10 lg:p-12"
        >
          <Accordion items={faqItems} />
        </Section>
      </div>
    </div>
  );
};

export default App;
