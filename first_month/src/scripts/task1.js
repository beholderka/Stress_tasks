/* Напишите функцию getDays, которая принимает год и месяц, а возвращает
количество дней в месяце
getDays( 2021 , 4) //30
getDays( 2021 , ‘April’) //30*/

function getDays(year, month) {
    if (typeof month === 'string') {
        const monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        month = monthNames.indexOf(month.toLowerCase()) + 1;
    }
    if ((month < 1 || month > 12) || year < 1) return false;
    return new Date(year, month, 0).getDate();
}

module.exports.getDays = getDays;