// import React from 'react';

// const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
//     const isPrevPageAvailable = currentPage === 0;
//     const isNextPageAvailable = (currentPage + 1) * itemsPerPage >= totalItems;

//     return (
//         <div className="pagination">
//             <button 
//                 className= "btn"
//                 // {`btn ${isPrevPageAvailable ? 'hidden' : ''}`} 
//                 onClick={goPrev}
//                 disabled={isPrevPageAvailable && '←'}
//             >
//                 ←
//             </button>

//             <span className="pagination__page">{currentPage + 1}</span>
//             <button 
//                 className="btn"
//                 // {`btn ${isNextPageAvailable ? 'hidden' : ''}`} 
//                 onClick={goNext}
//                 disabled={isNextPageAvailable && '→'}
//             >
//                 →
//             </button>
//         </div>
//     );
// };

// export default Pagination;

import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
    const isPrevPageAvailable = currentPage > 0;
    const isNextPageAvailable = (currentPage + 1) * itemsPerPage < totalItems;

    return (
        <div className="pagination">
            {isPrevPageAvailable && (
                <button className="btn" onClick={goPrev}>
                    ←
                </button>
            )}

            <span className="pagination__page">{currentPage + 1}</span>

            {isNextPageAvailable && (
                <button className="btn" onClick={goNext}>
                    →
                </button>
            )}
        </div>
    );
};

export default Pagination;




