import { Options } from '@types';
/**
 * Formats the sql string.
 *
 * @param {String} query
 * @param {Options} opt
 * @return {String}
 */
declare const format: (query: string, opt?: Options) => string;
export default format;
