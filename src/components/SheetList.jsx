import React from 'react';

// Components
import SheetCard from './SheetCard';

export default function SheetList(props) {

  // Props
  const { sheetList, setSheetList } = props;

  return (
    <div className='grid grid-cols-3 gap-4'>
      {sheetList.map(sheet => (
        <SheetCard
          sheetList={sheetList}
          setSheetList={setSheetList}
          sheet={sheet}
          key={sheet.id}
        />
      ))}
    </div>
  );
};