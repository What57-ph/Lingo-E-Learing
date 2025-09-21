import React, { useState } from 'react';
import TimeFrame from '../../components/tests/TimeFrame';
import MainContent from '../../components/tests/MainContent';

const HavingTestPage = () => {
    const [editMode, setEditMode] = useState(false);
    return (
        <>
            <TimeFrame editMode={editMode} setEditMode={setEditMode} />
            <MainContent editMode={editMode} />
        </>
    );
};

export default HavingTestPage;