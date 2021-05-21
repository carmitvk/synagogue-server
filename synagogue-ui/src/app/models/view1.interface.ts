export interface BoardRow {
  title?: string;
  value?: string;
  img?: string;
}

export interface Board {
  title?: string;
  rows?: Array<BoardRow>;
  durationSec: number;
  type?: string;
}

export interface View1 {
  title: string;
  rightTitle?: string;
  rightBoard: Array<Board>;
  leftBoard: Array<Board>;
  footer: string;
  showClock: boolean;
  showDays?: Array<number>;//sunday==1
  showDates?: Array<Date>;
  showAlways?:boolean;//TODO change it
}

export const MOCK_VIEWS_DATA: Array<View1> = [
  {
    title: 'זמני התפילות',
    rightTitle: 'פרשת נשא',
    rightBoard: [
      {
        title: 'תפילות שבת',
        rows: [
          // {title: 'כניסת שבת', value: '19:15'},
          {title: 'מנחה ערב שבת', value: '19:20'},
          {title: 'שחרית שבת', value: '08:30'},
          {title: 'סיום מסכת ברכות', value: '17:30'},
          {title: 'מנחה שבת', value: '19:00'},
          {title: 'ערבית מוצ"ש', value: '20:10'},
        ],
        durationSec: -1,
        type: 'time&text'
      }
    ],
    leftBoard: [
      {
        title: 'תפילות חול',
        rows: [
          {title: 'שחרית', value: '07:00'},
          {title: 'מנחה', value: '19:20'},
          {title: 'ערבית', value: '19:40'},
          {title: '--------', value: '--------'},
          {title: 'שיעור ביום שלישי', value: '21:00'},
        ],
        durationSec: 30,
        type: 'time&text'
      },
      {
        title: '../../../assets/imgs/keep-clean.jpg',
        type: 'image',
        durationSec: 17,
      },
      // {
      //   title: 'הודעות',
      //   rows: [
      //     {title: 'אין מדברים בשעת התפילה וקריאת התורה', img: '../../../assets/imgs/candle-book.gif'},
      //   ],
      //   durationSec: 30,
      //  type: 'time&text'
      // },
      // {
      //   title: 'הודעות',
      //   rows: [
      //     {title: 'נא לשמור על הניקיון', img: '../../../assets/imgs/clean1.gif'},
      //   ],
      //   durationSec: 30,
      //   type: 'time&text'
      // }
    ],
    footer: 'בית הכנסת רשב"י',
    showClock: true,
    showDays:[
      6,7
    ]

  },
  {
    title: 'זמני התפילות',
    rightBoard: [
      {
        title: 'תפילות חול',
        rows: [
          {title: 'תפילת שחרית', value: '07:00'},
          {title: 'מנחה', value: '19:25'},
          {title: 'ערבית', value: '19:40'},
          {title: 'שיעור ביום שלישי', value: '21:00'},
        ],
        durationSec: -1,
        type: 'time&text'
      }
    ],
    leftBoard: [
      {
        title: 'הודעות',
        rows: [
          {title: 'אין מדברים בשעת התפילה וקריאת התורה', img: '../../../assets/imgs/candle-book.gif'},
        ],
        durationSec: 5,
        type: 'time&text'
      },
      {
        title: 'הודעות',
        rows: [
          {title: 'נא לשמור על הניקיון', img: '../../../assets/imgs/clean1.gif'},
        ],
        durationSec: 10,
        type: 'time&text'
      },
      {
        title: 'סיפור חסידי',
        rows: [
          {title: `
          מעשה ברב צדיק פלוני, שבא לפניו ניסיון או הזדמנות לעשות מעשה גדול שאדם רגיל לא היה מוצא בו משמעות, ובגדולתו הנשגבת עמד בניסיון ועשה את אותו המעשה שהאדם הפשוט היה נמנע ממנו. "עיני הבדולח" עמדו לו בשעת הצורך.
      
      דפוס זה של מעשיות רווח ורגיל אצלנו, כאשר המכנה המשותף להן הוא הדגשת גדולת הצדיק והאדרת דמותו. מדובר לכאורה בדבר חיובי. ראוי להעריץ את אנשי המופת הצדיקים וללמוד מדרכיהם. סיפורי הצדיקים משרתים מטרות אלו – הם מאדירים את שם הצדיקים באמצעות סיפור גדולתם, ומשבחים את מעשיהם הטובים כדי שנלמד מהם.
      
      אולם למרבה הפלא, בתורה בפרט, ובנביאים בכלל, סיפורי הצדיקים הם לרוב סיפורים שליליים; בוודאי שהם לא הסיפורים שאנו רגילים לשמוע על דמויות מופת. דבר זה מתבטא בעוצמה בסיפורים שמספרת התורה על בני יעקב. יוסף מעלה את קנאת אחיו, ששונאים אותו ומוכנים להרוג אותו. יהודה מתחבר לאיש כנעני והולך אל קדשה. ראובן חוטא באשת אביו. לא זו בלבד שהתורה אינה מצניעה את חטאי הצדיקים, אלא שקשה לומר שהיא עושה מאמץ להאדיר את צדקותם. סיפורו של בית יעקב הוא סאגה של משברים משפחתיים. יש בו ודאי רגעים הירואים – יהודה אומר "צדקה ממני" והאחים נחלצים להצלת בנימין – אבל אנקדוטות אלו אינם מה שהיינו מצפים מסיפורי צדיקים.
        ` },
        ],
        durationSec: 10,
        type: 'time&text'
      }
    ],
    footer: 'בית הכנסת רשב"י',
    showClock: true,
    showDays:[
      1,2,3,4,5
    ]
  }
]


