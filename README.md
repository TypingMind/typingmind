<h2 align="center">
  <img height="150" alt="Typing Mind - A better UI for ChatGPT" src="https://www.typingmind.com/banner.png" />
<br/>
Static Self-host Version
</h2>
<div align="center">

  Typing Mind is the most advanced Chat UI frontend for AI models like ChatGPT, Claude, Gemini, and open-source models
  <br/>
  
  <img alt="Users: 18,000+" src="https://img.shields.io/badge/users-18%2C000%2B-green">
  <a href="https://www.typingmind.com/discord">
    <img alt="Discord" src="https://img.shields.io/discord/1087527241505853520?style=flat&logo=discord">
  </a>
  <img alt="Uptime Robot ratio (30 days)" src="https://img.shields.io/uptimerobot/ratio/m796342452-0b8b12da5c8a5f4bd1df4fbb">
  <img alt="Documentations" src="https://img.shields.io/badge/Documentations-black?logo=readthedocs">
  <a href="https://setapp.com/apps/typingmind">
    <img alt="Setapp Rating: 91%" src="https://img.shields.io/badge/Setapp-946%20ratings-green?logo=setapp">
  </a>
  <a href="https://www.producthunt.com/posts/typing-mind?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-typing-mind">
    <img alt="Product Hunt: Product of the Day" src="https://img.shields.io/badge/Product%20of%20The%20Day-%231-orange?logo=producthunt">
  </a>
  <a href="https://x.com/TypingMindApp">
    <img alt="X (formerly Twitter) Follow" src="https://img.shields.io/twitter/follow/TypingMindApp">
  </a>
<br/>
</div>


<img width="1360" alt="Screenshot of Typing Mind app" src="https://github.com/TypingMind/typingmind/assets/4214509/d9c4a4df-51ba-4f36-8406-33c1e6f7ee1c">

<div align="center">
  <a href="https://www.producthunt.com/posts/typing-mind?utm_source=badge-featured&amp;utm_medium=badge&amp;utm_souce=badge-typing-mind" target="_blank"><img src="https://www.typingmind.com/assets/product-hunt/featured.svg" alt="Typing Mind - A better UI for ChatGPT | Product Hunt" width="250" height="54" style="width: 250px; height: 54px;"></a>
  <a href="https://www.producthunt.com/posts/typing-mind?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-typing-mind" target="_blank"><img src="https://www.typingmind.com/assets/product-hunt/top-post-badge.svg" alt="Typing Mind - A better UI for ChatGPT | Product Hunt" width="250" height="54" style="width: 250px; height: 54px;"></a>
</div>

## 📜 Features
- 🤖 Support multi models:
  - ChatGPT, Claude, Gemini, Azure OpenAI, Perplexity AI, Mixtral AI, LLama
  - Adding custom endpoint, custom models (e.g., Open Router), and locally hosted models (e.g., LocalAI, Ollama)
  - Custom model parameters: Temperature, Frequency_penalty, Presence_penalty, Top_P, Top_K, etc.
- 🚀 Advanced Features: GPT-4 Vision, Document Uploads, DALL-E 3, Web Search, Text-to-Speech, Whipsper, Plugins
- 💬 Chat Management:
  - Tags, Search, Folders, Share, Backup & Sync, Import/Export, Migrate from ChatGPT
  - Fork Chat (conversation branching), Edit Message, Pin
- 📚 Prompt Library (with template variable support), AI Characters, Output Control, Dynamic Context Limit
- 🔐 Secure and private by default: API keys encryption, set password, self-host
- 🖥️ Beautiful and Functional User Interface:
  - Voice Input, Text-to-Speech, Sound Notification
  - Light/Dark mode, Hotkeys, Responsive & Mobile Friendly, Wide Screen Support
- 🧩 Integrations: Web Search, Plugins System (develop your own plugins), Search Keyword Suggestions
- 🇺🇸 Multilingual:
  - 🇺🇸 English 🇩🇪 German, 🇨🇳 Mandarin, 🇻🇳 Vietnamese, 🇬🇷 Greek, 🇫🇷 French, 🇮🇹 Italian
  - 🇷🇺 Russian, 🇺🇦 Ukrainian, 🇪🇸 Spanish, 🇵🇹 Portuguese, 🇱🇺 Luxembourgish
