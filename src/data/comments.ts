export type CommentType = {
  username: string;
  userImagePath: string;
  commentText: string;
  likeNum: number;
  replies: CommentType[]
}

export const comments: CommentType[] = [
  {
    username: 'Lisa',
    userImagePath: '/profileImages/lisa.jpg',
    commentText: 'จริงค่า',
    likeNum: 999,
    replies: [
      {
        username: 'หมาน้อย',
        userImagePath: '/profileImages/puppy.jpg',
        commentText: 'จริงค้าบบบบบบบบ',
        likeNum: 0,
        replies: []
      },
      {
        username: 'แมวตัวหนึ่ง',
        userImagePath: '/profileImages/popcat.png',
        commentText: 'ลิซ่าาาาาาา',
        likeNum: 2,
        replies: []
      }
    ]
  },
  {
    username: 'Charlie Brown',
    userImagePath: '/profileImages/charliebrown.jpg',
    commentText: 'บ้าไปแล้ว',
    likeNum: 207,
    replies: []
  }
]

