import { useMemo, useState } from 'react';
import type { ProcessStep } from '../data/content';

type ProcessStepsProps = {
  steps: ProcessStep[];
};

const withAlpha = (hex: string, alpha: string) => {
  const normalizedHex = hex.replace('#', '');
  return `#${normalizedHex}${alpha}`;
};

const ProcessSteps = ({ steps }: ProcessStepsProps) => {
  const [activeStepId, setActiveStepId] = useState<string>(steps[0]?.id ?? '');

  const activeStep = useMemo(
    () => steps.find((step) => step.id === activeStepId) ?? steps[0],
    [activeStepId, steps],
  );

  const renderVisual = () => {
    if (!activeStep) return null;

    if (activeStep.visual.type === 'image' && activeStep.visual.src) {
      return (
        <img
          src={activeStep.visual.src}
          alt={activeStep.visual.caption}
          loading="lazy"
          className="h-full w-full max-w-[440px] object-contain"
        />
      );
    }

    const accent = activeStep.visual.accent;
    return (
      <div
        className="relative flex aspect-[4/3] w-full max-w-[440px] items-center justify-center overflow-hidden rounded-2xl"
        style={{
          backgroundImage: `linear-gradient(135deg, ${withAlpha(accent, '22')}, ${withAlpha(accent, 'CC')})`,
        }}
      >
        <svg width="320" height="220" viewBox="0 0 320 220" className="text-white/80">
          <rect x="20" y="20" width="280" height="180" rx="28" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="130" cy="120" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M180 85L250 55" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M190 145L260 185" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="130" cy="95" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_60%)]" />
      </div>
    );
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="flex items-center justify-center rounded-2xl border border-border/60 bg-white p-6 shadow-panel md:px-10 md:py-8">
        <div className="flex w-full items-center justify-center">{renderVisual()}</div>
      </div>

      <div className="space-y-4">
        {steps.map((step, index) => {
          const isActive = step.id === activeStep?.id;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStepId(step.id)}
              aria-pressed={isActive}
              className={`w-full rounded-2xl border border-transparent px-6 py-5 text-left transition hover:bg-white hover:shadow-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30 md:px-8 ${
                isActive ? 'bg-white shadow-panel' : 'bg-transparent'
              }`}
              style={{
                borderLeft: `4px solid ${isActive ? step.accent : '#E5E7EB'}`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="text-lg font-semibold" style={{ color: step.accent }}>
                  {index + 1}.
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
                  <p className="text-base leading-relaxed text-text-muted">{step.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessSteps;
