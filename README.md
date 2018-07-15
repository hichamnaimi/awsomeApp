# Awsome
A demo application using React/Redux and Nodejs. The application contains a client done with React/redux and a server using REST architecture done with Nodejs streaming different media (mp3, csv).

## Getting started

**I/ Install dependencies**
```javascript
npm install
```

**II/ Launch the server**
```javascript
npm run start:server
```

**III/ Launch the client App**
```javascript
npm run start
```

## Server

A NodeJS server sending music and csv as streaming data to the client via HTTP calls.

* /music: Sends the available list of music (title, description...)
* /music/: id: Play stream music giving it's id
* /comptability: Sends stream csv data


## Client

### The client contains 3 routes:

* /music
* /prime
* /graph


### /music
A built from scratch media player reading stream music from a server.

**When play music**

- Music is played.
- Music is set to the top of the playlist.
- Music is highlighted.
- Music can be stopped with stop button.
- When playing another music, the current playing music loses its focus and it's stopped.
- When current music finish playing, the next one in the list starts automatically.

**When add music to favorite list**

- Favorite playlist is created containing the added music.
- Music is added once.
- All functionalities of playing music are applied to the list of favorite music.

**When remove music from favorite list**

- Music is removed from favorite list.
- Removed music stops playing automatically.
- Favorite list is dropped when it does not contain any music.

**When leaving the page**

- Favorite music list is saved to localStorage.


### /prime

Searching N-prime number

* The result is cached
* The result is added to history
* When leaving the history is saved to localStorage


### /graph

A graphical graph showing streamed data from server.