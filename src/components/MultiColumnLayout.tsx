import React from 'react';

type ColumnContent = {
  id: string;
  content: React.ReactNode;
};

type MultiColumnLayoutProps = {
  columns: ColumnContent[];
};

const MultiColumnLayout: React.FC<MultiColumnLayoutProps> = ({ columns }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-${columns.length} lg:grid-cols-${columns.length} gap-4`}>
      {columns.map((column) => (
        <div key={column.id} className="p-4">
          {column.content}
        </div>
      ))}
    </div>
  );
};

export default MultiColumnLayout;
