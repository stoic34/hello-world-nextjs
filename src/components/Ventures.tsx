import Image from 'next/image';

interface VentureProps {
  title: string;
  role: string;
  description: string;
  impact: string;
  imageSrc: string;
  current?: boolean;
}

function VentureCard({ title, role, description, impact, imageSrc, current = false }: VentureProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border ${current ? 'border-blue-300 dark:border-blue-700' : 'border-gray-200 dark:border-gray-700'}`}>
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          className="object-cover"
        />
        {current && (
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            Current
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">{role}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{description}</p>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Impact:</h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm">{impact}</p>
        </div>
      </div>
    </div>
  );
}

export default function Ventures() {
  const ventures = [
    {
      title: 'Tario Ventures Inc.',
      role: 'President',
      description: 'A business venture focused on identifying and developing high-potential opportunities across various industries.',
      impact: 'Successfully launched and scaled multiple business initiatives, creating significant value and market impact.',
      imageSrc: '/images/placeholder.jpg',
      current: true
    },
    {
      title: 'Venture Alpha',
      role: 'Founder & CEO',
      description: 'An innovative business that revolutionized its industry through technology implementation and service optimization.',
      impact: 'Achieved substantial market share growth and established new standards for quality and efficiency.',
      imageSrc: '/images/placeholder.jpg'
    },
    {
      title: 'Strategic Partners Group',
      role: 'Managing Partner',
      description: 'A business consultancy helping entrepreneurs and established companies optimize their operations and growth strategies.',
      impact: 'Helped dozens of businesses improve their performance, resulting in measurable revenue increases and cost reductions.',
      imageSrc: '/images/placeholder.jpg'
    },
  ];

  return (
    <section id="ventures" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Ventures & Projects
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center mb-12">
          Throughout my entrepreneurial journey, I've built and developed various business ventures. Each project represents a unique challenge and opportunity to create value and meaningful impact.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ventures.map((venture, index) => (
            <VentureCard 
              key={index}
              title={venture.title}
              role={venture.role}
              description={venture.description}
              impact={venture.impact}
              imageSrc={venture.imageSrc}
              current={venture.current}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
