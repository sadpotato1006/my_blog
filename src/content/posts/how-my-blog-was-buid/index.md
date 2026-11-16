---
title: How I Built My Blog
published: 2026-11-13
pinned: true
description: How I Built My Blog
tags: [Blogging, Tutorial]
category: Guide
licenseName: "Unlicensed"
author: sadpotato
sourceLink: "https://sadpotato.de5.net/"
draft: false
date: 2026-11-13
pubDate: 2026-11-13
---

## 准备工作

Github账号 Cloudflare账号 域名

## 下载模板及依赖

本博客基于该主题进行二次修改：[Mizuki](https://github.com/matsuzaka-yuki/Mizuki)  
关于如何下载 见其文档 [Mizuki 入门文档](https://docs.mizuki.mysqil.com/guide/get-started/)

## 配置 Mizuki/src/config

我觉得这个主题的元素过多，有点杂乱，所以删了一些 ~~(其实只是单纯把入口删了 文件没删 感兴趣的大手子们可以按f12找找 真的会有人感兴趣吗)~~  
具体修改如下：

| 文件位置                                  | 修改内容                                   |
| ----------------------------------------- | ------------------------------------------ |
| `Mizuki/src/config/announcementConfig.ts` | 修改title content                          |
| `Mizuki/src/config/pioConfig.ts`          | 关闭看板娘                                 |
| `Mizuki/src/config/profileConfig.ts`      | 配置各种个人信息                           |
| `Mizuki/src/config/sidebarConfig.ts`      | 关闭分类和日历组件 并把右侧组件都移到左边  |
| `Mizuki/src/config/siteConfig.ts`         | 配置个人信息 关闭冗余页面 并配置壁纸的路径 |

还有一些细小的配置(比如改语言什么的)可参考官方文档 不再赘述

## 添加个人介绍页面

自带的"关于我"界面其实是关于主题作者的) 所以俺(让伟大的ai大人)写了一份 替换掉  
位置在 `Mizuki/src/content/spec/aboutme.md`

## 更换壁纸和头像

壁纸资源放到这里 `Mizuki/src/assets/public/assets/desktop-banner` 默认配置会自动轮播  
还需要在这里配置路径 `Mizuki/src/config/siteConfig.ts`  
头像放到这里 `Mizuki/src/assets/images`

## 部署数据库服务

我这里用的是Twikoo 链接在这里 [Twikoo](https://twikoo.js.org/)  
部署到Cloudflare Workder上 具体步骤见Twikoo文档 [Twikoo 部署文档](https://twikoo.js.org/backend.html) 运行一些~~之乎者也的~~命令就配好了  
由于\*.workers.dev在中国大陆会被DNS污染导致无法访问 所以还需要自己有的域名配上  
在worker-域里面点点就配好了 很简单

## 部署到Cloudflare Pages

先去github创建一个仓库 把博客资源都推上去 然后去cloudflare pages里面直接选中仓库就完事了  
具体可以看Mizuki的文档 [Mizuki 入门文档](https://docs.mizuki.mysqil.com/guide/get-started/)  
我的域名是从 [DNSHE](https://my.dnshe.com/clientarea.php?language=chinese&autolang=1) 这个网站免费薅的 虽然是个二级域名 但最起码还能托管到Cloudflare 就先用着吧

## 关于如何写博客

在这个目录下面新建一个文件夹 `Mizuki/src/content/posts`  
然后在新文件夹里面创建index.md 用markdown写  
如果有加图片资源什么的需求的话直接放到新文件夹里面就能引用了 ~~(不过我还没有试过 都怪万恶的期中考试)~~

## 写在最后

其实这个模板把很多事情都做好了 基本就改改个人信息 再让ai大人个性化一下 最后部署就ok了  
还有什么不会的直接问伟大的ai大人就可以了 其实我觉得我写这个都没人看的~~哈哈) 写出来自己感动自己这一块~~
