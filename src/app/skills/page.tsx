'use client';

import * as React from 'react';
import { Reveal, Stagger } from '@/components/motion/Reveal';
import { portfolioData } from '@/data/portfolio';
import { SkillIcon } from '@/components/ui/SkillIcon';
import { TechnologyShowcase } from '@/components/sections/TechnologyShowcase';

const { skillsGroups } = portfolioData;

export default function Skills() {
  return (
    <>
      <TechnologyShowcase />

      <section className="section skills-body" aria-labelledby="skills-categories-heading">
        <div className="container">
          <div className="skills-head" style={{ marginBottom: 40 }}>
            <div className="kicker"><span>03</span> My tools. My craft.</div>
            <h2 id="skills-categories-heading" className="heading-lg">Technical expertise by category</h2>
            <p className="text-lead">
              A precision-driven stack for building scalable, elegant digital products. No invented
              ratings — just the tools I work with.
            </p>
          </div>
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
