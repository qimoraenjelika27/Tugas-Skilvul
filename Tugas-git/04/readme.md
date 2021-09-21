1. What is the difference between git reset and git revert. When would you use one over the other? (Wahyu)
answer : 
Git reset
This command is a little more complicated. It actually does a couple of different things depending on how it is invoked. It modifies the index (the so-called "staging area"). Or it changes which commit a branch head is currently pointing at. This command may alter existing history (by changing the commit that a branch references).
Git revert
This command creates a new commit that undoes the changes from a previous commit. This command adds new history to the project (it doesn't modify existing history).
 
Usage Example
If a commit has been made somewhere in the project's history, and you later decide that the commit is wrong and should not have been done, then git revert is the tool for the job. It will undo the changes introduced by the bad commit, recording the "undo" in the history.
 
If you have modified a file in your working tree, but haven't committed the change, then you can use git checkout to checkout a fresh-from-repository copy of the file.
 
If you have made a commit, but haven't shared it with anyone else and you decide you don't want it, then you can use git reset to rewrite the history so that it looks as though you never made that commit.
 
2. What is the difference between git merge and git rebase. When would you use one over the other? 
Answer : 
Git merge is a command that allows you to merge branches from Git.
Git rebase is a command that allows developers to integrate changes from one branch to another.
If you're working alone or on a small team, use rebase. If you're working with a big team, use merge.
 
3. What is the difference between git stash pop and git stash apply. When would you use one over the other?
Answer :
git stash pop
Throws away the stash after applying it, 
whereas git stash apply leaves it in the stash list for possible later reuse.
This happens unless there are conflicts after git stash pop, in which case it will not remove the stash, leaving it to behave exactly as git stash apply.
This happens unless there are conflicts after git stash pop, in which case it will not remove the stash, leaving it to behave exactly as git stash apply.
There is one more way to look at git stash pop is 
git stash apply 
Hope this helps to resolve your problem.
For more commands like this please go through the following tutorial that will help you understand the git
 
4. What kinds of things can you do in interactive mode when rebasing? (Wibi)
	Answer : 
Interactive rebasing can be used for changing commits in many ways such as editing, deleting, and squashing. To tell Git where to start the interactive rebase, use the SHA-1 or index of the commit that immediately precedes the commit you want to modify.
