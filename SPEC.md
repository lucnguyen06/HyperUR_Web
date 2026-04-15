# HyperMods Hub - Website Specification

## 1. Project Overview

- **Project Name**: HyperMods Hub
- **Type**: Single-page promotional website
- **Core Functionality**: Landing page for custom Android ROM and modding community
- **Target Users**: Android enthusiasts, custom ROM users, modders

## 2. UI/UX Specification

### Layout Structure

- **Header**: Fixed navigation with logo, menu items, theme toggle
- **Hero Section**: Full-width banner with main title, subtitle, CTA buttons
- **Features Section**: 5 feature cards in responsive grid
- **Slider Section**: Carousel with ROM/firmware info (10 slides)
- **Info Cards Section**: 3 info cards (Firmware, ROM, Serial)
- **Footer**: Copyright, developer info, contact message

### Responsive Breakpoints
- Mobile: < 768px (single column)
- Tablet: 768px - 1024px (2 columns)
- Desktop: > 1024px (full layout)

### Visual Design

#### Color Palette (Light Mode)
- **Primary**: #0a0a0a (near black)
- **Secondary**: #1a1a2e (dark blue-black)
- **Accent Green**: #00ff88 (neon green)
- **Accent Cyan**: #00d4ff (neon cyan)
- **Accent Blue**: #0066ff (bright blue)
- **Text Primary**: #ffffff
- **Text Secondary**: #a0a0a0
- **Background**: #0d0d0d (dark)
- **Card Background**: #1a1a1a

#### Color Palette (Dark Mode - inverted)
- **Background**: #f5f5f5
- **Card Background**: #ffffff
- **Text Primary**: #0a0a0a
- **Text Secondary**: #666666
- Accent colors remain the same for brand consistency

#### Typography
- **Font Family**: 'Orbitron' for headings (tech/futuristic), 'Exo 2' for body
- **Heading Sizes**: H1: 3rem, H2: 2rem, H3: 1.5rem
- **Body Size**: 1rem
- **Font Weight**: 400 regular, 700 bold

#### Visual Effects
- Neon glow on accent elements (box-shadow with accent colors)
- Gradient text on main title (blue → cyan for "Hyper", green → lime for "Mods")
- Subtle grid pattern background
- Smooth hover transitions (0.3s ease)
- Card hover: lift effect with glow

### Components

#### Navigation
- Logo (text-based with gradient)
- Menu items: Trang chủ, Giới thiệu, Flash Tool, Serial, Tải xuống, Ủng hộ
- Theme toggle button (sun/moon icon)
- Mobile: hamburger menu

#### Hero Section
- Main heading: "HyperMods Hub" with gradient
- Subheading in Vietnamese
- 3 CTA buttons: "Tải ROM ngay", "Serial", "Ủng hộ dự án"
- Animated background effect

#### Feature Cards (5 cards)
1. 🚀 Hiệu năng vượt trội
2. 🎮 Chế độ Gaming tối ưu
3. 🎨 Tùy biến linh hoạt
4. 🔒 An toàn & ổn định
5. 🔧 Hỗ trợ mở rộng

Each card: icon, title, description

#### Slider
- 10 slides with navigation arrows and dots
- Auto-play functionality
- Slide content: "Slide 1" - "Slide 10" indicators

#### Info Cards (3 cards)
1. **Firmware**: "Thông tin phiên bản" - Firmware được đóng gói lại từ Xiaomi.eu
2. **ROM**: "Tải ROM an toàn" - Tốc độ tải ổn định
3. **Serial**: "Quản lý thiết bị" - Serial để nhận thông báo cập nhật

#### Footer
- Copyright: © 2025 HyperMods Hub
- Dev info: @Usagi79 • @lcnguy06
- Group: HyperMods | Official Group
- Contact message about errors

## 3. Functionality Specification

### Core Features
- Theme toggle (light/dark mode) with localStorage persistence
- Smooth scroll navigation
- Image carousel/slider with prev/next controls
- Mobile responsive hamburger menu
- Hover effects on interactive elements

### User Interactions
- Click nav items → smooth scroll to sections
- Click theme toggle → switch theme with animation
- Click slider arrows → navigate slides
- Click slider dots → jump to specific slide
- Hover cards → lift and glow effect

### Data Handling
- Theme preference stored in localStorage

## 4. Acceptance Criteria

- [ ] Page loads with dark theme by default
- [ ] All 6 navigation items visible
- [ ] Theme toggle works and persists on reload
- [ ] 5 feature cards display with icons
- [ ] Slider navigates with arrows and dots
- [ ] 3 info cards display correctly
- [ ] Footer shows all required info
- [ ] Responsive on mobile/tablet/desktop
- [ ] All hover effects work smoothly
- [ ] Vietnamese text displays correctly
