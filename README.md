# 📝 QuickBlog

**QuickBlog** is an AI-enabled full-stack blogging application built using the **MERN Stack**, **Google Gemini API**, and **Cloudinary**.  
It allows an authenticated user to **create**, **publish**, **unpublish**, and **delete blogs**, with AI-assisted content generation.  
Visitors can view all published blogs without logging in.

---

## ✨ Features

- 🔐 **Authentication** – Simple **login system for one user** (no sign-up functionality).  
- 🧑‍💻 **Blog Management** – Create, publish, unpublish, and delete blogs.  
- 📝 **Rich Text Editor** – Format your blog content (bold, italic, underline, lists, links, etc.) just like a CMS.  
- 🧠 **AI-Powered Writing** – Generate blog content using **Google Gemini API** directly inside the editor.  
- 🖼 **Image Uploads** – Upload images seamlessly with **Cloudinary** integration.  
- 🌍 **Public Blog Viewing** – Anyone can view all published blogs without logging in.  
- 💬 **Comment System** – Visitors can post comments on blogs, and the **admin controls** whether each comment is **visible** under the blog or hidden.  
- 📊 **Dashboard** – View total blogs, comments, drafts, and manage them in one place.

> ⚠️ Currently, blogs cannot be updated/edited once published — only **publish**, **unpublish**, or **delete** actions are available.

---

## 🖼 UI Screenshots

### 🏠 Home Page
> Visitors can view published blogs, featured sections, and navigate to blog pages.

<img width="1912" height="923" alt="image" src="https://github.com/user-attachments/assets/589354c0-3143-4ccc-869d-20ad3d9d77c5" />

---

### 📄 Blog Page
> Detailed view of a single blog with title, content, and featured image.

<img width="1919" height="936" alt="image" src="https://github.com/user-attachments/assets/71b2236b-b2e6-4f7c-87f7-76d8eee97f03" />

---

### 📌 Dashboard
> Overview of blogs, comments, and drafts.

<img width="1919" height="754" alt="image" src="https://github.com/user-attachments/assets/46347050-7e14-45d1-8ef8-9aca3a0c82c2" />

---

### ✍️ Add Blog
> Create new blog posts with image uploads and AI content generation.

<img width="1919" height="931" alt="image" src="https://github.com/user-attachments/assets/5e93bb40-51e4-4134-9e21-f5ccf1a990ac" />

---

### 📜 Blog List
> View and manage all blogs with publish/unpublish and delete options.

<img width="1919" height="595" alt="image" src="https://github.com/user-attachments/assets/6e7e4964-f883-4c63-b999-7d849111ec9d" />

---

### 📜 Comments List
> View and manage all comments with approve and delete options.

<img width="1919" height="513" alt="image" src="https://github.com/user-attachments/assets/66f38f8b-de59-42a0-95c2-637377ae5705" />


---

## 🛠 Tech Stack

| Category        | Technology |
|-----------------|------------|
| Frontend        | React.js, Tailwind CSS |
| Backend         | Node.js, Express.js |
| Database        | MongoDB |
| AI Integration  | Google Gemini API |
| Image Storage   | Cloudinary |
| Authentication  | JWT (Single User Login) |

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/viv151/blog-it.git
