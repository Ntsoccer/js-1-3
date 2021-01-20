const list = ['掃除', '買い物', '散歩'];
const display_text = `現在持っているタスク一覧\n`;
function list_display() {
  console.log(display_text);
  for (let i = 0; i < list.length; i++) {
    console.log(`${i}:${list[i]}`);
  }
};

function listAdd(task) {
  list.push(task);
}

list_display();

let i = 2;
list_display();
while (true) {
  i++;
  const task = prompt('タスクを登録してください');
  listAdd(task);
  alert("新しいタスクを追加しました");
  console.log(`${i}:${list[i]}`);
  const text = prompt("「確認,追加,削除,終了」の4つのいずれかを入力してください");
  if (text === '確認') {
    list_display();
  } else if (text === "追加") {
    list.push(text);
  } else if (text === "削除") {
    list.splice(2);
  } else if (text === "終了") {
    break;
  } else {
    alert('エラーです');
  }
}

// function added_display(text) {
//   if (text === '確認') {
//     list_display();
//   }
//   if (text === "追加") {
//     list.push(text);
//   }
//   if (text === "削除") {
//     list.splice(2);
//   }
//   if (text === "終了") {
//     return;
//   }
// }


