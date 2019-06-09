// Input:
// 11000
// 11000
// 00100
// 00011
//
// Output: 3

// Что такое остров?
// Остров - это набор единичек, причем у самой левой верхней единички сверху и слева находятся нолики
// То есть решение - это найти, сколько единичек имеют пустую клетку сверху и слева

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    //тут будет результат - кол-во островов
    let islandsCount = 0;

    // я ведь знаю, что такое чистая функция - делаем копию поля grid, чтобы не изменить его внутри функции

    let gridCopy = JSON.parse(JSON.stringify(grid));

    //это рекурсивная функция, которая стирает (заменяет единички на нолики) острова, чтобы дважды один и тот же остров не был учтен
    function destroyIsland(row, col) {
        /* проверим граничные условия */

        // если переданные координаты клетки отрицательные или больше размеров поля или в клетке нолик
        if (row < 0 || col < 0 || row >= gridCopy.length || col >= gridCopy[0].length || gridCopy[row][col] === '0') {
            // прерываем рекурсию
            return;
        }

        // раз рекурсия не прервалась, уничтожаем единичку
        gridCopy[row][col] = '0';

        //вызываем данную функцию для всех четырех направлений
        destroyIsland(row - 1, col);
        destroyIsland(row, col + 1);
        destroyIsland(row + 1, col);
        destroyIsland(row, col - 1);
    }




    // идем по всем строкам поля
    gridCopy.forEach( (row, rowIndex) => {
        //идем по всем ячейкам данной строки
        row.forEach((colValue, colIndex) => {
            // если ячейка являются частью острова
            if (colValue === '1') {
                // увеличиваем кол-во островов
                islandsCount++;
                // вызываем нашу рекурсивную функцию, которая данный остров потопит
                destroyIsland(rowIndex, colIndex);
            }

        })

    })

    return islandsCount;


};
