const list = ['掃除', '買い物', '散歩'];
const display_text = `現在持っているタスク一覧\n`;
function list_display() {
  console.log(display_text);
  for (let i = 0; i < list.length; i++) {
    console.log(`${i}:${list[i]}`);
  }
};
list_display();
let i = 2;
list_display();
while (true) {
  i++;
  const task = prompt('タスクを登録してください');
  list_add(task);
  const added = alert("新しいタスクを追加しました");
  console.log(`${i}:${list[i]}`);
  const text = prompt("「確認,追加,削除,終了」の4つのいずれかを入力してください");
  // added_display(text);
  if (text === '確認') {
    list_display();
  }
  if (text === "追加" && !null) {
    list.push(text);
  }
  if (text === "削除") {
    list.splice(2);
  }
  if (text === "終了" && null) {
    break;
  }
}

function list_add(task) {
  list.push(task);
}

function added_display(text) {
  if (text === '確認') {
    list_display();
  }
  if (text === "追加" && !null) {
    list.push(text);
  }
  if (text === "削除") {
    list.splice(2);
  }
  if (text === "終了" && null) {
    return;
  }
}


