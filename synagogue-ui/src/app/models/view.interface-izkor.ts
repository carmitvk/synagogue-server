export interface IzkorPerson {
  img?: string;
  name?: string;
  date?: string;
  footer?: string;
}

export interface centralIzkor {
  title?: string;
  img?: string;
  footer?: string;
}

export interface izkorView {
  central?: centralIzkor;
  izkorPersons: Array<IzkorPerson>;
  durationSec: number;
}


export const MOCK_IZKOR_VIEW_DATA: izkorView =
{
  central: {
    title: 'לעילוי נשמת',
    img: 'candle-big.webp',
    // footer: 'ת.נ.צ.ב.ה',
  },
  izkorPersons: [
    {
      img: 'candle-small.gif',
      name: 'sssss',
      date: 'כז חשון',
      footer: 'ת.נ.צ.ב.ה'
    },
    {
      img: 'candle-small.gif',
      name: 'ddd',
      date: 'ד כסלו',
      footer: 'ת.נ.צ.ב.ה'
    },
  ],
  durationSec: 5,
}


