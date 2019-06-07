# RPSgame
This is a simple Rock Paper Scissor game where you can play against a Markov Chain AI.

The implemented virtual player (AI) consider a 3th order (trinity base) Markov chain, in which the current state is defined based on the previous N plays (with N set as length: 20).  The transition matrix is determined from the number of times a trinity occurs and the next move considered by a random variable that calculates an activation probability based on the most common trinity path.

![alt text](https://github.com/costargc/RPSgame/blob/master/images/RPSgame_animation.gif)


# Unit 7 Assignment - Rock Paper Scissors (Challenge)

### Overview

In this assignment, you'll indeed create another Rock Paper Scissors game. The catch? You're going to make this an online multiplayer game, all with the help of Firebase (and the rest of your web development repertoire)!

### Some Notes Before you begin

* Whether you finish the game or not, you must hand in your code by the due date to avoid having your work marked incomplete. 
* We don't expect every student to finish this assignment. Still, we do want to see you program this game as best you can.

### Setup

1. Create a GitHub repo called `RPS-Multiplayer` and clone it to your computer.

2. Create a file inside of your `RPS-Multiplayer` folder called `index.html`. This is where your page's HTML will go.
3. Don't forget to include [jQuery](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js) and [Firebase](https://www.gstatic.com/firebasejs/live/3.0/firebase.js).

4. Inside `RPS-Multiplayer`, create your `assets` directory.
5. Create the folders and files you typically place in `assets` -- just like you had for the prior unit's homework assignments.

### Commits

Having an active and healthy commit history on GitHub is important for your future job search. It is also extremely important for making sure your work is saved in your repository. If something breaks, committing often ensures you are able to go back to a working version of your code.

* Committing often is a signal to employers that you are actively working on your code and learning.

  * We use the mantra “commit early and often.”  This means that when you write code that works, add it and commit it!

  * Numerous commits allow you to see how your app is progressing and give you a point to revert to if anything goes wrong.

* Be clear and descriptive in your commit messaging.

  * When writing a commit message, avoid vague messages like "fixed." Be descriptive so that you and anyone else looking at your repository knows what happened with each commit.

* We would like you to have well over 200 commits by graduation, so commit early and often!

### Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

### Instructions

* Create a game that suits this user story:

  * Only two users can play at the same time.

  * Both players pick either `rock`, `paper` or `scissors`. After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other.

  * The game will track each player's wins and losses.

  * Throw some chat functionality in there! No online multiplayer game is complete without having to endure endless taunts and insults from your jerk opponent.

  * Styling and theme are completely up to you. Get Creative!

  * Deploy your assignment to Github Pages.


### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

