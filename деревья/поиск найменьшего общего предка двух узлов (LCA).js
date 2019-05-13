//находит найменьшего общего предка узлов first и second
function getLCA(root, first, second) {

  //если корень нулевой, вернуть нуль
  if ( root === null ) {
    return null;
  }

  //если в корне содержится первый или второй узел, вернуть корень
  if (root.val === first.val || root.val === second.val) {
    return root;
  }

  //начинаем поиск влево и вправо
  let leftLCA = getLCA(root.left, first, second);
  let rightLCA = getLCA(root.right, first, second);

  //рекурсия окончена, подводим итог
  //если первый и второй узлы были найдены при поиске влево и вправо
  if (leftLCA && rightLCA) {
    //вернуть корень
    return root;
  }

  //если искомый узел только в левой части
  if (leftLCA && !rightLCA) {
    //вернуть ее
    return leftLCA;
  }

  //если искомый узел только в правой части
  if (!leftLCA && rightLCA) {
    //вернуть ее
    return rightLCA;
  }

}
