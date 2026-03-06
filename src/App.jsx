import React, { useState, useEffect } from 'react';
import './App.css';

const translations = {
  en: {
    welcome: {
      title: "OpenClaw Learning Journey",
      subtitle: "Gamified learning, master AI agent technology easily",
      features: [
        { icon: "🎮", text: "Gamified Learning" },
        { icon: "📱", text: "Mobile Friendly" },
        { icon: "⭐", text: "Micro-Learning" }
      ],
      startButton: "Start Learning 🚀"
    },
    dashboard: {
      title: "My Learning",
      stats: {
        xp: "XP",
        streak: "Streak",
        hearts: "Hearts"
      },
      levels: {
        completed: "completed",
        of: "of"
      }
    },
    levels: [
      {
        title: "Introduction",
        description: "Meet OpenClaw",
        lessons: [
          { id: 101, title: "What is OpenClaw", type: "lesson" },
          { id: 102, title: "Core Concepts Overview", type: "lesson" },
          { id: 103, title: "Quiz: Introduction Test", type: "quiz" }
        ]
      },
      {
        title: "Core Mechanisms",
        description: "Inner Cultivation System",
        lessons: [
          { id: 201, title: "Soul Configuration", type: "lesson" },
          { id: 202, title: "Built-in Memory System", type: "lesson" },
          { id: 203, title: "Context Management", type: "lesson" },
          { id: 204, title: "Heartbeat Mechanism", type: "lesson" },
          { id: 205, title: "Quiz: Core Mechanisms", type: "quiz" }
        ]
      },
      {
        title: "Agent World",
        description: "The World of Agents",
        lessons: [
          { id: 301, title: "What is an Agent", type: "lesson" },
          { id: 302, title: "Agent Configuration Practice", type: "lesson" },
          { id: 303, title: "Quiz: Agents", type: "quiz" }
        ]
      },
      {
        title: "Skills & Tools",
        description: "Skill & Tool",
        lessons: [
          { id: 401, title: "Concept of Skill", type: "lesson" },
          { id: 402, title: "Using Tools", type: "lesson" },
          { id: 403, title: "Skill vs Tool", type: "lesson" },
          { id: 404, title: "Quiz: Skills & Tools", type: "quiz" }
        ]
      },
      {
        title: "Workflow",
        description: "Workflow Orchestration",
        lessons: [
          { id: 501, title: "What is Workflow", type: "lesson" },
          { id: 502, title: "Workflow Configuration", type: "lesson" },
          { id: 503, title: "Quiz: Workflow", type: "quiz" }
        ]
      },
      {
        title: "Ecosystem",
        description: "ClawHub",
        lessons: [
          { id: 601, title: "Introduction to ClawHub", type: "lesson" },
          { id: 602, title: "Skill Installation & Usage", type: "lesson" },
          { id: 603, title: "Graduation Test", type: "quiz" }
        ]
      }
    ],
    common: {
      back: "←",
      lesson: "Lesson",
      quiz: "Quiz",
      completed: "Completed",
      completeButton: "Done, Continue 🎉",
      completion: {
        title: "Great job!",
        message: "You completed this lesson!",
        xpReward: "+50 XP",
        continue: "Continue Learning"
      },
      quiz: {
        question: "Question",
        of: "of",
        next: "Next",
        finish: "Finish"
      },
      language: "Language"
    },
    lessons: {
      101: {
        title: "🎯 What is OpenClaw?",
        content: "OpenClaw is an advanced AI assistant system framework that allows you to create intelligent agents with memory, understanding, and autonomous action capabilities!",
        analogy: {
          title: "🍤 Analogy",
          text: "Think of OpenClaw as a smart assistant:",
          points: [
            "<strong>Memory</strong> - Like remembering your chat history",
            "<strong>Soul</strong> - Setting its personality and speaking style",
            "<strong>Skills</strong> - Giving it tools to help you",
            "<strong>Workflows</strong> - Letting it complete complex tasks in sequence"
          ]
        },
        tip: "<strong>💡 Remember:</strong> OpenClaw makes AI more than just answering questions - it can actually help you get work done!"
      },
      102: {
        title: "📋 Core Concepts Overview",
        concepts: [
          { emoji: "🧠", title: "Soul Configuration", desc: "Set AI's personality, values, and communication style" },
          { emoji: "💾", title: "Memory System", desc: "Remember conversations, support semantic search" },
          { emoji: "🎯", title: "Agent", desc: "Intelligent agent with role and decision-making capabilities" },
          { emoji: "🔧", title: "Skill", desc: "Skill package containing tools and workflows" },
          { emoji: "⚙️", title: "Tool", desc: "Specific execution tools like API calls" },
          { emoji: "📋", title: "Workflow", desc: "Multi-step process to automate complex tasks" }
        ]
      },
      201: {
        title: "🧠 Soul Configuration",
        content: "Soul is the core configuration file in OpenClaw that defines AI personality, giving your AI assistant a unique character and communication style!",
        analogy: {
          title: "🍤 Analogy",
          text: "Soul is like writing a 'personal resume' for the AI:",
          points: [
            "<strong>Personality</strong> - Is it outgoing or reserved?",
            "<strong>Values</strong> - Prioritizes efficiency or empathy?",
            "<strong>Communication Style</strong> - Formal and professional or casual and humorous?"
          ]
        },
        tip: "<strong>💡 Best Practice:</strong> Soul configuration determines the AI's 'persona' - design it carefully based on your use case!"
      },
      202: {
        title: "💾 Built-in Memory System",
        content: "The memory system allows AI to remember conversation history and perform semantic search and recall when needed!",
        analogy: {
          title: "🍤 Analogy",
          text: "The memory system is like the AI's 'brain':",
          points: [
            "<strong>Storage</strong> - Save all conversation content",
            "<strong>Indexing</strong> - Build semantic index with vector technology",
            "<strong>Retrieval</strong> - Find relevant memories based on current questions"
          ]
        },
        tip: "<strong>💡 Key Feature:</strong> Supports vector search - finds relevant content even with imperfect descriptions!"
      },
      203: {
        title: "📝 Context Management",
        content: "Context management ensures AI understands context and maintains conversation coherence!",
        analogy: {
          title: "🍤 Analogy",
          text: "Context is like 'chat history':",
          points: [
            "<strong>Window Management</strong> - Control how much history the AI sees each time",
            "<strong>Compression</strong> - Long conversations are intelligently compressed",
            "<strong>Priority</strong> - Important information is kept first"
          ]
        },
        tip: "<strong>💡 Best Practice:</strong> Proper context management balances AI understanding and cost!"
      },
      204: {
        title: "💓 Heartbeat Mechanism",
        content: "The heartbeat mechanism is OpenClaw's scheduling system, responsible for scheduled tasks, event handling, and state management!",
        analogy: {
          title: "🍤 Analogy",
          text: "Heartbeat is like a 'biological clock':",
          points: [
            "<strong>Scheduled Tasks</strong> - Auto-execute at specific times",
            "<strong>Event Listening</strong> - Respond to external triggers",
            "<strong>State Management</strong> - Maintain system health"
          ]
        },
        tip: "<strong>💡 Remember:</strong> The heartbeat mechanism lets AI 'actively' do things, not just respond passively!"
      },
      301: {
        title: "🎯 What is an Agent?",
        content: "An Agent is an intelligent entity in OpenClaw with a role, capabilities, and autonomous decision-making!",
        analogy: {
          title: "🍤 Analogy",
          text: "An Agent is like an 'employee':",
          points: [
            "<strong>Role</strong> - Customer service, expert, or assistant?",
            "<strong>Skills</strong> - What skills and tools does it have?",
            "<strong>Decision Making</strong> - Can autonomously decide what to do"
          ]
        },
        tip: "<strong>💡 Core Feature:</strong> Agents understand goals, plan steps, and execute actions - truly intelligent!"
      },
      302: {
        title: "🛠️ Agent Configuration Practice",
        content: "Let's learn how to configure a practical Agent!",
        analogy: {
          title: "📋 Configuration Points",
          points: [
            "<strong>Name & Description</strong> - Clearly define the Agent's role",
            "<strong>System Prompt</strong> - Set the Agent's behavior guidelines",
            "<strong>Skill Assignment</strong> - Equip the Agent with needed Skills",
            "<strong>Model Selection</strong> - Choose appropriate AI model for the task"
          ]
        },
        tip: "<strong>💡 Best Practice:</strong> Start with simple Agents, gradually increase complexity and capabilities!"
      },
      401: {
        title: "🔧 Concept of Skill",
        content: "A Skill is a package of related capabilities in OpenClaw that can contain Tools and Workflows!",
        analogy: {
          title: "🍤 Analogy",
          text: "A Skill is like a 'toolbox':",
          points: [
            "<strong>Function Collection</strong> - Related tools packaged together",
            "<strong>Reusable</strong> - Different Agents can use the same Skill",
            "<strong>Shareable</strong> - Can be shared with others on ClawHub"
          ]
        },
        tip: "<strong>💡 Remember:</strong> Skills encapsulate capabilities, enabling AI to complete domain-specific tasks!"
      },
      402: {
        title: "⚙️ Using Tools",
        content: "A Tool is a specific execution component in OpenClaw responsible for concrete operations like API calls, data queries, etc.!",
        analogy: {
          title: "🍤 Analogy",
          text: "A Tool is like a 'screwdriver':",
          points: [
            "<strong>Single Purpose</strong> - Each Tool does one thing",
            "<strong>Configurable</strong> - Can configure inputs and outputs",
            "<strong>Composable</strong> - Multiple Tools can be used together"
          ]
        },
        tip: "<strong>💡 Best Practice:</strong> Design Tools to be simple and focused - use Workflows to combine multiple Tools for complex tasks!"
      },
      403: {
        title: "🤔 Skill vs Tool",
        content: "Let's clearly distinguish the differences between Skill and Tool!",
        concepts: [
          { emoji: "📦", title: "Skill", desc: "Skill package, contains multiple Tools and Workflows" },
          { emoji: "🔨", title: "Tool", desc: "Single tool, executes specific operations" }
        ],
        relationship: {
          title: "📋 Relationship Diagram",
          text: "<strong>Skill</strong> → Contains → <strong>Workflow</strong> → Calls → <strong>Tool</strong>"
        },
        tip: "<strong>💡 Key Point:</strong> Skill is a capability package, Tool is a specific tool - they have a containment relationship!"
      },
      501: {
        title: "📋 What is Workflow?",
        content: "Workflow is the process orchestration system in OpenClaw for multi-step tasks, letting AI automatically complete complex work processes!",
        analogy: {
          title: "🍤 Analogy",
          text: "Workflow is like a 'recipe':",
          points: [
            "<strong>Step Definition</strong> - Clearly define each step",
            "<strong>Sequential Execution</strong> - Complete step by step in order",
            "<strong>Parameter Passing</strong> - Output from previous step to next"
          ]
        },
        tip: "<strong>💡 Remember:</strong> Workflows automate complex tasks - AI can complete multi-step work on its own!"
      },
      502: {
        title: "🛠️ Workflow Configuration",
        content: "Let's learn how to configure a practical Workflow!",
        analogy: {
          title: "📋 Configuration Points",
          points: [
            "<strong>Step Definition</strong> - Clearly define each step",
            "<strong>Tool Calls</strong> - Which Tool each step calls",
            "<strong>Parameter Mapping</strong> - How inputs and outputs are passed",
            "<strong>Conditionals</strong> - Decide next step based on results"
          ]
        },
        tip: "<strong>💡 Best Practice:</strong> Draw a flowchart first, then write configuration - ensure clear logic!"
      },
      601: {
        title: "🌐 Introduction to ClawHub",
        content: "ClawHub is OpenClaw's skill ecosystem platform where you can discover, share, and use various Skills!",
        analogy: {
          title: "🍤 Analogy",
          text: "ClawHub is like an 'app store':",
          points: [
            "<strong>Skill Discovery</strong> - Browse and search various Skills",
            "<strong>One-click Install</strong> - Easily install to your project",
            "<strong>Share & Contribute</strong> - Share your Skills with the community"
          ]
        },
        tip: "<strong>💡 Remember:</strong> Stand on the shoulders of giants - use ClawHub to quickly expand your AI capabilities!"
      },
      602: {
        title: "📦 Skill Installation & Usage",
        content: "Let's learn how to install and use Skills from ClawHub!",
        analogy: {
          title: "📋 Usage Steps",
          points: [
            "<strong>Browse & Search</strong> - Find needed Skills on ClawHub",
            "<strong>View Details</strong> - Understand Skill functionality and configuration",
            "<strong>Install & Configure</strong> - Install to project and configure parameters",
            "<strong>Assign & Use</strong> - Assign this Skill to an Agent"
          ]
        },
        tip: "<strong>💡 Best Practice:</strong> Read documentation and examples first - confirm the Skill fits your needs before installing!"
      }
    },
    quizzes: {
      103: [
        { question: "What is used to set AI personality and values in OpenClaw?", options: ["Memory", "Soul", "Skill", "Tool"], correct: 1 },
        { question: "Which component is responsible for remembering conversations?", options: ["Context", "Heartbeat", "Memory", "Channel"], correct: 2 },
        { question: "What is a Skill?", options: ["AI personality", "Memory system", "Skill package", "Workflow"], correct: 2 }
      ],
      205: [
        { question: "What is Soul configuration mainly used for?", options: ["Storing data", "Setting AI personality", "Scheduling tasks", "Calling APIs"], correct: 1 },
        { question: "What technology does the memory system use for semantic search?", options: ["Keyword matching", "Vector database", "SQL query", "Regular expressions"], correct: 1 },
        { question: "Which is NOT a heartbeat mechanism feature?", options: ["Scheduled tasks", "Event handling", "Memory storage", "State management"], correct: 2 }
      ],
      303: [
        { question: "What is an Agent?", options: ["AI model", "Intelligent entity with role", "Database", "API interface"], correct: 1 },
        { question: "Which is NOT part of Agent configuration?", options: ["System prompt", "Skill assignment", "Model selection", "Database connection"], correct: 3 },
        { question: "What is the core capability of an Agent?", options: ["Storing data", "Autonomous decision making", "Rendering web pages", "Compiling code"], correct: 1 }
      ],
      404: [
        { question: "What is a Skill?", options: ["Single tool", "Skill package collection", "AI model", "Database"], correct: 1 },
        { question: "What is a characteristic of a Tool?", options: ["Multi-functional", "Single purpose", "Non-configurable", "One-time use only"], correct: 1 },
        { question: "What is the relationship between Skill and Tool?", options: ["Parallel", "Skill contains Tool", "Tool contains Skill", "Mutually exclusive"], correct: 1 }
      ],
      503: [
        { question: "What is Workflow mainly used for?", options: ["Storing data", "Orchestrating multi-step tasks", "Setting AI personality", "Rendering web pages"], correct: 1 },
        { question: "What can steps do in a Workflow?", options: ["Run independently", "Pass parameters", "Overwrite each other", "Execute randomly"], correct: 1 },
        { question: "What is a Workflow best practice?", options: ["More complex the better", "Draw flowchart first then configure", "No testing needed", "Use one step if possible"], correct: 1 }
      ],
      603: [
        { question: "What sets AI personality in OpenClaw?", options: ["Memory", "Soul", "Skill", "Agent"], correct: 1 },
        { question: "Which component orchestrates multi-step tasks?", options: ["Tool", "Workflow", "Heartbeat", "Context"], correct: 1 },
        { question: "What is ClawHub?", options: ["AI model", "Skill ecosystem platform", "Database", "Editor"], correct: 1 },
        { question: "What is the relationship between Skill and Tool?", options: ["Parallel", "Skill contains Tool", "Tool contains Skill", "Mutually exclusive"], correct: 1 },
        { question: "What is the core capability of an Agent?", options: ["Storing data", "Autonomous decision making", "Rendering web pages", "Compiling code"], correct: 1 }
      ]
    }
  },
  zh: {
    welcome: {
      title: "OpenClaw学习之旅",
      subtitle: "闯关学习，轻松掌握AI智能体技术",
      features: [
        { icon: "🎮", text: "闯关式学习" },
        { icon: "📱", text: "移动端友好" },
        { icon: "⭐", text: "碎片化学" }
      ],
      startButton: "开始学习 🚀"
    },
    dashboard: {
      title: "我的学习",
      stats: {
        xp: "经验",
        streak: "连续",
        hearts: "爱心"
      },
      levels: {
        completed: "已完成",
        of: "/"
      }
    },
    levels: [
      {
        title: "入门篇",
        description: "认识OpenClaw",
        lessons: [
          { id: 101, title: "什么是OpenClaw", type: "lesson" },
          { id: 102, title: "核心概念速览", type: "lesson" },
          { id: 103, title: "小测验：入门测试", type: "quiz" }
        ]
      },
      {
        title: "核心机制篇",
        description: "内在养成系统",
        lessons: [
          { id: 201, title: "Soul配置", type: "lesson" },
          { id: 202, title: "内置记忆系统", type: "lesson" },
          { id: 203, title: "上下文管理", type: "lesson" },
          { id: 204, title: "心跳机制", type: "lesson" },
          { id: 205, title: "小测验：核心机制", type: "quiz" }
        ]
      },
      {
        title: "智能体篇",
        description: "Agent的世界",
        lessons: [
          { id: 301, title: "什么是Agent", type: "lesson" },
          { id: 302, title: "Agent配置实战", type: "lesson" },
          { id: 303, title: "小测验：智能体", type: "quiz" }
        ]
      },
      {
        title: "技能工具篇",
        description: "Skill & Tool",
        lessons: [
          { id: 401, title: "Skill的概念", type: "lesson" },
          { id: 402, title: "Tool的使用", type: "lesson" },
          { id: 403, title: "Skill vs Tool", type: "lesson" },
          { id: 404, title: "小测验：技能工具", type: "quiz" }
        ]
      },
      {
        title: "工作流篇",
        description: "Workflow编排",
        lessons: [
          { id: 501, title: "什么是Workflow", type: "lesson" },
          { id: 502, title: "工作流配置", type: "lesson" },
          { id: 503, title: "小测验：工作流", type: "quiz" }
        ]
      },
      {
        title: "生态系统篇",
        description: "ClawHub",
        lessons: [
          { id: 601, title: "ClawHub简介", type: "lesson" },
          { id: 602, title: "技能安装使用", type: "lesson" },
          { id: 603, title: "毕业测试", type: "quiz" }
        ]
      }
    ],
    common: {
      back: "←",
      lesson: "课程",
      quiz: "小测验",
      completed: "已完成",
      completeButton: "已完成，继续 🎉",
      completion: {
        title: "太棒了！",
        message: "你完成了这节课！",
        xpReward: "+50 XP",
        continue: "继续学习"
      },
      quiz: {
        question: "问题",
        of: "/",
        next: "下一题",
        finish: "完成"
      },
      language: "语言"
    },
    lessons: {
      101: {
        title: "🎯 什么是OpenClaw？",
        content: "OpenClaw是一个先进的AI助手系统框架，它能让你创建具备记忆、理解和自主行动能力的智能体！",
        analogy: {
          title: "🍤 类比理解",
          text: "把OpenClaw想象成一只聪明的小助手：",
          points: [
            "<strong>记忆</strong> - 就像记住你的聊天内容",
            "<strong>Soul</strong> - 设定它的性格和说话方式",
            "<strong>技能</strong> - 给它工具帮你做事",
            "<strong>工作流</strong> - 让它按流程完成复杂任务"
          ]
        },
        tip: "<strong>💡 记住：</strong>OpenClaw让AI不再只是回答问题，而是能真正帮你完成工作！"
      },
      102: {
        title: "📋 核心概念速览",
        concepts: [
          { emoji: "🧠", title: "Soul配置", desc: "设定AI的性格、价值观和沟通风格" },
          { emoji: "💾", title: "记忆系统", desc: "记住对话内容，支持语义搜索" },
          { emoji: "🎯", title: "Agent", desc: "智能体，有角色、有能力的决策者" },
          { emoji: "🔧", title: "Skill", desc: "技能包，包含工具和工作流" },
          { emoji: "⚙️", title: "Tool", desc: "具体的执行工具，比如API调用" },
          { emoji: "📋", title: "Workflow", desc: "多步骤流程，自动完成复杂任务" }
        ]
      },
      201: {
        title: "🧠 Soul配置",
        content: "Soul是OpenClaw中定义AI个性的核心配置文件，它让你的AI助手拥有独特的性格和沟通风格！",
        analogy: {
          title: "🍤 类比理解",
          text: "Soul就像给AI写\"个人简历\"：",
          points: [
            "<strong>个性</strong> - 是活泼外向还是稳重内敛？",
            "<strong>价值观</strong> - 更看重效率还是关怀？",
            "<strong>沟通风格</strong> - 正式专业还是轻松幽默？"
          ]
        },
        tip: "<strong>💡 最佳实践：</strong>Soul配置决定了AI的\"人设\"，要根据使用场景精心设计！"
      },
      202: {
        title: "💾 内置记忆系统",
        content: "记忆系统让AI能够记住与你的对话历史，并在需要时进行语义搜索和回忆！",
        analogy: {
          title: "🍤 类比理解",
          text: "记忆系统就像AI的\"大脑\"：",
          points: [
            "<strong>存储</strong> - 保存所有对话内容",
            "<strong>索引</strong> - 用向量技术建立语义索引",
            "<strong>检索</strong> - 根据当前问题找到相关记忆"
          ]
        },
        tip: "<strong>💡 关键特性：</strong>支持向量搜索，即使描述不完全匹配也能找到相关内容！"
      },
      203: {
        title: "📝 上下文管理",
        content: "上下文管理确保AI在对话中能够理解前后关联，保持对话的连贯性！",
        analogy: {
          title: "🍤 类比理解",
          text: "上下文就像\"聊天记录\"：",
          points: [
            "<strong>窗口管理</strong> - 控制每次给AI看多少历史",
            "<strong>压缩技术</strong> - 太长的对话会智能压缩",
            "<strong>优先级</strong> - 重要信息优先保留"
          ]
        },
        tip: "<strong>💡 最佳实践：</strong>合理的上下文管理能平衡AI的理解能力和成本！"
      },
      204: {
        title: "💓 心跳机制",
        content: "心跳机制是OpenClaw的调度系统，负责定时任务、事件处理和状态管理！",
        analogy: {
          title: "🍤 类比理解",
          text: "心跳就像\"生物钟\"：",
          points: [
            "<strong>定时任务</strong> - 到点自动执行",
            "<strong>事件监听</strong> - 响应外部触发",
            "<strong>状态管理</strong> - 维护系统健康状态"
          ]
        },
        tip: "<strong>💡 记住：</strong>心跳机制让AI能够\"主动\"做事，而不只是被动响应！"
      },
      301: {
        title: "🎯 什么是Agent？",
        content: "Agent是OpenClaw中的智能体，是一个有角色、有能力、能自主决策的实体！",
        analogy: {
          title: "🍤 类比理解",
          text: "Agent就像\"员工\"：",
          points: [
            "<strong>角色定位</strong> - 是客服、专家还是助手？",
            "<strong>技能装备</strong> - 掌握哪些技能和工具？",
            "<strong>决策能力</strong> - 能自主判断该做什么"
          ]
        },
        tip: "<strong>💡 核心特点：</strong>Agent能理解目标、规划步骤、执行行动，是真正的智能体！"
      },
      302: {
        title: "🛠️ Agent配置实战",
        content: "让我们学习如何配置一个实用的Agent！",
        analogy: {
          title: "📋 配置要点",
          points: [
            "<strong>名称和描述</strong> - 清晰定义Agent的角色",
            "<strong>系统提示</strong> - 设定Agent的行为准则",
            "<strong>技能分配</strong> - 给Agent配备需要的Skill",
            "<strong>模型选择</strong> - 根据任务选择合适的AI模型"
          ]
        },
        tip: "<strong>💡 最佳实践：</strong>从简单的Agent开始，逐步增加复杂度和能力！"
      },
      401: {
        title: "🔧 Skill的概念",
        content: "Skill是OpenClaw中的技能包，是一组相关功能的集合，可以包含Tool和Workflow！",
        analogy: {
          title: "🍤 类比理解",
          text: "Skill就像\"工具箱\"：",
          points: [
            "<strong>功能集合</strong> - 相关的工具打包在一起",
            "<strong>可复用</strong> - 不同的Agent可以使用同一个Skill",
            "<strong>可分享</strong> - 可以在ClawHub上分享给他人"
          ]
        },
        tip: "<strong>💡 记住：</strong>Skill是能力的封装，让AI能够完成特定领域的任务！"
      },
      402: {
        title: "⚙️ Tool的使用",
        content: "Tool是OpenClaw中的具体执行工具，负责完成具体的操作，比如API调用、数据查询等！",
        analogy: {
          title: "🍤 类比理解",
          text: "Tool就像\"螺丝刀\"：",
          points: [
            "<strong>单一功能</strong> - 每个Tool只做一件事",
            "<strong>参数配置</strong> - 可以配置输入输出",
            "<strong>可组合</strong> - 多个Tool可以组合使用"
          ]
        },
        tip: "<strong>💡 最佳实践：</strong>Tool要设计得简单专一，复杂任务用Workflow组合多个Tool！"
      },
      403: {
        title: "🤔 Skill vs Tool",
        content: "让我们清晰地区分Skill和Tool的不同！",
        concepts: [
          { emoji: "📦", title: "Skill", desc: "技能包，包含多个Tool和Workflow" },
          { emoji: "🔨", title: "Tool", desc: "单一工具，执行具体操作" }
        ],
        relationship: {
          title: "📋 关系图示",
          text: "<strong>Skill</strong> → 包含 → <strong>Workflow</strong> → 调用 → <strong>Tool</strong>"
        },
        tip: "<strong>💡 理解要点：</strong>Skill是能力包，Tool是具体工具，两者是包含关系！"
      },
      501: {
        title: "📋 什么是Workflow？",
        content: "Workflow是OpenClaw中的工作流，用于编排多步骤任务，让AI自动完成复杂的工作流程！",
        analogy: {
          title: "🍤 类比理解",
          text: "Workflow就像\"菜谱\"：",
          points: [
            "<strong>步骤定义</strong> - 明确每一步做什么",
            "<strong>顺序执行</strong> - 按顺序一步步完成",
            "<strong>参数传递</strong> - 上一步的输出给下一步"
          ]
        },
        tip: "<strong>💡 记住：</strong>Workflow让复杂任务自动化，AI能自己完成多步骤工作！"
      },
      502: {
        title: "🛠️ 工作流配置",
        content: "让我们学习如何配置一个实用的Workflow！",
        analogy: {
          title: "📋 配置要点",
          points: [
            "<strong>步骤定义</strong> - 清晰定义每个步骤",
            "<strong>工具调用</strong> - 每个步骤调用哪个Tool",
            "<strong>参数映射</strong> - 输入输出如何传递",
            "<strong>条件分支</strong> - 根据结果决定下一步"
          ]
        },
        tip: "<strong>💡 最佳实践：</strong>先画出流程图，再编写配置，确保逻辑清晰！"
      },
      601: {
        title: "🌐 ClawHub简介",
        content: "ClawHub是OpenClaw的技能生态平台，你可以在这里发现、分享和使用各种Skill！",
        analogy: {
          title: "🍤 类比理解",
          text: "ClawHub就像\"应用商店\"：",
          points: [
            "<strong>技能发现</strong> - 浏览和搜索各种Skill",
            "<strong>一键安装</strong> - 轻松安装到自己的项目",
            "<strong>分享贡献</strong> - 把你的Skill分享给社区"
          ]
        },
        tip: "<strong>💡 记住：</strong>站在巨人的肩膀上，使用ClawHub快速扩展你的AI能力！"
      },
      602: {
        title: "📦 技能安装使用",
        content: "让我们学习如何从ClawHub安装和使用Skill！",
        analogy: {
          title: "📋 使用步骤",
          points: [
            "<strong>浏览搜索</strong> - 在ClawHub找到需要的Skill",
            "<strong>查看详情</strong> - 了解Skill的功能和配置",
            "<strong>安装配置</strong> - 安装到项目并配置参数",
            "<strong>分配使用</strong> - 给Agent分配这个Skill"
          ]
        },
        tip: "<strong>💡 最佳实践：</strong>先看文档和示例，确认Skill适合你的需求再安装！"
      }
    },
    quizzes: {
      103: [
        { question: "OpenClaw中用来设定AI性格和价值观的是？", options: ["Memory", "Soul", "Skill", "Tool"], correct: 1 },
        { question: "哪个组件负责记住对话内容？", options: ["Context", "Heartbeat", "Memory", "Channel"], correct: 2 },
        { question: "Skill是什么？", options: ["AI的性格", "记忆系统", "技能包", "工作流"], correct: 2 }
      ],
      205: [
        { question: "Soul配置主要用来做什么？", options: ["存储数据", "设定AI性格", "调度任务", "调用API"], correct: 1 },
        { question: "记忆系统使用什么技术进行语义搜索？", options: ["关键词匹配", "向量数据库", "SQL查询", "正则表达式"], correct: 1 },
        { question: "心跳机制不包括哪个功能？", options: ["定时任务", "事件处理", "记忆存储", "状态管理"], correct: 2 }
      ],
      303: [
        { question: "Agent是什么？", options: ["AI模型", "有角色的智能体", "数据库", "API接口"], correct: 1 },
        { question: "Agent配置不包括哪项？", options: ["系统提示", "技能分配", "模型选择", "数据库连接"], correct: 3 },
        { question: "Agent的核心能力是？", options: ["存储数据", "自主决策", "渲染网页", "编译代码"], correct: 1 }
      ],
      404: [
        { question: "Skill是什么？", options: ["单个工具", "技能包集合", "AI模型", "数据库"], correct: 1 },
        { question: "Tool的特点是？", options: ["多功能", "单一功能", "不可配置", "只能用一次"], correct: 1 },
        { question: "Skill和Tool的关系是？", options: ["并列关系", "包含关系", "互斥关系", "没关系"], correct: 1 }
      ],
      503: [
        { question: "Workflow主要用于？", options: ["存储数据", "编排多步骤任务", "设定AI性格", "渲染网页"], correct: 1 },
        { question: "Workflow中步骤之间可以？", options: ["独立运行", "传递参数", "互相覆盖", "随机执行"], correct: 1 },
        { question: "Workflow的最佳实践是？", options: ["越复杂越好", "先画流程图再配置", "不需要测试", "尽量用一个步骤"], correct: 1 }
      ],
      603: [
        { question: "OpenClaw中设定AI性格的是？", options: ["Memory", "Soul", "Skill", "Agent"], correct: 1 },
        { question: "哪个组件负责多步骤任务编排？", options: ["Tool", "Workflow", "Heartbeat", "Context"], correct: 1 },
        { question: "ClawHub是什么？", options: ["AI模型", "技能生态平台", "数据库", "编辑器"], correct: 1 },
        { question: "Skill和Tool的关系是？", options: ["并列", "Skill包含Tool", "Tool包含Skill", "互斥"], correct: 1 },
        { question: "Agent的核心能力是？", options: ["存储数据", "自主决策", "渲染网页", "编译代码"], correct: 1 }
      ]
    }
  }
};

