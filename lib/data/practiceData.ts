interface BooksItem {
  id: number;
  title: string;
  author: string;
  category:string;
  rating:number;
  cover:string;
}

export const BooksData: BooksItem[] = 
[
    { id: 1, title: "深度學習入門", author: "張三", category: "科技", rating: 4.5, cover: "📘" },
    { id: 2, title: "文學經典選集", author: "李四", category: "文學", rating: 4.8, cover: "📚" },
    { id: 3, title: "商業管理學", author: "王五", category: "商業", rating: 4.2, cover: "📗" },
    { id: 4, title: "歷史故事集", author: "趙六", category: "歷史", rating: 4.6, cover: "📙" },
    { id: 5, title: "心理學原理", author: "陳七", category: "心理學", rating: 4.4, cover: "📕" },
    { id: 6, title: "程式設計指南", author: "劉八", category: "科技", rating: 4.7, cover: "📘" }
]


export interface FormType {
  userId: number;
  id: number;
  title: string;
  body:string;
}
