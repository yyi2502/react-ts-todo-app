import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App2 from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App2 />
    {/*
TODOリストをつくってみる。
・ReactHooksを使う
・TypeScriptで書く
→ anyを使用しても良いので型エラーを解消する
▼TODOリスト内の各TODOにほしい要素
　・ID(連番もしくはuuidを設定)
　・タイトル
　・ステータス(未着手、進行中、完了 など)
　・詳細
▼ほしい機能
　・TODOの追加
　・TODOの削除
　・TODOの編集機能
　・絞り込み機能(ID、期限、ステータスで絞り込み)
▼余裕があれば以下のようなカスタマイズをする
　・anyを使わずに型付けを行なう
　・期限の追加などの要素追加（期限、内容、作成日、更新日など）
　・ソート(ID、期限)
　・ステータス変更でスタイル変更
　・コンポーネント化してみる
　・MaterialUIやChakraUI、もしくはTailwind CSSを使ってみる
　・Context APIを使って状態管理
　・Firebaseまたは、Supabaseを導入してデータの永続化 
*/}
  </StrictMode>
);