function App() {
  const [screen, setScreen] = useState('welcome');
  const [currentLevel, setCurrentLevel] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [language, setLanguage] = useState('zh');
  const [progress, setProgress] = useState({
    xp: 0,
    level: 1,
    streak: 0,
    hearts: 5
  });
  const [completedLessons, setCompletedLessons] = useState(new Set());

  const t = translations[language];
  
  const levelsData = t.levels.map((level, index) => ({
    id: index + 1,
    ...level,
    unlocked: index === 0 || Array.from(completedLessons).some(lessonId => 
      t.levels[index - 1]?.lessons.every(l => completedLessons.has(l.id))
    ),
    lessons: level.lessons.map(lesson => ({
      ...lesson,
      completed: completedLessons.has(lesson.id)
    }))
  }));

  const calculateLevelProgress = (levelId) => {
    const level = levelsData.find(l => l.id === levelId);
    if (!level) return 0;
    const completed = level.lessons.filter(l => l.completed).length;
    return Math.round((completed / level.lessons.length) * 100);
  };

  const completeLesson = (lessonId) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]));

    setProgress(prev => ({
      ...prev,
      xp: prev.xp + 50,
      level: Math.floor(prev.xp / 500) + 1
    }));
  };

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="app-2">
      {screen === 'welcome' && (
        <WelcomeScreen 
          onStart={() => setScreen('dashboard')} 
          t={t}
          onToggleLanguage={toggleLanguage}
          language={language}
        />
      )}
      
      {screen === 'dashboard' && (
        <Dashboard 
          levels={levelsData}
          progress={progress}
          t={t}
          onSelectLevel={(level) => {
            setCurrentLevel(level);
            setScreen('level');
          }}
          onToggleLanguage={toggleLanguage}
          language={language}
        />
      )}
      
      {screen === 'level' && currentLevel && (
        <LevelScreen 
          level={currentLevel}
          progress={calculateLevelProgress(currentLevel.id)}
          t={t}
          onBack={() => setScreen('dashboard')}
          onSelectLesson={(lesson) => {
            setCurrentLesson(lesson);
            setScreen('lesson');
          }}
          onToggleLanguage={toggleLanguage}
          language={language}
        />
      )}
      
      {screen === 'lesson' && currentLesson && (
        <LessonScreen 
          lesson={currentLesson}
          t={t}
          onBack={() => setScreen('level')}
          onComplete={() => {
            completeLesson(currentLesson.id);
            setScreen('level');
          }}
          onToggleLanguage={toggleLanguage}
          language={language}
        />
      )}
    </div>
  );
}

