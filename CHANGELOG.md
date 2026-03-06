# Changelog

## [2.1.0] - 2026-03-07

### 🐛 Bug Fixes
- **Fix naming conflict**: Rename `quiz` to `quizLabels` in translations to avoid naming conflict with quiz type
- **Optimize quiz loading**: Improve quiz component loading logic to handle missing quiz data gracefully

### 📝 Documentation
- Update README with bilingual support and contribution guide

---

## [2.0.0] - 2026-03-06

### 🎉 Major Update: Gamified Learning Experience

OpenClaw学习应用v2.0正式发布！从文档式学习中心升级为闯关式学习应用！

### ✨ 核心特性

#### 🎮 闯关式学习
- 6个学习关卡，循序渐进
- 关卡解锁机制，完成一关解锁下一关
- 进度跟踪系统

#### 🌍 国际化支持
- 完整中英文双语支持
- 一键语言切换
- 所有课程和测验都有双语版本

#### 📱 移动端优化
- 完美适配H5页面
- 响应式设计
- 随时随地学习

#### 🎯 互动学习
- 每节课程后都有小测验
- 即时反馈
- XP经验值系统

### 📚 学习内容

#### Level 1: 入门篇
- 什么是OpenClaw
- 核心概念速览
- 入门小测验

#### Level 2: 核心机制篇
- Soul配置
- 内置记忆系统
- 上下文管理
- 心跳机制
- 核心机制小测验

#### Level 3: 智能体篇
- 什么是Agent
- Agent配置实战
- 智能体小测验

#### Level 4: 技能工具篇
- Skill的概念
- Tool的使用
- Skill vs Tool
- 技能工具小测验

#### Level 5: 工作流篇
- 什么是Workflow
- 工作流配置
- 工作流小测验

#### Level 6: 生态系统篇
- ClawHub简介
- 技能安装使用
- 毕业测试

### 🛠 技术栈
- React 18
- Vite 5
- CSS3 + 响应式设计
- 内置国际化系统

---

## [1.0.0] - 2026-03-06

### 🎉 正式发布

OpenClaw学习中心 v1.0.0 正式发布！这是一个完整的OpenClaw技术学习平台。

### ✨ 核心功能

#### 1. 核心机制配置板块
- **Soul配置** - 深度解析Soul.md的作用、配置方法和最佳实践
- **内置记忆系统** - 向量数据库、记忆管理、检索机制详解
- **上下文管理机制** - 窗口管理、对话历史、压缩技术
- **心跳调度机制** - 调度系统、事件处理、状态管理
- **通道集成机制** - WebSocket、消息路由、插件系统

#### 2. 智能体与工作流板块
- **智能体配置** - Agent定义、角色设计、协作机制
- **技能扩展系统** - Skill开发、工具集成、执行引擎
- **工具执行系统** - Tool定义、参数设计、执行逻辑
- **工作流编排** - 流程定义、步骤配置、参数传递

#### 3. 高级技术主题板块
- **组件关系架构** - Agent/Skill/Tool/Workflow关系详解
- **模型管理与配置** - 模型选择、调用流程、配置层级
- **综合实践案例** - 多Agent协作、复杂工作流实战
- **高级技术专题** - 性能优化、安全性、调试技巧

#### 4. 外部资源与生态集成板块
- **ClawHub技能仓库** - 技能发现、安装、版本管理完整指南

### 📚 内容特色

- **结构化学习** - 每个模块按照"学习内容-最佳实践-实操案例"组织
- **类比比喻** - 用生活中的例子解释复杂概念
- **可视化图表** - 架构图、流程图、关系图辅助理解
- **实操配置** - 提供完整的配置示例和步骤指引
- **最佳实践** - 总结官方推荐的使用方法和注意事项

### 🛠 技术栈

- React 18
- Vite 5
- 响应式设计
- 模块化架构

### 📦 构建产物

- `dist/index.html` - 入口文件
- `dist/assets/index-*.js` - JavaScript bundle (361KB, gzip: 95KB)
- `dist/assets/index-*.css` - CSS bundle (7.4KB, gzip: 1.7KB)

### 🎯 适用人群

- OpenClaw初学者
- AI Agent开发者
- 技术架构师
- 对智能体系统感兴趣的技术人员

---

**完整文档**: 请参考各板块详细内容
**在线预览**: http://localhost:5173/ (开发模式)
