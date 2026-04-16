# 爆破小组官方网站（Next.js 版）

专业的 IT 解决方案服务商官方网站，基于 Next.js 15 + TypeScript + Tailwind CSS 重构。

## 技术栈

- [Next.js 15](https://nextjs.org/)（App Router + 静态导出）
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)（滚动动画）
- [Lucide React](https://lucide.dev/)（图标库）

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看站点。

## 构建与部署

本项目配置为静态导出（`output: 'export'`），可直接部署到 GitHub Pages、Cloudflare Pages、Vercel 等静态托管平台。

```bash
# 构建静态站点（输出到 dist/ 目录）
npm run build
```

构建完成后，`dist/` 目录即为可部署的静态资源。

### GitHub Pages 部署步骤

1. 将代码推送到 GitHub 仓库。
2. 进入仓库 **Settings → Pages**。
3. Source 选择 **GitHub Actions**。
4. 创建 `.github/workflows/deploy.yml`（可选），或直接上传 `dist/` 内容到 `gh-pages` 分支。

### 自定义域名

若使用自定义域名（如 `baopo.susuyan.com`），将域名添加到仓库的 **Settings → Pages → Custom domain**，并在 `public/` 目录下放置 `CNAME` 文件：

```
baopo.susuyan.com
```

## 项目结构

```
app/
├── components/          # 页面区块组件
│   ├── Navbar.tsx       # 顶部导航（含移动端菜单、当前高亮）
│   ├── Hero.tsx         # 首屏 Hero（通过 page.tsx 内联实现）
│   ├── Services.tsx     # 服务内容（含技术栈标签）
│   ├── Team.tsx         # 团队介绍（含彩色头像）
│   ├── Process.tsx      # 合作流程（含时间预期）
│   ├── Benefits.tsx     # 核心优势
│   ├── Cases.tsx        # 客户案例（含量化成果）
│   ├── Contact.tsx      # 联系表单（含客户端验证与 Toast）
│   ├── Footer.tsx       # 页脚
│   ├── ScrollReveal.tsx # 滚动显示动画包装器
│   ├── SectionWrapper.tsx # 统一区块包装
│   └── FloatingContactButton.tsx # 右下角悬浮按钮
├── layout.tsx           # 根布局（SEO Meta + JSON-LD）
├── page.tsx             # 首页
└── globals.css          # 全局样式
lib/
└── utils.ts             # Tailwind 类名合并工具
dist/                    # 构建输出目录
```

## 主要优化点（相比旧版）

1. **SEO 增强**：完整的 Open Graph、Twitter Card、JSON-LD 结构化数据。
2. **客户案例**：新增 3 个详细的 B2B 案例，带业务痛点、解决方案、量化成果。
3. **技术栈标签**：服务卡片底部展示具体技术标签（Flutter、Node.js、AWS、K8s 等）。
4. **联系表单**：带前端验证的咨询表单 + 成功提示 Toast，降低转化门槛。
5. **团队展示**：用彩色 Initials 头像替代 emoji，hover 显示团队描述。
6. **流程时间线**：每一步都标注了预计时间周期和交付物。
7. **动画体验**：Framer Motion 驱动的滚动渐显动画。
8. **响应式导航**：移动端汉堡菜单 + 当前区块高亮。

## 联系方式

- 邮箱：[contact@baopo.susuyan.com](mailto:contact@baopo.susuyan.com)
- 官网：[https://baopo.susuyan.com](https://baopo.susuyan.com)
