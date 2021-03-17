# E-commerce shop 

----

## Features


 
 - Firebase as back-end;
 - Redux + redux saga for handling async requests;
 - Redux-persist
 - Admin page(where you can add/delete product);
 - Using reselect for shopping basket/rating system;
 - Custom Star Rating(with numbers of votes and average rating of product)
 - HOC for redirectinc non-authorized user;
 - Custom hooks;
 - React hooks,custom hooks,react-router hooks;
 - Different render markup for different data;
 
> The purpose of creating this app is 
> improving skills of using Redux.
> Using redux-saga/redux-thunk and trying to
> find advantages and disadvantages of this 
> libraries.Using generators + promises to handle
> async requests to firebase,using reselect library
> for reselecting store data.
- Stick to principle "Don't repeat yourself"


![Image of InstaClone](https://i.postimg.cc/P5zQCC37/e-commerce.png)
![Image of InstaClone](https://i.postimg.cc/YSdNxJwf/collage-1.png)


## Tech


- [React]
- [Redux/Redux-saga]
- [Firebase]
- [SCSS]


## Installation

 - To install copy repository to folder on your machine using git.

```
git clone [link]
```
- Install the dependencies and devDependencies and start the server.
 
```
npm install
```
# If you want to use your own firebase config:
---

 - Create new project on Firebase platform.
 - in project option panel copy firebaseConfig and put it to config.js in src/firebase folder.
```
var firebaseConfig = {
   apiKey: "",
   authDomain: "",
   projectId: "",
   storageBucket: "",
   messagingSenderId: "",
   appId: ""
 };
```
