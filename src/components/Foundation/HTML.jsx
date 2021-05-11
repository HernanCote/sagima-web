import React from 'react';
import styled, { css } from 'styled-components';

import {
  clearHTMLAttributes,
  clearHTMLTags,
  addBlankToAnchorTags,
} from '../../utils';

const commonListStyles = css`
    font-weight: inherit;
    margin: 1.5rem 0;
    padding: 0;
`;

const commonListItemStyles = css`
    font-weight: inherit;
    line-height: 1.25rem;
    margin-bottom: 1.5rem;
`;

const baseHTMLStyles = css`
    font-weight: 200;
    text-align: initial;

    ul {
        ${commonListStyles}
        list-style: none;

        li {
            ${commonListItemStyles}
            list-style: initial;
            margin-bottom: 0.1rem;

            &::before { 
                display: none;
            }
        }
    }

    li::before {
        content: "\u2022";
        display: inline-block;
    }
`;

const HTMLRoot = styled.article`
    ${baseHTMLStyles}
`;

const HTML = ({
  className,
  htmlText,
  exemptAttrs,
}) => {
  let curatedHtml = clearHTMLAttributes(htmlText, exemptAttrs);

  curatedHtml = clearHTMLTags(curatedHtml);
  curatedHtml = addBlankToAnchorTags(curatedHtml);

  return (
    <HTMLRoot
      className={className}
      dangerouslySetInnerHTML={{
        __html: curatedHtml,
      }}
    />
  );
};

export default HTML;
