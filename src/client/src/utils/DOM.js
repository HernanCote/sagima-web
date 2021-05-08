import { uniq } from './core';

const GRADIENTS = {
    gold: 'url(#gold)',
    silver: 'url(#silver)',
    bronze: 'url(#bronze)',
    default: 'rgba(255, 255, 255, 0.5)',
};

const TAG_BLACKLIST = [
    'form',
    'title',
    'head',
    'link',
    'meta',
    'title',
    'body',
    'source',
    'input',
    'select',
    'button',
    'style',
    'shadow',
    'slot',
    'template',
];

const ATTR_WHITELIST = [
    'alt',
    'allow',
    'autoplay',
    'buffered',
    'class',
    'crossorigin',
    'controls',
    'data',
    'download',
    'height',
    'href',
    'loop',
    'muted',
    'name',
    'preload',
    'sandbox',
    'src',
    'style',
    'target',
    'title',
    'type',
    'width',
    'data-did',
    'data-href',
    'type',
    'start',
];

const EMBEDDED_CONTENT_VALIDATOR = [
    {
        // Whitelist script that styles Twitter's embedded content
        regexp: /<(script)(.*)>((.|\n)*<\/\1>)?/gm,
        replacer: (matchedStr, ...results) => {
            const attribs = results[1];
            const twitterRegExp = /src="https:\/\/platform\.twitter\.com\/widgets\.js"/mg;

            return (twitterRegExp.test(attribs)) ? matchedStr : '';
        },
    },
    {
        // Make sure we only use youtube-nocookie.com for Youtube's iframes
        regexp: /<iframe.+<\/iframe>/gm,
        replacer: (matchedStr) => {
            const youtubeDomainRegex = /src="https:\/\/\w{0,3}\.?youtube\.com\/embed\/\w*/gm;
            const youtubeDomainReplace = /youtube\.com/gm;

            return (youtubeDomainRegex.test(matchedStr))
                ? matchedStr.replace(youtubeDomainReplace, 'youtube-nocookie.com')
                : matchedStr;
        },
    },
];

// This regex finds attrib="value" or attrib='value' patterns.
// $1 and $2 are attrib and value respectively.
export const tagAttribsRegex = /(\s+\S+)=(["']((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["'])/g;

// this regex removes unwanted tags such script, style,
// document, forms and shadow dom related tags.
export const scriptRegex = (tags = []) => new RegExp(`<(${tags.join('|')})[^>]*>((.|\n)*</\\1>)?`, 'g');

/**
 * Removes all attributes from tags on an HTML string
 * except the ones expecified in exceptions array.
 *
 * @param {string} htmlString - A Raw HTML string
 * @param {string[]} exceptions - The attributes to keep
 */
const clearHTMLAttributes = (htmlString, exceptions = []) => {
    if (!htmlString) return '';

    return htmlString
        .replace(tagAttribsRegex, (match, p1, p2) => (exceptions.includes(p1.toLowerCase().trim()) ? `${p1}=${p2}` : ''))
        .replace(/^\s*[\r\n]/gm, '') // remove empty lines
        .replace(/<table(.*)?(style="(.*))?(border:.*;)?(.*)?border="."(.*)?>/gi, // remove border attributes from tables
            (...args) => {
                const [, g1 = '', , g3 = '', g4 = '', g5 = '', g6 = ''] = args;

                return `<table${g1} style="${g3} ${g4}" ${g5} ${g6}>`;
            });
};

/**
 * Removes all tags HTML string except the ones expecified in exceptions array.
 *
 * @param {string} htmlString - A Raw HTML string
 * @param {string[]} additions - Additional tags to blacklist
 */
const clearHTMLTags = (htmlString, additions = []) => {
    if (!htmlString) return '';

    return EMBEDDED_CONTENT_VALIDATOR.reduce((
        acc,
        { regexp, replacer },
    ) => acc.replace(regexp, replacer),
        htmlString)
        .replace(scriptRegex(uniq([...additions, ...TAG_BLACKLIST]).filter(x => x)), '')
        .replace(/^\s*[\r\n]/gm, '') // remove empty lines
};

const addBlankToAnchorTags = (htmlString) => {
    if (!htmlString) return '';

    // Open links in different tab, replacing href's
    // with the target and actual link

    return htmlString.replace(/\s+href=/gi, ' target="_blank" href=');
};

export {
    ATTR_WHITELIST,
    TAG_BLACKLIST,
    clearHTMLAttributes,
    clearHTMLTags,
    addBlankToAnchorTags,
    GRADIENTS,
};