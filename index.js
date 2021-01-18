const list = ['掃除', '買い物', '散歩'];
console.log(`現在持っているタスク一覧\n`)
for (let i = 0; i < list.length; i++) {
  console.log(`${i}:${list[i]}`);
}

function list_add() {
  console.log('現在持っているタスク一覧\n')
  for (let i = 0; i < list.length; i++) {
    console.log(`${i}:${list[i]}`);
  }
  i = 2;
  while (i < list.length) {
    i++;
    const task = prompt('タスクを登録してください')
    list.push(task);
    alert("新しいタスクを追加しました");
    console.log(`${i}:${list[i]}`);
    text = prompt("「確認,追加,削除,終了」の4つのいずれかを入力してください");
  }
}

list_add();