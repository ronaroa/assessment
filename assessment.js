'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した要素の子どもを全て削除する
 * @param {HTMLElement} element HTMLの要素
 */
 function removeAllChildren(element) {
  while (element.firstChild) {
    // 子どもの要素があるかぎり削除
    element.removeChild(element.firstChild);
  }
}
//診断ボタンを押した時の処理
assessmentButton.onclick = () => {
  const userName = userNameInput.value;　//ユーザー入力を取得
  if (userName.length === 0) {
    // 名前が空の時は処理を終了する
    return;//入力がからだったら処理を中断
  }
  //診断結果を削除
  while (resultDivided.firstChild) {
    // 子どもの要素があるかぎり削除
    resultDivided.removeChild(resultDivided.firstChild);
  }
  // ▼ 診断結果表示エリアの作成　▼
  const header = document.createElement('h3');//設定
  header.innerText = '診断結果';//テキストを設定
  resultDivided.appendChild(header);//結果を表示

  const paragraph = document.createElement('p');
  const result = assessment(userName);//結果に名前を表示
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);

  // TODO ツイートエリアの作成
  removeAllChildren(tweetDivided);//ツイートボタンを作成
  const anchor = document.createElement('a');//aタグ作成
  const hrefValue =
  'https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw';
  anchor.setAttribute('href',hrefValue );
  anchor.className = 'twitter-hashtag-button';
  anchor.setAttribute('data-text', result);//ツイート本文
  anchor.innerText = 'Tweet #あなたのいいところ';//ボタンの表示エリア
  tweetDivided.appendChild(anchor);//aタグを表示

  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');//リンク
  tweetDivided.appendChild(script);
};


const answers = [
'{userName}のいいところはゼッケンです。{userName}の特徴的なゼッケンは皆を惹きつけ、心に残ります。',
'{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
'{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
'{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
'{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
'{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
'{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
'{userName}のいいところは頭です。その綺麗な頭から溢れ出る{userName}の良さに皆が気を惹かれます。',
'{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
'{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
'{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
'{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
'{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
'{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
'{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
'{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。',
'{ueerName}のいいところはないです、座禅の道を目指して頑張ってください',
'{userName}のいいところは優しさです。{userName}の優しい雰囲気や立ち振る舞いに多くの人が癒やされています。'
];
/** 
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */ 
 function assessment(userName) {
     // TODO 診断処理を実装する
  return '';
 }
 function assessment(userName) {
     //全文字のコード番号を取得してそれを足し合わせる
     let sumOfCharCode = 0;
     for (let i = 0; i < userName.length; i++) {
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
      }
    
      // 文字のコード番号の合計を回答の数で割って添字の数値を求める
      const index = sumOfCharCode % answers.length;
      let result = answers[index];
    
      result = result.replaceAll('{userName}', userName);
      return result;
    }
    console.assert(
        assessment('太郎') ===
        '太郎のいいところはユニークさです。太郎だけのその特徴が皆を楽しくさせます。',
        '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
      );
    console.assert(
        assessment('太郎') === assessment('太郎'),
        '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
      );
      
