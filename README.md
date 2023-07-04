## Infinite Scrolling Friends Page

This is an infinite scrolling app made with Next.js and React, for the Clerkie Coding Assignment 2023, done in a day. 

Features:
1. Infinite scrolling - This is achieved via a custom hook `useInfiniteScroll.js`. New content will be fetched whenever your page position exceeds a defined threshold, and the page will be extended. 
2. Filtering - You can filter by friends' statuses, like `Close Friends` or `Super Close Friends`. 

Notes:
1. There are no additional dependencies needed. Just the base next.js and react dependencies will suffice. 
2. Multi-column friend status page is yet to be implemented, due to it being exam week. 
2. There is a 1s timeout introduced in the initial fetch of the friends page content. Even though I was not able to implement the exact bonus loading screen, I implemented an alternate loading screen that looks pretty cool too. :) 

Feel free to try it out at this link https://infinitescrollingapp.vercel.app/friends

By James Liu
