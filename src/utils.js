export const cn = className =>
  typeof className === 'string'
    ? className
        .split('.')
        .join(' ')
        .trim()
    : '';
