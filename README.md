# More Weight!

_**Linux and OS X Only**_

A classy NPM package that tells you how much of your hard drive is being 
taken up by `node_modules` directories. 

This is some high end bespoke stuff built at the request of [@mrspeaker] who 
[quipped]:

> What % of your hard drive lives in node_modules

Thanks to this repo, finding out is as easy as:

```
npm install -g giles-corey
giles-corey
```

Output is the total space taken up by all `node_modules` folders residing 
within your home directory. Calculating the percentage is left as an exercise
for the user.

```
Only 100G of node_modules? More weight!
```

If you don't want to install this module and would instead prefer to run a 
one line shell command here's the secret sauce:

```
find ~/ -name node_modules -type d | xargs du -ch
```

_[Giles Corey] was an 81 year old man who was crushed to death with stones in 
Salem Massachusetts after he was suspected of being a witch. He was memorialized 
in Arthur Miller's play ["The Crucible"]._

[@mrspeaker]: https://twitter.com/mrspeaker
[quipped]: https://twitter.com/mrspeaker/status/725389926259412992
[Giles Corey]: https://en.wikipedia.org/wiki/Giles_Corey
["The Crucible"]: https://en.wikipedia.org/wiki/The_Crucible