- 📦 [Typing Mind Custom](https://custom.typingmind.com/) (for teams):
  - Host a customized version of Typing Mind with custom branding, self-host, customized UI
  - Team sharing: Prompts Library, AI Characters
  - User Management, Access Control, Connect Internal Data, APIs


## 👋 Overview

Typing Mind is a Chat UI frontend that allows you to use AI chats from all popular AI models with your API key (ChatGPT, Claude, Azure OpenAI, Gemini, etc.).

By using the API key with a Chat UI frontend like Typing Mind, you unlock the following benefits:

- You only pay for what you use (instead of a monthly subscription like ChatGPT Plus)
- Your chat conversation will NOT be used for training by OpenAI/Claude/etc.
- Chat with multiple models conveniently within a unified interface
- Enjoy a professional, advanced chat UI with tons of features

Typing Mind is **offline first** and **private by default**. All your data, messages, and API keys are stored locally on your device, and no one can see them except you.

This is the _Static Self-host Version_ of Typing Mind ([www.typingmind.com](https://www.typingmind.com/)). By running the static self-host version, you can use Typing Mind from your private server or from a local device. Typing Mind is free to use with some basic features, a license key is needed to unlock all advanced features. See our [pricing plans](https://www.typingmind.com/pricing) for more information.

## 🚀 Getting started

To run the app locally on your device or private server:

1. Clone the repo
2. Install dependencies: `yarn install` or `npm install`
3. Start the server: `yarn start` or `npm run start`
4. App will run at `localhost:3000` by default.

Optionally, you can use any other static web server to host the `src` folder.

**Note**: if you run the app on hostnames other than `localhost`, you must use HTTPS to make sure all app features work.

## 🔗 Connect to local models

1. Open the app
2. Click the model dropdown → Model Settings → Add Custom Models
3. Enter your custom model details: Endpoint, Model ID. Custom headers and body parameters are supported.
4. Click "Test" and then "Add Model".

If you face CORS issue, make sure to run your local model in CORS mode.

Read the official documents:
- [Set up local models with Local AI (LLama, GPT4All, Vicuna, Falcon, etc.)](https://docs.typingmind.com/chat-models-settings/set-up-local-models-with-local-ai-(llama-gpt4all-vicuna-falcon-etc.))
- [Use with Azure OpenAI](https://docs.typingmind.com/chat-models-settings/use-azure-openai)
- [Use with OpenRouter Models](https://docs.typingmind.com/chat-models-settings/use-openrouter-models)
- [Use with Fine-tunned models (OpenAI)](https://docs.typingmind.com/chat-models-settings/fine-tuning-models)
- [Use with Mixtral AI](https://docs.typingmind.com/chat-models-settings/use-with-mistral-ai)
- [Use with Perplexity AI](https://docs.typingmind.com/chat-models-settings/use-with-perplexity-ai)


## 📸 Screenshots

| Home page     | GPT-4 Vision | Custom Models |
|---------------|--------------|---------------|
|  <img width="1284" alt="Xnapper-2024-02-09-23 43 05" src="https://github.com/TypingMind/typingmind/assets/4214509/5e7e288e-8ecc-4706-a2d2-d39a50669058"> | <img width="1284" alt="gpt4 vision" src="https://github.com/TypingMind/typingmind/assets/4214509/fe55a28a-8f05-431c-8ce1-859be0236c73"> |     <img width="1283" alt="custom model" src="https://github.com/TypingMind/typingmind/assets/4214509/aa311abd-6314-49d4-a413-cb0e9bdf617d">  |

| AI Characters | Voice Input  | Plugins       |
|---------------|--------------|---------------|
| <img width="1284" alt="ai characters" src="https://github.com/TypingMind/typingmind/assets/4214509/12570e1f-0015-4b08-8355-70d77b177421"> | <img width="1284" alt="voice input" src="https://github.com/TypingMind/typingmind/assets/4214509/bc8f79f7-571d-4c94-ab69-e75e7b129992"> | <img width="1284" alt="plugins" src="https://github.com/TypingMind/typingmind/assets/4214509/9c0945d2-957b-4a41-83a4-c02968c7bed9"> |

## 📝 Updates & Changelogs

To update, simply `git pull` and restart your server.

Change logs are available here: https://www.typingmind.com/changelog

_The static self-host version updates are delayed from 1 or 2 versions compared to the latest versions on [www.typingmind.com](https://www.typingmind.com)_

## 💡 Feedback / Ideas / Bugs

Please submit your ideas to https://www.typingmind.com/ideas

For bug reports and customer support, please contact support@typingmind.com

## ❓ FAQs

<details>
<summary>
<b>What is self-hosting?</b>
</summary>

Self-host means you deploy the same version of TypingMind.com on your own web hosting server and domain name for your personal use.
</details>

<details>
<summary>
<b>Why self-hosting? What are the benefits?</b>
</summary>

Some people prefer to run the software on their own server for privacy and availability reasons. For example, if TypingMind.com becomes inaccessible in the future, you can still access your own version of TypingMind from your server without any problem. The self-host version can also be run locally like an app.
</details>

<details>
<summary>
<b>What can I customize in the self-host version?</b>
</summary>

As of now, you cannot customize anything. The self-host version will be exactly the same as the one you are using on TypingMind.com. If you are looking for a more flexible and customizable way to use Typing Mind, check out <a href="https://custom.typingmind.com">https://custom.typingmind.com</a>.
</details>

<details>
<summary>
<b>Where can I deploy my self-host version?</b>
</summary>

Anywhere! You can deploy it on your own server, or on a static web cloud service like GitHub Pages, Cloudflare Pages, AWS S3, Vercel, Netlify, Heroku, etc. You can even run it on localhost.
</details>

<details>
<summary>
<b>Do I have access to the full source code if I want to self-host?</b>
</summary>

No. The license key only grants you permission to use and deploy the app on your own server. You do not have permission to modify or redistribute the code. The full source code is not available for sale as the app is not open-source. You will only receive the compiled code of the app, you can deploy the app anywhere without having to update any code or settings.
</details>

<details>
<summary>
<b>How do I receive updates for the self-host version?</b>
</summary>

Simply clone or pull the latest changes from the GitHub repo (https://github.com/TypingMind/typingmind), then restart your server.
</details>

<details>
<summary>
<b>Do I still need a License Key and Open API Key to use the self-hosted version?</b>
</summary>

<p>Yes. Both are needed, as the self-hosted version is exactly the same as the version you see on TypingMind.com. The License Key is needed in the self-host version. When you enter the license key, the app will connect to TypingMind's license server to verify your license.</p>
</details>

<details>
<summary>
<b>Can I let my team/community/customers use the self-host version?</b>
</summary>

<p>You can, but keep in mind that they will also need a TypingMind License Key and OpenAI API Key in order to use it. If you are looking to use Typing Mind for a team check out <a href="https://custom.typingmind.com">https://custom.typingmind.com</a></p>
</details>

<details>
<summary>
<b>Can I embed my License Key/API key to the self-host version somehow and let my team/community/customers use it?</b>
</summary>

<p>No you can't, and you shouldn't. It's not safe to share your License Key and API Key with the public like that. The Static App Self-host version is meant for personal use. If you are looking to set up a custom deployment of TypingMind for your team/community/customers, please check out <a href="https://typingmind.com/custom">https://typingmind.com/custom</a></p>
</details>

<details>
<summary>
<b>Can I have support on technical issues if I self-host?</b>
</summary>

<p>The self-host version comes for free when you buy a license key. There is no support on technical issues if you self-host. If you don't have the technical skills to set up the self-host version, we recommend using the hosted version on <a href="https://typingmind.com">https://typingmind.com</a> instead. You can also check out Typing Mind Custom for easier setup with custom branding and manage team members: <a href="https://custom.typingmind.com/">https://custom.typingmind.com</a></p>
</details>

<details>
<summary>
<b>What permissions do I have with the self-host code?</b>
</summary>

<ul>
<li>✅ You have access to the compiled code of the app.</li>
<li>✅ You have permission to deploy and use the compiled code on your own server.</li>
<li>❌ You do not have permission to modify or redistribute the compiled code.</li>
<li>❌ You do not have permission to share or resell the compiled code.</li>
</ul>
</details>
