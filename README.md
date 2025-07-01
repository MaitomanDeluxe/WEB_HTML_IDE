# XAS ⇄ HTML 変換ツール + エクスプローラー (XAS ⇄ HTML Conversion Tool + Explorer)

## 概要 (Overview)

このプロジェクトは、XAS (おそらく "eXtensible Article Syntax" の略か、または特定のマークアップ言語を指すカスタムフォーマット) と HTML の間で相互変換を行うためのウェブベースのツールです。リアルタイムの変換機能に加え、ファイルエクスプローラーのようなインターフェースでローカルストレージにファイルを保存・管理できます。

This project is a web-based tool for bidirectional conversion between XAS (likely standing for "eXtensible Article Syntax" or a custom markup language) and HTML. In addition to real-time conversion capabilities, it allows you to save and manage files in local storage through a file explorer-like interface.

## 主な機能 (Key Features)

  * **XAS ⇄ HTML 相互変換 (XAS ⇄ HTML Bidirectional Conversion):**

      * XAS形式の入力テキストをHTMLに変換します。
      * HTML形式の入力テキストをXASに変換します。
      * `lib/conversion-rules.json` に定義されたルールに基づいてタグと属性を変換します。
      * Converts XAS input to HTML.
      * Converts HTML input to XAS.
      * Converts tags and attributes based on rules defined in `lib/conversion-rules.json`.

  * **統合されたコードエディタ (Integrated Code Editor):**

      * CodeMirror を利用したシンタックスハイライト、行番号、自動タグ閉じ機能などを備えたXAS入力エディタ。
      * XAS input editor powered by CodeMirror, featuring syntax highlighting, line numbers, and auto-closing tags.

  * **ファイルエクスプローラー (File Explorer):**

      * ローカルストレージにファイルとフォルダを保存・管理します。
      * ファイルツリー表示で簡単にアクセスできます。
      * Save and manage files and folders in local storage.
      * Easy access through a file tree display.

  * **ファイル管理 (File Management):**

      * 新しいファイルやフォルダの追加。
      * 既存のXASファイルをエディタに読み込み。
      * Add new files or folders.
      * Load existing XAS files into the editor.

  * **拡張機能 (Extensions):**

      * `UUID Generator` のような選択可能な拡張機能を提供（概念実証）。
      * `File Merger` や `Essential Features` など、将来的な機能拡張を想定。
      * Provides selectable extensions like `UUID Generator` (proof of concept).
      * Envisions future extensions like `File Merger` and `Essential Features`.

  * **XML設定ローダー (XML Configuration Loader):**

      * `.xml` ファイルから背景色、フォント、テーマ設定（ライト/ダーク）を読み込み、UIに適用できます。
      * Can load background color, font, and theme settings (light/dark) from an `.xml` file and apply them to the UI.

  * **HTMLプレビュー (HTML Preview):**

      * 変換されたHTMLを新しいウィンドウで素早くプレビューできます。
      * Quickly preview converted HTML in a new window.

## 使用技術 (Technologies Used)

  * **HTML5**
  * **CSS3**
  * **JavaScript (ES6+)**
  * **CodeMirror:** 高機能なコードエディタライブラリ。
  * **localStorage API:** ファイルツリーのデータを永続化するために使用。
  * **DOMParser:** XML設定ファイルを解析するために使用。

## セットアップと実行 (Setup and Running)

1.  このプロジェクトのファイル一式をダウンロードまたはクローンします。

2.  プロジェクトのルートディレクトリに `lib/conversion-rules.json` ファイルが存在することを確認してください。このファイルは、XASとHTML間のタグおよび属性の変換ルールを定義します。

      * `lib/conversion-rules.json` の例:
        ```json
        {
          "tags": {
            "article-block": "div",
            "section-header": "h2",
            "para-text": "p"
          },
          "attrPrefix": "data-"
        }
        ```

3.  `index.html` ファイルをウェブブラウザで開きます。

4.  Download or clone all files for this project.

