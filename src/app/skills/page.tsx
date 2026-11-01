'use client';

import * as React from 'react';
import { Reveal, Stagger } from '@/components/motion/Reveal';
import { portfolioData } from '@/data/portfolio';
import { SkillIcon } from '@/components/ui/SkillIcon';

const { skillsGroups } = portfolioData;

export default function Skills() {
  return (
    <>
      <section className="page-hero skills-hero">
        <div className="container">
          <Reveal className="skills-head">
            <div className="kicker"><span>03</span> My tools. My craft.</div>
            <h1 className="heading-xl">Technical <span className="emph">expertise.</span></h1>
          </Reveal>
          <Reveal className="skills-lead" delay={0.1}>
            <p className="text-lead">
              A precision-driven stack for building scalable, elegant digital products. No invented
              ratings — just the tools I work with.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section skills-body">
        <div className="container">
          <Stagger className="skills-grid" stagger={0.1}>
            {skillsGroups.map((group) => (
              <Reveal key={group.group} className="skills-group">
                <div className="skills-group-card">
                  <div className="skills-group-head">
                    <span className="skills-group-number">{skillsGroups.indexOf(group) + 1}</span>
                    <h3 className="skills-group-title">{group.group}</h3>
                  </div>
                  <div className="skills-items">
                    {group.items.map((item) => (
                      <div key={item.name} className="skills-item">
                        <SkillIcon name={item.icon} size={17} />
                        {item.name}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