function WelcomeScreen({ onStart, t, onToggleLanguage, language }) {
  return (
    <div className="welcome-screen">
      <div className="language-switcher">
        <button 
          className="language-button"
          onClick={onToggleLanguage}
        >
          {language === 'zh' ? '🇺🇸 EN' : '🇨🇳 中文'}
        </button>
      </div>
      <div className="welcome-content">
        <div className="mascot">
          <img 
            src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20cartoon%20lobster%20mascot%20friendly%20welcome%20illustration%20vibrant%20colors%20no%20background&image_size=square"
            alt="学习助手"
            className="mascot-image"
          />
        </div>
        <h1 className="welcome-title">{t.welcome.title}</h1>
        <p className="welcome-subtitle">{t.welcome.subtitle}</p>
        <div className="welcome-features">
          {t.welcome.features.map((feature, index) => (
            <div key={index} className="feature-item-w">
              <span className="feature-icon">{feature.icon}</span>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
        <button className="start-button" onClick={onStart}>
          {t.welcome.startButton}
        </button>
      </div>
    </div>
  );
}

function Dashboard({ levels, progress, t, onSelectLevel, onToggleLanguage, language }) {
  return (
    <div className="dashboard">
      <div className="header">
        <div className="header-left">
          <h2 className="header-title">{t.dashboard.title}</h2>
        </div>
        <div className="header-right">
          <div className="progress-bar-container">
            <div className="stat-item">
              <span className="stat-icon">⭐</span>
              <span className="stat-value">{progress.xp}</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🔥</span>
              <span className="stat-value">{progress.streak}</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">❤️</span>
              <span className="stat-value">{progress.hearts}</span>
            </div>
          </div>
          <button 
            className="language-button-small"
            onClick={onToggleLanguage}
          >
            {language === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </div>

      <div className="levels-grid">
        {levels.map((level) => {
          const completedCount = level.lessons.filter(l => l.completed).length;
          const totalCount = level.lessons.length;
          const percent = Math.round((completedCount / totalCount) * 100);

          return (
            <div 
              key={level.id}
              className={`level-card ${level.unlocked ? 'unlocked' : 'locked'}`}
              onClick={() => level.unlocked && onSelectLevel(level)}
            >
              <div className="level-number">{level.id}</div>
              <div className="level-title">{level.title}</div>
              <div className="level-description">{level.description}</div>
              {level.unlocked && (
                <div className="level-progress">
                  <div className="progress-track">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{completedCount}{t.dashboard.levels.of}{totalCount}</span>
                </div>
              )}
              {!level.unlocked && (
                <div className="lock-icon">🔒</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LevelScreen({ level, progress, t, onBack, onSelectLesson, onToggleLanguage, language }) {
  return (
    <div className="lesson-screen">
      <div className="lesson-header">
        <button className="back-button" onClick={onBack}>{t.common.back}</button>
        <div className="level-header-info">
          <h2 className="lesson-title">{level.title}</h2>
          <p className="level-progress-text">{progress}% {t.common.completed}</p>
        </div>
        <button 
          className="language-button-small"
          onClick={onToggleLanguage}
        >
          {language === 'zh' ? 'EN' : '中文'}
        </button>
      </div>

      <div className="lessons-list">
        {level.lessons.map((lesson) => (
          <div 
            key={lesson.id}
            className={`lesson-item ${lesson.completed ? 'completed' : ''}`}
            onClick={() => !lesson.completed && onSelectLesson(lesson)}
          >
            <div className="lesson-icon">
              {lesson.completed ? '✅' : (lesson.type === 'quiz' ? '📝' : '📚')}
            </div>
            <div className="lesson-info">
              <div className="lesson-name">{lesson.title}</div>
              <div className="lesson-type">{lesson.type === 'quiz' ? t.common.quiz : t.common.lesson}</div>
            </div>
            {lesson.completed && <div className="checkmark">✓</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

function LessonScreen({ lesson, t, onBack, onComplete, onToggleLanguage, language }) {
  const [showComplete, setShowComplete] = useState(false);

  const getQuizQuestions = (lessonId) => {
    return t.quizzes[lessonId] || [];
  };

  const getLessonContent = () => {
    const lessonData = t.lessons[lesson.id];
    if (!lessonData) {
      return (
        <div className="lesson-content">
          <h3>📚 {lesson.title}</h3>
          <p>This lesson is under development...</p>
          <div className="placeholder-content">
            <div className="placeholder-icon">🚧</div>
            <p>Coming soon!</p>
          </div>
        </div>
      );
    }

    if (lesson.type === 'quiz') {
      return (
        <div className="lesson-content">
          <h3>{lessonData.title}</h3>
          <QuizComponent 
            questions={getQuizQuestions(lesson.id)}
            t={t}
            onComplete={() => setShowComplete(true)} 
          />
        </div>
      );
    }

    return (
      <div className="lesson-content">
        <h3>{lessonData.title}</h3>
        {lessonData.content && <p>{lessonData.content}</p>}
        
        {lessonData.analogy && (
          <div className="concept-box-l">
            <h4>{lessonData.analogy.title}</h4>
            {lessonData.analogy.text && <p>{lessonData.analogy.text}</p>}
            {lessonData.analogy.points && (
              <ul>
                {lessonData.analogy.points.map((point, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            )}
          </div>
        )}

        {lessonData.concepts && (
          <div className="concept-cards">
            {lessonData.concepts.map((concept, index) => (
              <div key={index} className="concept-card-l">
                <div className="concept-emoji">{concept.emoji}</div>
                <h4>{concept.title}</h4>
                <p>{concept.desc}</p>
              </div>
            ))}
          </div>
        )}

        {lessonData.relationship && (
          <div className="concept-box-l">
            <h4>{lessonData.relationship.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: lessonData.relationship.text }} />
          </div>
        )}

        {lessonData.tip && (
          <div className="tip-box" dangerouslySetInnerHTML={{ __html: lessonData.tip }} />
        )}
      </div>
    );
  };

  return (
    <div className="lesson-screen">
      <div className="lesson-header">
        <button className="back-button" onClick={onBack}>{t.common.back}</button>
        <div className="lesson-header-info">
          <h2 className="lesson-title">{lesson.title}</h2>
        </div>
        <button 
          className="language-button-small"
          onClick={onToggleLanguage}
        >
          {language === 'zh' ? 'EN' : '中文'}
        </button>
      </div>

      <div className="lesson-body">
        {getLessonContent()}
        
        {!showComplete && lesson.type === 'lesson' && (
          <button className="complete-button" onClick={() => setShowComplete(true)}>
            {t.common.completeButton}
          </button>
        )}
        
        {showComplete && (
          <div className="completion-modal">
            <div className="completion-content">
              <div className="completion-icon">🎉</div>
              <h3>{t.common.completion.title}</h3>
              <p>{t.common.completion.message}</p>
              <p className="xp-reward">{t.common.completion.xpReward}</p>
              <button className="continue-button" onClick={onComplete}>
                {t.common.completion.continue}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function QuizComponent({ questions, t, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (index) => {
    if (answered) return;
    setSelectedAnswer(index);
    setAnswered(true);
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      onComplete();
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        {t.common.quiz.question} {currentQuestion + 1} {t.common.quiz.of} {questions.length}
      </div>
      
      <div className="question-box">
        <h4>{questions[currentQuestion].question}</h4>
      </div>
      
      <div className="options-list">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              answered 
                ? (index === questions[currentQuestion].correct 
                    ? 'correct' 
                    : (index === selectedAnswer ? 'wrong' : ''))
                : ''
            }`}
            onClick={() => handleAnswer(index)}
            disabled={answered}
          >
            {option}
          </button>
        ))}
      </div>
      
      {answered && (
        <button className="next-button" onClick={nextQuestion}>
          {currentQuestion < questions.length - 1 ? t.common.quiz.next : t.common.quiz.finish}
        </button>
      )}
    </div>
  );
}

export default App;
