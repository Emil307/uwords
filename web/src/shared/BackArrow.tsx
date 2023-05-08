import React from 'react';
import styled from 'styled-components';

const BackArrowStyled = styled.a`
  display: block;
  transition: all .2s ease-in-out;
  &:hover {
    transform: translateX(-15px);
  }
`

interface BackArrowProps {
  href: string,
}

const BackArrow: React.FC<BackArrowProps> = ({ href }) => {
  return (
    <BackArrowStyled href={href}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="40" height="40" fill="url(#pattern0)"/>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_103_47" transform="scale(0.01)"/>
          </pattern>
        <image id="image0_103_47" width="100" height="100" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC30lEQVR4nO3cu2sUURQG8PgAER+FaCFoJSq+8AHaCoK1gr2C/gkW2mihlWJhpaCd5YKCEpAQYRWWZeZ83w4LBoUFQcs0mphgNEpGRqbKg71rcM565/vBbZePOXv3zpy9d0ZGRERERERERERERERERERERERERGT18jxfq+vorNPpHCA5SnKe5BzJsTRNj3nnqiWSJwB8IZkvGl+zLDvqna9W0jTdB2BymWL8GQBeemesjSRJdgH4uFIxyjGX5/ka76zRI7kdwLs+xShmyKx31ui1Wq0tJK1fMcqCPPPOG7Ver7cBwKuQYpCcJrnHO3O0Go3GOpKNwGLMmdlp78zRKhZmko8Di/HLzC54Z44agLuBa8aCmV32zhs1ktcDZ0YxrnrnjRrJS8W3PrAYt7zzRo3keZI/A4vxwDtv1EieAfA9cN14WtyBeWeOFoBTAGYCZ8Z48Wzinbm2zcJFI+l2u5u8M0fLzHaT/BRYjLftdnubd+ZoZVm2g+T7wGJ8ILnTO3O0kiTZSrITuIBPFj9r3pmj1W63NwJ4EzgzpvS37D/UbDbXA3gxwFO4Bv/qGkwX1zlN00P9moVPdJFZ2ZesfJQ4smxBANxXMegx48eWFIPkTRWDXj+/80u6GiRvqCAcnoKURbmnorDygqy4LUqLOj2KMWNmh3XbS/cxRfJ5lmUHgx4MSb4O/WAzO973Q2X1rRMADJx2ap1UQc3FId2rq/b7f/4H1cTExGbvzNEzs5PF2Y7Aougv3Ko2OZQnoUIWem1yqAKAcwNsA3pYSai6A3BxgI1yt73z1gKAawM8lWoraRVI3glcTxYAXKkkVJ0VzUgAjwJniY4jDNuBHQA/AJytJFidDXqkLcuyvd6ZozfIoc+i7eydtxZCj0XrnPpwvjhAL6MZombk0m0vUsnLZz4vc6c1q62nTsxsf7kt9VvZ/xpXMYaA1gsRERERERERERERERERERERERERGSn8Bibv+41L9L3GAAAAAElFTkSuQmCC"/>
        </defs>
      </svg>
    </BackArrowStyled>
  )
}

export default BackArrow