5.  Ensure that the `lib/conversion-rules.json` file exists in the project's root directory. This file defines the tag and attribute conversion rules between XAS and HTML.

      * Example `lib/conversion-rules.json`:
        ```json
        {
          "tags": {
            "article-block": "div",
            "section-header": "h2",
            "para-text": "p"
          },
          "attrPrefix": "data-"
        }
        ```

6.  Open the `index.html` file in your web browser.

## 使い方 (How to Use)

1.  **XASを入力 (Input XAS):** 上部のテキストエリアにXAS形式のコードを入力します。

2.  **HTMLに変換 (Convert to HTML):** 「⇨ HTMLに変換」ボタンをクリックすると、XASが下の読み取り専用HTMLエリアに変換されます。

3.  **HTMLを入力 (Input HTML):** 下部のテキストエリアにHTML形式のコードを入力します。

4.  **XASに変換 (Convert to XAS):** 「⇦ XASに変換」ボタンをクリックすると、HTMLが下の読み取り専用XASエリアに変換されます。

5.  **ファイルエクスプローラー (File Explorer):**

      * 「＋ 追加」ボタンで新しいファイルやフォルダを作成します。パスにはスラッシュ (`/`) を使用してフォルダ構造を定義できます（例: `my_folder/my_file.xas`）。
      * エクスプローラー内のファイル名をクリックすると、その内容がXAS入力エディタに読み込まれます。

6.  **XML設定の読み込み (Load XML Configuration):** 「ファイル名」入力フィールドの横にある「ファイルを選択」ボタン（通常は表示されないが、隣のインプット要素でトリガーされる）を使用して、テーマ設定を含むXMLファイルを読み込みます。

7.  **プレビュー (Preview):** 「👁 プレビュー」ボタンをクリックすると、変換されたHTMLコンテンツが新しいブラウザタブで開きます。

8.  **Input XAS:** Enter your XAS code in the top textarea.

9.  **Convert to HTML:** Click the "⇨ HTMLに変換" (Convert to HTML) button to convert the XAS into the read-only HTML area below.

10. **Input HTML:** Enter your HTML code in the bottom textarea.

11. **Convert to XAS:** Click the "⇦ XASに変換" (Convert to XAS) button to convert the HTML into the read-only XAS area below.

12. **File Explorer:**

      * Use the "＋ 追加" (Add) button to create new files or folders. You can use slashes (`/`) in the path to define folder structures (e.g., `my_folder/my_file.xas`).
      * Click on a file name in the explorer to load its content into the XAS input editor.

13. **Load XML Configuration:** Use the "Choose File" button next to the "ファイル名" (Filename) input field (this button is not explicitly visible but triggered by the adjacent input element) to load an XML file containing theme settings.

14. **Preview:** Click the "👁 プレビュー" (Preview) button to open the converted HTML content in a new browser tab.

## 開発ノート (Development Notes)

  * 変換ロジックは `tagMap` と `attrPrefix` に依存しており、これらは `lib/conversion-rules.json` から読み込まれます。
  * ファイルエクスプローラーのデータはブラウザの `localStorage` に保存されるため、ブラウザを閉じても状態が維持されます。
  * 拡張機能は現在、コンセプトデモンストレーションとして提供されており、完全な機能は実装されていません。
  * The conversion logic relies on `tagMap` and `attrPrefix`, which are loaded from `lib/conversion-rules.json`.
  * File explorer data is saved in the browser's `localStorage`, so the state is maintained even if you close the browser.
  * Extensions are currently provided as concept demonstrations and are not fully implemented.

## 今後の改善点 (Future Improvements)

  * より堅牢なXAS/HTMLパースと変換ロジック（正規表現ベースではなくDOM操作ベース）。
  * ファイルエクスプローラーにおける削除、名前変更、ファイルの保存機能の追加。
  * より多くの拡張機能の実装。
  * CodeMirrorのHTML出力およびXAS出力エリアへの統合。
  * Robust XAS/HTML parsing and conversion logic (DOM-based rather than regex-based).
  * Add delete, rename, and save file functionalities in the file explorer.
  * Implement more extensions.
  * Integrate CodeMirror into the HTML output and XAS output areas.
