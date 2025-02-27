import React from 'react';
import AvailableOption from './AvailableOption';
import SelectedOption from './SelectedOption';

const TransferList = () => {
    return(
        <div className="transfer-list">
            <AvailableOption title="Available options"/>
            <SelectedOption title="Selected option"/>
         </div>
    )
};

export default TransferList;