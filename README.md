# UberTeach plugin（Codex／ChatGPT）

讓 AI 助手在 UberTeach 院內工具平台上做事時，知道**每一步該讀平台契約的哪一章**，並附上連接與建立應用用的指令。
規則不在這裡：一律從平台即時讀取（`llms.txt`，一章一章讀）。

> **這個 repo 是產生出來的，不要直接改。**正本在平台的程式碼庫 `plugins/uberteach/`，
> 用 `scripts/plugin-build.mjs` 產生後推到這裡。

## 安裝

- **院方 ChatGPT 工作區的帳號**：工作區管理員已經裝好，開一個新對話就能用。
- **個人帳號**：
  ```
  codex plugin marketplace add https://github.com/s19003045/uberteach-codex-plugin
  ```
  或請 AI 助手代裝。裝好之後要**開一個新的對話**才看得到。
