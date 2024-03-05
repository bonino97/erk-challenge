import { SVGProps } from 'react';

const GridIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      className='svg-icon'
      style={{
        width: '1em',
        height: '1em',
        verticalAlign: 'middle',
        fill: 'currentColor',
        overflow: 'hidden',
      }}
      viewBox='0 0 1024 1024'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d='M928 1024h-288a96 96 0 0 1-96-96v-288a96 96 0 0 1 96-96h288a96 96 0 0 1 96 96v288a96 96 0 0 1-96 96z m32-384a32 32 0 0 0-32-32h-288a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h288a32 32 0 0 0 32-32v-288z m-32-160h-288a96 96 0 0 1-96-96V96a96 96 0 0 1 96-96h288a96 96 0 0 1 96 96v288a96 96 0 0 1-96 96z m32-384a32 32 0 0 0-32-32h-288a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h288a32 32 0 0 0 32-32V96zM384 1024H96a96 96 0 0 1-96-96v-288a96 96 0 0 1 96-96h288a96 96 0 0 1 96 96v288a96 96 0 0 1-96 96z m32-384a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h288a32 32 0 0 0 32-32v-288z m-32-160H96a96 96 0 0 1-96-96V96a96 96 0 0 1 96-96h288a96 96 0 0 1 96 96v288a96 96 0 0 1-96 96z m32-384a32 32 0 0 0-32-32H96a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h288a32 32 0 0 0 32-32V96z' />
    </svg>
  );
};

export default GridIcon;
