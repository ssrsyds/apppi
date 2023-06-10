import { SubmitKey } from "../store/config";

const cn = {
  WIP: "已支持联网对话,GPT4及绘画正在筹划中……",
  Error: {
    Unauthorized:
      "## ChatGPT Plus\n**免费免费！！自由打赏5-6任意金额免费无次数限制，无期限使用（💥免费使用全部功能💥）！！**\n\n部分功能效果预览(点击可查看):\n1.[全网资源爬取功能演示](http://wx.yjie.fun/003.png)\n💥资源爬取功能使用须知:资源爬取功能可以爬取任何你想象不到的资源(包括外网不可描述资源)，功能全网独一家，如有别的项目可使用可联系免费授权使用\n\n2.[思维导图一键生成演示](http://wx.yjie.fun/002.png)\n3.[PPT一键生成演示](http://wx.yjie.fun/001.png)\n\n-使用效果视频预览：[点击查看](http://47.115.219.124:8080/directlink/Ali/yulan.mp4)\n-🧧联系客服：[立即领取邀请码](http://aai.yjie.fun/12.jpg)\n\n> 联系客服微信领取：Yueyi_Wife\n功能反馈：2337971460",
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
      var inputHints = `输入/激活快捷指令`;
      if (submitKey === String(SubmitKey.Enter)) {
        inputHints += "，Shift + Enter 换行";
      }
      return inputHints + "";
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
    NewChat: "New Chat",
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
        Title: "禁用快捷指令",
        SubTitle: "在输入框开头输入 / 可触发快捷指令",
      },
      List: "自定义快捷指令",
      ListCount: (builtin: number, custom: number) =>
        `内置 ${builtin} 条，自定义 ${custom} 条`,
      Edit: "编辑",
      Modal: {
        Title: "快捷指令列表",
        Add: "新建",
        Search: "搜索快捷指令",
      },
      EditModal: {
        Title: "编辑快捷指令",
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
      NoAccess: "版本:3.0_多功能联网版",
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
      Title: "话题新鲜度",
      SubTitle: "值越大，越有可能扩展到新话题，太高会导致乱码",
    },
  },
  Store: {
    DefaultTopic: "New Chat",
    BotHello: "> 联网问答开启方法:点击下方WIFI按钮变蓝即为开启状态\n\n注意：联网开启后每一次提问都是新的对话，不支持上下文联想,不使用时请手动关闭！\n\n安卓/IOS桌面版下载\n---[立即前往](http://aai.yjie.fun/app/)\n\n🎊官方内部问题建议反馈QQ交流群：[立即扫码添加](https://wx.yjie.fun/qq.jpg)",
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
    Name: "最新公告",
  },
  Mask: {
    Name: "智能应用",
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
    More: "选择应用",
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
