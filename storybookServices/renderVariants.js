import React from 'react';

export const VariantsComponent = ({ variants, children }) => (<>
    {variants.map(children)}
</>)