const list = ['掃除', '買い物', '散歩'];

for (let i = 0; i < list.length; i++) {
  console.log(`${i}:${list[i]}`);
}

function list_add() {
  for (let i = 0; i < list.length; i++) {
    console.log(`${i}:${list[i]}`);
  }
  i = 2;
  while (i < list.length) {
    i++;
    text = prompt("「確認,追加,削除,終了」の4つのいずれかを入力してください");
    list.push(text);
    alert("新しいタスクを追加しました");
    console.log(`${i}:${list[i]}`);
  }
}

list_add();