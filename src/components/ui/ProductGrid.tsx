interface ProductGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4;
  className?: string; // Additional classes
}

export default function ProductGrid({ children, columns = 3, className = "" }: ProductGridProps) {
  // Map column props to tailwind grid column classes explicitly 
  // so tailwind compiler successfully bundles them
  const colClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${colClasses[columns]} gap-6 ${className}`}>
      {children}
    </div>
  );
}
