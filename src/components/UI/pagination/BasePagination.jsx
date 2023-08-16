import React from 'react';
import { getPagesArray } from '../../../utils/pages';

import BaseButton from '../button/BaseButton';

const BasePagination = ({totalPages, page, changePage}) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className='pagination'>
      {pagesArray.map(p =>
        <BaseButton
          key={p}
          customClasses={page === p ? "pagination__item pagination__item--current" : "pagination__item"}
          onClick={() => changePage(p)}
        >
          {p}
        </BaseButton>
      )}
    </div>
  );
}

export default BasePagination;
