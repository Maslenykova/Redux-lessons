import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
    const isPrevHidden = currentPage === 0;
    const isNextHidden = (currentPage + 1) * itemsPerPage >= totalItems;

    return (
        <div className="pagination">
            {!isPrevHidden && (
                <button className='btn' onClick={goPrev}>←</button>
            )}

            <span className="pagination__page">{currentPage + 1}</span>

            {!isNextHidden && (
                <button className='btn' onClick={goNext}>→</button>
            )}
        </div>
    );
};

export default Pagination;






