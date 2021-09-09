import React from 'react';
import logo from './logo.svg';
import './App.css';
import { comments, CommentType } from './data/comments';

function App() {
  function commentMap() {
    const com = comments.map(x => {
      return (
        <div>
          {/* comments section */}
          <div className="">
            {/* normal comment */}
            <div className="flex p-2 items-start space-x-2">
              <img className="w-10 w-10 rounded-full" src={x.userImagePath}></img>
              <div className="bg-gray-200 rounded-lg p-2">
                <p className="font-semibold">{x.username}</p>
                <p>{x.commentText}</p>
                {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
                {x.likeNum > 0 ?
                  <div className='flex items-center'>
                    <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                    <p className='text-gray-500'>{x.likeNum} คน</p>
                  </div> : null
                }

              </div>
            </div>
            {/* replies */}
            {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
            {repMap(x.replies)}


          </div>
        </div>
      )
    })
    return com
  }

  function repMap(x: CommentType[]) {
    const rep = x.map(t => {
      return (
        <div>
          <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src={t.userImagePath}></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">{t.username}</p>
              <p>{t.commentText}</p>
              {t.likeNum > 0 ?
                <div className='flex items-center'>
                  <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                  <p className='text-gray-500'>{t.likeNum} คน</p>
                </div> : null
              }
            </div>
          </div>

        </div>
      )
    })
    return rep
  }
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/pic.png"></img>
            <span className='font-semibold text-lg'>Thanisorn Chaiwut 630610738</span>
          </div>

          {/* status message */}
          <p>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-500'>100 คน</p>
          </div>

        </div>
        {commentMap()}
      </div>
    </div>
  );
}

export default App;
