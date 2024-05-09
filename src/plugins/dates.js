import dayjs from 'dayjs'
import objectSupport from 'dayjs/plugin/objectSupport'
dayjs.extend(objectSupport);
export default {
    excursions: {
        /**
         * принимает dates в формате массива дат(dayjs) 
         * times в формате {hours: Number, minutes: Number, seconds: Number}
         * возвращает Array<Object> { date: Object, times: Array<Object> }
         */
        concatDateAndTime(dates, times) {
            let res = []
            // если их длина не совпадает
            if (dates.length != times.length) return []

            for (let i = 0; i < dates.length; i++) {
                let date = dayjs(dates[i])
                res.push({
                    date: { year: date.$y, month: date.$M, day: date.$D },
                    times: times[i]
                })
            }

            return res
        },
        // for ExcursionPage
        getPrettyDate(dateObj) {
            const dayjsDate = dayjs({ years: dateObj.year, months: dateObj.month, date: dateObj.day })
            if (!dayjsDate.$d) return ''
            let russianDate = (new Date(dayjsDate.$d)).toLocaleDateString('ru-RU', {
              month: 'long',
              day: 'numeric',
              weekday: 'long',
            }).replaceAll(',', '').split(' ')
          
            return { weekday: russianDate[0], day: russianDate[1], month: russianDate[2] }
          }
    }
}