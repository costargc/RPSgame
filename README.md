# RPSgame
This is a simple Rock Paper Scissor game where you can play against a Markov Chain AI.

The implemented virtual player (AI) consider a 3th order (trinity base) Markov chain, in which the current state is defined based on the previous N plays (with N set as length: 20).  The transition matrix is determined from the number of times a trinity occurs and the next move considered by a random variable that calculates an activation probability based on the most common trinity path.

![alt text](https://github.com/costargc/RPSgame/blob/master/images/RPSgame_animation.gif)
