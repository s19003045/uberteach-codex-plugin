---
name: uberteach-new-app
description: 在 UberTeach 平台做一個新的院內工具時用：查有沒有現成的、選官方做法、建立應用與程式碼倉庫、第一次存到雲端。還沒連上平台先用 uberteach-connect。
---

# 在 UberTeach 做一個新工具

**規則只有一份：平台上的契約（llms.txt）。**這份 skill 只告訴你讀哪幾章、用哪支附帶的指令。一律一章一章讀。

`<這個資料夾>` 是這份 SKILL.md 所在的資料夾（完整路徑去掉 `SKILL.md`；Windows 也用 `/`）。

**一個指令只讀一章**（兩章放在同一個指令裡，加起來就超過讀取工具的上限，會被截掉）。
每一章的輸出最後一行是「（第 N 章到此結束）」；**沒看到這一行、或看到 `truncated`／`omitted` 之類的省略標記，就單獨再讀那一章**，不要憑記憶補。

## 做法

1. 讀專案生命週期與怎麼跟使用者說話，照著做：
   ```
   node "<這個資料夾>/scripts/read.cjs" contract 2
   ```
   ```
   node "<這個資料夾>/scripts/read.cjs" contract 2.5
   ```
2. 寫 `app-manifest.yml` 之前，先用 `uberteach-classify`（分級問診）。
3. 選做法：列出官方 skill，挑合用的讀全文（讀到的是平台**目前發佈**的版本）：
   ```
   node "<這個資料夾>/scripts/read.cjs" skills
   ```
   ```
   node "<這個資料夾>/scripts/read.cjs" skill <名稱>
   ```
   這個 plugin 裡的 `uberteach-<名稱>` skill 也會帶你讀同一份。
4. 第 2 章要你執行建立應用的那串 `node -e` 指令時，**改執行這支**（效果相同：專案鑰匙直接寫進 `~/.uberteach/git/<slug>`，只印存檔位置）：
   ```
   node "<這個資料夾>/scripts/create-app.cjs" <金鑰檔完整路徑> <slug> <A|B> "<名稱>" "<一句話說明>"
   ```
   它印出的路徑就是鐵律 2 `credential.helper` 要填的那一個。其餘步驟照第 2 章。
5. 使用者要決定「給誰用」時讀第 4.55 章；要存資料讀第 4.7 章；要讀寫 Google 試算表讀第 4.8 章。

找不到 `scripts/` 或指令跑不起來，就照契約原本的指令做；**不要自己改寫指令**。
