import React from 'react';

import {
    GridContentRoot,
    GridDesktop,
    GridTablet,
    GridMobile,
} from './StyledComponents';

const GridContent = ({
    className,
    itemsDesktop,
    itemsTablet,
    itemsMobile,
    gridContent,
}) => (
        <GridContentRoot className={className}>
            <GridDesktop itemsPerRow={itemsDesktop} fullHeight fullWidth>
                {gridContent()}
            </GridDesktop>
            <GridTablet itemsPerRow={itemsTablet} fullHeight fullWidth>
                {gridContent()}
            </GridTablet>
            <GridMobile itemsPerRow={itemsMobile} fullWidth fullHeight>
                {gridContent()}
            </GridMobile>
        </GridContentRoot>
    );

export default GridContent;