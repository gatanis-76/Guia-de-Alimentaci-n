import React from 'react';

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ title, id, children, titleClassName = 'text-cyan-700' }) => {
  return (
    <section id={id} className="my-12 pt-4 -mt-4">
      <h2 className={`text-4xl sm:text-5xl font-black mb-6 pb-3 border-b-4 border-orange-300 ${titleClassName}`}>
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;
