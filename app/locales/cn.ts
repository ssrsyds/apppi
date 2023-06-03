import { SubmitKey } from "../store/config";

const cn = {
  WIP: "GPT4及绘画正在筹划中……",
  Error: {
    Unauthorized:
      "## ⛔ChatGPT公益版-支持联网🌐\n**任意任意！！联系客服打赏5-10元任意金额即可免费无次数限制，无期限使用（免费使用全部功能！）！！**\n## ⭐无期限无限制免费使用！！！\n-🧧[点击添加客服微信-领取邀请码](http://aai.yjie.fun/12.jpg)\n使用效果预览：[点击查看](http://47.115.219.124:8080/directlink/Ali/yulan.mp4)\n## 问题汇总\n> 添加客服微信领取：Yueyi_Wife\n功能反馈：2337971460\n\n![](http://aai.yjie.fun/12.jpg)",
  },
  ChatItem: {
    ChatItemCount: (count: number) => `${count} 条对话`,
  },
  Chat: {
    SubTitle: (count: number) => `与 ChatGPT 的 ${count} 条对话`,
    Actions: {
      ChatList: "查看消息列表",
      CompressedHistory: "查看压缩后的历史 Prompt",
      Export: "导出聊天记录",
      Copy: "复制",
      Stop: "停止",
      Retry: "重试",
      Delete: "删除",
    },
    Rename: "重命名对话",
    Typing: "正在输入ing…",
    Input: (submitKey: string) => {
      var inputHints = `${submitKey} 发送`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，Shift + Enter 换行";
      }
      return inputHints + "输入 / 自动续写";
    },
    Send: "发送",
    Config: {
      Reset: "清除记忆",
      SaveAs: "存为应用",
    },
  },
  Export: {
    Title: "导出聊天记录为 Markdown",
    Copy: "全部复制",
    Download: "下载文件",
    MessageFromYou: "来自你的消息",
    MessageFromChatGPT: "来自 ChatGPT 的消息",
  },
  Memory: {
    Title: "历史摘要",
    EmptyContent: "对话内容过短，无需总结",
    Send: "自动压缩聊天记录并作为上下文发送",
    Copy: "复制摘要",
    Reset: "重置对话",
    ResetConfirm: "重置后将清空当前对话记录以及历史摘要，确认重置？",
  },
  Home: {
    NewChat: "新的聊天",
    DeleteChat: "确认删除选中的对话？",
    DeleteToast: "已删除会话",
    Revert: "撤销",
  },
  Settings: {
    Title: "设置",
    SubTitle: "设置选项",
    Actions: {
      ClearAll: "清除所有数据",
      ResetAll: "重置所有选项",
      Close: "关闭",
      ConfirmResetAll: "确认重置所有配置？",
      ConfirmClearAll: "确认清除所有数据？",
    },
    Lang: {
      Name: "Language", // ATTENTION: if you wanna add a new translation, please do not translate this value, leave it as `Language`
      All: "所有语言",
      Options: {
        cn: "简体中文",
        en: "English",
        tw: "繁體中文",
        es: "Español",
        it: "Italiano",
        tr: "Türkçe",
        jp: "日本語",
        de: "Deutsch",
        vi: "Vietnamese",
        ru: "Русский",
        cs: "Čeština",
      },
    },
    Avatar: "头像",
    FontSize: {
      Title: "字体大小",
      SubTitle: "聊天内容的字体大小",
    },

    Update: {
      Version: (x: string) => `轻工具`,
      IsLatest: "分享有用的轻工具",
      CheckUpdate: "加载",
      IsChecking: "加载中...",
      FoundUpdate: (x: string) => `分享有用的轻工具`,
      GoToUpdate: "立即前往",
    },
    SendKey: "发送键",
    Theme: "主题",
    TightBorder: "无边框模式",
    SendPreviewBubble: {
      Title: "预览气泡",
      SubTitle: "在预览气泡中预览 Markdown 内容",
    },
    Mask: {
      Title: "应用启动页",
      SubTitle: "新建聊天时，展示GPT应用启动页",
    },
    Prompt: {
      Disable: {
        Title: "禁用提示词自动补全",
        SubTitle: "在输入框开头输入 / 即可触发自动补全",
      },
      List: "自定义提示词列表",
      ListCount: (builtin: number, custom: number) =>
        `内置 ${builtin} 条，用户定义 ${custom} 条`,
      Edit: "编辑",
      Modal: {
        Title: "提示词列表",
        Add: "新建",
        Search: "搜索提示词",
      },
      EditModal: {
        Title: "编辑提示词",
      },
    },
    HistoryCount: {
      Title: "附带历史消息数",
      SubTitle: "每次请求携带的历史消息数",
    },
    CompressThreshold: {
      Title: "历史消息长度压缩阈值",
      SubTitle: "当未压缩的历史消息超过该值时，将进行压缩",
    },
    Token: {
      Title: "API Key",
      SubTitle: "此选项非专业无需填写",
      Placeholder: "无需填写",
    },

    Usage: {
      Title: "项目版本",
      SubTitle(used: any, total: any) {
        return `版本:3.0_多功能联网版`;
      },
      IsChecking: "项目版本",
      Check: "重新检查",
      NoAccess: "版本:2.0_多功能公益版",
    },
    AccessCode: {
      Title: "🔒授权码🔒",
      SubTitle: "捐赠任意金额授权",
      Placeholder: "请输入获取的授权码",
    },
    Model: "模型(勿改)",
    Temperature: {
      Title: "随机性",
      SubTitle: "值越大，回复越随机",
    },
    MaxTokens: {
      Title: "单次对话字数限制",
      SubTitle: "单次交互所用的最高字数",
    },
    PresencePenlty: {
      Title: "话题新鲜度 (presence_penalty)",
      SubTitle: "值越大，越有可能扩展到新话题，太高会导致乱码",
    },
  },
  Store: {
    DefaultTopic: "新的聊天",
    BotHello: "> 💥💥联网问答已推出,点击下方WIFI按钮开启即可,不使用时请手动关闭！\n\n问答汇总-FAQ\n---[点击查看问题汇总](https://wx.yjie.fun/ai/)\n\n安卓桌面版：[立即下载](https://wwvn.lanzoul.com/i5Qp30xtta1i?w1)\nIOS桌面版：[立即安装](http://47.115.219.124:8080/directlink/Ali/x346947-WebClip230531-181502-4t9.mobileconfig)\nWindows桌面版：请自行通过浏览器添加桌面快捷方式",
    Error: "出错了，稍后重试吧",
    Prompt: {
      History: (content: string) =>
        "这是 ai 和用户的历史聊天总结作为前情提要：" + content,
      Topic:
        "使用四到五个字直接返回这句话的简要主题，不要解释、不要标点、不要语气词、不要多余文本，如果没有主题，请直接返回“闲聊”",
      Summarize:
        "简要总结一下你和用户的对话，用作后续的上下文提示 prompt，控制在 200 字以内",
    },
  },
  Copy: {
    Success: "已写入剪切板",
    Failed: "复制失败，请赋予剪切板权限",
  },
  Context: {
    Toast: (x: any) => `已设置 ${x} 条前置上下文`,
    Edit: "当前对话设置",
    Add: "新增预设对话",
  },
  Plugin: {
    Name: "插件",
  },
  Mask: {
    Name: "GPT应用",
    Page: {
      Title: "全部功能",
      SubTitle: (count: number) => `${count} 个ChatGPT应用`,
      Search: "搜索GPT应用",
      Create: "新建",
    },
    Item: {
      Info: (count: number) => `包含 ${count} 条预设对话`,
      Chat: "开启",
      View: "预览",
      Edit: "编辑",
      Delete: "删除",
      DeleteConfirm: "确认删除？",
    },
    EditModal: {
      Title: (readonly: boolean) =>
        `编辑预设应用 ${readonly ? "（只读）" : ""}`,
      Download: "下载应用",
      Clone: "克隆应用",
    },
    Config: {
      Avatar: "应用头像",
      Name: "应用名称",
    },
  },
  NewChat: {
    Return: "返回",
    Skip: "直接开始",
    NotShow: "不再展示",
    ConfirmNoShow: "确认禁用？禁用后可以随时在设置中重新启用。",
    Title: "海量的ChatGPT应用",
    SubTitle: "或在几秒钟内创建属于自己的应用",
    More: "立即挑选",
  },

  UI: {
    Confirm: "确认",
    Cancel: "取消",
    Close: "关闭",
    Create: "新建",
    Edit: "编辑",
  },
};

export type LocaleType = typeof cn;

export default cn;
