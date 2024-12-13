import React from 'react';

type ColumnContent = {
  id: string;
  content: React.ReactNode;
};

type MultiColumnLayoutProps = {
  columns: ColumnContent[];
  flex?: string
  
};

const MultiColumnLayout: React.FC<MultiColumnLayoutProps> = ({ columns, flex }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-${columns.length} lg:grid-cols-${columns.length} gap-4 ${flex}`}>
      {columns.map((column) => (
        <div key={column.id} className="p-2">
          {column.content}
        </div>
      ))}
    </div>
  );
};

export default MultiColumnLayout;
