# Assessing your Redux Fu

* The objective of this challenge is to get you used to answering a few questions about `Redux/Immutability` that are commonly asked in interviews.
* We also have some more reps for you to help hammer in the knowledge you've thus far learned.
* Answers to your written questions will be recorded in _Answers.md_
* This is to be worked on alone but you can use outside resources. You can _reference_ any old code you may have, and the React Documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something.
* **Just a friendly Reminder** Don't fret or get anxious about this, this is a no-pressure assessment that is only going to help guide you here in the near future. This is NOT a pass/fail situation.

## Start by forking and cloning this repository.

## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.

1. Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
1. Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
1. What is middleware?
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
1. Which `react-redux` method links up our `components` with our `redux store`?

## Initializing Project - READ THIS CAREFULLY, you have two apps here. A server, and a client.

* `cd` into the forked copy of this repo.
* **RUN** `npm install` to retrieve all `server-side` the dependencies.
* **LOOK** at all the files you've been given for this project. One important file to note is `server.js`. This file contains an **API** that you are going to be interfacing with. Below is documentation on how to interact with the **API**.
* **RUN** `npm start` to get your API up and running on `http://localhost:3333`. This is the **URL** you're going to need to use within your React app in order to make AJAX requests for data.
* After your API is up and running, you can open chrome and type in `http://localhost:3333/smurfs`. You should see an empty Array `[]` returned to you. This is an array that your **API** will be using to store our Smurf Data.
* **LOOK** at your `smurfs` directory and notice it's just a plain ol' React App that we've built using `create-react-app`.
* We've added a typical `redux` file structure for:

```
src
  - components
  - reducers
    - index.js
  - actions
    - index.js
```

* **Open** `src/index.js` to make sure that your app is ready to roll with the proper middleware.
* **cd** into `smurfs` and run `npm install` to retrieve the client side dependencies.
* **RUN** `npm start` to fire up your React application. There ought to be a pretty little message awaiting you welcoming you to the app. `Follow` the prompting.

## Project Description

* For today's challenge you're going to be building a `React/Redux` application that interfaces with the same `smurfs` api you played with last week. The key differences here are that you're going to be wiring up Redux. and `redux-thunk`

## API Design - This is how you'll interface with the API and what is required from every endpoint.

### GET '/smurfs'

* To retrieve an array all the smurfs in the Smurf DB simply write a get to the endpoint `'/smurfs'`.
* Because `Redux-Thunk` is wired up as a middleware for this project. Be sure to utilize thunks when appropriate:

```
return (dispatch) => {
  dipsatch({type: FOO_ACTION_TYPE});
  promise.then(({data}) => {
    dispatch({type: ANOTHER_ACTION_TYPE, payload: data});
  });
};
```

### POST '/smurfs'

* To add a smurf to the Smurf DB you'll need all three fields.
* Example:

```
{
  name: 'Brainey',
  age: 200,
  height: '5cm'
}
```

* If a smurf is created correctly, you should see a response that is an array of smurfs with uniqe id's assigned to each smurf.
* **HINT** if you are going to be working on Extra Credit, you'll need to use that unique `id`.
* Example of object created in Smurf DB:

```
[
    {
        "name": "Brainey",
        "age": 200,
        "height": "5cm",
        "id": 0
    },
    {
        "name": "Sleepy",
        "age": 200,
        "height": "5cm",
        "id": 1
    }
]
```

## STRETCH PROBLEM - Extra Credit!

* The following two endpoints are here for you if you'd like to push yourselves a little further.
  ### PUT '/smurfs/123', where 123 is the Id of the smurf you want to modify
* For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Smurf object. `name` `age` `height`.
* Example:

```
input:
{
  id: 1,
  name: Sleepy
}
output:
{
  name: 'Sleepy',
  age: 30,
  height: '3cm,
  id: 1
}
```

### DELETE '/smurfs/123', where 123 is the Id of the smurf you want to remove

* For this endpoint to work, all you need is an id sent up as part of the request url.

* If your delete worked, you'll get a success object back.
* Example:

```
output:
{
    "SmurfRemoved": {
        "name": "Sleepy",
        "age": 200,
        "height": "5cm",
        "id": 1
    }
}
```

### Action Types

* You'll need actions to handle all of these different types.

### Remember you can use any resources you want to solve these problems, but avoid copying/pasting solutions you've previously written. Also if you don't finish all of the challenges, that's fine! Just do what you can and submit your challenges in the end! HAVE FUN!

```

```