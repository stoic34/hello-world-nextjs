import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  target?: string;
}

export default function Button({ href, children, variant = 'primary', target = '_blank' }: ButtonProps) {
  const baseStyles = 'px-5 py-2.5 rounded-full text-decoration-none inline-flex items-center transition-colors duration-200';
  
  const variants = {
    primary: 'bg-[#0077B5] text-white hover:bg-[#0066a3]',
    secondary: 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50'
  };

  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </a>
  );
} 