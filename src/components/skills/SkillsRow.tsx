import { motion } from 'framer-motion';
import type { ReactElement } from 'react';
import type { SkillCardConfig, SkillsAnimationConfig, SkillsLayoutConfig } from '../../types';
import SkillsPanel from '../SkillsPanel';

interface DecoratedSkillCard extends SkillCardConfig {
  icon: ReactElement;
}

interface SkillsRowProps {
  skills: DecoratedSkillCard[];
  rowIndex: number;
  isMobile: boolean;
  layout: SkillsLayoutConfig;
  animation: SkillsAnimationConfig;
}

const SkillsRow = ({ skills, rowIndex, isMobile, layout, animation }: SkillsRowProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.8, delay: 0.2 + (rowIndex * 0.1) }}
    className={`w-full ${isMobile ? 'flex flex-col gap-6' : 'flex justify-center items-start'}`}
    style={{
      gap: isMobile ? undefined : layout.gap,
      minHeight: 'auto'
    }}
  >
    {skills.map((panel, idx) => (
      <motion.div
        key={`${rowIndex}-${idx}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: (rowIndex * skills.length + idx) * animation.staggerDelay
        }}
        className={isMobile ? 'w-full' : ''}
        style={{
          minHeight: isMobile ? layout.mobileCardHeight : layout.cardHeight,
          maxHeight: isMobile ? layout.mobileCardHeight : layout.cardHeight,
          width: isMobile ? '100%' : layout.maxCardWidth,
          maxWidth: isMobile ? '100%' : layout.maxCardWidth,
          flex: 'none'
        }}
      >
        <SkillsPanel
          {...panel}
          expandRatio={isMobile ? 1 : animation.expandRatio}
          transitionDuration={animation.transitionDuration}
          isMobile={isMobile}
        />
      </motion.div>
    ))}
  </motion.div>
);

export default SkillsRow;
