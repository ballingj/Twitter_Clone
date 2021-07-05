Things to do to get started

1. clone the starter files that I uploaded to this remote repo:

  a. first create folder in your computer.  For example, my nucamp folder is on my desktop and I created a folder inside that called "Chatter".  

  b. open your bash terminal command line and navigate to your folder.  Once in your folder issue 

  git clone https://github.com/ballingj/Chatter

  c. the above command will download the starter react template files.  After the download, you should see the following:

    public
    src
    .gitignore
    README.md
    package.json
    yarn.lock

  d. you will notice that you will be missing the following:
  node_modules

  This is normal because you have to install the react dependencies next.

2.  Install React dependencies with yarn.

  yarn

  a. That's it!  just one word command

  b. Check that node_modules is created and you can start the app

    yarn start

3. Let's verify - Check your git repository
  a. check your local git copy

    git status

   you should see something similar to:
   
   on branch main
    
   Your branch is up to date with 'origin/main'
  
  b. check your connection to remote repository

    git remote -v

  you should see:

    origin  https://github.com/ballingj/Chatter (fetch)
    origin  https://github.com/ballingj/Chatter (push)

4. Now it is time to create our own branch.  We are following Danny's advice to work of our own branch; never with the master/main branch.

  a. check your current branch

    git branch

  you should see something like "* main"

  b. create a new branch and move to it

    git checkout -b new_branch 

  substitute the name "new_branch" with your own feature name.  This should be unique.

  c. the command above is a double purpose command that creates a branch and moving to it.  You can move between branch by:  
  
    git checkout <branch-name>

  *Important: this is going to be your branch; you will be working on this branch all the time.  You will work on your copy and push to this branch, always.  Later we will merge all our work into the master when ready to do so.

  I hope this helps.  Let me know if you have any questions.

  Jeff

