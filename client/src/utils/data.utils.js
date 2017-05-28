import isUrl from 'is-url';
import urlLibrary from 'url';

/* eslint-disable import/prefer-default-export */
export function getDataSafely(object, keys) {
  return keys.reduce((prev, current) => {
    if (!prev) return null;
    return prev[current];
  }, object);
}

export function parseGoogleSpreadsheetsUrl(url) {
  const dto = {
    error: 'Wrong url',
  };

  if (isUrl(url)) {
    const parsedUrl = urlLibrary.parse(url);
    const parts = parsedUrl.pathname.split('/');

    const isValid = parsedUrl.host === 'docs.google.com'
      && parts.length >= 4
      && parts[3].length === 44
      && parts[1] === 'spreadsheets';

    if (isValid) {
      dto.address = url;
      dto.id = parts[3];
      dto.error = false;
    }
  }

  return dto;
}
