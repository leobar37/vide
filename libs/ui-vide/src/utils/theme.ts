import { get } from 'lodash';
/**
 *
 * @param path
 * @param defaultValue : alternative value if path no exist
 * @returns : the token present in default theme of chackra
 */
export const getToken = (path: string, defaultValue?: any) => {
  return (props: any) => get(props.theme, path, defaultValue);
};
