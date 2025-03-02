# JavaScript

Git is a free and open source <b>Version Control System</b> . It is a tool that helps to track changes / commit history.
It helps to collaborate .

# Github :- It is a website where we host repositories .

# Basic Git Commands

# 1. init :-
    Init command is used to initialise git 
    syntacx : *git init*

# 2. git remote -v 
        Used to verify the remote path
        syntax : *git remote -v*

# 3. git branch -a 
    Check the current branch
    syntax : *git branch -a*

# 4. git branch -M name
    Change branch name
    syntax : *git branch -M main*

# 5. clone :-
    Cloning a repositories in our local system.
    Syntax : *git clone <link>*

# 6. status :-
    display the changes of code.
    Syntax : *git status*

# 7. add :-
    It is used to add or changes files in our working directories to the Git staging area .
    Syntax :
        a. *git add <file name>*  // used to add single file
        b. *git add .* // used to add all the files

# 8. commit :- 
    It is the record of change
    Syntax : *git commit -m "My first commit"

# 9. push :-
    It is used to upload local repo content to remote repo
    Syntax : 
        a. *git push -u origin main*   // first time
        b. *git push*  // use all the time 

# 10. git checkout <- branch name ->
    used to navigate into branch
    syntax : git checkout master

# 11. git checkout -b <- new branch name>
    used to create new branch 
    syntax : git checkout -b bugfix

# 12. git branch -d <- branch name->
    used to delete branch
    syntax : git branch -d bugfix

For Mearging Code Generally we use below two commands otherwise we create a pull request (PR).

# 13. git diff <- branch name ->
    used to compare commits, branches, files and more
    syntax : git diff <branch name>

# 14. git merge <- branch name ->
    used to merge 2 branches

# Or Create a PR (Pull Request)
    It let you tell others about changes you've pushed to a branch in a repository on Github .

# git pull origin main :-
    this command is used to fetch and download content from a remote repo and immediatey uodate the local repo to match that content .

# Merge Conflicts
    An event that takes place when git is unable to automatically resolve difference in code between two commits .

# 15. Staged changes :-
    used to reset the staged changes 
    syntax : 
        a. git reset <-file name->
        b. git reset

# 16. Commit Changes :-
    If we want to change the unwanted commits then we use below commands
    syntax :
        a. git reset HEAD~1  // for one commit
        b. git reset <commit hash>
        c. git reset --hard <-commit hash>  // it is used to changes the unwanted commid as well as deleted the changes .

# Forking :-
    Fork is a new repository that share code and visibility setting with the orignal "Upstream Repository".

    * Fork is a rougf copy.