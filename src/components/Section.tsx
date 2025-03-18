import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl text-gray-800 mb-4">{title}</h2>
      {children}
    </div>
  );
} 